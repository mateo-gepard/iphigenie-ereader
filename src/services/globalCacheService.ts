import type { ExplanationResponse } from '../types';

interface GlobalCachedExplanation {
  response: ExplanationResponse;
  timestamp: number;
  textHash: string;
  context: string;
  actNumber?: number;
  sceneNumber?: number;
  createdBy: string; // Browser fingerprint hash
  usageCount: number;
  version: string; // Cache format version
}

export class GlobalCacheService {
  private static readonly LOCAL_CACHE_KEY = 'iphigenie_global_cache_v2';
  private static readonly MAX_CACHE_AGE = 90 * 24 * 60 * 60 * 1000; // 90 Tage
  private static readonly MAX_CACHE_ENTRIES = 500; // Maximale Anzahl Einträge
  private static readonly CACHE_VERSION = '2.0';

  /**
   * Generiert einen Hash aus dem Text für eindeutige Identifikation
   */
  private static generateTextHash(text: string): string {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
  }

  /**
   * Generiert eine anonyme Browser-ID basierend auf Browser-Fingerprint
   */
  private static generateBrowserId(): string {
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      (navigator as any).hardwareConcurrency || 4
    ].join('|');
    
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
  }

  /**
   * Erstellt eine eindeutige Dokument-ID
   */
  private static createDocumentId(text: string, context: string, actNumber?: number, sceneNumber?: number): string {
    const textHash = this.generateTextHash(text);
    const contextKey = `${context}_${actNumber || 0}_${sceneNumber || 0}`;
    return `${contextKey}_${textHash}`;
  }

  /**
   * Lädt den lokalen Cache und bereinigt automatisch alte Einträge
   */
  private static getLocalCache(): Map<string, GlobalCachedExplanation> {
    try {
      const cached = localStorage.getItem(this.LOCAL_CACHE_KEY);
      if (!cached) return new Map();
      
      const parsed = JSON.parse(cached);
      const cache = new Map<string, GlobalCachedExplanation>();
      const now = Date.now();
      
      // Filtere abgelaufene Einträge und falsche Versionen
      Object.entries(parsed).forEach(([key, value]) => {
        const cached = value as GlobalCachedExplanation;
        const age = now - cached.timestamp;
        
        if (age < this.MAX_CACHE_AGE && cached.version === this.CACHE_VERSION) {
          cache.set(key, cached);
        }
      });
      
      return cache;
    } catch (error) {
      console.warn('⚠️ Lokaler Cache-Fehler:', error);
      // Bei Fehlern Cache zurücksetzen
      localStorage.removeItem(this.LOCAL_CACHE_KEY);
      return new Map();
    }
  }

  /**
   * Speichert den Cache und begrenzt die Anzahl der Einträge
   */
  private static saveToLocalCache(cache: Map<string, GlobalCachedExplanation>): void {
    try {
      // Limitiere Cache-Größe
      if (cache.size > this.MAX_CACHE_ENTRIES) {
        // Sortiere nach Usage Count und Timestamp, behalte die besten
        const entries = Array.from(cache.entries());
        entries.sort((a, b) => {
          // Erst nach Usage Count, dann nach Aktualität
          const usageDiff = b[1].usageCount - a[1].usageCount;
          if (usageDiff !== 0) return usageDiff;
          return b[1].timestamp - a[1].timestamp;
        });
        
        const limitedEntries = entries.slice(0, this.MAX_CACHE_ENTRIES);
        cache.clear();
        limitedEntries.forEach(([key, value]) => cache.set(key, value));
        
        console.log(`🧹 Cache begrenzt auf ${this.MAX_CACHE_ENTRIES} Einträge`);
      }
      
      const cacheObject = Object.fromEntries(cache.entries());
      localStorage.setItem(this.LOCAL_CACHE_KEY, JSON.stringify(cacheObject));
    } catch (error) {
      console.warn('⚠️ Cache-Speicher-Fehler:', error);
      
      // Bei localStorage-Limits: Alte Einträge löschen und erneut versuchen
      if (error instanceof DOMException && error.code === 22) {
        this.emergencyCleanup();
        // Erneuter Versuch mit reduzierter Cache-Größe
        if (cache.size > 50) {
          const entries = Array.from(cache.entries()).slice(0, 50);
          cache.clear();
          entries.forEach(([key, value]) => cache.set(key, value));
          
          try {
            localStorage.setItem(this.LOCAL_CACHE_KEY, JSON.stringify(Object.fromEntries(cache)));
            console.log('💾 Notfall-Cache mit 50 Einträgen gespeichert');
          } catch {
            console.warn('⚠️ Kritischer Cache-Fehler - Cache deaktiviert');
          }
        }
      }
    }
  }

  /**
   * Notfall-Bereinigung bei localStorage-Problemen
   */
  private static emergencyCleanup(): void {
    try {
      // Lösche alle Cache-bezogenen Keys
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.includes('cache') || key.includes('iphigenie'))) {
          keysToRemove.push(key);
        }
      }
      
      keysToRemove.forEach(key => localStorage.removeItem(key));
      console.log('🚨 Notfall-Cache-Bereinigung durchgeführt');
    } catch (error) {
      console.warn('⚠️ Notfall-Bereinigung fehlgeschlagen:', error);
    }
  }

  /**
   * Sucht nach einer global gecachten Erklärung
   */
  static async getCachedExplanation(
    text: string, 
    context: string, 
    actNumber?: number, 
    sceneNumber?: number
  ): Promise<ExplanationResponse | null> {
    const docId = this.createDocumentId(text, context, actNumber, sceneNumber);
    
    try {
      const cache = this.getLocalCache();
      const cached = cache.get(docId);
      
      if (cached) {
        // Inkrementiere Usage Count
        cached.usageCount += 1;
        cached.timestamp = Date.now(); // Aktualisiere letzten Zugriff
        cache.set(docId, cached);
        this.saveToLocalCache(cache);
        
        console.log('🚀 Global Cache Hit:', docId, 'Usage:', cached.usageCount);
        return { 
          ...cached.response, 
          fromCache: true, 
          cacheSource: 'global',
          usageCount: cached.usageCount,
          generatedAt: new Date(cached.timestamp).toISOString()
        };
      }

      console.log('❌ Global Cache Miss:', docId);
      return null;
    } catch (error) {
      console.warn('⚠️ Global Cache Error:', error);
      return null;
    }
  }

  /**
   * Speichert eine Erklärung global
   */
  static async cacheExplanation(
    text: string,
    context: string,
    response: ExplanationResponse,
    actNumber?: number,
    sceneNumber?: number
  ): Promise<void> {
    const docId = this.createDocumentId(text, context, actNumber, sceneNumber);
    
    try {
      const cache = this.getLocalCache();
      
      const cachedExplanation: GlobalCachedExplanation = {
        response: { ...response, fromCache: undefined }, // Entferne fromCache flag
        timestamp: Date.now(),
        textHash: this.generateTextHash(text),
        context,
        actNumber,
        sceneNumber,
        createdBy: this.generateBrowserId(),
        usageCount: 1,
        version: this.CACHE_VERSION
      };

      cache.set(docId, cachedExplanation);
      this.saveToLocalCache(cache);
      
      console.log('💾 Global explanation cached:', docId);
    } catch (error) {
      console.warn('⚠️ Global Cache Save Error:', error);
    }
  }

  /**
   * Holt globale Cache-Statistiken
   */
  static async getGlobalCacheStats(): Promise<{
    totalEntries: number;
    topUsedEntries: Array<{ id: string; usageCount: number; context: string; age: string }>;
    recentEntries: number;
    cacheSize: string;
    oldestEntry: string | null;
    newestEntry: string | null;
  }> {
    try {
      const cache = this.getLocalCache();
      const entries = Array.from(cache.entries());
      
      // Top verwendete Einträge
      const topUsedEntries = entries
        .sort((a, b) => b[1].usageCount - a[1].usageCount)
        .slice(0, 5)
        .map(([id, data]) => ({
          id: id.substring(0, 20) + '...',
          usageCount: data.usageCount,
          context: data.context,
          age: this.formatAge(Date.now() - data.timestamp)
        }));

      // Aktuelle Einträge (letzte 7 Tage)
      const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      const recentEntries = entries.filter(([, data]) => data.timestamp >= weekAgo).length;

      // Ältester und neuester Eintrag
      const timestamps = entries.map(([, data]) => data.timestamp);
      const oldestTimestamp = Math.min(...timestamps);
      const newestTimestamp = Math.max(...timestamps);

      // Cache-Größe berechnen
      const cacheString = JSON.stringify(Object.fromEntries(cache));
      const cacheSize = this.formatBytes(new Blob([cacheString]).size);

      return {
        totalEntries: cache.size,
        topUsedEntries,
        recentEntries,
        cacheSize,
        oldestEntry: timestamps.length > 0 ? this.formatAge(Date.now() - oldestTimestamp) : null,
        newestEntry: timestamps.length > 0 ? this.formatAge(Date.now() - newestTimestamp) : null
      };
    } catch (error) {
      console.warn('⚠️ Cache Stats Error:', error);
      return {
        totalEntries: 0,
        topUsedEntries: [],
        recentEntries: 0,
        cacheSize: '0 Bytes',
        oldestEntry: null,
        newestEntry: null
      };
    }
  }

  /**
   * Bereinigt alte Cache-Einträge
   */
  static async cleanupOldEntries(): Promise<number> {
    try {
      const cache = this.getLocalCache();
      const now = Date.now();
      let deletedCount = 0;
      
      for (const [key, data] of cache.entries()) {
        if (now - data.timestamp > this.MAX_CACHE_AGE) {
          cache.delete(key);
          deletedCount++;
        }
      }
      
      if (deletedCount > 0) {
        this.saveToLocalCache(cache);
        console.log(`🧹 Bereinigt: ${deletedCount} alte Cache-Einträge`);
      }
      
      return deletedCount;
    } catch (error) {
      console.warn('⚠️ Cleanup Error:', error);
      return 0;
    }
  }

  /**
   * Löscht den gesamten Cache
   */
  static clearCache(): void {
    try {
      localStorage.removeItem(this.LOCAL_CACHE_KEY);
      console.log('🗑️ Global Cache cleared');
    } catch (error) {
      console.warn('⚠️ Cache clear error:', error);
    }
  }

  /**
   * Formatiert Bytes in lesbare Größe
   */
  private static formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Formatiert Zeitspanne in lesbare Form
   */
  private static formatAge(ms: number): string {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  }
}

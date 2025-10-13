import type { ExplanationResponse } from '../types';

interface CachedExplanation {
  response: ExplanationResponse;
  timestamp: number;
  textHash: string;
}

export class CacheService {
  private static readonly CACHE_KEY = 'iphigenie_explanations_cache';
  private static readonly MAX_CACHE_AGE = 30 * 24 * 60 * 60 * 1000; // 30 Tage in Millisekunden

  /**
   * Generiert einen Hash aus dem Text für eindeutige Identifikation
   */
  private static generateTextHash(text: string): string {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }

  /**
   * Erstellt einen Cache-Key basierend auf Text und Kontext
   */
  private static createCacheKey(text: string, context: string, actNumber?: number, sceneNumber?: number): string {
    const textHash = this.generateTextHash(text);
    const contextKey = `${context}_${actNumber || 0}_${sceneNumber || 0}`;
    return `${contextKey}_${textHash}`;
  }

  /**
   * Lädt den Cache aus localStorage
   */
  private static loadCache(): Map<string, CachedExplanation> {
    try {
      const cacheData = localStorage.getItem(this.CACHE_KEY);
      if (!cacheData) return new Map();

      const parsed = JSON.parse(cacheData);
      const cache = new Map<string, CachedExplanation>();
      
      // Filtere abgelaufene Einträge
      const now = Date.now();
      Object.entries(parsed).forEach(([key, value]) => {
        const cached = value as CachedExplanation;
        if (now - cached.timestamp < this.MAX_CACHE_AGE) {
          cache.set(key, cached);
        }
      });

      return cache;
    } catch (error) {
      console.warn('Fehler beim Laden des Caches:', error);
      return new Map();
    }
  }

  /**
   * Speichert den Cache in localStorage
   */
  private static saveCache(cache: Map<string, CachedExplanation>): void {
    try {
      const cacheObject = Object.fromEntries(cache.entries());
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(cacheObject));
    } catch (error) {
      console.warn('Fehler beim Speichern des Caches:', error);
    }
  }

  /**
   * Sucht nach einer gecachten Erklärung
   */
  static getCachedExplanation(
    text: string, 
    context: string, 
    actNumber?: number, 
    sceneNumber?: number
  ): ExplanationResponse | null {
    const cache = this.loadCache();
    const key = this.createCacheKey(text, context, actNumber, sceneNumber);
    const cached = cache.get(key);

    if (cached) {
      console.log('✅ Cache Hit:', key);
      return cached.response;
    }

    console.log('❌ Cache Miss:', key);
    return null;
  }

  /**
   * Speichert eine Erklärung im Cache
   */
  static cacheExplanation(
    text: string,
    context: string,
    response: ExplanationResponse,
    actNumber?: number,
    sceneNumber?: number
  ): void {
    try {
      const cache = this.loadCache();
      const key = this.createCacheKey(text, context, actNumber, sceneNumber);
      
      const cachedExplanation: CachedExplanation = {
        response,
        timestamp: Date.now(),
        textHash: this.generateTextHash(text)
      };

      cache.set(key, cachedExplanation);
      this.saveCache(cache);
      
      console.log('💾 Cached explanation:', key);
    } catch (error) {
      console.warn('Fehler beim Cachen der Erklärung:', error);
    }
  }

  /**
   * Gibt Cache-Statistiken zurück
   */
  static getCacheStats(): { totalEntries: number; cacheSize: string; oldestEntry: Date | null } {
    const cache = this.loadCache();
    let oldestTimestamp = Infinity;
    
    cache.forEach(cached => {
      if (cached.timestamp < oldestTimestamp) {
        oldestTimestamp = cached.timestamp;
      }
    });

    return {
      totalEntries: cache.size,
      cacheSize: this.formatBytes(JSON.stringify(Object.fromEntries(cache.entries())).length),
      oldestEntry: oldestTimestamp === Infinity ? null : new Date(oldestTimestamp)
    };
  }

  /**
   * Löscht den gesamten Cache
   */
  static clearCache(): void {
    try {
      localStorage.removeItem(this.CACHE_KEY);
      console.log('🗑️ Cache cleared');
    } catch (error) {
      console.warn('Fehler beim Löschen des Caches:', error);
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
}

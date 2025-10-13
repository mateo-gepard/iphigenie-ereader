import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  limit,
  deleteDoc,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { ExplanationResponse } from '../types';

interface GlobalCachedExplanation {
  response: ExplanationResponse;
  timestamp: Timestamp;
  textHash: string;
  context: string;
  actNumber?: number;
  sceneNumber?: number;
  createdBy: string; // IP hash oder User ID
  usageCount: number;
}

export class GlobalCacheService {
  private static readonly COLLECTION_NAME = 'explanation_cache';
  private static readonly MAX_CACHE_AGE = 90 * 24 * 60 * 60 * 1000; // 90 Tage
  private static readonly LOCAL_CACHE_KEY = 'global_cache_offline';

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
   * Generiert eine anonyme User-ID basierend auf Browser-Fingerprint
   */
  private static generateUserId(): string {
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset()
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
   * Erstellt eine Dokument-ID für Firestore
   */
  private static createDocumentId(text: string, context: string, actNumber?: number, sceneNumber?: number): string {
    const textHash = this.generateTextHash(text);
    const contextKey = `${context}_${actNumber || 0}_${sceneNumber || 0}`;
    return `${contextKey}_${textHash}`;
  }

  /**
   * Lädt lokalen Offline-Cache
   */
  private static getLocalCache(): Map<string, ExplanationResponse> {
    try {
      const cached = localStorage.getItem(this.LOCAL_CACHE_KEY);
      if (!cached) return new Map();
      
      const parsed = JSON.parse(cached);
      return new Map(Object.entries(parsed));
    } catch {
      return new Map();
    }
  }

  /**
   * Speichert in lokalem Offline-Cache
   */
  private static saveToLocalCache(docId: string, response: ExplanationResponse): void {
    try {
      const cache = this.getLocalCache();
      cache.set(docId, response);
      
      // Limitiere lokalen Cache auf 100 Einträge
      if (cache.size > 100) {
        const entries = Array.from(cache.entries());
        const limitedCache = new Map(entries.slice(-100));
        localStorage.setItem(this.LOCAL_CACHE_KEY, JSON.stringify(Object.fromEntries(limitedCache)));
      } else {
        localStorage.setItem(this.LOCAL_CACHE_KEY, JSON.stringify(Object.fromEntries(cache)));
      }
    } catch (error) {
      console.warn('Lokaler Cache-Fehler:', error);
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
      // Erst lokalen Cache prüfen (schneller)
      const localCache = this.getLocalCache();
      const localResult = localCache.get(docId);
      if (localResult) {
        console.log('🚀 Local Cache Hit:', docId);
        return { ...localResult, fromCache: true };
      }

      // Dann Firebase prüfen
      const docRef = doc(db, this.COLLECTION_NAME, docId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data() as GlobalCachedExplanation;
        
        // Prüfe Alter
        const age = Date.now() - data.timestamp.toMillis();
        if (age > this.MAX_CACHE_AGE) {
          await deleteDoc(docRef);
          console.log('🗑️ Expired cache entry deleted:', docId);
          return null;
        }

        // Inkrementiere Usage Count
        await setDoc(docRef, { 
          ...data, 
          usageCount: data.usageCount + 1 
        }, { merge: true });

        // Speichere in lokalem Cache für schnelleren Zugriff
        this.saveToLocalCache(docId, data.response);

        console.log('☁️ Firebase Cache Hit:', docId, 'Usage:', data.usageCount + 1);
        return { 
          ...data.response, 
          fromCache: true, 
          cacheSource: 'global',
          usageCount: data.usageCount + 1,
          generatedAt: data.timestamp.toDate().toISOString()
        };
      }

      console.log('❌ Global Cache Miss:', docId);
      return null;
    } catch (error) {
      console.warn('Firebase Cache Error:', error);
      
      // Fallback auf lokalen Cache
      const localCache = this.getLocalCache();
      const fallbackResult = localCache.get(docId);
      if (fallbackResult) {
        console.log('📱 Offline Fallback Hit:', docId);
        return { ...fallbackResult, fromCache: true };
      }
      
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
      const cachedExplanation: GlobalCachedExplanation = {
        response: { ...response, fromCache: undefined }, // Entferne fromCache flag
        timestamp: Timestamp.now(),
        textHash: this.generateTextHash(text),
        context,
        actNumber,
        sceneNumber,
        createdBy: this.generateUserId(),
        usageCount: 1
      };

      const docRef = doc(db, this.COLLECTION_NAME, docId);
      await setDoc(docRef, cachedExplanation);
      
      // Auch lokal speichern
      this.saveToLocalCache(docId, response);
      
      console.log('☁️ Globally cached explanation:', docId);
    } catch (error) {
      console.warn('Firebase Cache Save Error:', error);
      
      // Fallback: nur lokal speichern
      this.saveToLocalCache(docId, response);
      console.log('📱 Fallback: Locally cached explanation:', docId);
    }
  }

  /**
   * Holt globale Cache-Statistiken
   */
  static async getGlobalCacheStats(): Promise<{
    totalEntries: number;
    topUsedEntries: Array<{ id: string; usageCount: number; context: string }>;
    recentEntries: number;
  }> {
    try {
      const cacheRef = collection(db, this.COLLECTION_NAME);
      
      // Gesamtanzahl (approximiert durch eine Abfrage)
      const totalQuery = query(cacheRef, limit(1000));
      const totalSnap = await getDocs(totalQuery);
      const totalEntries = totalSnap.size;

      // Top verwendete Einträge
      const topUsedQuery = query(
        cacheRef, 
        orderBy('usageCount', 'desc'), 
        limit(5)
      );
      const topUsedSnap = await getDocs(topUsedQuery);
      const topUsedEntries = topUsedSnap.docs.map(doc => ({
        id: doc.id,
        usageCount: doc.data().usageCount,
        context: doc.data().context
      }));

      // Aktuelle Einträge (letzte 7 Tage)
      const weekAgo = Timestamp.fromMillis(Date.now() - 7 * 24 * 60 * 60 * 1000);
      const recentQuery = query(
        cacheRef,
        where('timestamp', '>=', weekAgo)
      );
      const recentSnap = await getDocs(recentQuery);
      const recentEntries = recentSnap.size;

      return {
        totalEntries,
        topUsedEntries,
        recentEntries
      };
    } catch (error) {
      console.warn('Cache Stats Error:', error);
      return {
        totalEntries: 0,
        topUsedEntries: [],
        recentEntries: 0
      };
    }
  }

  /**
   * Bereinigt alte Cache-Einträge (Admin-Funktion)
   */
  static async cleanupOldEntries(): Promise<number> {
    try {
      const cutoffDate = Timestamp.fromMillis(Date.now() - this.MAX_CACHE_AGE);
      const oldEntriesQuery = query(
        collection(db, this.COLLECTION_NAME),
        where('timestamp', '<', cutoffDate)
      );
      
      const oldSnap = await getDocs(oldEntriesQuery);
      const deletePromises = oldSnap.docs.map(doc => deleteDoc(doc.ref));
      
      await Promise.all(deletePromises);
      
      console.log(`🧹 Cleaned up ${oldSnap.size} old cache entries`);
      return oldSnap.size;
    } catch (error) {
      console.warn('Cleanup Error:', error);
      return 0;
    }
  }
}

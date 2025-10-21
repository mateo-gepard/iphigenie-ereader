import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import type { UserSession } from './analyticsService';

// Firebase Konfiguration (hier sollten Sie Ihre eigenen Werte einfügen)
const firebaseConfig: any = {
  // Ihre Firebase-Konfiguration hier
  // apiKey: "your-api-key",
  // authDomain: "your-project.firebaseapp.com",
  // projectId: "your-project-id",
  // storageBucket: "your-project.appspot.com",
  // messagingSenderId: "123456789",
  // appId: "your-app-id"
};

// Firebase initialisieren (nur wenn Konfiguration vorhanden)
let app: any = null;
let db: any = null;

try {
  if (firebaseConfig.apiKey) {  // Prüfe ob Konfiguration vorhanden ist
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
} catch (error) {
  console.warn('📊 Firebase Analytics: Konfiguration nicht vollständig, verwende nur lokale Analytics');
}

export interface FirebaseAnalyticsData {
  totalVisitors: number;
  visitsToday: number;
  uniqueVisitorsToday: number;
  averageSessionTime: number;
  popularPages: Array<{
    page: string;
    visits: number;
  }>;
  dailyVisits: Array<{
    date: string;
    visits: number;
    uniqueVisitors: number;
  }>;
  userEvents: Array<{
    event: string;
    count: number;
  }>;
}

class FirebaseAnalyticsService {
  private isFirebaseEnabled = !!db;

  // Session zu Firebase speichern
  async saveSessionToFirebase(session: UserSession): Promise<void> {
    if (!this.isFirebaseEnabled) return;

    try {
      await addDoc(collection(db, 'analytics_sessions'), {
        sessionId: session.sessionId,
        startTime: new Date(session.startTime),
        endTime: session.endTime ? new Date(session.endTime) : null,
        pageViews: session.pageViews,
        userAgent: session.userAgent,
        referrer: session.referrer,
        isReturningUser: session.isReturningUser,
        createdAt: new Date()
      });
      
      console.log('📊 Firebase Analytics: Session gespeichert');
    } catch (error) {
      console.error('📊 Firebase Analytics: Fehler beim Speichern der Session:', error);
    }
  }

  // Event zu Firebase speichern
  async trackEventToFirebase(eventName: string, eventData: any = {}): Promise<void> {
    if (!this.isFirebaseEnabled) return;

    try {
      await addDoc(collection(db, 'analytics_events'), {
        eventName,
        eventData,
        timestamp: new Date(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
      });
      
      console.log('📊 Firebase Analytics: Event getrackt:', eventName);
    } catch (error) {
      console.error('📊 Firebase Analytics: Fehler beim Tracken des Events:', error);
    }
  }

  // Analytics-Daten von Firebase abrufen
  async getFirebaseAnalytics(): Promise<FirebaseAnalyticsData | null> {
    if (!this.isFirebaseEnabled) return null;

    try {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const last30Days = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));

      // Sessions abrufen
      const sessionsQuery = query(
        collection(db, 'analytics_sessions'),
        where('startTime', '>=', last30Days),
        orderBy('startTime')
      );
      const sessionsSnapshot = await getDocs(sessionsQuery);
      const sessions = sessionsSnapshot.docs.map(doc => doc.data());

      // Events abrufen
      const eventsQuery = query(
        collection(db, 'analytics_events'),
        where('timestamp', '>=', last30Days),
        orderBy('timestamp'),
        limit(1000)
      );
      const eventsSnapshot = await getDocs(eventsQuery);
      const events = eventsSnapshot.docs.map(doc => doc.data());

      // Sessions heute
      const sessionsToday = sessions.filter(s => 
        s.startTime.toDate() >= today
      );

      // Einzigartige Besucher (basierend auf UserAgent + Referrer)
      const uniqueVisitors = new Set(
        sessions.map(s => `${s.userAgent}_${s.referrer}`)
      ).size;

      const uniqueVisitorsToday = new Set(
        sessionsToday.map(s => `${s.userAgent}_${s.referrer}`)
      ).size;

      // Durchschnittliche Session-Zeit
      const completedSessions = sessions.filter(s => s.endTime);
      const totalSessionTime = completedSessions.reduce((sum, s) => {
        return sum + (s.endTime.toDate().getTime() - s.startTime.toDate().getTime());
      }, 0);
      const averageSessionTime = completedSessions.length > 0 
        ? totalSessionTime / completedSessions.length 
        : 0;

      // Tägliche Besuche (letzte 30 Tage)
      const dailyVisits = [];
      for (let i = 0; i < 30; i++) {
        const date = new Date(today.getTime() - (i * 24 * 60 * 60 * 1000));
        const dateEnd = new Date(date.getTime() + (24 * 60 * 60 * 1000));
        
        const daySessions = sessions.filter(s => {
          const sessionDate = s.startTime.toDate();
          return sessionDate >= date && sessionDate < dateEnd;
        });

        dailyVisits.unshift({
          date: date.toISOString().split('T')[0],
          visits: daySessions.length,
          uniqueVisitors: new Set(daySessions.map(s => `${s.userAgent}_${s.referrer}`)).size
        });
      }

      // Event-Statistiken
      const eventCounts = events.reduce((acc, event) => {
        acc[event.eventName] = (acc[event.eventName] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const userEvents = Object.entries(eventCounts)
        .map(([event, count]) => ({ event, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      return {
        totalVisitors: uniqueVisitors,
        visitsToday: sessionsToday.length,
        uniqueVisitorsToday,
        averageSessionTime,
        popularPages: [], // Könnte erweitert werden
        dailyVisits,
        userEvents
      };

    } catch (error) {
      console.error('📊 Firebase Analytics: Fehler beim Abrufen der Daten:', error);
      return null;
    }
  }

  // Daten exportieren
  async exportFirebaseData(): Promise<string | null> {
    if (!this.isFirebaseEnabled) return null;

    try {
      const analytics = await this.getFirebaseAnalytics();
      return JSON.stringify({
        exportDate: new Date().toISOString(),
        source: 'firebase',
        data: analytics
      }, null, 2);
    } catch (error) {
      console.error('📊 Firebase Analytics: Fehler beim Exportieren:', error);
      return null;
    }
  }

  // Prüfe ob Firebase verfügbar ist
  isEnabled(): boolean {
    return this.isFirebaseEnabled;
  }
}

// Singleton Instance
export const firebaseAnalyticsService = new FirebaseAnalyticsService();

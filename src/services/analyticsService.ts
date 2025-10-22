export interface UserSession {
  sessionId: string;
  startTime: number;
  endTime?: number;
  pageViews: number;
  userAgent: string;
  referrer: string;
  isReturningUser: boolean;
  userId: string;
  ip?: string;
  events: AnalyticsEvent[];
}

export interface AnalyticsEvent {
  eventId: string;
  eventName: string;
  eventData?: any;
  timestamp: number;
  sessionId: string;
}

export interface AnalyticsData {
  totalSessions: number;
  uniqueUsers: number;
  sessionsToday: number;
  averageSessionDuration: number;
  dailyStats: Record<string, {
    sessions: number;
    uniqueUsers: number;
    totalDuration: number;
  }>;
  firebaseData?: {
    totalVisitors: number;
    visitsToday: number;
    uniqueVisitorsToday: number;
    averageSessionTime: number;
    userEvents: Array<{
      event: string;
      count: number;
    }>;
  };
}

class AnalyticsService {
  private currentSession: UserSession | null = null;
  private readonly STORAGE_KEYS = {
    SESSIONS: 'iphigenie_sessions',
    USER_ID: 'iphigenie_user_id',
    FIRST_VISIT: 'iphigenie_first_visit',
    EVENTS: 'iphigenie_events'
  };
  private userId: string;

  constructor() {
    this.userId = this.getOrCreateUserId();
    this.initializeTracking();
    this.setupBeforeUnload();
  }

  private getOrCreateUserId(): string {
    try {
      let userId = localStorage.getItem(this.STORAGE_KEYS.USER_ID);
      if (!userId) {
        userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(this.STORAGE_KEYS.USER_ID, userId);
      }
      return userId;
    } catch (error) {
      console.warn('📊 Analytics: Could not access localStorage, using session ID');
      return `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }





  private isReturningUser(): boolean {
    const firstVisit = localStorage.getItem(this.STORAGE_KEYS.FIRST_VISIT);
    if (!firstVisit) {
      localStorage.setItem(this.STORAGE_KEYS.FIRST_VISIT, Date.now().toString());
      return false;
    }
    return true;
  }

  private initializeTracking(): void {
    try {
      const startTime = Date.now();
      
      this.currentSession = {
        sessionId: this.generateSessionId(),
        startTime,
        pageViews: 1,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        isReturningUser: this.isReturningUser(),
        userId: this.userId,
        events: []
      };

      console.log('📊 Analytics: Session started', this.currentSession.sessionId);
      this.trackPageView();
    } catch (error) {
      console.error('📊 Analytics: Error initializing tracking', error);
    }
  }

  private setupBeforeUnload(): void {
    window.addEventListener('beforeunload', () => {
      this.endSession();
    });

    // Auch bei Sichtbarkeitswechsel tracken
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.endSession();
      } else {
        // Bei Rückkehr neue Session starten falls mehr als 30 Min vergangen
        const lastActivity = this.currentSession?.startTime || 0;
        if (Date.now() - lastActivity > 30 * 60 * 1000) {
          this.initializeTracking();
        }
      }
    });
  }

  trackPageView(): void {
    try {
      if (this.currentSession) {
        this.currentSession.pageViews++;
        console.log('📊 Analytics: Page view tracked');
      }
    } catch (error) {
      console.error('📊 Analytics: Error tracking page view', error);
    }
  }

  trackEvent(eventName: string, eventData?: any): void {
    try {
      const event: AnalyticsEvent = {
        eventId: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        eventName,
        eventData: eventData || {},
        timestamp: Date.now(),
        sessionId: this.currentSession?.sessionId || 'unknown'
      };

      // Event zur aktuellen Session hinzufügen
      if (this.currentSession) {
        this.currentSession.events.push(event);
      }

      // Event separat speichern für bessere Performance
      this.saveEvent(event);

      console.log('📊 Analytics: Event tracked', eventName, eventData);
      
      // Event auch zu Firebase senden (wenn verfügbar)
      import('./firebaseAnalyticsService').then(({ firebaseAnalyticsService }) => {
        if (firebaseAnalyticsService.isEnabled()) {
          firebaseAnalyticsService.trackEventToFirebase(eventName, eventData);
        }
      }).catch(() => {
        // Firebase nicht verfügbar, nur lokales Tracking
      });
    } catch (error) {
      console.error('📊 Analytics: Error tracking event', error);
    }
  }

  private saveEvent(event: AnalyticsEvent): void {
    try {
      const existingEvents = this.getEvents();
      existingEvents.push(event);
      
      // Nur die letzten 5000 Events behalten
      const recentEvents = existingEvents.slice(-5000);
      localStorage.setItem(this.STORAGE_KEYS.EVENTS, JSON.stringify(recentEvents));
    } catch (error) {
      console.error('📊 Analytics: Error saving event', error);
    }
  }

  private getEvents(): AnalyticsEvent[] {
    try {
      const eventsJson = localStorage.getItem(this.STORAGE_KEYS.EVENTS);
      return eventsJson ? JSON.parse(eventsJson) : [];
    } catch (error) {
      console.error('📊 Analytics: Error loading events', error);
      return [];
    }
  }

  endSession(): void {
    if (!this.currentSession) return;

    this.currentSession.endTime = Date.now();
    this.saveSession(this.currentSession);
    
    console.log('📊 Analytics: Session ended', {
      sessionId: this.currentSession.sessionId,
      duration: this.currentSession.endTime - this.currentSession.startTime
    });
  }

  private saveSession(session: UserSession): void {
    try {
      const existingSessions = this.getSessions();
      existingSessions.push(session);
      
      // Nur die letzten 1000 Sessions behalten
      const recentSessions = existingSessions.slice(-1000);
      localStorage.setItem(this.STORAGE_KEYS.SESSIONS, JSON.stringify(recentSessions));

      // Session auch zu Firebase senden (wenn verfügbar)
      import('./firebaseAnalyticsService').then(({ firebaseAnalyticsService }) => {
        if (firebaseAnalyticsService.isEnabled()) {
          firebaseAnalyticsService.saveSessionToFirebase(session);
        }
      }).catch(() => {
        // Firebase nicht verfügbar, nur lokales Tracking
      });
    } catch (error) {
      console.error('📊 Analytics: Error saving session', error);
    }
  }

  private getSessions(): UserSession[] {
    try {
      const sessionsJson = localStorage.getItem(this.STORAGE_KEYS.SESSIONS);
      return sessionsJson ? JSON.parse(sessionsJson) : [];
    } catch (error) {
      console.error('📊 Analytics: Error loading sessions', error);
      return [];
    }
  }

  async getAnalytics(): Promise<AnalyticsData> {
    try {
      const sessions = this.getSessions();
      const events = this.getEvents();
      const today = new Date().toDateString();
      const now = Date.now();
      const oneDayMs = 24 * 60 * 60 * 1000;

      // Robuste Unique Users Berechnung
      const uniqueUsers = new Set(
        sessions
          .filter(s => s.userId) // Nur Sessions mit gültiger userId
          .map(s => s.userId)
      ).size;

      // Sessions heute (mit Fehlerbehandlung)
      const sessionsToday = sessions.filter(s => {
        try {
          return new Date(s.startTime).toDateString() === today;
        } catch {
          return false;
        }
      }).length;

      // Durchschnittliche Session-Dauer (verbessert)
      const completedSessions = sessions.filter(s => s.endTime && s.endTime > s.startTime);
      const totalDuration = completedSessions.reduce((sum, s) => {
        const duration = (s.endTime || s.startTime) - s.startTime;
        return sum + (duration > 0 ? duration : 0);
      }, 0);
      const averageSessionDuration = completedSessions.length > 0 
        ? Math.round(totalDuration / completedSessions.length)
        : 0;

      // Tägliche Statistiken (letzte 30 Tage) - robuster
      const dailyStats: Record<string, any> = {};
      for (let i = 0; i < 30; i++) {
        const date = new Date(now - (i * oneDayMs));
        const dateString = date.toDateString();
        
        const daySessions = sessions.filter(s => {
          try {
            return new Date(s.startTime).toDateString() === dateString;
          } catch {
            return false;
          }
        });

        const dayUniqueUsers = new Set(
          daySessions
            .filter(s => s.userId)
            .map(s => s.userId)
        ).size;

        const dayDuration = daySessions.reduce((sum, s) => {
          if (!s.endTime) return sum;
          const duration = s.endTime - s.startTime;
          return sum + (duration > 0 ? duration : 0);
        }, 0);

        dailyStats[dateString] = {
          sessions: daySessions.length,
          uniqueUsers: dayUniqueUsers,
          totalDuration: dayDuration
        };
      }

      // Event-Statistiken hinzufügen
      const eventStats = this.calculateEventStats(events);

      const baseAnalytics: AnalyticsData = {
        totalSessions: sessions.length,
        uniqueUsers: Math.max(uniqueUsers, 1), // Mindestens 1
        sessionsToday,
        averageSessionDuration,
        dailyStats,
        firebaseData: {
          totalVisitors: uniqueUsers,
          visitsToday: sessionsToday,
          uniqueVisitorsToday: Math.min(uniqueUsers, sessionsToday),
          averageSessionTime: averageSessionDuration,
          userEvents: eventStats
        }
      };

      // Firebase-Daten hinzufügen (wenn verfügbar)
      try {
        const { firebaseAnalyticsService } = await import('./firebaseAnalyticsService');
        if (firebaseAnalyticsService.isEnabled()) {
          const firebaseData = await firebaseAnalyticsService.getFirebaseAnalytics();
          if (firebaseData && baseAnalytics.firebaseData) {
            baseAnalytics.firebaseData = {
              totalVisitors: firebaseData.totalVisitors || baseAnalytics.firebaseData.totalVisitors,
              visitsToday: firebaseData.visitsToday || baseAnalytics.firebaseData.visitsToday,
              uniqueVisitorsToday: firebaseData.uniqueVisitorsToday || baseAnalytics.firebaseData.uniqueVisitorsToday,
              averageSessionTime: firebaseData.averageSessionTime || baseAnalytics.firebaseData.averageSessionTime,
              userEvents: firebaseData.userEvents.length > 0 ? firebaseData.userEvents : eventStats
            };
          }
        }
      } catch (error) {
        // Firebase nicht verfügbar, verwende lokale Event-Daten
        console.log('📊 Analytics: Firebase nicht verfügbar, verwende lokale Event-Statistiken');
      }

      return baseAnalytics;
    } catch (error) {
      console.error('📊 Analytics: Error in getAnalytics', error);
      
      // Fallback-Daten bei Fehlern
      return {
        totalSessions: 0,
        uniqueUsers: 1,
        sessionsToday: 0,
        averageSessionDuration: 0,
        dailyStats: {},
        firebaseData: {
          totalVisitors: 0,
          visitsToday: 0,
          uniqueVisitorsToday: 0,
          averageSessionTime: 0,
          userEvents: []
        }
      };
    }
  }

  private calculateEventStats(events: AnalyticsEvent[]): Array<{event: string, count: number}> {
    try {
      const eventCounts: Record<string, number> = {};
      
      events.forEach(event => {
        if (event.eventName) {
          eventCounts[event.eventName] = (eventCounts[event.eventName] || 0) + 1;
        }
      });

      return Object.entries(eventCounts)
        .map(([event, count]) => ({ event, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10); // Top 10 Events
    } catch (error) {
      console.error('📊 Analytics: Error calculating event stats', error);
      return [];
    }
  }

  // Debug-Funktionen
  clearAllData(): void {
    try {
      Object.values(this.STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
      
      // Reset current session
      this.currentSession = null;
      
      // Start new session
      this.initializeTracking();
      
      console.log('📊 Analytics: All data cleared and session restarted');
    } catch (error) {
      console.error('📊 Analytics: Error clearing data', error);
    }
  }

  exportData(): string {
    const sessions = this.getSessions();
    const analytics = this.getAnalytics();
    
    return JSON.stringify({
      exportDate: new Date().toISOString(),
      sessions,
      analytics
    }, null, 2);
  }
}

// Singleton Instance
export const analyticsService = new AnalyticsService();

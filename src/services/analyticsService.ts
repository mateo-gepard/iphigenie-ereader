export interface UserSession {
  sessionId: string;
  startTime: number;
  endTime?: number;
  pageViews: number;
  userAgent: string;
  referrer: string;
  isReturningUser: boolean;
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
    FIRST_VISIT: 'iphigenie_first_visit'
  };

  constructor() {
    this.initializeTracking();
    this.setupBeforeUnload();
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
    const startTime = Date.now();
    
    this.currentSession = {
      sessionId: this.generateSessionId(),
      startTime,
      pageViews: 1,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      isReturningUser: this.isReturningUser()
    };

    console.log('📊 Analytics: Session started', this.currentSession.sessionId);
    this.trackPageView();
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
    if (this.currentSession) {
      this.currentSession.pageViews++;
      console.log('📊 Analytics: Page view tracked');
    }
  }

  trackEvent(eventName: string, eventData?: any): void {
    console.log('📊 Analytics: Event tracked', eventName, eventData);
    
    // Event auch zu Firebase senden (wenn verfügbar)
    import('./firebaseAnalyticsService').then(({ firebaseAnalyticsService }) => {
      if (firebaseAnalyticsService.isEnabled()) {
        firebaseAnalyticsService.trackEventToFirebase(eventName, eventData);
      }
    }).catch(() => {
      // Firebase nicht verfügbar, nur lokales Tracking
    });
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
    const sessions = this.getSessions();
    const today = new Date().toDateString();
    const now = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;

    // Unique Users basierend auf UserAgent + Referrer (grobe Schätzung)
    const uniqueUsers = new Set(
      sessions.map(s => `${s.userAgent}_${s.referrer}`)
    ).size;

    // Sessions heute
    const sessionsToday = sessions.filter(s => 
      new Date(s.startTime).toDateString() === today
    ).length;

    // Durchschnittliche Session-Dauer
    const completedSessions = sessions.filter(s => s.endTime);
    const totalDuration = completedSessions.reduce((sum, s) => 
      sum + ((s.endTime || s.startTime) - s.startTime), 0
    );
    const averageSessionDuration = completedSessions.length > 0 
      ? totalDuration / completedSessions.length 
      : 0;

    // Tägliche Statistiken (letzte 30 Tage)
    const dailyStats: Record<string, any> = {};
    for (let i = 0; i < 30; i++) {
      const date = new Date(now - (i * oneDayMs));
      const dateString = date.toDateString();
      
      const daySessions = sessions.filter(s => 
        new Date(s.startTime).toDateString() === dateString
      );

      dailyStats[dateString] = {
        sessions: daySessions.length,
        uniqueUsers: new Set(daySessions.map(s => `${s.userAgent}_${s.referrer}`)).size,
        totalDuration: daySessions.reduce((sum, s) => 
          sum + ((s.endTime || s.startTime) - s.startTime), 0
        )
      };
    }

    const baseAnalytics: AnalyticsData = {
      totalSessions: sessions.length,
      uniqueUsers,
      sessionsToday,
      averageSessionDuration,
      dailyStats
    };

    // Firebase-Daten hinzufügen (wenn verfügbar)
    try {
      const { firebaseAnalyticsService } = await import('./firebaseAnalyticsService');
      if (firebaseAnalyticsService.isEnabled()) {
        const firebaseData = await firebaseAnalyticsService.getFirebaseAnalytics();
        if (firebaseData) {
          baseAnalytics.firebaseData = {
            totalVisitors: firebaseData.totalVisitors,
            visitsToday: firebaseData.visitsToday,
            uniqueVisitorsToday: firebaseData.uniqueVisitorsToday,
            averageSessionTime: firebaseData.averageSessionTime,
            userEvents: firebaseData.userEvents
          };
        }
      }
    } catch (error) {
      // Firebase nicht verfügbar, verwende nur lokale Daten
      console.log('📊 Analytics: Firebase nicht verfügbar, verwende nur lokale Daten');
    }

    return baseAnalytics;
  }

  // Debug-Funktionen
  clearAllData(): void {
    Object.values(this.STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    console.log('📊 Analytics: All data cleared');
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

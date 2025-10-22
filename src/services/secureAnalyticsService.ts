// Secure Analytics Service mit Passwort-Schutz
export interface SecureUserSession {
  sessionId: string;
  startTime: number;
  endTime?: number;
  pageViews: number;
  userAgent: string;
  referrer: string;
  isReturningUser: boolean;
  events: Array<{
    name: string;
    data: any;
    timestamp: number;
  }>;
  ipHash?: string; // Anonymized IP for unique user tracking
}

export interface SecureAnalyticsData {
  totalSessions: number;
  uniqueUsers: number;
  sessionsToday: number;
  averageSessionDuration: number;
  bounceRate: number;
  popularFeatures: Array<{
    feature: string;
    usage: number;
  }>;
  hourlyDistribution: Array<{
    hour: number;
    sessions: number;
  }>;
  dailyStats: Record<string, {
    sessions: number;
    uniqueUsers: number;
    totalDuration: number;
    events: number;
  }>;
  realTimeUsers: number;
  deviceTypes: Record<string, number>;
  referrers: Record<string, number>;
}

class SecureAnalyticsService {
  private currentSession: SecureUserSession | null = null;
  private readonly STORAGE_KEYS = {
    SESSIONS: 'iphigenie_secure_sessions',
    USER_ID: 'iphigenie_secure_user_id',
    FIRST_VISIT: 'iphigenie_secure_first_visit',
    AUTH_TOKEN: 'iphigenie_auth_token'
  };
  private readonly CORRECT_PASSWORD = 'MPI4711WIDZSM!';
  private readonly SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  private isAuthenticated = false;

  constructor() {
    this.checkAuthentication();
    if (this.isAuthenticated) {
      this.initializeTracking();
      this.setupAdvancedListeners();
    }
  }

  // Password Authentication
  authenticate(password: string): boolean {
    if (password === this.CORRECT_PASSWORD) {
      this.isAuthenticated = true;
      const authToken = this.generateSecureToken();
      localStorage.setItem(this.STORAGE_KEYS.AUTH_TOKEN, authToken);
      this.initializeTracking();
      this.setupAdvancedListeners();
      console.log('🔐 Analytics: Successfully authenticated');
      return true;
    }
    console.warn('🔐 Analytics: Authentication failed');
    return false;
  }

  private checkAuthentication(): void {
    const token = localStorage.getItem(this.STORAGE_KEYS.AUTH_TOKEN);
    if (token && this.validateToken(token)) {
      this.isAuthenticated = true;
    }
  }

  private generateSecureToken(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return btoa(`${timestamp}_${random}_${this.CORRECT_PASSWORD.slice(-4)}`);
  }

  private validateToken(token: string): boolean {
    try {
      const decoded = atob(token);
      const [timestamp, , passwordHash] = decoded.split('_');
      const tokenAge = Date.now() - parseInt(timestamp);
      
      return tokenAge < 24 * 60 * 60 * 1000 && // Token valid for 24 hours
             passwordHash === this.CORRECT_PASSWORD.slice(-4);
    } catch {
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem(this.STORAGE_KEYS.AUTH_TOKEN);
    this.endSession();
    console.log('🔐 Analytics: Logged out');
  }

  private async getIPHash(): Promise<string> {
    try {
      // Use a simple hash of user agent + timestamp for privacy-friendly unique ID
      const userFingerprint = `${navigator.userAgent}_${navigator.language}_${screen.width}x${screen.height}`;
      const encoder = new TextEncoder();
      const data = encoder.encode(userFingerprint);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
    } catch {
      return 'anonymous_' + Math.random().toString(36).substr(2, 9);
    }
  }

  private async initializeTracking(): Promise<void> {
    if (!this.isAuthenticated) return;

    const startTime = Date.now();
    const ipHash = await this.getIPHash();
    
    this.currentSession = {
      sessionId: this.generateSessionId(),
      startTime,
      pageViews: 1,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      isReturningUser: this.isReturningUser(),
      events: [],
      ipHash
    };

    console.log('📊 Secure Analytics: Session started', this.currentSession.sessionId);
    this.trackPageView();
  }

  private setupAdvancedListeners(): void {
    if (!this.isAuthenticated) return;

    // Page visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackEvent('page_hidden', { timestamp: Date.now() });
      } else {
        this.trackEvent('page_visible', { timestamp: Date.now() });
        this.checkSessionTimeout();
      }
    });

    // Mouse movement tracking (throttled)
    let lastMouseMove = 0;
    document.addEventListener('mousemove', () => {
      const now = Date.now();
      if (now - lastMouseMove > 30000) { // Track every 30 seconds
        this.trackEvent('user_active', { timestamp: now });
        lastMouseMove = now;
      }
    });

    // Scroll tracking
    let lastScrollTrack = 0;
    window.addEventListener('scroll', () => {
      const now = Date.now();
      if (now - lastScrollTrack > 10000) { // Track every 10 seconds
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        this.trackEvent('scroll_depth', { 
          percent: scrollPercent,
          timestamp: now 
        });
        lastScrollTrack = now;
      }
    });

    // Performance tracking
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          this.trackEvent('page_performance', {
            loadTime: navigation.loadEventEnd - navigation.fetchStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            firstPaint: this.getFirstPaint()
          });
        }
      }, 100);
    });

    // Error tracking
    window.addEventListener('error', (event) => {
      this.trackEvent('javascript_error', {
        message: event.message,
        filename: event.filename,
        line: event.lineno,
        column: event.colno
      });
    });

    // Beforeunload
    window.addEventListener('beforeunload', () => {
      this.endSession();
    });
  }

  private getFirstPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    return firstPaint ? firstPaint.startTime : 0;
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

  private checkSessionTimeout(): void {
    if (!this.currentSession) return;

    const timeSinceLastActivity = Date.now() - this.currentSession.startTime;
    if (timeSinceLastActivity > this.SESSION_TIMEOUT) {
      this.endSession();
      this.initializeTracking();
    }
  }

  trackPageView(): void {
    if (!this.isAuthenticated || !this.currentSession) return;

    this.currentSession.pageViews++;
    this.trackEvent('page_view', {
      url: window.location.href,
      title: document.title,
      timestamp: Date.now()
    });
    
    console.log('📊 Secure Analytics: Page view tracked');
  }

  trackEvent(eventName: string, eventData: any = {}): void {
    if (!this.isAuthenticated || !this.currentSession) return;

    const event = {
      name: eventName,
      data: eventData,
      timestamp: Date.now()
    };

    this.currentSession.events.push(event);
    console.log('📊 Secure Analytics: Event tracked', eventName, eventData);

    // Save session periodically
    if (this.currentSession.events.length % 10 === 0) {
      this.saveCurrentSession();
    }
  }

  endSession(): void {
    if (!this.isAuthenticated || !this.currentSession) return;

    this.currentSession.endTime = Date.now();
    this.saveSession(this.currentSession);
    
    console.log('📊 Secure Analytics: Session ended', {
      sessionId: this.currentSession.sessionId,
      duration: this.currentSession.endTime - this.currentSession.startTime,
      events: this.currentSession.events.length
    });

    this.currentSession = null;
  }

  private saveCurrentSession(): void {
    if (!this.currentSession) return;
    this.saveSession({ ...this.currentSession });
  }

  private saveSession(session: SecureUserSession): void {
    if (!this.isAuthenticated) return;

    try {
      const existingSessions = this.getSessions();
      const sessionIndex = existingSessions.findIndex(s => s.sessionId === session.sessionId);
      
      if (sessionIndex >= 0) {
        existingSessions[sessionIndex] = session;
      } else {
        existingSessions.push(session);
      }
      
      // Keep only last 2000 sessions for better performance
      const recentSessions = existingSessions.slice(-2000);
      
      // Compress data before storing
      const compressedData = this.compressSessionData(recentSessions);
      localStorage.setItem(this.STORAGE_KEYS.SESSIONS, compressedData);
    } catch (error) {
      console.error('📊 Secure Analytics: Error saving session', error);
    }
  }

  private compressSessionData(sessions: SecureUserSession[]): string {
    // Simple compression: remove redundant data
    const compressed = sessions.map(session => ({
      ...session,
      userAgent: session.userAgent.slice(0, 100), // Truncate user agent
      events: session.events.slice(-50) // Keep only last 50 events per session
    }));
    return JSON.stringify(compressed);
  }

  private getSessions(): SecureUserSession[] {
    if (!this.isAuthenticated) return [];

    try {
      const sessionsJson = localStorage.getItem(this.STORAGE_KEYS.SESSIONS);
      return sessionsJson ? JSON.parse(sessionsJson) : [];
    } catch (error) {
      console.error('📊 Secure Analytics: Error loading sessions', error);
      return [];
    }
  }

  async getSecureAnalytics(): Promise<SecureAnalyticsData | null> {
    if (!this.isAuthenticated) return null;

    const sessions = this.getSessions();
    const now = Date.now();
    const todayStart = new Date().setHours(0, 0, 0, 0);
    const last30Days = now - (30 * 24 * 60 * 60 * 1000);

    // Calculate metrics
    const recentSessions = sessions.filter(s => s.startTime >= last30Days);
    const todaySessions = sessions.filter(s => s.startTime >= todayStart);
    
    // Unique users (based on IP hash)
    const uniqueUsers = new Set(recentSessions.map(s => s.ipHash || s.userAgent)).size;
    
    // Average session duration
    const completedSessions = recentSessions.filter(s => s.endTime);
    const totalDuration = completedSessions.reduce((sum, s) => 
      sum + ((s.endTime || s.startTime) - s.startTime), 0
    );
    const averageSessionDuration = completedSessions.length > 0 
      ? totalDuration / completedSessions.length 
      : 0;

    // Bounce rate (sessions with only 1 page view)
    const bouncedSessions = recentSessions.filter(s => s.pageViews <= 1).length;
    const bounceRate = recentSessions.length > 0 
      ? (bouncedSessions / recentSessions.length) * 100 
      : 0;

    // Popular features
    const allEvents = recentSessions.flatMap(s => s.events);
    const eventCounts = allEvents.reduce((acc, event) => {
      acc[event.name] = (acc[event.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const popularFeatures = Object.entries(eventCounts)
      .map(([feature, usage]) => ({ feature, usage }))
      .sort((a, b) => b.usage - a.usage)
      .slice(0, 10);

    // Hourly distribution
    const hourlyDistribution = Array.from({ length: 24 }, (_, hour) => ({
      hour,
      sessions: recentSessions.filter(s => 
        new Date(s.startTime).getHours() === hour
      ).length
    }));

    // Daily stats
    const dailyStats: Record<string, any> = {};
    for (let i = 0; i < 30; i++) {
      const date = new Date(now - (i * 24 * 60 * 60 * 1000));
      const dateString = date.toDateString();
      
      const daySessions = sessions.filter(s => 
        new Date(s.startTime).toDateString() === dateString
      );

      const dayEvents = daySessions.flatMap(s => s.events);

      dailyStats[dateString] = {
        sessions: daySessions.length,
        uniqueUsers: new Set(daySessions.map(s => s.ipHash || s.userAgent)).size,
        totalDuration: daySessions.reduce((sum, s) => 
          sum + ((s.endTime || s.startTime) - s.startTime), 0
        ),
        events: dayEvents.length
      };
    }

    // Real-time users (active in last 5 minutes)
    const fiveMinutesAgo = now - (5 * 60 * 1000);
    const realTimeUsers = sessions.filter(s => 
      s.startTime >= fiveMinutesAgo || 
      (s.endTime && s.endTime >= fiveMinutesAgo) ||
      (!s.endTime && s.startTime >= fiveMinutesAgo)
    ).length;

    // Device types
    const deviceTypes = recentSessions.reduce((acc, session) => {
      const ua = session.userAgent.toLowerCase();
      let deviceType = 'Desktop';
      if (ua.includes('mobile')) deviceType = 'Mobile';
      else if (ua.includes('tablet') || ua.includes('ipad')) deviceType = 'Tablet';
      
      acc[deviceType] = (acc[deviceType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Referrers
    const referrers = recentSessions.reduce((acc, session) => {
      const referrer = session.referrer || 'Direct';
      const domain = referrer === 'Direct' ? 'Direct' : new URL(referrer).hostname;
      acc[domain] = (acc[domain] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalSessions: recentSessions.length,
      uniqueUsers,
      sessionsToday: todaySessions.length,
      averageSessionDuration,
      bounceRate,
      popularFeatures,
      hourlyDistribution,
      dailyStats,
      realTimeUsers,
      deviceTypes,
      referrers
    };
  }

  // Admin functions
  exportSecureData(): string | null {
    if (!this.isAuthenticated) return null;

    const sessions = this.getSessions();
    const analytics = this.getSecureAnalytics();
    
    return JSON.stringify({
      exportDate: new Date().toISOString(),
      totalSessions: sessions.length,
      analytics,
      summary: {
        oldestSession: sessions.length > 0 ? new Date(Math.min(...sessions.map(s => s.startTime))).toISOString() : null,
        newestSession: sessions.length > 0 ? new Date(Math.max(...sessions.map(s => s.startTime))).toISOString() : null,
        totalEvents: sessions.reduce((sum, s) => sum + s.events.length, 0)
      }
    }, null, 2);
  }

  clearAllData(): boolean {
    if (!this.isAuthenticated) return false;

    Object.values(this.STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    
    console.log('📊 Secure Analytics: All data cleared');
    return true;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

// Singleton Instance
export const secureAnalyticsService = new SecureAnalyticsService();

import React, { useState, useEffect } from 'react';
import { analyticsService } from '../services/analyticsService';
import type { AnalyticsData } from '../services/analyticsService';
import './AnalyticsDashboard.css';

interface AnalyticsDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ isVisible, onClose }) => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isVisible) {
      // Initial load
      loadAnalytics();
      
      // Auto-refresh every 30 seconds
      const interval = setInterval(loadAnalytics, 30000);
      setRefreshInterval(interval);
      
      return () => {
        if (interval) clearInterval(interval);
      };
    } else {
      if (refreshInterval) {
        clearInterval(refreshInterval);
        setRefreshInterval(null);
      }
    }
  }, [isVisible]);

  const loadAnalytics = async () => {
    try {
      const data = await analyticsService.getAnalytics();
      setAnalytics(data);
    } catch (error) {
      console.error('Fehler beim Laden der Analytics-Daten:', error);
    }
  };

  const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { 
      day: '2-digit', 
      month: '2-digit' 
    });
  };

  const exportData = () => {
    const data = analyticsService.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `iphigenie-analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearData = () => {
    if (confirm('Sind Sie sicher, dass Sie alle Analytics-Daten löschen möchten?')) {
      analyticsService.clearAllData();
      loadAnalytics();
    }
  };

  if (!isVisible || !analytics) return null;

  // Bereite Daten für Chart vor (letzte 7 Tage)
  const last7Days = Object.entries(analytics.dailyStats)
    .slice(0, 7)
    .reverse()
    .map(([date, stats]) => ({
      date: formatDate(date),
      sessions: stats.sessions,
      duration: stats.totalDuration
    }));

  const maxSessions = Math.max(...last7Days.map(d => d.sessions), 1);

  return (
    <div className="analytics-overlay">
      <div className="analytics-dashboard">
        <div className="analytics-header">
          <h2>📊 Website Analytics</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="analytics-content">
          {/* Key Metrics */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">
                {analytics.firebaseData?.totalVisitors || analytics.totalSessions}
              </div>
              <div className="metric-label">
                {analytics.firebaseData ? 'Gesamt Besucher' : 'Gesamt Sessions'}
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                {analytics.firebaseData?.uniqueVisitorsToday || analytics.uniqueUsers}
              </div>
              <div className="metric-label">
                {analytics.firebaseData ? 'Besucher Heute' : 'Einzigartige Nutzer'}
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                {analytics.firebaseData?.visitsToday || analytics.sessionsToday}
              </div>
              <div className="metric-label">Sessions Heute</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                {formatDuration(analytics.firebaseData?.averageSessionTime || analytics.averageSessionDuration)}
              </div>
              <div className="metric-label">Ø Session-Dauer</div>
            </div>
          </div>

          {/* Firebase Event Stats */}
          {analytics.firebaseData?.userEvents && analytics.firebaseData.userEvents.length > 0 && (
            <div className="events-section">
              <h3>Benutzer-Aktivitäten</h3>
              <div className="events-list">
                {analytics.firebaseData.userEvents.slice(0, 5).map((event, index) => (
                  <div key={index} className="event-item">
                    <div className="event-name">{event.event}</div>
                    <div className="event-count">{event.count}x</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chart */}
          <div className="chart-section">
            <h3>Sessions der letzten 7 Tage</h3>
            <div className="simple-chart">
              {last7Days.map((day, index) => (
                <div key={index} className="chart-bar-container">
                  <div 
                    className="chart-bar"
                    style={{ 
                      height: `${(day.sessions / maxSessions) * 100}%`,
                      minHeight: day.sessions > 0 ? '4px' : '2px'
                    }}
                    title={`${day.date}: ${day.sessions} Sessions`}
                  />
                  <div className="chart-label">{day.date}</div>
                  <div className="chart-value">{day.sessions}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="recent-activity">
            <h3>Tägliche Übersicht (letzte 7 Tage)</h3>
            <div className="activity-list">
              {last7Days.map((day, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-date">{day.date}</div>
                  <div className="activity-stats">
                    <span className="stat">
                      📊 {day.sessions} Sessions
                    </span>
                    <span className="stat">
                      ⏱️ {formatDuration(day.duration)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="analytics-actions">
            <button className="action-btn primary" onClick={loadAnalytics}>
              🔄 Aktualisieren
            </button>
            <button className="action-btn secondary" onClick={exportData}>
              💾 Daten exportieren
            </button>
            <button className="action-btn danger" onClick={clearData}>
              🗑️ Daten löschen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

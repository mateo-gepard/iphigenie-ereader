# 📊 User Analytics System für Iphigenie eReader

Das Analytics-System verfolgt Benutzerinteraktionen und Website-Besuche. Es funktioniert sowohl mit lokaler Speicherung (localStorage) als auch optional mit Firebase für erweiterte Funktionen.

## ✨ Features

### Lokales Analytics (Immer verfügbar)
- **Session-Tracking**: Besuche, Dauer, Seitenaufrufe
- **Benutzer-Events**: Textauswahl, Charakterauswahl, Navigation
- **Tägliche Statistiken**: 30-Tage-Verlauf der Aktivitäten
- **Export-Funktion**: JSON-Export aller Daten

### Firebase Analytics (Optional)
- **Persistente Speicherung**: Daten bleiben auch bei Browser-Löschung erhalten
- **Multi-Device Tracking**: Geräteübergreifende Statistiken
- **Erweiterte Events**: Detaillierte Benutzerinteraktionen
- **Echtzeit-Dashboard**: Live-Updates der Besucherzahlen

## 🚀 Setup

### 1. Lokales Analytics (Kein Setup nötig)
Das System funktioniert sofort nach der Installation. Alle Daten werden im localStorage des Browsers gespeichert.

### 2. Firebase Analytics (Optional)
Für erweiterte Funktionen können Sie Firebase einrichten:

1. **Firebase-Projekt erstellen**:
   - Gehen Sie zu [Firebase Console](https://console.firebase.google.com/)
   - Erstellen Sie ein neues Projekt
   - Aktivieren Sie Firestore Database

2. **Konfiguration hinzufügen**:
   ```typescript
   // In src/services/firebaseAnalyticsService.ts
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "your-app-id"
   };
   ```

3. **Firestore-Regeln**: (Optional, für öffentliche Statistiken)
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /analytics_sessions/{document} {
         allow read, write: if true;
       }
       match /analytics_events/{document} {
         allow read, write: if true;
       }
     }
   }
   ```

## 📱 Verwendung

### Analytics-Dashboard öffnen
Klicken Sie auf den **📊**-Button in der oberen rechten Ecke der App.

### Verfügbare Metriken
- **Gesamt Sessions/Besucher**: Gesamtanzahl aller Besuche
- **Besucher Heute**: Eindeutige Besucher des aktuellen Tages
- **Sessions Heute**: Anzahl der heutigen Sitzungen
- **Durchschnittliche Session-Dauer**: Mittlere Verweildauer
- **7-Tage-Chart**: Visuelle Darstellung der letzten Woche
- **Benutzer-Aktivitäten**: Häufigste Interaktionen (nur mit Firebase)

### Getrackte Events
- `text_selected`: Benutzer wählt Text zur Analyse aus
- `character_selected`: Charakter wird ausgewählt
- `character_comparison_generated`: Charaktervergleich wird erstellt
- `search_result_selected`: Suchergebnis wird angeklickt
- `act_navigation`: Navigation zu einem Akt
- `analytics_dashboard_opened`: Dashboard wird geöffnet

## 🔧 Entwickler-Funktionen

### Manuelles Event-Tracking
```typescript
import { analyticsService } from './services/analyticsService';

// Event tracken
analyticsService.trackEvent('custom_event', {
  customData: 'value',
  timestamp: Date.now()
});
```

### Analytics-Daten abrufen
```typescript
// Aktuelle Analytics-Daten
const analytics = await analyticsService.getAnalytics();
console.log(analytics);
```

### Daten exportieren
```typescript
// Lokale Daten exportieren
const localData = analyticsService.exportData();

// Firebase-Daten exportieren (wenn verfügbar)
import { firebaseAnalyticsService } from './services/firebaseAnalyticsService';
const firebaseData = await firebaseAnalyticsService.exportFirebaseData();
```

### Debug-Funktionen
```typescript
// Alle lokalen Daten löschen
analyticsService.clearAllData();

// Session manuell beenden
analyticsService.endSession();
```

## 📊 Datenstruktur

### UserSession
```typescript
interface UserSession {
  sessionId: string;
  startTime: number;
  endTime?: number;
  pageViews: number;
  userAgent: string;
  referrer: string;
  isReturningUser: boolean;
}
```

### Analytics Event
```typescript
interface AnalyticsEvent {
  eventName: string;
  eventData?: any;
  timestamp: Date;
  userAgent: string;
  referrer: string;
}
```

## 🛡️ Datenschutz

Das System ist datenschutzfreundlich gestaltet:
- **Keine persönlichen Daten**: Nur technische Metriken werden erfasst
- **Lokale Speicherung**: Daten bleiben standardmäßig im Browser
- **Anonymisierung**: Benutzer werden nicht individuell identifiziert
- **Opt-out**: Benutzer können localStorage löschen

## 🔒 Sicherheit

- Alle Firebase-Regeln sollten in der Produktion restriktiver gesetzt werden
- API-Schlüssel sollten über Umgebungsvariablen verwaltet werden
- Sensible Daten werden nicht getrackt

## 🐛 Troubleshooting

### "Firebase nicht verfügbar"
- Prüfen Sie die Firebase-Konfiguration in `firebaseAnalyticsService.ts`
- Stellen Sie sicher, dass Firestore aktiviert ist
- Lokales Analytics funktioniert weiterhin

### Keine Daten im Dashboard
- Prüfen Sie die Browser-Konsole auf Fehler
- Stellen Sie sicher, dass localStorage nicht blockiert ist
- Laden Sie die Seite neu, um eine neue Session zu starten

### Performance-Probleme
- Das System ist für bis zu 1000 lokale Sessions optimiert
- Ältere Sessions werden automatisch gelöscht
- Firebase-Anfragen werden gecacht

## 📈 Monitoring

Das System loggt alle wichtigen Aktivitäten in die Browser-Konsole:
- `📊 Analytics: Session started`
- `📊 Analytics: Event tracked`
- `📊 Firebase Analytics: Session gespeichert`

Öffnen Sie die Entwicklertools (F12) für detaillierte Logs.

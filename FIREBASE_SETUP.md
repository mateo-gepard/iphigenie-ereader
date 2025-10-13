# Firebase Setup für Globalen Cache

## Warum Firebase?
Der globale Cache ermöglicht es, dass alle Nutzer der Anwendung von bereits generierten Erklärungen profitieren. Sobald eine Textstelle einmal analysiert wurde, ist die Erklärung für alle verfügbar.

## Setup-Anleitung

### 1. Firebase-Projekt erstellen
1. Gehen Sie zu [Firebase Console](https://console.firebase.google.com/)
2. Klicken Sie auf "Projekt erstellen"
3. Geben Sie einen Projektnamen ein (z.B. "iphigenie-cache")
4. Folgen Sie den Setup-Schritten

### 2. Firestore Database aktivieren
1. Gehen Sie zu "Firestore Database" im linken Menü
2. Klicken Sie auf "Datenbank erstellen"
3. Wählen Sie "Im Testmodus starten" (später auf Produktionsmodus umstellen)
4. Wählen Sie eine Region (Europe-west3 für Deutschland empfohlen)

### 3. Web-App konfigurieren
1. Gehen Sie zu "Projekteinstellungen" (Zahnrad-Symbol)
2. Scrollen Sie zu "Ihre Apps" und klicken Sie auf "Web-App hinzufügen"
3. Geben Sie einen App-Namen ein (z.B. "iphigenie-reader")
4. Kopieren Sie die Konfigurationswerte

### 4. Umgebungsvariablen setzen
Erstellen Sie eine `.env` Datei basierend auf `.env.example` und fügen Sie Ihre Firebase-Konfiguration ein:

```bash
VITE_FIREBASE_API_KEY=AIzaSyC...
VITE_FIREBASE_AUTH_DOMAIN=ihr-projekt.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ihr-projekt-id
VITE_FIREBASE_STORAGE_BUCKET=ihr-projekt.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

### 5. Firestore-Sicherheitsregeln (Optional)
Für Produktion sollten Sie die Sicherheitsregeln anpassen:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Erlaube Lesen und Schreiben für alle für explanation_cache
    match /explanation_cache/{document} {
      allow read, write: if true;
    }
  }
}
```

## Cache-Features

### Automatisches Caching
- Jede neue OpenAI-Antwort wird automatisch global gespeichert
- Duplikate werden durch Text-Hashing vermieden
- Lokaler Fallback-Cache für Offline-Verfügbarkeit

### Usage-Tracking
- Anzahl der Aufrufe pro Cache-Eintrag wird getrackt
- Beliebteste Erklärungen werden in Statistiken angezeigt
- Automatische Bereinigung nach 90 Tagen

### Performance
- Lokaler Cache für sofortige Wiederholung
- Firebase für geteilte Erklärungen zwischen Nutzern
- Graceful Fallbacks bei Netzwerkproblemen

## Datenschutz
- Keine persönlichen Daten werden gespeichert
- Anonyme Browser-Fingerprints für Usage-Tracking
- Automatische Löschung alter Einträge

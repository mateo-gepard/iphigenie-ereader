# Iphigenie auf Tauris - Interaktiver E-Reader

Ein moderner, interaktiver E-Reader für Goethes klassisches Drama "Iphigenie auf Tauris" mit KI-gestützten Textanalysen.

## 🎭 Projektübersicht

Diese Anwendung ermöglicht es Benutzern, Goethes "Iphigenie auf Tauris" interaktiv zu lesen und dabei:
- **Einzelne Verse oder ganze Strophen** auszuwählen
- **KI-generierte Erklärungen** und literaturwissenschaftliche Analysen zu erhalten
- **Hintergrundinformationen** zur Weimarer Klassik und antiken Mythologie zu bekommen
- Eine **moderne, responsive Benutzeroberfläche** zu nutzen

## ✨ Features

### 📚 Interaktive Textauswahl
- Klickbare Verse und Strophen
- Strukturierte Navigation durch Aufzüge und Szenen
- Kontextbewusste Textanalyse

### 🤖 KI-gestützte Analysen
- **Literaturwissenschaftliche Erklärungen** mit Fachterminologie
- **Zusammenfassungen** von Textpassagen
- **Kulturhistorischer Kontext** der Entstehungszeit (1779-1786)
- **Stilmittel-Analysen** (Blankvers-Technik, Rhetorik)
- **Thematische Einordnung** (Humanitätsideal, Aufklärung)
- **Charakterpsychologische Analysen**
- **Dramaturgische Funktionsanalyse**

### 🎨 Moderne UI/UX
- Responsive Design für alle Bildschirmgrößen
- Elegante Typografie und Farbgestaltung
- Benutzerfreundliche Navigation
- Schnelle Ladezeiten durch Vite

## 🛠 Technologie-Stack

- **Frontend**: React 18 + TypeScript
- **Build-Tool**: Vite
- **KI-Integration**: OpenAI GPT-3.5-turbo API
- **Styling**: Modern CSS mit Flexbox/Grid
- **Type Safety**: Vollständige TypeScript-Typisierung

## 🚀 Installation & Setup

### Voraussetzungen
- Node.js (v16 oder höher)
- npm oder yarn
- OpenAI API-Schlüssel

### Lokale Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/mateo-gepard/iphigenie-ereader.git
   cd iphigenie-ereader
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen einrichten**
   
   Erstellen Sie eine `.env` Datei im Hauptverzeichnis:
   ```properties
   VITE_OPENAI_API_KEY=ihr-openai-api-schluessel
   ```
   
   > **Wichtig**: Holen Sie sich einen API-Schlüssel von [OpenAI Platform](https://platform.openai.com/api-keys)

4. **Development Server starten**
   ```bash
   npm run dev
   ```

5. **Anwendung öffnen**
   
   Öffnen Sie [http://localhost:5173](http://localhost:5173) in Ihrem Browser

## 📖 Nutzung

1. **Text lesen**: Navigieren Sie durch die verschiedenen Aufzüge und Szenen
2. **Interaktion**: Klicken Sie auf einzelne Verse oder ganze Strophen
3. **Analyse erhalten**: Die KI generiert automatisch detaillierte Erklärungen
4. **Verstehen**: Nutzen Sie die Hintergrundinformationen für ein tieferes Verständnis

## 🏗 Projektstruktur

```
src/
├── components/          # React-Komponenten
│   ├── EReader.tsx     # Hauptkomponente für Textanzeige
│   ├── EReader.css     # Styling für E-Reader
│   ├── ExplanationPanel.tsx  # Panel für KI-Analysen
│   └── ExplanationPanel.css  # Styling für Erklärungen
├── data/               # Textdaten
│   └── iphigenieText.ts # Strukturierter Goethe-Text
├── services/           # API-Services
│   └── openaiService.ts # OpenAI-Integration
├── types.ts           # TypeScript-Typdefinitionen
├── App.tsx           # Hauptanwendung
└── main.tsx         # Entry Point
```

## 🔧 Konfiguration

### OpenAI-Modell anpassen

In `src/services/openaiService.ts` können Sie das KI-Modell ändern:

```typescript
model: "gpt-3.5-turbo", // oder "gpt-4", "gpt-4-turbo"
```

### Prompt-Optimierung

Der Prompt ist speziell für literaturwissenschaftliche Analysen optimiert und kann in der `buildPrompt`-Methode angepasst werden.

## 🎓 Pädagogischer Wert

Diese Anwendung eignet sich für:
- **Deutschunterricht** in der Oberstufe
- **Germanistik-Studium** 
- **Selbststudium** der deutschen Literatur
- **Literaturwissenschaftliche Forschung**

## 🚨 Wichtige Hinweise

### Sicherheit
- **Produktionsumgebung**: Der API-Schlüssel sollte niemals im Frontend verwendet werden
- **Empfehlung**: Implementieren Sie einen Backend-Service für Produktionsanwendungen
- **Demo-Zweck**: Diese Implementierung ist zu Demonstrationszwecken optimiert

### API-Kosten
- Die Nutzung der OpenAI API verursacht Kosten
- Überwachen Sie Ihre API-Nutzung im OpenAI Dashboard
- Implementieren Sie bei Bedarf Rate-Limiting

## 🌐 Website Deployment

### Option 1: Vercel (Empfohlen - Kostenlos)

**Über die Website (Einfachste Methode):**
1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Melden Sie sich mit GitHub an
3. Klicken Sie "New Project"
4. Wählen Sie Ihr Repository: `mateo-gepard/iphigenie-ereader`
5. Vercel erkennt automatisch Vite/React
6. Fügen Sie Environment Variable hinzu:
   - Key: `VITE_OPENAI_API_KEY`
   - Value: Ihr OpenAI API-Schlüssel
7. Klicken Sie "Deploy"

**Über die CLI:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: Netlify (Alternative)

1. Gehen Sie zu [netlify.com](https://netlify.com)
2. "New site from Git" → GitHub → Ihr Repository
3. Build Command: `npm run build`
4. Publish Directory: `dist`
5. Environment Variables:
   - `VITE_OPENAI_API_KEY`: Ihr API-Schlüssel
6. Deploy

### Option 3: GitHub Pages (Statisch)

```bash
npm install --save-dev gh-pages
```

Fügen Sie zu `package.json` hinzu:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://mateo-gepard.github.io/iphigenie-ereader"
}
```

Dann:
```bash
npm run deploy
```

### Option 4: Eigener Server (VPS/Cloud)

Für fortgeschrittene Nutzer mit eigenem Server:
```bash
npm run build
# Upload dist/ folder to your web server
```

---

*Nach dem Deployment ist Ihre Anwendung weltweit verfügbar!*

## 🤝 Beitragen

Beiträge sind willkommen! Bitte:
1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie den Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## 📝 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe `LICENSE` Datei für Details.

## 🏛 Über "Iphigenie auf Tauris"

Johann Wolfgang von Goethes "Iphigenie auf Tauris" (1779-1786) ist ein Schlüsselwerk der Weimarer Klassik und behandelt Themen wie:
- **Humanitätsideal** und sittliche Vervollkommnung
- **Konflikt zwischen Pflicht und Neigung**
- **Antike Mythologie** in moderner Interpretation
- **Blankverstechnik** als dramatische Sprachform

## 🙋‍♂️ Support

Bei Fragen oder Problemen:
- Öffnen Sie ein [GitHub Issue](https://github.com/mateo-gepard/iphigenie-ereader/issues)

---

*Entwickelt mit ❤️ für die deutsche Literatur*

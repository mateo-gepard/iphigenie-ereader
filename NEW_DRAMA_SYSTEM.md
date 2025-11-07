# 🎭 Neues Work-Type-System - Implementierung

## ✅ Was wurde implementiert

### 1. Erweiterte Type-Definitionen (`src/types.ts`)

**Neue Basis-Typen:**
- `DialogBlock` - Ersetzt generische "Stanza", enthält:
  - `speaker` - Charaktername ohne Punctuation
  - `speakerPunctuation` - `:` oder `.` 
  - `directions` - Stage directions innerhalb des Blocks
  - `isNarration` - Für Erzählertext
  - `location` - Für Szenenorte

- `StageDirection` - Separater Typ für Regieanweisungen:
  - `type` - scene-setting, character-action, entrance, exit, inline
  - Besseres UI-Rendering

**Work-spezifische Typen:**
- `FaustPrelude`, `FaustScene` - Für Fausts spezielle Struktur (3 Vorstücke + Szenen)
- `ZerbrochnerKrugEntrance` - Für Der zerbrochne Krug (14 Auftritte, Prosa)
- `RaeuberScene` - Erweiterte Scene mit Narrator und Location

**WorkType Enum:**
```typescript
export type WorkType = 
  | 'iphigenie'         // Regular verse, : speaker, minimal directions
  | 'nathan'            // Verse, . speaker, frequent directions
  | 'faust'             // Mixed, : speaker, many directions, location
  | 'zerbrochner-krug'  // Prose, . speaker, very many directions
  | 'raeuber';          // Prose, . speaker, narrator, location
```

### 2. Spezialisierte Renderer

**IphigenieRenderer** (`src/components/drama-renderers/IphigenieRenderer.tsx`)
- Clean, elegant presentation
- Speaker mit `:` (Iphigenie:)
- Minimal stage directions
- Ideal für reguläre Versdramen

**NathanRenderer** (`src/components/drama-renderers/NathanRenderer.tsx`)
- Speaker mit `.` (Nathan.)
- Speaker-Icon 💬 für bessere Visualisierung
- Hervorgehobene Stage Directions in Kursiv mit lila Border
- Scene-level directions werden oben angezeigt
- Inline directions in verses werden special formatiert

**SmartDramaRenderer** (`src/components/drama-renderers/SmartDramaRenderer.tsx`)
- Automatische Auswahl des richtigen Renderers basierend auf `workType`
- Fallback zu IphigenieRenderer bei unbekannten Typen
- Einfach erweiterbar für weitere Renderer

### 3. CSS-Styling (`src/components/drama-renderers/DramaRenderer.css`)

**Iphigenie-Stil:**
- Clean, serif font (Crimson Text)
- Subtle hover effects
- Elegant speaker presentation

**Nathan-Stil:**
- Prominent stage directions mit Gradient-Background
- Purple border für directions
- Speaker mit Icon
- Inline directions werden visuell abgesetzt

**Features:**
- Theme-Support (light/dark)
- Responsive design
- Smooth transitions
- Visual feedback bei Selection

### 4. WorkConfig Updates (`src/data/works.ts`)

Alle 5 Werke haben jetzt:
```typescript
{
  workType: 'iphigenie' | 'nathan' | 'faust' | 'zerbrochner-krug' | 'raeuber',
  metadata: {
    acts: number,
    subdivision: 'Auftritte' | 'Szenen',
    textFormat: 'Vers' | 'Prosa' | 'gemischt',
    speakerPunctuation: ':' | '.',
    hasFrequentDirections: boolean
  }
}
```

### 5. Integration in EReader und App

- `EReader` akzeptiert jetzt `workType` prop
- Verwendet `SmartDramaRenderer` statt direktes Rendering
- `App.tsx` gibt `workType` vom `currentWorkConfig` weiter

## 📊 Vergleichstabelle (wie gewünscht)

| Werk | Akte | Unterteilung | Vers/Prosa | Szenenanweisungen | Sprecherzeichen | Renderer |
|------|------|--------------|------------|-------------------|-----------------|----------|
| Iphigenie auf Tauris | 5 | Auftritte | Vers | kaum vorhanden | : | IphigenieRenderer ✅ |
| Nathan der Weise | 5 | Auftritte | Vers | häufig vorhanden | . | NathanRenderer ✅ |
| Faust I | – | Szenen (25) + 3 Vorstücke | gemischt | viele | : | FaustRenderer 🚧 |
| Der zerbrochne Krug | 1 | Auftritte (14) | Prosa | sehr viele | . | ZerbrochnerKrugRenderer 🚧 |
| Die Räuber | 5 | Szenen | Prosa | viele | . | RaeuberRenderer 🚧 |

✅ = Implementiert und styled  
🚧 = System vorbereitet, Renderer noch zu erstellen

## 🎨 UI-Verbesserungen

### Nathan der Weise jetzt mit:
1. **Scene Directions Box** - Oben in jeder Szene, lila Gradient
2. **Speaker Icons** - 💬 vor jedem Sprecher
3. **Inline Directions** - Kursiv, lila Border, abgesetzt
4. **Bessere Typografie** - Serif font, optimierte Line-Heights

### Iphigenie auf Tauris jetzt mit:
1. **Clean Design** - Minimalistisch, elegant
2. **Speaker mit Doppelpunkt** - Klassische Darstellung
3. **Subtle Interactions** - Sanfte Hover-Effects

## 🔧 Nächste Schritte

### Sofort möglich:
1. **Test in Browser** - Öffne http://localhost:5173/
2. **Wechsel zwischen Werken** - Vergleiche Iphigenie vs. Nathan Rendering
3. **Feedback geben** - Was gefällt dir, was soll anders sein?

### Für weitere Implementierung:

**FaustRenderer** braucht:
- Location-Anzeige (wichtig!)
- Prelude-Rendering (Zueignung, Vorspiel, Prolog)
- Mixed Verse/Prose Handling
- Special formatting für "Nacht. Faust in einem..." etc.

**ZerbrochnerKrugRenderer** braucht:
- Line-level directions (sehr wichtig!)
- Prose-optimiertes Layout
- 14 Auftritte ohne Akt-Struktur
- Comedy-optimiertes Spacing

**RaeuberRenderer** braucht:
- Narrator-Blocks (special styling)
- Location prominent
- Prose formatting
- Character-heavy dialog management

## 📝 Textdatei-Anpassungen

### Aktuell (Kompatibilität gewahrt):
- Alle existierenden `.ts` Dateien funktionieren weiter
- `stanzas` wird als `dialogBlocks` erkannt
- `title` wird als `speaker` interpretiert

### Empfohlen für neue Texte:
```typescript
{
  id: "nathan-act-1-scene-1-block-1",
  speaker: "Nathan",  // Ohne Punktation
  speakerPunctuation: ".",
  verses: [...],
  directions: [  // Optional
    {
      id: "...",
      text: "(Nathan von der Reise kommend)",
      type: "character-action"
    }
  ]
}
```

## 🚀 Vorteile des neuen Systems

1. **Werk-optimiert** - Jedes Werk kann perfekt dargestellt werden
2. **Erweiterbar** - Neue Renderer einfach hinzufügen
3. **Type-safe** - TypeScript verhindert Fehler
4. **Wartbar** - Klare Struktur, keine Vermischung
5. **Professionell** - Sieht nicht mehr "billig" aus! 🎯

## 💡 Was du jetzt machen kannst

### Option 1: Bestehende Texte neu machen
Wenn du willst, können wir die Textdateien mit dem neuen System neu strukturieren:
- Separate `directions` Arrays
- Explizite `speaker` Felder
- `speakerPunctuation` definieren

### Option 2: Renderer weiter verbessern
- Mehr Icons und visuelle Elemente
- Animations
- Bessere Stage Direction Darstellung
- Character-specific styling

### Option 3: Neue Renderer entwickeln
- FaustRenderer mit Location-Display
- ZerbrochnerKrugRenderer mit Prose-Layout
- RaeuberRenderer mit Narrator-Blocks

## 📞 Sag mir einfach:
- Wie findest du Nathan vs. Iphigenie jetzt?
- Soll ich die Texte neu machen?
- Welcher Renderer als nächstes?
- Weitere Design-Wünsche?

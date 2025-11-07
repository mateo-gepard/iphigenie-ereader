# 📚 Textstruktur-Guide für literarische Werke

## 🎯 Übersicht

Dieses Dokument beschreibt die **exakte TypeScript-Struktur**, die für die Konvertierung literarischer Werke in unsere eReader-Anwendung verwendet wird.

---

## 📖 Universelle Basis-Typen

Alle Werke nutzen diese **Grundbausteine**:

### 1. **Verse** (einzelne Textzeile)
```typescript
export interface Verse {
  id: string;           // Eindeutige ID, z.B. "act-1-scene-1-stanza-1-verse-1"
  text?: string;        // Der tatsächliche Text (optional)
  lineNumber?: number;  // Durchlaufende Zeilennummer im gesamten Werk (optional)
}
```

**Beispiel:**
```typescript
{
  id: "act-1-scene-1-stanza-1-verse-1",
  text: "Heraus in eure Schatten, rege Wipfel",
  lineNumber: 1
}
```

---

### 2. **Stanza** (Redeabschnitt eines Sprechers)
```typescript
export interface Stanza {
  id: string;           // Eindeutige ID
  title?: string;       // Sprecher-Name mit ":", z.B. "Iphigenie:", "Faust:", "Erzähler:"
  verses: Verse[];      // Array von Versen
  act?: number;         // Aufzug-Nummer (optional)
  scene?: number;       // Szenen-Nummer (optional)
  section?: string;     // Sektion (nur für Faust: "Zueignung", "Vorspiel", etc.)
}
```

**Beispiel:**
```typescript
{
  id: "act-1-scene-1-stanza-1",
  title: "Iphigenie:",
  act: 1,
  scene: 1,
  verses: [
    { id: "...", text: "Heraus in eure Schatten, rege Wipfel", lineNumber: 1 },
    { id: "...", text: "Des alten, heil'gen, dichtbelaubten Haines,", lineNumber: 2 }
  ]
}
```

---

### 3. **Scene** (Szene/Auftritt)
```typescript
export interface Scene {
  id: string;
  title: string;        // z.B. "Erster Auftritt", "Szene 1"
  number: number;
  stanzas: Stanza[];
}
```

---

### 4. **Act** (Aufzug/Akt)
```typescript
export interface Act {
  id: string;
  title: string;        // z.B. "Erster Aufzug", "Erster Akt"
  number: number;
  scenes: Scene[];
}
```

---

## 🎭 Werk-spezifische Strukturen

### **Typ A: Standard-Struktur (Aufzug → Szene)**
**Verwendet von:** Iphigenie auf Tauris, Nathan der Weise, Die Räuber

```typescript
export const werkText: Act[] = [
  {
    id: "act-1",
    title: "Erster Aufzug",
    number: 1,
    scenes: [
      {
        id: "act-1-scene-1",
        title: "Erster Auftritt",  // oder "Szene 1"
        number: 1,
        stanzas: [
          {
            id: "act-1-scene-1-stanza-1",
            title: "Iphigenie:",
            act: 1,
            scene: 1,
            verses: [
              {
                id: "act-1-scene-1-stanza-1-verse-1",
                text: "Heraus in eure Schatten, rege Wipfel",
                lineNumber: 1
              }
              // ... weitere Verse
            ]
          },
          {
            id: "act-1-scene-1-stanza-2",
            title: "Arkas:",
            act: 1,
            scene: 1,
            verses: [ /* ... */ ]
          }
          // ... weitere Stanzas
        ]
      }
      // ... weitere Szenen
    ]
  },
  {
    id: "act-2",
    title: "Zweiter Aufzug",
    number: 2,
    scenes: [ /* ... */ ]
  }
  // ... weitere Aufzüge
];
```

**Besonderheiten:**
- **Nathan der Weise**: 5 Aufzüge, klassische Aufzug/Szenen-Struktur
- **Die Räuber**: 5 Akte mit Szenen, **kann Erzähler-Text enthalten** (`title: "Erzähler:"`)
- **Iphigenie**: "Auftritte" statt "Szenen" im Titel

---

### **Typ B: Faust I (Spezialstruktur mit Einleitungen)**
**Verwendet von:** Faust I

```typescript
// Spezielle Typen für Faust
export interface FaustPrelude {
  id: string;
  type: 'zueignung' | 'vorspiel' | 'prolog';
  title: string;
  stanzas: Stanza[];
}

export interface FaustScene {
  id: string;
  type: 'scene';
  number: number;
  title: string;
  stanzas: Stanza[];
}

export type FaustPiece = FaustPrelude | FaustScene;

// Hauptstruktur
export const faustIText: FaustPiece[] = [
  // 1. Zueignung (Einleitung)
  {
    id: "faust-zueignung",
    type: "zueignung",
    title: "Zueignung",
    stanzas: [
      {
        id: "faust-zueignung-stanza-1",
        title: "Dichter:",
        section: "zueignung",
        verses: [
          { id: "faust-zueignung-stanza-1-verse-1", text: "Ihr naht euch wieder, schwankende Gestalten", lineNumber: 1 }
        ]
      }
    ]
  },
  
  // 2. Vorspiel auf dem Theater
  {
    id: "faust-vorspiel",
    type: "vorspiel",
    title: "Vorspiel auf dem Theater",
    stanzas: [
      {
        id: "faust-vorspiel-stanza-1",
        title: "Direktor:",
        section: "vorspiel",
        verses: [ /* ... */ ]
      }
    ]
  },
  
  // 3. Prolog im Himmel
  {
    id: "faust-prolog",
    type: "prolog",
    title: "Prolog im Himmel",
    stanzas: [
      {
        id: "faust-prolog-stanza-1",
        title: "Erzengel:",
        section: "prolog",
        verses: [ /* ... */ ]
      }
    ]
  },
  
  // 4. Szenen (ca. 25 Szenen)
  {
    id: "faust-scene-1",
    type: "scene",
    number: 1,
    title: "Nacht",  // oder "Studierzimmer (I)"
    stanzas: [
      {
        id: "faust-scene-1-stanza-1",
        title: "Faust:",
        scene: 1,
        verses: [
          { id: "faust-scene-1-stanza-1-verse-1", text: "Habe nun, ach! Philosophie", lineNumber: 354 }
        ]
      }
    ]
  },
  {
    id: "faust-scene-2",
    type: "scene",
    number: 2,
    title: "Vor dem Tor",
    stanzas: [ /* ... */ ]
  }
  // ... bis Scene 25
];
```

**Wichtig für Faust:**
- **Keine Aufzüge!** Stattdessen: Zueignung → Vorspiel → Prolog → ~25 Szenen
- `lineNumber` ist wichtig, da Faust durchlaufende Zeilennummern hat
- Szenen-Titel variieren stark: "Nacht", "Studierzimmer", "Auerbachs Keller", "Hexenküche", "Gretchen", etc.

---

### **Typ C: Der zerbrochne Krug (Durchlaufende Auftritte)**
**Verwendet von:** Der zerbrochne Krug

```typescript
// Spezial-Typ für kontinuierliche Auftritte
export interface Entrance {
  id: string;
  title: string;        // "Erster Auftritt", "Zweiter Auftritt", etc.
  number: number;
  stanzas: Stanza[];
}

export const zerbrochneKrugText: Entrance[] = [
  {
    id: "krug-entrance-1",
    title: "Erster Auftritt",
    number: 1,
    stanzas: [
      {
        id: "krug-entrance-1-stanza-1",
        title: "Adam:",
        act: 0,      // Kein Aufzug → act: 0 oder weglassen
        scene: 1,
        verses: [
          {
            id: "krug-entrance-1-stanza-1-verse-1",
            text: "Was gilt die Wette?",
            lineNumber: 1
          }
        ]
      }
    ]
  },
  {
    id: "krug-entrance-2",
    title: "Zweiter Auftritt",
    number: 2,
    stanzas: [ /* ... */ ]
  }
  // ... alle Auftritte (variable Anzahl, je nach Edition)
];
```

**Besonderheiten:**
- **Keine Aufzüge!** Nur durchlaufende Auftritte
- Prosa-Werk (kann auch in Versen strukturiert werden, wenn Blankversen)
- `act: 0` oder `act` weglassen, da keine Aufzugs-Struktur

---

## 🎨 Spezial-Elemente

### **Erzähler-Text / Bühnenanweisungen**
Bei Werken mit Erzähler (z.B. Die Räuber) oder Regieanweisungen:

```typescript
{
  id: "act-1-scene-1-stanza-1",
  title: "Erzähler:",  // oder "(Bühnenanweisung)"
  act: 1,
  scene: 1,
  verses: [
    {
      id: "act-1-scene-1-stanza-1-verse-1",
      text: "Ein großer Saal im Schlosse des alten Moor.",
      lineNumber: 1
    }
  ]
}
```

### **Chor / Mehrere Sprecher**
```typescript
{
  id: "act-1-scene-1-stanza-3",
  title: "Chor der Engel:",  // oder "Die Räuber:" (Gruppe)
  act: 1,
  scene: 1,
  verses: [ /* ... */ ]
}
```

---

## ✅ Validierungs-Checkliste

Beim Konvertieren eines Werks **MUSS** Folgendes beachtet werden:

1. ✅ **IDs sind eindeutig** im gesamten Werk
2. ✅ **lineNumber ist durchlaufend** über das gesamte Werk (nicht pro Szene zurücksetzen!)
3. ✅ **Sprecher-Namen enden mit Doppelpunkt** (`"Iphigenie:"`, `"Faust:"`)
4. ✅ **Hierarchie wird eingehalten**: Act → Scene → Stanza → Verse
5. ✅ **Alle required Felder sind ausgefüllt**: `id`, `title`, `number`, etc.
6. ✅ **Export-Statement vorhanden**: `export const [werkname]Text: Act[] = [...]`

---

## 📝 Template für neue Werke

### **Für Standard-Struktur (Nathan, Die Räuber):**
```typescript
import type { Act } from '../types';

export const [werkname]Text: Act[] = [
  {
    id: "[werk]-act-1",
    title: "Erster Aufzug",
    number: 1,
    scenes: [
      {
        id: "[werk]-act-1-scene-1",
        title: "Szene 1",
        number: 1,
        stanzas: [
          {
            id: "[werk]-act-1-scene-1-stanza-1",
            title: "Sprecher:",
            act: 1,
            scene: 1,
            verses: [
              { id: "[werk]-act-1-scene-1-stanza-1-verse-1", text: "", lineNumber: 1 }
            ]
          }
        ]
      }
    ]
  }
];
```

### **Für Faust-Struktur:**
```typescript
import type { FaustPiece } from '../types';

export const faustIText: FaustPiece[] = [
  {
    id: "faust-zueignung",
    type: "zueignung",
    title: "Zueignung",
    stanzas: [
      {
        id: "faust-zueignung-stanza-1",
        title: "Dichter:",
        section: "zueignung",
        verses: [{ id: "v1", text: "", lineNumber: 1 }]
      }
    ]
  },
  // ... weitere Preludes und Scenes
];
```

### **Für Krug-Struktur:**
```typescript
import type { Entrance } from '../types';

export const zerbrochneKrugText: Entrance[] = [
  {
    id: "krug-entrance-1",
    title: "Erster Auftritt",
    number: 1,
    stanzas: [
      {
        id: "krug-entrance-1-stanza-1",
        title: "Adam:",
        scene: 1,
        verses: [{ id: "v1", text: "", lineNumber: 1 }]
      }
    ]
  }
];
```

---

## 🚀 Nächste Schritte

1. **Text an KI senden** mit diesem Guide als Referenz
2. **KI konvertiert** den Volltext in diese Struktur
3. **Output aufteilen** in Chunks (z.B. `FaustText1.ts`, `FaustText2.ts`, etc.)
4. **Import und Merge** in der Hauptdatei (z.B. `faustText.ts`)
5. **Programm erweitern** um strukturspezifische Handler (siehe nächstes Dokument)

---

## 📚 Beispiel-Referenzen

- **Iphigenie auf Tauris**: `/src/data/IphigenieText1.ts` (Standard Act/Scene)
- **Faust I Sample**: `/src/data/faust1Text.ts` (wird erweitert)
- **Nathan Sample**: `/src/data/nathanText.ts` (wird erweitert)
- **Krug Sample**: `/src/data/derZerbrocheneKrugText.ts` (wird erweitert)
- **Räuber Sample**: `/src/data/dieRaeuberText.ts` (wird erweitert)

---

**Version:** 1.0  
**Datum:** 6. November 2025  
**Autor:** Mateo Mamaladze & GitHub Copilot

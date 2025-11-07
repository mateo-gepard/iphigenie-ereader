# 🔧 Korrekturen für KI-generierte Textdateien

## ❌ Häufige Fehler in deiner Ausgabe:

### 1. **Falscher Import-Pfad**
```typescript
// ❌ FALSCH:
import { Act } from './types';

// ✅ RICHTIG:
import type { Act } from '../types';
```
**Erklärung:** Die Datei liegt in `src/data/`, die Types liegen in `src/types.ts` → man muss ein Verzeichnis hoch (`../`)

---

### 2. **Falscher Export-Name (Naming Convention)**
```typescript
// ❌ FALSCH:
export const NathanText1: Act[] = [

// ✅ RICHTIG:
export const nathanText1: Act[] = [
```
**Erklärung:** 
- Variablennamen in TypeScript/JavaScript beginnen mit **lowercase** (camelCase)
- Nur Types/Interfaces/Classes beginnen mit Uppercase (PascalCase)

---

### 3. **`null` statt `undefined` für optionale Felder**
```typescript
// ❌ FALSCH:
{
  id: "nathan-act-1-scene-1-stanza-1",
  title: null,  // ← Fehler!
  act: 1,
  scene: 1,
  verses: [...]
}

// ✅ RICHTIG:
{
  id: "nathan-act-1-scene-1-stanza-1",
  title: undefined,  // ← oder einfach weglassen
  act: 1,
  scene: 1,
  verses: [...]
}

// ✅ ODER NOCH BESSER (einfach weglassen):
{
  id: "nathan-act-1-scene-1-stanza-1",
  // title wird weggelassen, wenn kein Sprecher (z.B. Regieanweisungen)
  act: 1,
  scene: 1,
  verses: [...]
}
```
**Erklärung:** 
- In TypeScript ist `title?: string` definiert (optional)
- Das bedeutet: entweder `string` ODER `undefined`
- `null` ist **nicht erlaubt**

---

## ✅ Vollständiges korrektes Template:

```typescript
// [Werkname]Text1.ts
import type { Act } from '../types';

export const [werkname]Text1: Act[] = [
  {
    id: "[werk]-act-1",
    title: "Erster Aufzug",
    number: 1,
    scenes: [
      {
        id: "[werk]-act-1-scene-1",
        title: "Erster Auftritt",
        number: 1,
        stanzas: [
          // Regieanweisung/Bühnenanweisung (kein Sprecher)
          {
            id: "[werk]-act-1-scene-1-stanza-1",
            // title: weggelassen (NICHT null!)
            act: 1,
            scene: 1,
            verses: [
              {
                id: "[werk]-act-1-scene-1-stanza-1-verse-1",
                text: "(Szene: Beschreibung der Szenerie)",
                lineNumber: 1
              }
            ]
          },
          // Sprecher-Abschnitt
          {
            id: "[werk]-act-1-scene-1-stanza-2",
            title: "Nathan:",  // ← MIT Doppelpunkt am Ende
            act: 1,
            scene: 1,
            verses: [
              {
                id: "[werk]-act-1-scene-1-stanza-2-verse-1",
                text: "Text der ersten Zeile",
                lineNumber: 2
              },
              {
                id: "[werk]-act-1-scene-1-stanza-2-verse-2",
                text: "Text der zweiten Zeile",
                lineNumber: 3
              }
            ]
          }
        ]
      }
    ]
  }
];
```

---

## 📝 Wichtige Regeln:

1. ✅ **Import:** `import type { Act } from '../types';`
2. ✅ **Export:** `export const werkText1: Act[] = [` (lowercase!)
3. ✅ **Kein `null`:** Bei fehlendem `title` → einfach weglassen oder `undefined`
4. ✅ **Sprecher-Namen:** Immer mit Doppelpunkt am Ende: `"Nathan:"`, `"Daja:"`, `"Recha:"`
5. ✅ **Regieanweisungen:** Ohne `title`-Feld oder mit Klammern im Text: `"(Szene: ...)"`
6. ✅ **lineNumber:** Muss durchlaufend über das GESAMTE Werk sein, nicht pro Szene zurücksetzen

---

## 🎯 Zusammenfassung für neue Dateien:

**Wenn du eine neue Textdatei erstellst (z.B. FaustText1.ts, RaeuberText1.ts), beachte:**

1. Import-Pfad: `../types` (nicht `./types`)
2. Export-Name: lowercase camelCase (z.B. `faustText1`, nicht `FaustText1`)
3. Optionale Felder: Weglassen oder `undefined` (niemals `null`)
4. Sprecher: Mit Doppelpunkt (`"Faust:"`, `"Mephistopheles:"`)
5. lineNumber: Durchlaufend nummeriert über das gesamte Werk

---

## ⚠️ Besonderheiten für verschiedene Werke:

### **Faust I** (später):
- Struktur: Zueignung, Vorspiel, Prolog, dann ~25 Szenen
- `import type { FaustPiece } from '../types';`
- `export const faustText1: FaustPiece[] = [`

### **Der zerbrochne Krug** (später):
- Struktur: Nur Auftritte, keine Aufzüge
- `import type { Entrance } from '../types';`
- `export const zerbrochneKrugText1: Entrance[] = [`

### **Standard-Werke** (Nathan, Räuber, Iphigenie):
- Struktur: Act[] (Aufzüge → Szenen → Stanzas → Verses)
- `import type { Act } from '../types';`
- `export const nathanText1: Act[] = [`

---

**Version:** 1.0  
**Erstellt:** 6. November 2025  
**Zweck:** Korrekturen für KI-generierte Textdateien im eReader-Projekt

# 🧹 Cleanup - Änderungen

## Was wurde entfernt/geändert

### ❌ Entfernt:
1. **Emojis** - Keine 💬 Icons mehr vor Sprechernamen
2. **Gelbe Highlightings** - Ersetzt durch dezentes Blau
3. **Doppelte Versnummern** - Versnummern werden nicht mehr angezeigt (waren redundant)
4. **Doppelte Szenenanweisungen** - Stage Directions werden nur einmal oben angezeigt
5. **Inline Stage Directions** - Regieanweisungen mitten im Dialog werden nicht mehr angezeigt (zu cluttered)

### ✨ Verbessert:

**Nathan der Weise:**
- Sprecher in UPPERCASE ohne Icon: `NATHAN.`
- Kleinere, dezentere Sprechernamen
- Stage Directions nur einmal am Anfang der Szene
- Keine Padding-Exzesse mehr
- Cleaner, weniger ablenkend

**Iphigenie auf Tauris:**
- Gleicher cleaner Stil
- Sprecher in UPPERCASE: `IPHIGENIE:`
- Dezenter, fokussierter

**Selection Highlighting:**
- Statt Gelb (#FFD700): Jetzt sanftes Blau (rgba(100, 100, 255))
- Für Verse: rgba(100, 100, 255, 0.15)
- Für Dialog-Blöcke: rgba(100, 100, 255, 0.08)
- Viel angenehmer für die Augen

**Scene Titles:**
- Kleiner (0.95em statt 1.5em)
- UPPERCASE
- Letter-spacing für bessere Lesbarkeit
- Dezentere Border

## Design-Philosophie

**Vorher:** Zu viel visueller Lärm
- 💬 Emojis
- Gelbes Highlighting überall
- Doppelte Informationen
- Zu große Abstände

**Jetzt:** Clean & Focused
- Minimalistisch
- Nur wichtige Informationen
- Konsistente Typography
- Mehr Lesefokus

## Vorschau

### Nathan Szene sieht jetzt so aus:

```
ERSTER AUFTRITT

  (Szene: Flur in Nathans Hause.)
  Nathan von der Reise kommend. Daja ihm entgegen.

DAJA.
  Er ist es! Nathan! – Gott sei ewig Dank,
  Daß Ihr doch endlich einmal wiederkommt.

NATHAN.
  Ja, Daja; Gott sei Dank! Doch warum endlich?
  Hab ich denn eher wiederkommen wollen?
```

### Features:
- ✅ Keine redundanten Versnummern
- ✅ Stage Directions nur einmal oben in lila Box
- ✅ Clean Sprechernamen
- ✅ Fokus auf dem Text
- ✅ Blaues Selection Highlighting statt Gelb

## Teste es jetzt!

Öffne http://localhost:5173/ und navigiere zu Nathan der Weise!

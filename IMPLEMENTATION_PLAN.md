# 🛠️ Implementation Plan: Multi-Structure Support

## 📋 Übersicht

Dieses Dokument beschreibt die **technischen Anpassungen**, die nötig sind, damit die App **alle drei Text-Strukturen** (Standard, Faust, Krug) verarbeiten kann.

---

## 🎯 Betroffene Dateien

### **1. Bereits angepasst:**
- ✅ `src/types.ts` → Erweitert mit `FaustPiece`, `Entrance`, `WorkTextStructure`

### **2. Müssen angepasst werden:**
- ⚠️ `src/App.tsx` → State-Management für verschiedene Strukturen
- ⚠️ `src/components/EReader.tsx` → Rendering-Logik für alle Strukturen
- ⚠️ `src/components/QuickNavigation.tsx` → Navigation für alle Strukturen
- ⚠️ `src/services/openaiService.ts` → Kontext-Extraktion für alle Strukturen
- ⚠️ `src/utils/textProcessor.ts` → Such- und Verarbeitungs-Logik
- ⚠️ `src/data/works.ts` → `structureType` für jedes Werk hinzufügen

---

## 🔧 Detaillierte Anpassungen

### **1. `src/data/works.ts`**

**Änderung:** Jedes `WorkConfig` braucht ein `structureType`-Feld

```typescript
import type { WorkConfig, Act, FaustPiece, Entrance } from '../types';
import { iphigenieText } from './IphigenieText1';
import { iphigenieCharacters } from './characters';
// ... imports für alle Werke

export const availableWorks: WorkConfig[] = [
  {
    id: 'iphigenie',
    title: 'Iphigenie auf Tauris',
    author: 'Johann Wolfgang von Goethe',
    year: 1787,
    epoch: 'Weimarer Klassik',
    genre: 'Schauspiel',
    language: 'de',
    structureType: 'act-scene',  // ← NEU
    content: iphigenieText as Act[],
    characters: iphigenieCharacters,
    metadata: { /* ... */ }
  },
  {
    id: 'faust1',
    title: 'Faust I',
    author: 'Johann Wolfgang von Goethe',
    year: 1808,
    epoch: 'Weimarer Klassik',
    genre: 'Tragödie',
    language: 'de',
    structureType: 'faust',  // ← NEU
    content: faustIText as FaustPiece[],  // ← NEU: Cast zu FaustPiece[]
    characters: faust1Characters,
    metadata: { /* ... */ }
  },
  {
    id: 'der-zerbrochne-krug',
    title: 'Der zerbrochne Krug',
    author: 'Heinrich von Kleist',
    year: 1808,
    epoch: 'Romantik',
    genre: 'Lustspiel',
    language: 'de',
    structureType: 'entrance',  // ← NEU
    content: zerbrochneKrugText as Entrance[],  // ← NEU: Cast zu Entrance[]
    characters: derZerbrocheneKrugCharacters,
    metadata: { /* ... */ }
  },
  // Nathan und Die Räuber: structureType: 'act-scene'
];
```

---

### **2. `src/utils/textProcessor.ts`**

**Neue Helper-Funktionen** für Struktur-Erkennung:

```typescript
import type { 
  WorkTextStructure, 
  Act, 
  FaustPiece, 
  Entrance, 
  Scene, 
  Stanza, 
  Verse 
} from '../types';

// Type Guards
export function isActStructure(content: WorkTextStructure): content is Act[] {
  return Array.isArray(content) && content.length > 0 && 'scenes' in content[0];
}

export function isFaustStructure(content: WorkTextStructure): content is FaustPiece[] {
  return Array.isArray(content) && content.length > 0 && 
    ('type' in content[0] && (content[0].type === 'zueignung' || content[0].type === 'scene'));
}

export function isEntranceStructure(content: WorkTextStructure): content is Entrance[] {
  return Array.isArray(content) && content.length > 0 && 
    'stanzas' in content[0] && !('scenes' in content[0]);
}

// Universal Scene Extractor
export function getAllScenes(content: WorkTextStructure): Scene[] | Entrance[] | FaustPiece[] {
  if (isActStructure(content)) {
    return content.flatMap(act => act.scenes);
  } else if (isFaustStructure(content)) {
    return content; // Faust scenes are top-level
  } else if (isEntranceStructure(content)) {
    return content; // Entrances are scenes
  }
  return [];
}

// Universal Stanza Extractor
export function getAllStanzas(content: WorkTextStructure): Stanza[] {
  if (isActStructure(content)) {
    return content.flatMap(act => 
      act.scenes.flatMap(scene => scene.stanzas)
    );
  } else if (isFaustStructure(content)) {
    return content.flatMap(piece => piece.stanzas);
  } else if (isEntranceStructure(content)) {
    return content.flatMap(entrance => entrance.stanzas);
  }
  return [];
}

// Universal Verse Search
export function findVerseByLineNumber(
  content: WorkTextStructure, 
  lineNumber: number
): Verse | null {
  const stanzas = getAllStanzas(content);
  for (const stanza of stanzas) {
    const verse = stanza.verses.find(v => v.lineNumber === lineNumber);
    if (verse) return verse;
  }
  return null;
}

// Navigation Info Extractor
export function getNavigationInfo(content: WorkTextStructure): {
  type: 'act-scene' | 'faust' | 'entrance';
  items: Array<{ id: string; title: string; number?: number }>;
} {
  if (isActStructure(content)) {
    return {
      type: 'act-scene',
      items: content.flatMap(act => 
        act.scenes.map(scene => ({
          id: scene.id,
          title: `${act.title} - ${scene.title}`,
          number: scene.number
        }))
      )
    };
  } else if (isFaustStructure(content)) {
    return {
      type: 'faust',
      items: content.map(piece => ({
        id: piece.id,
        title: piece.title,
        number: piece.type === 'scene' ? piece.number : undefined
      }))
    };
  } else if (isEntranceStructure(content)) {
    return {
      type: 'entrance',
      items: content.map(entrance => ({
        id: entrance.id,
        title: entrance.title,
        number: entrance.number
      }))
    };
  }
  return { type: 'act-scene', items: [] };
}
```

---

### **3. `src/components/EReader.tsx`**

**Rendering-Logik anpassen:**

```typescript
import { isActStructure, isFaustStructure, isEntranceStructure } from '../utils/textProcessor';
import type { WorkTextStructure } from '../types';

interface EReaderProps {
  content: WorkTextStructure;
  // ... andere Props
}

export function EReader({ content, ... }: EReaderProps) {
  
  const renderContent = () => {
    if (isActStructure(content)) {
      return renderActStructure(content);
    } else if (isFaustStructure(content)) {
      return renderFaustStructure(content);
    } else if (isEntranceStructure(content)) {
      return renderEntranceStructure(content);
    }
    return <div>Unbekannte Struktur</div>;
  };

  const renderActStructure = (acts: Act[]) => {
    return acts.map(act => (
      <div key={act.id} className="act">
        <h2 className="act-title">{act.title}</h2>
        {act.scenes.map(scene => (
          <div key={scene.id} className="scene">
            <h3 className="scene-title">{scene.title}</h3>
            {renderStanzas(scene.stanzas)}
          </div>
        ))}
      </div>
    ));
  };

  const renderFaustStructure = (pieces: FaustPiece[]) => {
    return pieces.map(piece => (
      <div key={piece.id} className={`faust-${piece.type}`}>
        <h2 className="faust-title">{piece.title}</h2>
        {renderStanzas(piece.stanzas)}
      </div>
    ));
  };

  const renderEntranceStructure = (entrances: Entrance[]) => {
    return entrances.map(entrance => (
      <div key={entrance.id} className="entrance">
        <h2 className="entrance-title">{entrance.title}</h2>
        {renderStanzas(entrance.stanzas)}
      </div>
    ));
  };

  const renderStanzas = (stanzas: Stanza[]) => {
    return stanzas.map(stanza => (
      <div key={stanza.id} className="stanza">
        {stanza.title && <h4 className="speaker">{stanza.title}</h4>}
        <div className="verses">
          {stanza.verses.map(verse => (
            <p key={verse.id} className="verse" data-line={verse.lineNumber}>
              {verse.text}
            </p>
          ))}
        </div>
      </div>
    ));
  };

  return <div className="reader-content">{renderContent()}</div>;
}
```

---

### **4. `src/components/QuickNavigation.tsx`**

**Navigation anpassen:**

```typescript
import { getNavigationInfo } from '../utils/textProcessor';
import type { WorkTextStructure } from '../types';

interface QuickNavigationProps {
  content: WorkTextStructure;
  onNavigate: (id: string) => void;
}

export function QuickNavigation({ content, onNavigate }: QuickNavigationProps) {
  const navInfo = getNavigationInfo(content);

  return (
    <div className="quick-navigation">
      <h3>Navigation</h3>
      {navInfo.type === 'act-scene' && <div className="nav-label">Aufzüge & Szenen</div>}
      {navInfo.type === 'faust' && <div className="nav-label">Szenen & Einleitungen</div>}
      {navInfo.type === 'entrance' && <div className="nav-label">Auftritte</div>}
      
      <ul className="nav-items">
        {navInfo.items.map(item => (
          <li key={item.id} onClick={() => onNavigate(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### **5. `src/services/openaiService.ts`**

**Kontext-Extraktion erweitern:**

```typescript
import { getAllStanzas, isActStructure, isFaustStructure } from '../utils/textProcessor';

class OpenAIService {
  private static currentWork: WorkConfig | null = null;
  private static currentWorkText: WorkTextStructure | null = null;

  static setCurrentWork(work: WorkConfig | null, workText: WorkTextStructure | null) {
    this.currentWork = work;
    this.currentWorkText = workText;
  }

  private static getSceneByNumbers(actNum: number, sceneNum: number): string {
    if (!this.currentWorkText) return '';

    // Act-Scene Structure
    if (isActStructure(this.currentWorkText)) {
      const act = this.currentWorkText.find(a => a.number === actNum);
      if (!act) return '';
      const scene = act.scenes.find(s => s.number === sceneNum);
      if (!scene) return '';
      return this.formatSceneText(scene.stanzas);
    }
    
    // Faust Structure
    if (isFaustStructure(this.currentWorkText)) {
      const piece = this.currentWorkText.find(p => 
        p.type === 'scene' && p.number === sceneNum
      );
      if (!piece) return '';
      return this.formatSceneText(piece.stanzas);
    }
    
    // Entrance Structure
    if (isEntranceStructure(this.currentWorkText)) {
      const entrance = this.currentWorkText.find(e => e.number === sceneNum);
      if (!entrance) return '';
      return this.formatSceneText(entrance.stanzas);
    }

    return '';
  }

  private static formatSceneText(stanzas: Stanza[]): string {
    return stanzas.map(stanza => 
      `${stanza.title || ''}\n${stanza.verses.map(v => v.text).join('\n')}`
    ).join('\n\n');
  }

  // ... rest of the service
}
```

---

### **6. `src/App.tsx`**

**State-Management aktualisieren:**

```typescript
import type { WorkTextStructure } from './types';

function App() {
  const [currentWorkText, setCurrentWorkText] = useState<WorkTextStructure | null>(null);
  const [currentWorkConfig, setCurrentWorkConfig] = useState<WorkConfig | null>(null);

  useEffect(() => {
    const loadWork = async () => {
      if (currentWorkId) {
        const work = WorkManager.getWorkById(currentWorkId);
        if (work && WorkManager.isWorkImplemented(work)) {
          const workText = await WorkFactory.loadWorkContent(work.id);
          const workChars = await WorkFactory.loadWorkCharacters(work.id);
          
          setCurrentWorkConfig(work);
          setCurrentWorkText(workText);
          setCharacters(workChars);
          
          // Set OpenAI context
          OpenAIService.setCurrentWork(work, workText);
        }
      }
    };
    loadWork();
  }, [currentWorkId]);

  return (
    <div className="app">
      <EReader content={currentWorkText} />
      <QuickNavigation content={currentWorkText} />
      {/* ... */}
    </div>
  );
}
```

---

## 📝 Testing-Checkliste

Nach der Implementierung **MUSS** getestet werden:

1. ✅ **Iphigenie** (Act-Scene): Navigation, Rendering, AI-Kontext
2. ✅ **Nathan der Weise** (Act-Scene): Navigation, Rendering, AI-Kontext
3. ✅ **Die Räuber** (Act-Scene mit Erzähler): Navigation, Rendering, AI-Kontext
4. ✅ **Faust I** (Faust-Struktur): Navigation zeigt Zueignung/Vorspiel/Prolog + Szenen
5. ✅ **Der zerbrochne Krug** (Entrance): Navigation zeigt Auftritte ohne Aufzüge

---

## 🚀 Rollout-Plan

### **Phase 1: Type Extensions** ✅
- [x] `types.ts` erweitert mit allen Strukturen

### **Phase 2: Utility Functions** (1-2 Stunden)
- [ ] `textProcessor.ts` mit Type Guards und Extractors erstellen
- [ ] Unit-Tests für alle Extractors

### **Phase 3: Component Updates** (2-3 Stunden)
- [ ] `EReader.tsx` → Rendering-Logik für alle Strukturen
- [ ] `QuickNavigation.tsx` → Dynamische Navigation
- [ ] `SearchBox.tsx` → Universal-Suche (optional)

### **Phase 4: Service Updates** (1 Stunde)
- [ ] `openaiService.ts` → Kontext-Extraktion für alle Strukturen
- [ ] `works.ts` → `structureType` für alle Werke hinzufügen

### **Phase 5: Text Import** (sobald KI fertig ist)
- [ ] Volltext-Chunks von KI erhalten
- [ ] Merge in finale Text-Dateien (z.B. `FaustText1-10.ts` → `faustText.ts`)
- [ ] Import in `works.ts`

### **Phase 6: Testing & Polish** (2-3 Stunden)
- [ ] Alle Werke durchklicken
- [ ] AI-Erklärungen testen
- [ ] Performance-Optimierung (falls nötig)
- [ ] Git Push & Deployment

---

## 🎯 Nächste Schritte (Jetzt)

1. **Du**: Sendest `TEXT_STRUCTURE_GUIDE.md` an KI mit deinen Volltexten
2. **KI**: Konvertiert alle Werke in die richtige Struktur
3. **Du**: Gibst mir die Chunks
4. **Ich**: Implementiere Phase 2-4 (Utility Functions, Components, Services)
5. **Zusammen**: Phase 5-6 (Text Import, Testing)

---

**Geschätzte Gesamt-Zeit:** 6-10 Stunden  
**Kritischer Pfad:** KI-Konvertierung der Volltexte (parallel zu unserer Implementierung möglich!)

---

**Version:** 1.0  
**Status:** 🟡 Planning → Ready for Implementation  
**Autor:** Mateo Mamaladze & GitHub Copilot

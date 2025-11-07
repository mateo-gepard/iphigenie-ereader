import type { WorkConfig, Act } from '../types';
import { iphigenieText } from './iphigenieText';
import { characters } from './characters';
import { faust1Text } from './faust1Text';
import { faust1Characters } from './faust1Characters';
import { nathanText } from './nathanText';
import { nathanCharacters } from './nathanCharacters';
import { derZerbrocheneKrugText } from './derZerbrocheneKrugText';
import { derZerbrocheneKrugCharacters } from './derZerbrocheneKrugCharacters';
import { dieRaeuberText } from './dieRaeuberText';
import { dieRaeuberCharacters } from './dieRaeuberCharacters';

// ============== WERK-REGISTRY ==============

export const availableWorks: WorkConfig[] = [
  // Iphigenie auf Tauris (Bestehend)
  {
    id: 'iphigenie',
    title: 'Iphigenie auf Tauris',
    author: 'Johann Wolfgang von Goethe',
    epoch: 'Weimarer Klassik',
    genre: 'drama',
    language: 'de',
    year: 1787,
    workType: 'iphigenie',  // Very regular verse, : speaker, minimal directions
    content: iphigenieText as Act[],
    characters: characters,
    metadata: {
      subtitle: 'Ein Schauspiel',
      themes: ['Humanität', 'Wahrheit', 'Versöhnung', 'Götter und Menschen'],
      historicalContext: 'Goethes Bearbeitung des antiken Euripides-Stoffs im Geiste der Weimarer Klassik',
      notes: 'Paradigmatisches Werk des deutschen Klassizismus mit Fokus auf sittliche Läuterung',
      cover: '/iphigenie-auf-tauris-1-auflage-hamburger-lesehefte.jpeg',
      acts: 5,
      subdivision: 'Auftritte',
      textFormat: 'Vers',
      speakerPunctuation: ':',
      hasFrequentDirections: false
    }
  },

  // Faust I (Sample)
  {
    id: 'faust1',
    title: 'Faust I',
    author: 'Johann Wolfgang von Goethe',
    epoch: 'Sturm und Drang / Klassik',
    genre: 'drama',
    language: 'de',
    year: 1808,
    workType: 'faust',  // Mixed verse/prose, : speaker, many directions, location
    content: faust1Text as Act[],
    characters: faust1Characters,
    metadata: {
      subtitle: 'Der Tragödie erster Teil',
      themes: ['Erkenntnisdrang', 'Pakt mit dem Teufel', 'Liebe und Schuld', 'Rettung durch Liebe'],
      historicalContext: 'Goethes Lebenswerk, vereint Gelehrten- und Gretchen-Tragödie',
      notes: 'Eines der bedeutendsten Werke der Weltliteratur',
      cover: '/faust-i-hamburger-lesehefte.jpeg',
      acts: undefined,  // No act structure
      subdivision: 'Szenen',
      textFormat: 'gemischt',
      speakerPunctuation: ':',
      hasFrequentDirections: true
    }
  },

  {
    id: 'nathan-der-weise',
    title: 'Nathan der Weise',
    author: 'Gotthold Ephraim Lessing',
    epoch: 'Aufklärung',
    genre: 'drama',
    language: 'de',
    year: 1779,
    workType: 'nathan',  // Verse, . speaker, frequent directions
    content: nathanText as Act[],
    characters: nathanCharacters,
    metadata: {
      subtitle: 'Ein dramatisches Gedicht',
      themes: ['Religionstoleranz', 'Humanität', 'Ringparabel', 'Aufklärung', 'Weisheit'],
      historicalContext: 'Lessings Plädoyer für religiöse Toleranz im Zeitalter der Aufklärung',
      notes: 'Eines der wichtigsten deutschen Dramen der Aufklärung',
      cover: '/nathan-der-weise-hamburger-lesehefte.jpg',
      acts: 5,
      subdivision: 'Auftritte',
      textFormat: 'Vers',
      speakerPunctuation: '.',
      hasFrequentDirections: true
    }
  },

  {
    id: 'der-zerbrochene-krug',
    title: 'Der zerbrochene Krug',
    author: 'Heinrich von Kleist',
    epoch: 'Romantik',
    genre: 'drama',
    language: 'de',
    year: 1808,
    workType: 'zerbrochner-krug',  // Prose, . speaker, very many directions (line-level)
    content: derZerbrocheneKrugText as Act[],
    characters: derZerbrocheneKrugCharacters,
    metadata: {
      subtitle: 'Ein Lustspiel',
      themes: ['Gerechtigkeit', 'Korruption', 'Komik', 'Dorfgemeinschaft', 'Richter und Recht'],
      historicalContext: 'Kleists Komödie über einen korrupten Dorfrichter, inspiriert von einem niederländischen Kupferstich',
      notes: 'Klassisches deutsches Lustspiel der Romantik',
      cover: '/der-zerbrochne-krug-hamburger-lesehefte.jpg',
      acts: 1,
      subdivision: 'Auftritte',
      textFormat: 'Prosa',
      speakerPunctuation: '.',
      hasFrequentDirections: true
    }
  },

  {
    id: 'die-raeuber',
    title: 'Die Räuber',
    author: 'Friedrich Schiller',
    epoch: 'Sturm und Drang',
    genre: 'drama',
    language: 'de',
    year: 1781,
    workType: 'raeuber',  // Prose, . speaker, many directions, narrator, location
    content: dieRaeuberText as Act[],
    characters: dieRaeuberCharacters,
    metadata: {
      subtitle: 'Ein Schauspiel',
      themes: ['Brüderkonflikt', 'Tyrannei', 'Freiheit', 'Recht und Gerechtigkeit'],
      historicalContext: 'Erstes Drama Schillers, Sturm und Drang Manifest gegen Despotismus',
      notes: 'Schillers revolutionäres Erstlingsdrama',
      cover: '/die-raeuber-hamburger-lesehefte.jpeg',
      acts: 5,
      subdivision: 'Szenen',
      textFormat: 'Prosa',
      speakerPunctuation: '.',
      hasFrequentDirections: true
    }
  }
];

// ============== WERK-VERWALTUNG ==============

export class WorkManager {
  private static currentWork: WorkConfig | null = null;

  static getWorkById(id: string): WorkConfig | undefined {
    return availableWorks.find(work => work.id === id);
  }

  static getCurrentWork(): WorkConfig | null {
    return this.currentWork;
  }

  static async setCurrentWork(workId: string): Promise<WorkConfig | null> {
    const work = this.getWorkById(workId);
    if (work) {
      // Lade Content und Characters dynamisch wenn noch nicht geladen
      if (this.isWorkImplemented(workId) && (!work.content || (Array.isArray(work.content) && work.content.length === 0))) {
        try {
          work.content = await WorkFactory.loadWorkContent(workId);
          work.characters = await WorkFactory.loadWorkCharacters(workId);
          console.log(`🔄 Werk-Inhalte geladen für: ${work.title}`);
        } catch (error) {
          console.warn(`⚠️  Fehler beim Laden von ${work.title}:`, error);
        }
      }
      
      this.currentWork = work;
      console.log(`📚 Werk gewechselt zu: ${work.title} von ${work.author}`);
    }
    return this.currentWork;
  }

  static getAllWorks(): WorkConfig[] {
    return availableWorks;
  }

  static getWorksByAuthor(author: string): WorkConfig[] {
    return availableWorks.filter(work => work.author === author);
  }

  static getWorksByEpoch(epoch: string): WorkConfig[] {
    return availableWorks.filter(work => work.epoch === epoch);
  }

  static getWorksByGenre(genre: string): WorkConfig[] {
    return availableWorks.filter(work => work.genre === genre);
  }

  static isWorkImplemented(workId: string): boolean {
    // Alle Werke sind jetzt mit Sample-Inhalten implementiert
    return ['iphigenie', 'faust1', 'nathan-der-weise', 'der-zerbrochene-krug', 'die-raeuber'].includes(workId);
  }

  static getImplementedWorks(): WorkConfig[] {
    return availableWorks.filter(work => this.isWorkImplemented(work.id));
  }

  static getPlaceholderWorks(): WorkConfig[] {
    return availableWorks.filter(work => !this.isWorkImplemented(work.id));
  }
}

// ============== WERK-FACTORY FÜR DYNAMISCHES LADEN ==============

export class WorkFactory {
  static async loadWorkContent(workId: string): Promise<Act[]> {
    switch (workId) {
      case 'iphigenie':
        return (await import('./iphigenieText')).iphigenieText;
      case 'faust1':
        return (await import('./faust1Text')).faust1Text;
      case 'nathan-der-weise':
        return (await import('./nathanText')).nathanText;
      case 'der-zerbrochene-krug':
        return (await import('./derZerbrocheneKrugText')).derZerbrocheneKrugText;
      case 'die-raeuber':
        return (await import('./dieRaeuberText')).dieRaeuberText;
      default:
        throw new Error(`Unbekanntes Werk: ${workId}`);
    }
  }

  static async loadWorkCharacters(workId: string): Promise<any[]> {
    switch (workId) {
      case 'iphigenie':
        return (await import('./characters')).characters;
      case 'faust1':
        return (await import('./faust1Characters')).faust1Characters;
      case 'nathan-der-weise':
        return (await import('./nathanCharacters')).nathanCharacters;
      case 'der-zerbrochene-krug':
        return (await import('./derZerbrocheneKrugCharacters')).derZerbrocheneKrugCharacters;
      case 'die-raeuber':
        return (await import('./dieRaeuberCharacters')).dieRaeuberCharacters;
      default:
        throw new Error(`Unbekannte Charaktere für Werk: ${workId}`);
    }
  }
}

// ============== HELPER FUNCTIONS ==============

export const getWorkDisplayName = (work: WorkConfig): string => {
  return work.metadata?.subtitle 
    ? `${work.title}: ${work.metadata.subtitle}`
    : work.title;
};

export const getWorkDescription = (work: WorkConfig): string => {
  return `${work.author} (${work.year})`;
};

// ============== BOOK COVERS ==============

export const BOOK_COVERS: Record<string, string> = {
  'iphigenie': '/iphigenie-auf-tauris-1-auflage-hamburger-lesehefte.jpeg',
  'faust1': '/faust-i-hamburger-lesehefte.jpeg',
  'nathan-der-weise': '/nathan-der-weise-hamburger-lesehefte.jpg',
  'der-zerbrochene-krug': '/der-zerbrochne-krug-hamburger-lesehefte.jpg',
  'die-raeuber': '/die-raeuber-hamburger-lesehefte.jpeg'
};

// ============== WORK STATISTICS ==============

export const getWorkStats = () => {
  const total = availableWorks.length;
  const implemented = WorkManager.getImplementedWorks().length;
  const planned = WorkManager.getPlaceholderWorks().length;
  
  return {
    total,
    implemented,
    planned,
    implementedPercentage: Math.round((implemented / total) * 100)
  };
};

// ============== EXPORTS ==============

export default WorkManager;

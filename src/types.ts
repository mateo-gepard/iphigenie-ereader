// ============================================================================
// UNIVERSAL TEXT STRUCTURE TYPES
// ============================================================================

// Base Verse structure (used by all works)
export interface Verse {
  id: string;
  text: string;
  lineNumber?: number;  // Optional for prose works
}

// Stage Direction - separate type for better UI rendering
export interface StageDirection {
  id: string;
  text: string;
  type: 'scene-setting' | 'character-action' | 'entrance' | 'exit' | 'inline';
  lineNumber?: number;
}

// Dialog Block - replaces generic "Stanza" - supports legacy format
export interface DialogBlock {
  id: string;
  speaker?: string;  // Character name without punctuation: "Nathan", "Iphigenie", "Faust"
  title?: string;    // Legacy format support (same as speaker with punctuation)
  speakerPunctuation?: ':' | '.';  // How the speaker is marked in original text
  verses?: Verse[];  // Legacy and new format support
  directions?: StageDirection[];  // Stage directions within this dialog block
  act?: number;
  scene?: number;
  isNarration?: boolean;  // For narrator text (Die Räuber)
  location?: string;  // Scene location (Faust, Die Räuber)
}

// Legacy alias for backward compatibility
export type Stanza = DialogBlock;

// Scene structure (Auftritt/Szene) - supports both old and new format
export interface Scene {
  id: string;
  title: string;  // "Erster Auftritt", "Erste Szene", etc.
  number: number;
  dialogBlocks?: DialogBlock[];  // New format
  stanzas?: Stanza[];  // Legacy format - keep for backward compatibility
  location?: string;  // "Ein Zimmer", "Garten", etc. (for Faust, Die Räuber)
  directions?: StageDirection[];  // Scene-level stage directions
}

// Act structure (Aufzug/Akt) - used by most works
export interface Act {
  id: string;
  title: string;
  number: number;
  scenes: Scene[];
}

// Legacy support - keep stanzas working
export interface SceneLegacy extends Omit<Scene, 'dialogBlocks'> {
  stanzas: Stanza[];
}

// ============================================================================
// FAUST I - SPECIFIC TYPES
// Special structure: 3 Vorstücke (Zueignung, Vorspiel, Prolog) + 25 Szenen
// Mixed verse/prose, many stage directions, location info
// ============================================================================

export interface FaustPrelude {
  id: string;
  type: 'zueignung' | 'vorspiel' | 'prolog';
  title: string;
  dialogBlocks?: DialogBlock[];
  stanzas?: Stanza[];  // Legacy support
  location?: string;
}

export interface FaustScene {
  id: string;
  type: 'scene';
  number: number;
  title: string;
  location: string;  // "Nacht. Faust in einem hochgewölbten..." - important for Faust
  dialogBlocks?: DialogBlock[];
  stanzas?: Stanza[];  // Legacy support
  directions?: StageDirection[];
}

export type FaustPiece = FaustPrelude | FaustScene;

// ============================================================================
// DER ZERBROCHNE KRUG - SPECIFIC TYPES
// 1 Act, 14 Auftritte, Prosa, very many stage directions
// Often line-level directions needed
// ============================================================================

export interface ZerbrochnerKrugEntrance {
  id: string;
  title: string;  // "Erster Auftritt", "Zweiter Auftritt", etc.
  number: number;
  dialogBlocks?: DialogBlock[];
  stanzas?: Stanza[];  // Legacy support
  directions?: StageDirection[];  // Very important for this work
}

// ============================================================================
// DIE RÄUBER - SPECIFIC TYPES
// 5 Acts, Scenes, Prosa, many directions, narrator, location info
// ============================================================================

export interface RaeuberScene extends Scene {
  narrator?: DialogBlock[];  // Special narrator sections
  location: string;  // Very important for Die Räuber
}

// ============================================================================
// WORK STRUCTURE TYPE (union type for all possible text structures)
// ============================================================================

export type WorkTextStructure = 
  | Act[]  // Iphigenie (very regular), Nathan (needs directions), Die Räuber (prose)
  | FaustPiece[]  // Faust I (3 Vorstücke + 25 Szenen, mixed, location important)
  | ZerbrochnerKrugEntrance[];  // Der zerbrochne Krug (14 Auftritte, prose, many directions)

// Work type identifier for rendering logic
export type WorkType = 
  | 'iphigenie'  // Very regular verse drama, : speaker, minimal directions
  | 'nathan'     // Verse drama, . speaker, frequent directions
  | 'faust'      // Mixed verse/prose, : speaker, many directions, location important
  | 'zerbrochner-krug'  // Prose, . speaker, very many directions (line-level)
  | 'raeuber';   // Prose, . speaker, many directions, narrator, location

// ============================================================================
// LEGACY INTERFACES (for backward compatibility)
// ============================================================================

export interface IphigenieText {
  title: string;
  author: string;
  acts: Act[];
}

export interface ExplanationRequest {
  text: string;
  context: 'verse' | 'stanza' | 'scene';
  actNumber?: number;
  sceneNumber?: number;
  forceRegenerate?: boolean;
  isCharacterComparison?: boolean;
  character1?: any;
  character2?: any;
}

export interface LiteraryDevice {
  name: string;
  example: string;
  effect: string;
  category: 'rhetoric' | 'sound' | 'structure' | 'imagery' | 'syntax';
}

export interface ExplanationResponse {
  explanation: string;
  summary: string;
  background: string;
  literaryDevices?: LiteraryDevice[];
  themes?: string[];
  characterAnalysis?: string;
  dramaticFunction?: string;
  metricAnalysis?: string;
  fromCache?: boolean;
  cacheSource?: 'global' | 'local' | 'none';
  generatedAt?: string;
  usageCount?: number;
  // Legacy properties for backward compatibility
  historicalContext?: string;
  mythologicalBackground?: string;
}

export interface WorkConfig {
  id: string;
  title: string;
  author: string;
  year: number;
  epoch: string;
  genre: string;
  language: string;
  content: WorkTextStructure;
  characters: any[];
  workType: WorkType;  // Determines rendering and parsing logic
  metadata?: {
    subtitle?: string;
    cover?: string;
    description?: string;
    themes?: string[];
    historicalContext?: string;
    notes?: string;
    // Work-specific metadata
    acts?: number;  // 5 for most, undefined for Faust, 1 for Zerbrochner Krug
    subdivision?: 'Auftritte' | 'Szenen';
    textFormat?: 'Vers' | 'Prosa' | 'gemischt';
    speakerPunctuation?: ':' | '.';
    hasFrequentDirections?: boolean;
  };
}

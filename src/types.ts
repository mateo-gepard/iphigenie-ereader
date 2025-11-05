export interface Verse {
  id: string;
  text: string;
  lineNumber: number;
}

export interface Stanza {
  id: string;
  title: string;
  verses: Verse[];
  act: number;
  scene: number;
}

export interface Act {
  id: string;
  title: string;
  number: number;
  scenes: Scene[];
}

export interface Scene {
  id: string;
  title: string;
  number: number;
  stanzas: Stanza[];
}

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
  content: Act[];
  characters: any[];
  metadata?: {
    subtitle?: string;
    cover?: string;
    description?: string;
    themes?: string[];
    historicalContext?: string;
    notes?: string;
  };
}

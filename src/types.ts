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
}

export interface ExplanationResponse {
  explanation: string;
  summary: string;
  background: string;
  literaryDevices?: string[];
  themes?: string[];
  characterAnalysis?: string;
  dramaticFunction?: string;
}

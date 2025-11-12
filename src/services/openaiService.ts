import OpenAI from 'openai';
import type { ExplanationRequest, ExplanationResponse, Act, WorkConfig } from '../types';
import { CacheService } from './cacheService';
import { GlobalCacheService } from './globalCacheService';

// Note: In a production app, you should use environment variables and a backend API
// to keep your API key secure. This is for demonstration purposes only.
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const openai = API_KEY ? new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true // Only for demo - use backend in production
}) : null;

export class OpenAIService {
  private static currentWork: WorkConfig | null = null;
  private static currentWorkText: Act[] | null = null;

  // Setze das aktuelle Werk für Kontext
  static setCurrentWork(work: WorkConfig | null, workText: Act[] | null) {
    this.currentWork = work;
    this.currentWorkText = workText;
  }

  // Hilfsfunktion um eine Szene zu finden (werk-agnostisch)
  private static getSceneByNumbers(actNumber: number, sceneNumber: number) {
    if (!this.currentWorkText) return null;
    const act = this.currentWorkText.find(act => act.number === actNumber);
    return act?.scenes.find(scene => scene.number === sceneNumber);
  }

  // Erweitert den Request um wertvollen Kontext für bessere ChatGPT-Antworten
  private static async enrichRequestWithContext(request: ExplanationRequest): Promise<ExplanationRequest & { 
    textualContext?: string; 
    sceneContext?: string; 
    characterContext?: string;
    surroundingText?: string;
    workInfo?: string;
  }> {
    let textualContext = '';
    let sceneContext = '';
    let characterContext = '';
    let surroundingText = '';
    let workInfo = '';

    // Werk-Information hinzufügen
    if (this.currentWork) {
      const workMeta = this.currentWork.metadata;
      workInfo = `WERK: "${this.currentWork.title}" von ${this.currentWork.author} (${this.currentWork.year})
EPOCHE: ${this.currentWork.epoch}
GENRE: ${this.currentWork.genre === 'drama' ? 'Drama' : this.currentWork.genre}
${workMeta?.subtitle ? `UNTERTITEL: ${workMeta.subtitle}` : ''}
HAUPTTHEMEN: ${workMeta?.themes?.join(', ') || 'Nicht verfügbar'}
KONTEXT: ${workMeta?.historicalContext || 'Nicht verfügbar'}`;
    }

    try {
      if (request.actNumber && request.sceneNumber) {
        const scene = this.getSceneByNumbers(request.actNumber, request.sceneNumber);
        
        if (scene) {
          // Handle both legacy stanzas and new dialogBlocks
          const stanzas = (scene as any).stanzas || [];
          const dialogBlocks = (scene as any).dialogBlocks || [];
          const textBlocks = stanzas.length > 0 ? stanzas : dialogBlocks;
          
          // 1. SZENENKONTEXT - Grundlegende Szeneninformationen
          const totalBlocks = textBlocks.length;
          const speakers = [...new Set(textBlocks.map((s: any) => s.title || s.speaker))].filter(Boolean);
          sceneContext = `Szene: ${scene.title} (${totalBlocks} Textabschnitte). Aktive Sprecher: ${speakers.join(', ').replace(/:/g, '')}`;

          // 2. UMGEBUNGSTEXT - 2-3 Verse vor und nach dem ausgewählten Text
          if (request.context === 'verse') {
            surroundingText = this.extractSurroundingVerses(scene, request.text, 2);
          } else if (request.context === 'stanza') {
            surroundingText = this.extractSurroundingStanzas(scene, request.text, 1);
          }

          // 3. CHARAKTERKONTEXT - Informationen zu sprechenden Charakteren (wenn verfügbar)
          if (this.currentWork?.characters && Array.isArray(this.currentWork.characters)) {
            const findCharacterByName = (name: string) => {
              const normalizedName = name.toLowerCase().trim();
              return this.currentWork!.characters?.find((char: any) => 
                char.name.toLowerCase() === normalizedName || 
                char.aliases?.some((alias: string) => alias.toLowerCase() === normalizedName)
              );
            };

            const currentSpeakers = (speakers as string[]).map((speaker: string) => {
              const cleanName = speaker.replace(':', '').trim();
              return findCharacterByName(cleanName);
            }).filter(Boolean);

            if (currentSpeakers.length > 0) {
              characterContext = currentSpeakers.map((char: any) => 
                `${char?.name}: ${char?.role} - ${char?.description?.substring(0, 100)}...`
              ).join('; ');
            }
          }

          // 4. TEXTKONTEXT - Dramaturgie und Handlungsposition
          const actProgress = ((request.sceneNumber - 1) / Math.max(scene.number, 1)) * 100;
          textualContext = `Handlungsposition: ${actProgress.toFixed(0)}% des ${request.actNumber}. Aufzugs/Teils. ${this.getDramaticMoment(request.actNumber, request.sceneNumber)}`;
        }
      }
    } catch (error) {
      console.warn('Kontext-Extraktion teilweise fehlgeschlagen:', error);
    }

    return {
      ...request,
      textualContext: textualContext.trim(),
      sceneContext: sceneContext.trim(),
      characterContext: characterContext.trim(),
      surroundingText: surroundingText.trim(),
      workInfo: workInfo.trim()
    };
  }

  // Extrahiert umgebende Verse für besseren Kontext
  private static extractSurroundingVerses(scene: any, targetText: string, contextRange: number): string {
    const allVerses: any[] = [];
    
    // Handle both legacy stanzas and new dialogBlocks
    const stanzas = scene.stanzas || [];
    const dialogBlocks = scene.dialogBlocks || [];
    
    if (stanzas.length > 0) {
      stanzas.forEach((stanza: any) => {
        stanza.verses?.forEach((verse: any) => {
          allVerses.push({ ...verse, speaker: stanza.title });
        });
      });
    } else if (dialogBlocks.length > 0) {
      dialogBlocks.forEach((block: any) => {
        block.content?.forEach((item: any) => {
          if (item.text) {
            allVerses.push({ ...item, speaker: block.speaker });
          }
        });
      });
    }

    // Finde den Zielvers
    const targetIndex = allVerses.findIndex(verse => 
      verse.text?.trim() === targetText.trim() || targetText.includes(verse.text?.trim() || '')
    );

    if (targetIndex === -1) return '';

    // Extrahiere Kontext
    const start = Math.max(0, targetIndex - contextRange);
    const end = Math.min(allVerses.length, targetIndex + contextRange + 1);
    
    return allVerses.slice(start, end)
      .map(verse => `${verse.lineNumber || ''}: ${verse.text || ''}`)
      .join('\n');
  }

  // Extrahiert umgebende Strophen für besseren Kontext
  private static extractSurroundingStanzas(scene: any, targetText: string, contextRange: number): string {
    const stanzas = scene.stanzas || [];
    const dialogBlocks = scene.dialogBlocks || [];
    const textBlocks = stanzas.length > 0 ? stanzas : dialogBlocks;
    
    if (textBlocks.length === 0) return '';
    
    const targetBlockIndex = textBlocks.findIndex((block: any) => {
      if (block.verses) {
        // Legacy stanza format
        const blockText = block.verses.map((v: any) => v.text).join('\n');
        return targetText.includes(blockText) || blockText.includes(targetText);
      } else if (block.content) {
        // New dialogBlock format
        const blockText = block.content.map((c: any) => c.text || '').join('\n');
        return targetText.includes(blockText) || blockText.includes(targetText);
      }
      return false;
    });

    if (targetBlockIndex === -1) return '';

    const start = Math.max(0, targetBlockIndex - contextRange);
    const end = Math.min(textBlocks.length, targetBlockIndex + contextRange + 1);
    
    return textBlocks.slice(start, end)
      .map((block: any) => {
        if (block.verses) {
          // Legacy stanza format
          const verses = block.verses.map((v: any) => `${v.lineNumber}: ${v.text}`).slice(0, 3);
          return `${block.title}\n${verses.join('\n')}${block.verses.length > 3 ? '\n...' : ''}`;
        } else if (block.content) {
          // New dialogBlock format
          const content = block.content.map((c: any) => `${c.lineNumber || ''}: ${c.text || ''}`).slice(0, 3);
          return `${block.speaker}\n${content.join('\n')}${block.content.length > 3 ? '\n...' : ''}`;
        }
        return '';
      })
      .join('\n\n');
  }

  // Universelle Kontext-Bestimmung für alle Werke
  private static getUniversalContext(actNumber?: number, sceneNumber?: number): string {
    if (actNumber && sceneNumber) {
      // Prozentuale Position im Werk berechnen
      const actProgress = actNumber <= 3 ? "Exposition/Aufbau" : 
                         actNumber <= 4 ? "Höhepunkt/Krise" : "Auflösung/Schluss";
      
      return `${actProgress} - Struktureller Kontext: ${actNumber}. Teil, ${sceneNumber}. Abschnitt`;
    }
    
    return "Allgemeiner literarischer Kontext";
  }

  // Bestimmt den dramatischen Moment für bessere Kontextualisierung
  private static getDramaticMoment(actNumber?: number, sceneNumber?: number): string {
    const moments: Record<string, string> = {
      '1-1': 'Exposition und Charaktereinführung',
      '1-2': 'Konfliktetablierung',
      '1-3': 'Problemvertiefung',
      '2-1': 'Wendepunkt und neue Figuren',
      '2-2': 'Spannungssteigerung',
      '3-1': 'Krisenhöhepunkt',
      '3-2': 'Emotionaler Höhepunkt',
      '3-3': 'Strategieentwicklung',
      '4-1': 'Moralisches Dilemma',
      '4-2': 'Vertrauensbruch',
      '4-3': 'Heilung und Erkenntnis',
      '4-4': 'Handlungsvorbereitung',
      '5-1': 'Finale Konfrontation',
      '5-2': 'Loyalitätsprüfung',
      '5-3': 'Wahrheitsmoment',
      '5-4': 'Versöhnung',
      '5-6': 'Harmonische Auflösung'
    };
    
    return moments[`${actNumber}-${sceneNumber}`] || 'Dramatischer Entwicklungsmoment';
  }

  static async getExplanation(request: ExplanationRequest): Promise<ExplanationResponse> {
    try {
      // Check if OpenAI is available
      if (!openai) {
        return {
          explanation: "OpenAI-Service ist nicht verfügbar. Bitte konfigurieren Sie einen API-Schlüssel in der .env-Datei, um KI-gestützte Erklärungen zu erhalten.",
          summary: "Service nicht verfügbar",
          background: "OpenAI API-Schlüssel fehlt",
          literaryDevices: [],
          themes: [],
          characterAnalysis: "Nicht verfügbar ohne OpenAI-Service",
          dramaticFunction: "Nicht verfügbar ohne OpenAI-Service",
          metricAnalysis: "Nicht verfügbar ohne OpenAI-Service"
        };
      }

      // Erweiterte Kontextgenerierung für bessere Antwortqualität
      const enrichedRequest = await this.enrichRequestWithContext(request);
      
      // Überspringe Cache nur wenn explizit Regenerierung gewünscht
      if (!request.forceRegenerate) {
        // Überprüfe globalen Cache zuerst
        const globalCachedResult = await GlobalCacheService.getCachedExplanation(
          request.text,
          request.context,
          request.actNumber,
          request.sceneNumber
        );

        if (globalCachedResult) {
          return { 
            ...globalCachedResult, 
            cacheSource: 'global',
            fromCache: true 
          };
        }

        // Fallback auf lokalen Cache
        const localCachedResult = CacheService.getCachedExplanation(
          request.text,
          request.context,
          request.actNumber,
          request.sceneNumber
        );

        if (localCachedResult) {
          return { 
            ...localCachedResult, 
            fromCache: true, 
            cacheSource: 'local' 
          };
        }
      } else {
        console.log('🔄 Force regeneration requested, skipping cache');
      }

      const prompt = this.buildPrompt(enrichedRequest);
      
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Du bist ein erfahrener Literaturwissenschaftler mit Expertise in deutscher Literatur aller Epochen. Du analysierst Texte präzise und erklärst sie verständlich für Schüler und Studenten.

            🚨 ABSOLUTES VERBOT VON SPEKULATIVEN ANALYSEN:
            - NIEMALS den Wortlaut falsch interpretieren
            - NIEMALS Bedeutungen erfinden, die nicht im Text stehen
            - NIEMALS anachronistische Interpretationen (moderne Sicht auf historische Texte)
            - NIEMALS oberflächliche Erklärungen ohne Textbasis
            
            🎯 UNIVERSELLE TEXTANALYSE-METHODIK:
            1. WÖRTLICHE BEDEUTUNG: Was steht GENAU da? Jedes Wort im historischen Kontext
            2. GRAMMATIK & SYNTAX: Satzstrukturen, Wortstellung, sprachliche Besonderheiten
            3. EPOCHENKONTEXT: Sprachgebrauch und literarische Konventionen der Zeit
            4. GATTUNGSKONTEXT: Drama, Lyrik, Epik - gattungsspezifische Merkmale
            5. HANDLUNG/SITUATION: Was passiert? Wer spricht? Welche Umstände?
            
            💡 QUALITÄTSKONTROLLE:
            - Überprüfe JEDE Aussage gegen den Originaltext
            - Bei Unklarheiten: ehrlich zugeben statt spekulieren
            - Literaturwissenschaftliche Präzision mit verständlicher Sprache
            - Konkrete Textbelege für jede Interpretation
            
            📚 UNIVERSELLE LITERATUR-EXPERTISE:
            - Alle literarischen Epochen (Barock bis Moderne)
            - Alle Gattungen (Drama, Lyrik, Epik)
            - Metrische Systeme und Versmaße
            - Rhetorische Figuren und Stilmittel
            - Charakterisierungstechniken
            
            ANPASSUNG AN WERKKONTEXT:
            - Erkenne automatisch die Epoche und passe Analysemethoden an
            - Berücksichtige gattungsspezifische Besonderheiten
            - Nutze epochentypische literarische Kategorien
            - Arbeite mit bereitgestelltem Kontext (Szene, Figuren, etc.)
            
            PFLICHTSTRUKTUR (Antworte IMMER in diesem exakten JSON-Format):
            {
              "explanation": "WAS PASSIERT HIER? Erkläre die konkrete Situation: Was wird gesagt/getan und warum? Erkläre schwere/veraltete Wörter sofort. Dann literaturwissenschaftliche Einordnung (4-5 Sätze)",
              "summary": "Prägnante Zusammenfassung: Was ist der Kern dieser Textpassage? (1-2 Sätze)",
              "background": "EINE zusammenhängende Kontextualisierung: Historischer, kultureller oder mythologischer Hintergrund je nach Werk (4-5 Sätze)",
              "literaryDevices": [
                {
                  "name": "NUR tatsächlich vorhandene Stilmittel - wenn keine eindeutig identifizierbar sind, gib leere Liste [] zurück",
                  "example": "Exaktes wörtliches Zitat aus dem analysierten Text",
                  "effect": "Spezifische Wirkung auf Leser und textuelle Funktion",
                  "category": "rhetoric|sound|structure|imagery|syntax"
                }
              ],
              "themes": ["Hauptthema der Textpassage", "Weiteres relevantes Motiv falls vorhanden"],
              "characterAnalysis": "Charakterpsychologische Einordnung (nur bei Figurenrede/Figurenbeschreibung)",
              "dramaticFunction": "Funktion für Handlung/Struktur des Werks (bei narrativen/dramatischen Texten)",
              "metricAnalysis": "Analyse von Versmaß, Rhythmus und metrischen Besonderheiten (nur bei gebundener Rede)"
            }`
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.8
      });

      const response = completion.choices[0]?.message?.content;
      if (!response) {
        throw new Error('Keine Antwort von OpenAI erhalten');
      }

      // Try to parse JSON response, fallback to plain text if it fails
      let explanationResponse: ExplanationResponse;
      try {
        explanationResponse = JSON.parse(response) as ExplanationResponse;
      } catch {
        explanationResponse = {
          explanation: response,
          summary: "Zusammenfassung nicht verfügbar",
          background: "Hintergrundinformationen nicht verfügbar",
          literaryDevices: [],
          themes: [],
          characterAnalysis: "Charakteranalyse nicht verfügbar",
          dramaticFunction: "Dramatische Funktion nicht verfügbar",
          metricAnalysis: "Metrische Analyse nicht verfügbar"
        };
      }

      // Füge Metadaten hinzu
      const enrichedResponse = {
        ...explanationResponse,
        cacheSource: 'none' as const,
        fromCache: false,
        generatedAt: new Date().toISOString(),
        usageCount: 1
      };

      // Cache die erfolgreiche Antwort global und lokal
      await Promise.all([
        GlobalCacheService.cacheExplanation(
          request.text,
          request.context,
          enrichedResponse,
          request.actNumber,
          request.sceneNumber
        ),
        // Lokaler Cache als Fallback
        new Promise<void>((resolve) => {
          CacheService.cacheExplanation(
            request.text,
            request.context,
            enrichedResponse,
            request.actNumber,
            request.sceneNumber
          );
          resolve();
        })
      ]);

      return enrichedResponse;
    } catch (error) {
      console.error('Fehler beim Abrufen der Erklärung:', error);
      return {
        explanation: "Entschuldigung, es gab einen Fehler beim Abrufen der Erklärung. Bitte versuchen Sie es später erneut.",
        summary: "Fehler",
        background: "Fehler beim Laden der Hintergrundinformationen",
        literaryDevices: [],
        themes: [],
        characterAnalysis: "Fehler bei der Charakteranalyse",
        dramaticFunction: "Fehler bei der Funktionsanalyse",
        metricAnalysis: "Fehler bei der metrischen Analyse"
      };
    }
  }

  private static buildPrompt(request: ExplanationRequest & {
    textualContext?: string; 
    sceneContext?: string; 
    characterContext?: string;
    surroundingText?: string;
    workInfo?: string;
  }): string {
    // Spezielle Behandlung für Charaktervergleiche
    if (request.isCharacterComparison && request.character1 && request.character2) {
      return this.buildCharacterComparisonPrompt(request.character1, request.character2);
    }

    const contextInfo = request.actNumber && request.sceneNumber 
      ? `${request.actNumber}. Aufzug/Teil, ${request.sceneNumber}. Szene/Abschnitt` 
      : '';
    
    const contextType = request.context === 'verse' ? 'EINZELVERS' : 
                       request.context === 'stanza' ? 'STROPHE/TEXTABSCHNITT' : 'SZENE';

    const dramaticContext = this.getUniversalContext(request.actNumber, request.sceneNumber);

    // Erweiterte Kontextinformationen aufbauen
    let contextSection = '';
    if (request.workInfo || request.textualContext || request.sceneContext || request.characterContext || request.surroundingText) {
      contextSection = '\n--- ERWEIT ERTER WERK- UND TEXTKONTEXT FÜR PRÄZISERE ANALYSE ---\n';
      
      if (request.workInfo) {
        contextSection += `\n${request.workInfo}\n`;
      }
      
      if (request.textualContext) {
        contextSection += `\nDRAMATURGISCHE EINORDNUNG: ${request.textualContext}`;
      }
      
      if (request.sceneContext) {
        contextSection += `\nSZENENINFORMATION: ${request.sceneContext}`;
      }
      
      if (request.characterContext) {
        contextSection += `\nAKTIVE CHARAKTERE: ${request.characterContext}`;
      }
      
      if (request.surroundingText) {
        contextSection += `\nUMGEBENDER TEXT (zur besseren Einordnung):
${request.surroundingText}`;
      }
      
      contextSection += '\n--- ENDE ERWEITETER KONTEXT ---\n';
    }

    return `ANALYSE-AUFTRAG: Literaturwissenschaftliche Textanalyse

TEXTQUELLE: ${this.currentWork?.title || 'Literarisches Werk'} (${contextInfo || 'Kontext nicht verfügbar'})
AUTOR: ${this.currentWork?.author || 'Unbekannt'}
EPOCHE: ${this.currentWork?.epoch || 'Zu bestimmen'}
ANALYSEEBENE: ${contextType}
STRUKTURKONTEXT: ${dramaticContext}${contextSection}

TEXTPASSAGE ZU ANALYSIEREN:
"${request.text}"

UNIVERSELLE PRÄZISIONS-ANALYSE:
1. WÖRTLICHE BEDEUTUNG: Was steht exakt da? Jedes Wort im epochenspezifischen Kontext des Werks
2. SPRACHLICHE KONSTRUKTION: Syntax, Wortstellung und sprachliche Besonderheiten der Zeit
3. SITUATIVER KONTEXT: Sprecher, Situation, emotionale/dramatische Lage IM KONTEXT DIESES WERKS
4. TEXTEBENE: Was geschieht konkret in diesem Moment des Werks?
5. BELEGBARE INTERPRETATION: Nur analysieren, was textlich nachweisbar ist
6. WERK-SPEZIFISCH: Berücksichtige die speziellen Themen und den Kontext dieses spezifischen Werks

ANALYSE IM WERKKONTEXT:
⚠️ Nutze alle bereitgestellten Informationen über das Werk (Titel, Autor, Epoche, Themen, Kontext)
⚠️ Beziehe die spezifischen Charaktere und deren Beziehungen ein (falls verfügbar)
⚠️ Berücksichtige die dramaturgische Position im Gesamtwerk
⚠️ Erkenne werkspezifische Motive und Themen
⚠️ Passe die Analysemethoden an Genre und Epoche des Werks an

METHODISCHES VORGEHEN:
⚠️ WORTEBENE: Historische Wortbedeutungen vs. moderne Interpretationen
⚠️ SYNTAXEBENE: Poetische/archaische Konstruktionen korrekt verstehen  
⚠️ KONTEXTEBENE: Wer spricht zu wem in welcher Situation?
⚠️ FUNKTIONSEBENE: Welche Rolle hat die Passage im Gesamtwerk?
⚠️ EPOCHENEBENE: Zeitgenössische literarische Konventionen beachten

ANALYSE-STRUKTUR:
1. WÖRTLICHE BEDEUTUNG: Jedes Wort/jede Wendung in seinem sprachhistorischen Kontext
2. KOMMUNIKATIONSSITUATION: Wer spricht/denkt/handelt? Unter welchen Umständen?
3. WERKKONTEXT: Was passiert an dieser Stelle? Wie fügt es sich in die Handlung DIESES WERKS?
4. LITERARISCHE GESTALTUNG: Warum wählt ${this.currentWork?.author || 'der Autor'} diese spezielle Formulierung?
5. GESAMTFUNKTION: Welche Bedeutung hat diese Stelle für ${this.currentWork?.title || 'das gesamte Werk'}?

QUALITÄTS-VALIDIERUNG:
✓ Stimmen alle Wortinterpretationen mit dem historischen Sprachgebrauch überein?
✓ Ist die grammatische/syntaktische Analyse korrekt?
✓ Entspricht die Deutung dem bereitgestellten Werk- und Szenenkontext?
✓ Werden verfügbare Zusatzinformationen (Werk, Szene, Figuren, Themen) genutzt?
✓ Bleibt die Analyse bei nachweisbaren Textaussagen?

Antworte ausschließlich im vorgegebenen JSON-Format.`;
  }



  static async answerCustomQuestion(selectedText: string, question: string, contextInfo?: {
    actNumber?: number;
    sceneNumber?: number;
  }): Promise<string> {
    try {
      // Check if OpenAI is available
      if (!openai) {
        return "OpenAI-Service ist nicht verfügbar. Bitte konfigurieren Sie einen API-Schlüssel in der .env-Datei, um KI-gestützte Antworten zu erhalten.";
      }

      // Erweiterten Kontext für Custom Questions generieren
      let additionalContext = '';
      
      if (contextInfo?.actNumber && contextInfo?.sceneNumber) {
        try {
          const scene = this.getSceneByNumbers(contextInfo.actNumber, contextInfo.sceneNumber);
          
          if (scene) {
            // Handle both legacy stanzas and new dialogBlocks
            const stanzas = (scene as any).stanzas || [];
            const dialogBlocks = (scene as any).dialogBlocks || [];
            const textBlocks = stanzas.length > 0 ? stanzas : dialogBlocks;
            
            const speakers = [...new Set(textBlocks.map((s: any) => s.title || s.speaker))].filter(Boolean);
            const dramaticMoment = this.getDramaticMoment(contextInfo.actNumber, contextInfo.sceneNumber);
            
            additionalContext = `\n\nKONTEXT ZUR BESSEREN EINORDNUNG:
- Szene: ${scene.title} (${contextInfo.actNumber}. Aufzug, ${contextInfo.sceneNumber}. Szene)
- Dramatischer Moment: ${dramaticMoment}  
- Aktive Sprecher: ${speakers.join(', ').replace(/:/g, '')}
- Handlungsposition: ${((contextInfo.sceneNumber - 1) / Math.max(scene.number, 1) * 100).toFixed(0)}% des Aufzugs`;
          }
        } catch (error) {
          console.warn('Kontext für Custom Question konnte nicht geladen werden:', error);
        }
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Du bist ein erfahrener Literaturwissenschaftler mit breiter Expertise in deutscher Literatur aller Epochen. 
            Beantworte Fragen zu ausgewählten Texten präzise und wissenschaftlich fundiert.
            
            UNIVERSELLE ANTWORT-RICHTLINIEN:
            - Nutze bereitgestellten Kontext für präzisere Antworten
            - Beziehe dich direkt auf den ausgewählten Text  
            - Verwende angemessene literaturwissenschaftliche Terminologie
            - Erkläre verständlich für Schüler und Studenten
            - Gib konkrete Textbelege und Beispiele
            - Berücksichtige Gattung, Epoche und Kontext
            - Erkläre literarische Gestaltungsmittel und deren Wirkung
            - Passe Analysemethoden an das jeweilige Werk an
            
            BREITE EXPERTISE-BEREICHE:
            - Alle literarischen Epochen (Mittelalter bis Gegenwart)
            - Alle Gattungen (Epik, Lyrik, Drama)
            - Versmaße, Metrik und sprachliche Gestaltung
            - Rhetorische Figuren und Stilmittel
            - Charakterisierungs- und Erzähltechniken
            - Historische und kulturelle Kontexte`
          },
          {
            role: "user",
            content: `AUSGEWÄHLTER TEXT:
"${selectedText}"

BENUTZERFRAGE:
${question}${additionalContext}

Bitte beantworte die Frage präzise und wissenschaftlich fundiert, bezogen auf diesen Textausschnitt. Erkenne automatisch das literarische Werk und die Epoche, und passe deine Analysemethoden entsprechend an. Nutze den bereitgestellten Kontext für eine präzise Einordnung.`
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      });

      return completion.choices[0]?.message?.content || 'Entschuldigung, ich konnte keine Antwort generieren.';
    } catch (error) {
      console.error('Fehler beim Beantworten der Frage:', error);
      throw new Error('Die Frage konnte nicht beantwortet werden.');
    }
  }

  static async answerGeneralQuestion(question: string): Promise<string> {
    try {
      // Check if OpenAI is available
      if (!openai) {
        return "OpenAI-Service ist nicht verfügbar. Bitte konfigurieren Sie einen API-Schlüssel in der .env-Datei, um KI-gestützte Antworten zu erhalten.";
      }

      // Erweiterten Kontext für das aktuelle Werk generieren
      let workContext = '';
      if (this.currentWork) {
        const workMeta = this.currentWork.metadata;
        workContext = `\n\nKONTEXT ZUM AKTUELLEN WERK:
- Werk: "${this.currentWork.title}" von ${this.currentWork.author} (${this.currentWork.year})
- Epoche: ${this.currentWork.epoch}
- Genre: ${this.currentWork.genre === 'drama' ? 'Drama' : this.currentWork.genre}
${workMeta?.subtitle ? `- Untertitel: ${workMeta.subtitle}` : ''}
- Hauptthemen: ${workMeta?.themes?.join(', ') || 'Humanität, Wahrheit, moralische Konflikte'}
- Historischer Kontext: ${workMeta?.historicalContext || 'Weimarer Klassik, Aufklärung'}`;
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Du bist ein erfahrener Literaturwissenschaftler mit spezieller Expertise in deutscher Literatur, besonders der Weimarer Klassik und Goethes Werken. 
            Beantworte allgemeine Fragen zu literarischen Werken präzise und wissenschaftlich fundiert.
            
            ANTWORT-RICHTLINIEN:
            - Gib umfassende, strukturierte Antworten
            - Verwende angemessene literaturwissenschaftliche Terminologie
            - Erkläre verständlich für Schüler und Studenten
            - Beziehe historische und kulturelle Kontexte ein
            - Gib konkrete Beispiele aus dem Werk (wenn verfügbar)
            - Erkläre Zusammenhänge zwischen Charakteren, Themen und Struktur
            - Passe die Antwort an die Komplexität der Frage an
            
            EXPERTISE-BEREICHE:
            - Deutsche Literatur aller Epochen (Schwerpunkt Klassik/Aufklärung)
            - Dramatik, Lyrik, Epik
            - Charakteranalyse und Figurenkonstellationen
            - Themen und Motive (Humanität, Wahrheit, Moral)
            - Historische und mythologische Kontexte
            - Goethes Werk und Philosophie`
          },
          {
            role: "user",
            content: `ALLGEMEINE FRAGE ZUR LITERATUR:
${question}${workContext}

Bitte beantworte diese Frage umfassend und strukturiert. Wenn die Frage sich auf ein spezifisches Werk bezieht (wie "Iphigenie auf Tauris"), nutze den bereitgestellten Werkkontext für eine präzise Antwort. Bei allgemeinen literaturwissenschaftlichen Fragen gib eine fundierte, beispielreiche Antwort.`
          }
        ],
        max_tokens: 1200,
        temperature: 0.7
      });

      return completion.choices[0]?.message?.content || 'Entschuldigung, ich konnte keine Antwort generieren.';
    } catch (error) {
      console.error('Fehler beim Beantworten der allgemeinen Frage:', error);
      throw new Error('Die Frage konnte nicht beantwortet werden.');
    }
  }

  private static buildCharacterComparisonPrompt(character1: any, character2: any): string {
    return `ANALYSE-AUFTRAG: Charaktervergleich in Goethes "Iphigenie auf Tauris"

VERGLEICHSCHARAKTERE:
CHARACTER 1: ${character1.name}
- Rolle: ${character1.role}
- Beschreibung: ${character1.description}
- Schlüsseleigenschaften: ${character1.keyTraits?.join(', ') || 'Nicht angegeben'}

CHARACTER 2: ${character2.name}
- Rolle: ${character2.role}
- Beschreibung: ${character2.description}
- Schlüsseleigenschaften: ${character2.keyTraits?.join(', ') || 'Nicht angegeben'}

ANALYSE-SCHWERPUNKTE:
1. CHARAKTERENTWICKLUNG: Wie entwickeln sich beide Figuren im Verlauf des Dramas?
2. MOTIVATIONSSTRUKTUR: Was treibt die jeweiligen Charaktere an?
3. KONFLIKTLINIEN: Welche inneren und äußeren Konflikte prägen die Figuren?
4. BEZIEHUNGSDYNAMIK: Wie stehen die Charaktere zueinander? Welche Spannungen entstehen?
5. SYMBOLISCHE FUNKTION: Welche Werte/Ideen verkörpern sie in Goethes Humanitätskonzept?
6. SPRACHLICHE CHARAKTERISIERUNG: Wie drückt sich ihr Charakter in ihrer Sprache aus?
7. DRAMATURGISCHE ROLLE: Welche Funktion haben sie für die Handlungsführung?

VERGLEICHSASPEKTE:
- Gemeinsamkeiten und Unterschiede in Weltanschauung und Verhalten
- Verschiedene Lösungsansätze für ähnliche Dilemmata
- Komplementäre oder kontrastierende Charakterzüge
- Entwicklungsbogen und Wandel der Figuren
- Repräsentation verschiedener gesellschaftlicher/kultureller Werte

WICHTIG:
- Berücksichtige die Gesamtstruktur des Dramas
- Beziehe konkrete Textstellen mit ein (wenn möglich)
- Analysiere die Figuren im Kontext der Weimarer Klassik
- Erkläre die Bedeutung für Goethes Humanitätsideal

Antworte ausschließlich im vorgegebenen JSON-Format.`;
  }
}

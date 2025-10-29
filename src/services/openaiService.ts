import OpenAI from 'openai';
import type { ExplanationRequest, ExplanationResponse } from '../types';
import { CacheService } from './cacheService';
import { GlobalCacheService } from './globalCacheService';
import { iphigenieText } from '../data/iphigenieText';

// Note: In a production app, you should use environment variables and a backend API
// to keep your API key secure. This is for demonstration purposes only.
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo - use backend in production
});

export class OpenAIService {

  // Hilfsfunktion um eine Szene zu finden
  private static getSceneByNumbers(actNumber: number, sceneNumber: number) {
    const act = iphigenieText.find(act => act.number === actNumber);
    return act?.scenes.find(scene => scene.number === sceneNumber);
  }

  // Erweitert den Request um wertvollen Kontext für bessere ChatGPT-Antworten
  private static async enrichRequestWithContext(request: ExplanationRequest): Promise<ExplanationRequest & { 
    textualContext?: string; 
    sceneContext?: string; 
    characterContext?: string;
    surroundingText?: string;
  }> {
    // Keine dynamischen Imports mehr nötig - direkter Import oben
    
    let textualContext = '';
    let sceneContext = '';
    let characterContext = '';
    let surroundingText = '';

    try {
      if (request.actNumber && request.sceneNumber) {
        const scene = this.getSceneByNumbers(request.actNumber, request.sceneNumber);
        
        if (scene) {
          // 1. SZENENKONTEXT - Grundlegende Szeneninformationen
          const totalStanzas = scene.stanzas.length;
          const speakers = [...new Set(scene.stanzas.map((s: any) => s.title))].filter(Boolean);
          sceneContext = `Szene: ${scene.title} (${totalStanzas} Textabschnitte). Aktive Sprecher: ${speakers.join(', ').replace(/:/g, '')}`;

          // 2. UMGEBUNGSTEXT - 2-3 Verse vor und nach dem ausgewählten Text
          if (request.context === 'verse') {
            surroundingText = this.extractSurroundingVerses(scene, request.text, 2);
          } else if (request.context === 'stanza') {
            surroundingText = this.extractSurroundingStanzas(scene, request.text, 1);
          }

          // 3. CHARAKTERKONTEXT - Informationen zu sprechenden Charakteren
          const { characters } = await import('../data/characters');
          const findCharacterByName = (name: string) => {
            const normalizedName = name.toLowerCase().trim();
            return characters.find(char => 
              char.name.toLowerCase() === normalizedName || 
              char.aliases.some(alias => alias.toLowerCase() === normalizedName)
            );
          };

          const currentSpeakers = (speakers as string[]).map((speaker: string) => {
            const cleanName = speaker.replace(':', '').trim();
            return findCharacterByName(cleanName);
          }).filter(Boolean);

          if (currentSpeakers.length > 0) {
            characterContext = currentSpeakers.map(char => 
              `${char?.name}: ${char?.role} - ${char?.description?.substring(0, 100)}...`
            ).join('; ');
          }

          // 4. TEXTKONTEXT - Dramaturgie und Handlungsposition
          const actProgress = ((request.sceneNumber - 1) / Math.max(scene.number, 1)) * 100;
          textualContext = `Handlungsposition: ${actProgress.toFixed(0)}% des ${request.actNumber}. Aufzugs. ${this.getDramaticMoment(request.actNumber, request.sceneNumber)}`;
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
      surroundingText: surroundingText.trim()
    };
  }

  // Extrahiert umgebende Verse für besseren Kontext
  private static extractSurroundingVerses(scene: any, targetText: string, contextRange: number): string {
    const allVerses: any[] = [];
    scene.stanzas.forEach((stanza: any) => {
      stanza.verses.forEach((verse: any) => {
        allVerses.push({ ...verse, speaker: stanza.title });
      });
    });

    // Finde den Zielvers
    const targetIndex = allVerses.findIndex(verse => 
      verse.text.trim() === targetText.trim() || targetText.includes(verse.text.trim())
    );

    if (targetIndex === -1) return '';

    // Extrahiere Kontext
    const start = Math.max(0, targetIndex - contextRange);
    const end = Math.min(allVerses.length, targetIndex + contextRange + 1);
    
    return allVerses.slice(start, end)
      .map(verse => `${verse.lineNumber}: ${verse.text}`)
      .join('\n');
  }

  // Extrahiert umgebende Strophen für besseren Kontext
  private static extractSurroundingStanzas(scene: any, targetText: string, contextRange: number): string {
    const targetStanzaIndex = scene.stanzas.findIndex((stanza: any) => {
      const stanzaText = stanza.verses.map((v: any) => v.text).join('\n');
      return targetText.includes(stanzaText) || stanzaText.includes(targetText);
    });

    if (targetStanzaIndex === -1) return '';

    const start = Math.max(0, targetStanzaIndex - contextRange);
    const end = Math.min(scene.stanzas.length, targetStanzaIndex + contextRange + 1);
    
    return scene.stanzas.slice(start, end)
      .map((stanza: any) => {
        const verses = stanza.verses.map((v: any) => `${v.lineNumber}: ${v.text}`).slice(0, 3);
        return `${stanza.title}\n${verses.join('\n')}${stanza.verses.length > 3 ? '\n...' : ''}`;
      })
      .join('\n\n');
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
            content: `Du bist ein Germanistik-Professor mit 30 Jahren Erfahrung in klassischer deutscher Literatur. Du analysierst Texte mit wissenschaftlicher Präzision und erklärst sie verständlich.

            🚨 ABSOLUTES VERBOT VON BULLSHIT-ANALYSEN:
            - NIEMALS den Wortlaut falsch interpretieren
            - NIEMALS Bedeutungen erfinden, die nicht im Text stehen
            - NIEMALS moderne Psychologie in historische Texte hineininterpretieren
            - NIEMALS oberflächliche "Feel-Good"-Erklärungen ohne Textbasis
            
            🎯 EXAKTE TEXTANALYSE-METHODIK:
            1. WÖRTLICHE BEDEUTUNG: Was steht GENAU da? Jedes Wort einzeln betrachten
            2. GRAMMATIK & SYNTAX: Präpositionen, Wortstellung, Satzbau korrekt interpretieren  
            3. SPRACHHISTORISCHER KONTEXT: Goethes Sprachgebrauch um 1780, nicht modern
            4. DRAMATISCHE SITUATION: Wer spricht zu wem? In welchem Zustand? Warum?
            5. HANDLUNGSKONTEXT: Was ist vorher passiert? Was folgt daraus?
            
            💡 QUALITÄTSKONTROLLE:
            - Überprüfe JEDE Aussage gegen den Originaltext
            - Bei unklaren Stellen: ehrlich zugeben statt erfinden
            - Literaturwissenschaftliche Präzision mit schülerverständlicher Sprache
            - Konkrete Textbelege für jede Interpretation
            
            📚 GOETHE-EXPERTISE:
            - Klassische Mythologie und deren Adaptation
            - Blankvers-Technik und dramatische Sprache  
            - Humanitätsideal der Weimarer Klassik
            - Charakterpsychologie basierend auf Textgrundlage
            
            QUALITÄTSKONTROLLE:
            - Überprüfe JEDE Interpretation auf Textgenauigkeit
            - Erkläre komplexe Satzkonstruktionen Schritt für Schritt
            - Berücksichtige poetische Sprache vs. normale Wortbedeutung
            - Nutze den bereitgestellten Kontext für präzise Situationsanalyse
            - KEINE Spekulationen oder freie Assoziationen
            
            PFLICHTSTRUKTUR (Antworte IMMER in diesem exakten JSON-Format):
            {
              "explanation": "WAS PASSIERT HIER? Erkläre die konkrete Situation: Was sagt/tut die Figur gerade und warum? Erkläre schwere Wörter sofort. Dann literaturwissenschaftliche Einordnung (4-5 Sätze)",
              "summary": "Prägnante Zusammenfassung: Was ist der Kern dieser Textpassage? (1-2 Sätze)",
              "background": "EIN zusammenhängender Hintergrund-Text: Vereine historischen und mythologischen Kontext zu EINER umfassenden Erklärung (4-5 Sätze)",
              "historicalContext": "ENTFÄLLT - wird in 'background' integriert",
              "mythologicalBackground": "ENTFÄLLT - wird in 'background' integriert", 
              "literaryDevices": [
                {
                  "name": "NUR TATSÄCHLICH VORHANDENES Stilmittel - wenn keines eindeutig identifizierbar ist, gib leere Liste [] zurück",
                  "example": "Exaktes wörtliches Zitat aus dem analysierten Text",
                  "effect": "Spezifische Wirkung auf Leser/Zuschauer und dramatische Funktion",
                  "category": "rhetoric|sound|structure|imagery|syntax"
                }
              ],
              "themes": ["Zentrales Thema mit Bezug zum Humanitätsideal", "Weiteres relevantes Motiv"],
              "characterAnalysis": "Charakterpsychologische Einordnung (falls Figurenrede)",
              "dramaticFunction": "Funktion für Handlungsfortschritt/Spannungsaufbau",
              "metricAnalysis": "Analyse von Blankvers, Rhythmus und metrischen Besonderheiten (falls relevant)"
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
  }): string {
    // Spezielle Behandlung für Charaktervergleiche
    if (request.isCharacterComparison && request.character1 && request.character2) {
      return this.buildCharacterComparisonPrompt(request.character1, request.character2);
    }

    const contextInfo = request.actNumber && request.sceneNumber 
      ? `${request.actNumber}. Aufzug, ${request.sceneNumber}. Szene` 
      : '';
    
    const contextType = request.context === 'verse' ? 'EINZELVERS' : 
                       request.context === 'stanza' ? 'STROPHE/TEXTABSCHNITT' : 'SZENE';

    const dramaticContext = this.getDramaticContext(request.actNumber, request.sceneNumber);

    // Erweiterte Kontextinformationen aufbauen
    let contextSection = '';
    if (request.textualContext || request.sceneContext || request.characterContext || request.surroundingText) {
      contextSection = '\n--- ERWEITERTER KONTEXT FÜR PRÄZISERE ANALYSE ---\n';
      
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

TEXTQUELLE: Goethes "Iphigenie auf Tauris" (${contextInfo})
ANALYSEEBENE: ${contextType}
DRAMATISCHER KONTEXT: ${dramaticContext}${contextSection}

TEXTPASSAGE ZU ANALYSIEREN:
"${request.text}"

PRÄZISIONS-ANALYSE FÜR GOETHE-TEXTE:
1. EXAKTE WORTANALYSE: "Heraus in eure Schatten" = hinein/hinaus IN die Schatten (nicht aus den Schatten)
2. SPRACHLICHE KONSTRUKTION: Alte deutsche Syntax und Wortstellung genau beachten
3. KONTEXT-INTEGRATION: Sprecher, Situation, emotionale Lage präzise erfassen
4. HANDLUNGSEBENE: Was tut/sagt die Figur konkret in diesem Moment?
5. TEXTUELLE BEWEISE: Nur das analysieren, was wortwörtlich im Text steht
6. GOETHE-SPEZIFISCH: Typische Konstruktionen und poetische Wendungen berücksichtigen

FEHLER-VERMEIDUNGS-PROTOKOLL:
⚠️ PRÄPOSITIONEN genau beachten: "in", "aus", "zu", "von" - jede hat präzise Bedeutung
⚠️ WORTSTELLUNG in poetischer Sprache richtig interpretieren
⚠️ KEINE modernen Bedeutungen auf alte Konstruktionen übertragen
⚠️ SYNTAX vor Semantik: Erst Grammatik verstehen, dann interpretieren
⚠️ KONTEXT ist KING: Wer spricht wo wann warum?

ANALYSE-STRUKTUR:
1. WÖRTLICHE BEDEUTUNG: Jedes Wort in seinem grammatischen Kontext
2. SPRECHERSITUATION: Wer sagt das? In welcher emotionalen Lage?
3. HANDLUNGSKONTEXT: Was passiert gerade in der Szene?
4. LITERARISCHE EINORDNUNG: Warum wählt Goethe diese Formulierung?
5. TEXTFUNKTION: Welche Rolle spielt diese Stelle für die Gesamthandlung?

QUALITÄTS-CHECKPOINTS:
✓ Stimmt die Wortbedeutung mit dem Original überein?
✓ Ist die grammatische Analyse korrekt?
✓ Entspricht die Interpretation dem Textkontext?
✓ Werden bereitgestellte Szenen-/Charakterinfos genutzt?
✓ Bleibt die Erklärung bei dem, was tatsächlich im Text steht?

Antworte ausschließlich im vorgegebenen JSON-Format.`;
  }

  private static getDramaticContext(actNumber?: number, sceneNumber?: number): string {
    const contexts: Record<string, string> = {
      '1-1': 'Exposition - Iphigenies Sehnsucht nach der Heimat, Einführung in ihre Situation',
      '1-2': 'König Thoas\' Werbung um Iphigenie, Konflikt zwischen Dankbarkeit und Sehnsucht',
      '1-3': 'Arkas als Vermittler, politische Spannungen im Königreich',
      '2-1': 'Orests und Pylades\' Ankunft, Beginn der Verwicklung',
      '2-2': 'Gefangennahme der Griechen, Iphigenies Dilemma',
      '3-1': 'Wiedererkennung zwischen Geschwistern, emotionaler Höhepunkt',
      '3-2': 'Orests Wahnsinn und Iphigenies Heilungsversuch',
      '3-3': 'Pylades\' Plan zur Flucht, moralisches Dilemma',
      '4-1': 'Iphigenies innerer Konflikt zwischen Wahrheit und List',
      '4-2': 'Konfrontation mit Thoas, Vertrauenskrise',
      '4-3': 'Orests Heilung durch Iphigenies reine Menschlichkeit',
      '4-4': 'Vorbereitung der Flucht, wachsende Spannung',
      '5-1': 'Thoas\' Zorn und Enttäuschung',
      '5-2': 'Arkas\' Loyalitätskonflikt',
      '5-3': 'Iphigenies Wahrheitsbekenntnis, moralische Läuterung',
      '5-4': 'Versöhnung und Lösung durch Humanität',
      '5-6': 'Thoas\' Großmut, harmonischer Schluss'
    };
    
    const key = `${actNumber}-${sceneNumber}`;
    return contexts[key] || 'Allgemeiner dramatischer Kontext von Goethes klassischem Drama';
  }

  static async answerCustomQuestion(selectedText: string, question: string, contextInfo?: {
    actNumber?: number;
    sceneNumber?: number;
  }): Promise<string> {
    try {
      // Erweiterten Kontext für Custom Questions generieren
      let additionalContext = '';
      
      if (contextInfo?.actNumber && contextInfo?.sceneNumber) {
        try {
          const scene = this.getSceneByNumbers(contextInfo.actNumber, contextInfo.sceneNumber);
          
          if (scene) {
            const speakers = [...new Set(scene.stanzas.map((s: any) => s.title))].filter(Boolean);
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
            content: `Du bist ein renommierter Germanistik-Professor mit Expertise in Goethes "Iphigenie auf Tauris". 
            Beantworte Fragen zum ausgewählten Text präzise und wissenschaftlich fundiert.
            
            ANTWORT-RICHTLINIEN:
            - Nutze den bereitgestellten Kontext für präzisere Antworten
            - Beziehe dich direkt auf den ausgewählten Text  
            - Verwende literaturwissenschaftliche Terminologie
            - Erkläre verständlich für Schüler/Studenten
            - Gib konkrete Textbelege und Beispiele
            - Berücksichtige den dramatischen Kontext und die Szeneninformation
            - Beziehe umgebende Handlung und Charakterentwicklung ein
            - Erkläre literarische Stilmittel und deren Wirkung
            
            EXPERTISE-SCHWERPUNKTE:
            - Weimarer Klassik und Goethes Humanitätsideal
            - Blankvers-Technik und dramatische Sprache
            - Antike Mythologie und deren moderne Adaptation
            - Charakterpsychologie und Figurenentwicklung`
          },
          {
            role: "user",
            content: `AUSGEWÄHLTER TEXT:
"${selectedText}"

FRAGE:
${question}${additionalContext}

Bitte beantworte die Frage präzise und wissenschaftlich fundiert, bezogen auf diesen Textausschnitt aus Goethes "Iphigenie auf Tauris". Nutze den bereitgestellten Kontext für eine bessere Einordnung.`
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

import type { ExplanationRequest, ExplanationResponse } from '../types';
import { CacheService } from './cacheService';
import { GlobalCacheService } from './globalCacheService';

// API endpoint for our backend
const API_BASE = import.meta.env.PROD ? '' : 'http://localhost:5173';
const CHAT_ENDPOINT = `${API_BASE}/api/chat`;

export class OpenAIService {
  private static async makeRequest(messages: any[], request: ExplanationRequest) {
    const response = await fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages,
        context: request.context,
        text: request.text,
        actNumber: request.actNumber,
        sceneNumber: request.sceneNumber
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  static async getExplanation(request: ExplanationRequest): Promise<ExplanationResponse> {
    try {
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

      const prompt = this.buildPrompt(request);
      
      const messages = [
        {
          role: "system" as const,
          content: `Du bist ein renommierter Germanistik-Professor mit Spezialisierung auf Goethes Klassik und insbesondere "Iphigenie auf Tauris". 
          
          DEINE EXPERTISE:
          - Tiefes Verständnis der Weimarer Klassik und Goethes dramatischer Sprache
          - Kenntnisse über antike Mythologie und deren Adaptation
          - Verständnis für Blankverstechnik und dramatische Strukturen
          - Kulturhistorischer Kontext der Entstehungszeit (1779-1786)
          
          ANTWORT-RICHTLINIEN:
          - Verwende präzise literaturwissenschaftliche Terminologie
          - Erkläre komplexe Konzepte verständlich für Schüler/Studenten
          - Beziehe immer den dramatischen Kontext mit ein
          - Berücksichtige Goethes Humanitätsideal und klassische Ästhetik
          - WICHTIG: Identifiziere 2-4 verschiedene Stilmittel pro Analyse
          - Variiere die Stilmittel stark - verwende NICHT immer dieselben
          - Analysiere sowohl offensichtliche als auch subtile sprachliche Mittel
          - Berücksichtige den Blankvers und metrische Besonderheiten
          
          PFLICHTSTRUKTUR (Antworte IMMER in diesem exakten JSON-Format):
          {
            "explanation": "Detaillierte literaturwissenschaftliche Analyse (3-4 Sätze)",
            "summary": "Prägnante Inhaltszusammenfassung (1-2 Sätze)",
            "background": "Kulturhistorischer/mythologischer Kontext (2-3 Sätze)",
            "literaryDevices": [
              {
                "name": "Exaktes Stilmittel (variiere zwischen: Metapher, Personifikation, Hyperbel, Chiasmus, Parallelismus, Anapher, Epipher, Klimax, Antiklimax, Oxymoron, Antithese, Synecdoche, Metonymie, Ironie, Rhetorische Frage, Exclamatio, Apostrophe, Ellipse, Polysyndeton, Asyndeton, Alliteration, Assonanz, Onomatopoesie, Enjambement, Zäsur, etc.)",
                "example": "Wörtliches Zitat aus dem Text",
                "effect": "Spezifische Wirkung auf Leser/Zuschauer und dramatische Funktion",
                "category": "rhetoric|sound|structure|imagery|syntax"
              }
            ],
            "themes": ["Zentrales Thema mit Bezug zum Humanitätsideal", "Weiteres relevantes Motiv"],
            "characterAnalysis": "Charakterpsychologische Einordnung (falls Figurenrede)",
            "dramaticFunction": "Funktion für Handlungsfortschritt/Spannungsaufbau"
          }`
        },
        {
          role: "user" as const,
          content: prompt
        }
      ];

      const apiResponse = await this.makeRequest(messages, request);

      const responseText = apiResponse.explanation;
      if (!responseText) {
        throw new Error('Keine Antwort von OpenAI erhalten');
      }

      // Try to parse JSON response, fallback to plain text if it fails
      let explanationResponse: ExplanationResponse;
      try {
        explanationResponse = JSON.parse(responseText) as ExplanationResponse;
      } catch {
        explanationResponse = {
          explanation: responseText,
          summary: "Zusammenfassung nicht verfügbar",
          background: "Hintergrundinformationen nicht verfügbar",
          literaryDevices: [],
          themes: [],
          characterAnalysis: "Charakteranalyse nicht verfügbar",
          dramaticFunction: "Dramatische Funktion nicht verfügbar"
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
        dramaticFunction: "Fehler bei der Funktionsanalyse"
      };
    }
  }

  private static buildPrompt(request: ExplanationRequest): string {
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

    return `ANALYSE-AUFTRAG: Literaturwissenschaftliche Textanalyse

TEXTQUELLE: Goethes "Iphigenie auf Tauris" (${contextInfo})
ANALYSEEBENE: ${contextType}
DRAMATISCHER KONTEXT: ${dramaticContext}

TEXTPASSAGE:
"${request.text}"

SPEZIFISCHE ANALYSE-SCHWERPUNKTE:
1. SPRACHLICHE GESTALTUNG: Blankvers-Technik, Syntax, Wortwahl, Rhythmus
2. FIGURENPSYCHOLOGIE: Charaktermotivation, innere Konflikte, Entwicklung
3. DRAMATURGISCHE FUNKTION: Handlungsfortschritt, Spannungsaufbau, Wendepunkte
4. KLASSISCHE POETIK: Einheit von Handlung/Zeit/Ort, Katharsis-Konzept
5. HUMANITÄTSIDEAL: Goethes Menschenbild, Aufklärung vs. Tradition
6. MYTHOLOGIE: Antike Quellen, moderne Adaptation, symbolische Bedeutung

WICHTIG: 
- Erkenne Blankverse und analysiere deren Wirkung
- Identifiziere Schlüsselwörter des klassischen Wortschatzes
- Beachte Iphigenies Rolle als "schöne Seele"
- Analysiere Konflikt zwischen Pflicht und Neigung

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

  static async answerCustomQuestion(selectedText: string, question: string): Promise<string> {
    try {
      const messages = [
        {
          role: "system" as const,
          content: `Du bist ein Germanistik-Professor mit Expertise in Goethes "Iphigenie auf Tauris". 
          Beantworte Fragen zum ausgewählten Text präzise und wissenschaftlich fundiert.
          
          ANTWORT-RICHTLINIEN:
          - Beziehe dich direkt auf den ausgewählten Text
          - Verwende literaturwissenschaftliche Terminologie
          - Erkläre verständlich für Schüler/Studenten
          - Gib konkrete Textbelege
          - Berücksichtige den dramatischen Kontext`
        },
        {
          role: "user" as const,
          content: `AUSGEWÄHLTER TEXT:
"${selectedText}"

FRAGE:
${question}

Bitte beantworte die Frage bezogen auf diesen Textausschnitt aus Goethes "Iphigenie auf Tauris".`
        }
      ];

      const response = await this.makeRequest(messages, {
        text: selectedText,
        context: 'verse' as const
      } as ExplanationRequest);

      return response.explanation || 'Entschuldigung, ich konnte keine Antwort generieren.';
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

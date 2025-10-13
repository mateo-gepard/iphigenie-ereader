import OpenAI from 'openai';
import type { ExplanationRequest, ExplanationResponse } from '../types';
import { CacheService } from './cacheService';

// Note: In a production app, you should use environment variables and a backend API
// to keep your API key secure. This is for demonstration purposes only.
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo - use backend in production
});

export class OpenAIService {
  static async getExplanation(request: ExplanationRequest): Promise<ExplanationResponse> {
    try {
      // Überprüfe Cache zuerst
      const cachedResult = CacheService.getCachedExplanation(
        request.text,
        request.context,
        request.actNumber,
        request.sceneNumber
      );

      if (cachedResult) {
        return { ...cachedResult, fromCache: true };
      }

      const prompt = this.buildPrompt(request);
      
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
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
            
            PFLICHTSTRUKTUR (Antworte IMMER in diesem exakten JSON-Format):
            {
              "explanation": "Detaillierte literaturwissenschaftliche Analyse (3-4 Sätze)",
              "summary": "Prägnante Inhaltszusammenfassung (1-2 Sätze)",
              "background": "Kulturhistorischer/mythologischer Kontext (2-3 Sätze)",
              "literaryDevices": [
                {
                  "name": "Stilmittel-Name (z.B. Metapher, Alliteration)",
                  "example": "Konkreter Textbeleg aus der Passage",
                  "effect": "Literarische Wirkung und Bedeutung",
                  "category": "rhetoric|sound|structure|imagery|syntax"
                }
              ],
              "themes": ["Zentrales Thema mit Bezug zum Humanitätsideal", "Weiteres relevantes Motiv"],
              "characterAnalysis": "Charakterpsychologische Einordnung (falls Figurenrede)",
              "dramaticFunction": "Funktion für Handlungsfortschritt/Spannungsaufbau"
            }`
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
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
          dramaticFunction: "Dramatische Funktion nicht verfügbar"
        };
      }

      // Cache die erfolgreiche Antwort
      CacheService.cacheExplanation(
        request.text,
        request.context,
        explanationResponse,
        request.actNumber,
        request.sceneNumber
      );

      return explanationResponse;
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
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
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
            role: "user",
            content: `AUSGEWÄHLTER TEXT:
"${selectedText}"

FRAGE:
${question}

Bitte beantworte die Frage bezogen auf diesen Textausschnitt aus Goethes "Iphigenie auf Tauris".`
          }
        ],
        max_tokens: 800,
        temperature: 0.7
      });

      return completion.choices[0]?.message?.content || 'Entschuldigung, ich konnte keine Antwort generieren.';
    } catch (error) {
      console.error('Fehler beim Beantworten der Frage:', error);
      throw new Error('Die Frage konnte nicht beantwortet werden.');
    }
  }
}

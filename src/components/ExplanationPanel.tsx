import { useState, useEffect } from 'react';
import type { ExplanationResponse } from '../types';
import type { Character } from '../data/characters';
import { OpenAIService } from '../services/openaiService';
import { getCharacterRelationship } from '../data/characters';
import './ExplanationPanel.css';

interface ExplanationPanelProps {
  selectedText: string;
  explanation: ExplanationResponse | null;
  isLoading: boolean;
  selectedCharacter: Character | null;
  characterForComparison: Character | null;
  onCharacterComparisonSelect: (character: Character) => void;
  areCharacterExplanationsVisible: boolean;
}

export function ExplanationPanel({ 
  selectedText, 
  explanation, 
  isLoading, 
  selectedCharacter, 
  characterForComparison, 
  onCharacterComparisonSelect,
  areCharacterExplanationsVisible
}: ExplanationPanelProps) {
  const [customQuestion, setCustomQuestion] = useState('');
  const [customAnswer, setCustomAnswer] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);

  // Reset custom question when new text is selected
  useEffect(() => {
    setCustomQuestion('');
    setCustomAnswer('');
  }, [selectedText]);

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim() || !selectedText) return;

    setIsAnswering(true);
    try {
      const answer = await OpenAIService.answerCustomQuestion(selectedText, customQuestion);
      setCustomAnswer(answer);
    } catch (error) {
      setCustomAnswer('Entschuldigung, die Frage konnte nicht beantwortet werden.');
    } finally {
      setIsAnswering(false);
    }
  };

  if (!selectedText && !selectedCharacter) {
    return (
      <div className="explanation-panel empty">
        <div className="empty-state">
          <h3>Willkommen zum interaktiven E-Reader</h3>
          <p>Klicken Sie auf einen Vers oder eine Strophe, um detaillierte Erklärungen, Zusammenfassungen und Hintergrundinformationen zu erhalten.</p>
          <div className="instructions">
            <h4>Anleitung:</h4>
            <ul>
              <li>🖱️ <strong>Einzelner Vers:</strong> Klicken Sie auf eine Zeile für spezifische Erklärungen</li>
              <li>📝 <strong>Strophe:</strong> Klicken Sie auf den Titel einer Strophe für Kontext und Zusammenfassung</li>
              <li>🎭 <strong>Charaktere:</strong> Klicken Sie auf hervorgehobene Namen für Charakterinformationen</li>
              <li>🤖 <strong>KI-gestützt:</strong> Alle Erklärungen werden von ChatGPT generiert</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="explanation-panel">
      {/* Character Information Section */}
      {selectedCharacter && areCharacterExplanationsVisible && (
        <div className="character-info-section">
          <div className="character-header">
            <h3>🎭 {selectedCharacter.name}</h3>
            {characterForComparison && characterForComparison.id !== selectedCharacter.id && (
              <button 
                className="compare-button"
                onClick={() => {
                  const relationship = getCharacterRelationship(selectedCharacter.id, characterForComparison.id);
                  setCustomAnswer(relationship);
                  setCustomQuestion(`Beziehung zwischen ${selectedCharacter.name} und ${characterForComparison.name}`);
                }}
              >
                Vergleich mit {characterForComparison.name}
              </button>
            )}
          </div>

          <div className="character-content">
            <div className="character-section">
              <h4>🎭 Rolle</h4>
              <p>{selectedCharacter.role}</p>
            </div>

            <div className="character-section">
              <h4>📖 Beschreibung</h4>
              <p>{selectedCharacter.description}</p>
            </div>

            <div className="character-section">
              <h4>🏛️ Mythologie</h4>
              <p>{selectedCharacter.mythology}</p>
            </div>

            <div className="character-section">
              <h4>✨ Charakterzüge</h4>
              <div className="traits-list">
                {selectedCharacter.keyTraits.map((trait, index) => (
                  <span key={index} className="trait-tag">{trait}</span>
                ))}
              </div>
            </div>

            <div className="character-actions">
              <button 
                className="comparison-select-button"
                onClick={() => onCharacterComparisonSelect(selectedCharacter)}
                disabled={characterForComparison?.id === selectedCharacter.id}
              >
                {characterForComparison?.id === selectedCharacter.id 
                  ? 'Bereits für Vergleich ausgewählt' 
                  : 'Für Vergleich auswählen'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Text Selection Section */}
      {selectedText && (
        <div className="selected-text">
          <h3>Ausgewählter Text:</h3>
          <blockquote>{selectedText}</blockquote>
        </div>
      )}

      {isLoading && (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Erklärung wird generiert...</p>
        </div>
      )}

      {explanation && !isLoading && (
        <div className="explanation-content">
          <div className="explanation-section">
            <h4>📚 Erklärung</h4>
            <p>{explanation.explanation}</p>
          </div>

          <div className="explanation-section">
            <h4>📋 Zusammenfassung</h4>
            <p>{explanation.summary}</p>
          </div>

          <div className="explanation-section">
            <h4>🏛️ Hintergrund</h4>
            <p>{explanation.background}</p>
          </div>

          {explanation.literaryDevices && explanation.literaryDevices.length > 0 && (
            <div className="explanation-section">
              <h4>✨ Stilmittel</h4>
              <ul className="tag-list">
                {explanation.literaryDevices.map((device, index) => (
                  <li key={index} className="tag literary-device">{device}</li>
                ))}
              </ul>
            </div>
          )}

          {explanation.themes && explanation.themes.length > 0 && (
            <div className="explanation-section">
              <h4>🎭 Themen</h4>
              <ul className="tag-list">
                {explanation.themes.map((theme, index) => (
                  <li key={index} className="tag theme">{theme}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Custom Question Section */}
      {selectedText && (explanation || !isLoading) && (
        <div className="custom-question-section">
          <h4>❓ Eigene Frage zum Text</h4>
          <form onSubmit={handleQuestionSubmit} className="question-form">
            <div className="input-group">
              <textarea
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder="Stellen Sie hier Ihre Frage zum ausgewählten Text..."
                className="question-input"
                rows={3}
                disabled={isAnswering}
              />
              <button
                type="submit"
                disabled={!customQuestion.trim() || isAnswering}
                className="ask-button"
              >
                {isAnswering ? (
                  <>
                    <span className="spinner"></span>
                    Analysiere...
                  </>
                ) : (
                  <>
                    🤖 Fragen
                  </>
                )}
              </button>
            </div>
          </form>

          {customAnswer && (
            <div className="custom-answer">
              <h5>💡 Antwort:</h5>
              <div className="answer-content">
                {customAnswer}
              </div>
              <button 
                onClick={() => {
                  setCustomAnswer('');
                  setCustomQuestion('');
                }}
                className="clear-button"
              >
                Neue Frage stellen
              </button>
            </div>
          )}
        </div>
      )}

      {!explanation && !isLoading && selectedText && (
        <div className="error-state">
          <h4>⚠️ Fehler</h4>
          <p>Die Erklärung konnte nicht geladen werden. Bitte versuchen Sie es erneut.</p>
        </div>
      )}
    </div>
  );
}

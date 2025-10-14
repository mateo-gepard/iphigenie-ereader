import { useState } from 'react';
import type { ExplanationResponse } from '../types';
import type { Character } from '../data/characters';
import { characters } from '../data/characters';
import { OpenAIService } from '../services/openaiService';
import { CacheService } from '../services/cacheService';
import './ExplanationPanel.css';

const getCategoryIcon = (category?: string): string => {
  switch (category) {
    case 'rhetoric': return '🎭';
    case 'sound': return '🎵';
    case 'structure': return '🏗️';
    case 'imagery': return '🖼️';
    case 'syntax': return '📝';
    default: return '✨';
  }
};

interface ExplanationPanelProps {
  selectedText: string;
  explanation: ExplanationResponse | null;
  isLoading: boolean;
  selectedCharacter: Character | null;
  characterForComparison: Character | null;
  onCharacterComparisonSelect: (character: Character) => void;
  areCharacterExplanationsVisible: boolean;
  canRegenerate: boolean;
  onRegenerate: () => Promise<void>;
  onGenerateComparison?: () => void;
  isGeneratingComparison?: boolean;
  areCharactersVisible?: boolean;
  isCharacterHighlightingEnabled?: boolean;
  onToggleCharacters?: () => void;
  onToggleHighlighting?: () => void;
}

export function ExplanationPanel({ 
  selectedText, 
  explanation, 
  isLoading, 
  selectedCharacter, 
  characterForComparison, 
  onCharacterComparisonSelect,
  areCharacterExplanationsVisible,
  canRegenerate,
  onRegenerate,
  onGenerateComparison,
  isGeneratingComparison,
  areCharactersVisible,
  isCharacterHighlightingEnabled,
  onToggleCharacters,
  onToggleHighlighting
}: ExplanationPanelProps) {
  const [customQuestion, setCustomQuestion] = useState('');
  const [customAnswer, setCustomAnswer] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);
  const [showCacheStats, setShowCacheStats] = useState(false);
  const [activeTab, setActiveTab] = useState<'question' | 'explanation' | 'summary' | 'characters'>('explanation');
  const [expandedDevice, setExpandedDevice] = useState<number | null>(null);

  const handleCustomQuestion = async () => {
    if (!customQuestion.trim()) return;
    
    setIsAnswering(true);
    try {
      const response = await OpenAIService.answerCustomQuestion(selectedText || '', customQuestion);
      setCustomAnswer(response);
    } catch (error) {
      console.error('Fehler beim Stellen der Frage:', error);
      setCustomAnswer('Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsAnswering(false);
    }
  };

  // Früher Return für Willkommensbildschirm wenn nichts ausgewählt ist
  if (!selectedText && !explanation && !selectedCharacter && !isLoading && !customAnswer) {
    return (
      <div className="explanation-panel">
        <div className="welcome-screen">
          <div className="welcome-content">
            <h2>Willkommen zum interaktiven Iphigenie-Reader</h2>
            <p>Entdecken Sie Goethes Meisterwerk mit KI-unterstützter Analyse</p>
            
            <div className="instructions">
              <h4>Anleitung:</h4>
              <ul>
                <li><strong>Einzelner Vers:</strong> Klicken Sie auf eine Zeile für spezifische Erklärungen</li>
                <li><strong>Strophe:</strong> Klicken Sie auf den Titel einer Strophe für Kontext und Zusammenfassung</li>
                <li><strong>Charaktere:</strong> Klicken Sie auf hervorgehobene Namen für Charakterinformationen</li>
                <li><strong>KI-gestützt:</strong> Alle Erklärungen werden von ChatGPT generiert</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="explanation-panel">
      <div className="panel-header">
        <div className="header-left">
          <h3>Analyse</h3>
          {canRegenerate && activeTab === 'explanation' && (
            <button 
              onClick={onRegenerate}
              className="regenerate-btn"
              title="Neue Erklärung generieren"
            >
              Regenerieren
            </button>
          )}
        </div>
        <div className="header-right">
          <button 
            onClick={() => setShowCacheStats(!showCacheStats)}
            className="cache-btn"
            title="Cache-Statistiken anzeigen"
          >
            Stats
          </button>
        </div>
      </div>

      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'question' ? 'active' : ''}`}
          onClick={() => setActiveTab('question')}
        >
          Frage
        </button>
        <button 
          className={`tab-btn ${activeTab === 'explanation' ? 'active' : ''}`}
          onClick={() => setActiveTab('explanation')}
        >
          Erklärung
        </button>
        <button 
          className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          Stilmittel
        </button>
        <button 
          className={`tab-btn ${activeTab === 'characters' ? 'active' : ''}`}
          onClick={() => setActiveTab('characters')}
        >
          Charaktere
        </button>
      </div>

      <div className="tab-content">
        {/* Frage Tab */}
        {activeTab === 'question' && (
          <div className="question-tab">
            <div className="custom-question-section">
              <h4>Stellen Sie eine Frage zum Text</h4>
              <textarea
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder="Stellen Sie hier Ihre Frage zu Iphigenies Dilema, den Charakteren oder dem Text..."
                rows={3}
                className="question-input"
              />
              <button
                onClick={handleCustomQuestion}
                disabled={!customQuestion.trim() || isAnswering}
                className="ask-button"
              >
                {isAnswering ? 'Wird bearbeitet...' : 'Frage stellen'}
              </button>

              {isAnswering && (
                <div className="loading">
                  <div className="loading-spinner"></div>
                  <p>Analyse läuft...</p>
                  <small>Bitte einen Moment Geduld</small>
                </div>
              )}

              {customAnswer && (
                <div className="custom-answer">
                  <h4>Antwort:</h4>
                  <div className="answer-content">
                    {customAnswer.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Erklärung Tab */}
        {activeTab === 'explanation' && (
          <div className="explanation-tab">
            {selectedText && (
              <div className="selected-text">
                <h3>Ausgewählter Text:</h3>
                <blockquote>{selectedText}</blockquote>
              </div>
            )}

            {isLoading && (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Literaturanalyse wird vorbereitet...</p>
                <small>Bitte einen Moment Geduld</small>
              </div>
            )}

            {explanation && (
              <div className="explanation">
                <h3>Erklärung:</h3>
                <div className="explanation-content">
                  {explanation.explanation.split('\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Zusammenfassung Tab */}
        {activeTab === 'summary' && (
          <div className="summary-tab">
            <div className="summary-content">
              <h3>Stilmittel & Analyse</h3>
              
              {explanation && (
                <div className="text-analysis">
                  <div className="analysis-section">
                    <h4>📝 Textanalyse</h4>
                    <p>{explanation.explanation}</p>
                  </div>
                  
                  {explanation.literaryDevices && explanation.literaryDevices.length > 0 && (
                    <div className="analysis-section">
                      <h4>Stilmittel</h4>
                      <p className="devices-hint">Klicken Sie auf ein Stilmittel für Details:</p>
                      <div className="devices-grid">
                        {explanation.literaryDevices.map((device: any, index: number) => (
                          <div 
                            key={index} 
                            className={`device-card ${expandedDevice === index ? 'expanded' : 'compact'}`}
                            onClick={() => setExpandedDevice(expandedDevice === index ? null : index)}
                          >
                            <div className="device-header">
                              <span className="device-icon">{getCategoryIcon(device.category)}</span>
                              <strong>{device.name}</strong>
                            </div>
                            
                            {expandedDevice === index && (
                              <div className="device-details">
                                <p className="device-description">{device.effect || device.description}</p>
                                <div className="device-example">
                                  <strong>Beispiel:</strong> <em>"{device.example}"</em>
                                </div>
                              </div>
                            )}
                            
                            {expandedDevice !== index && (
                              <div className="click-hint">Klicken für Details</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {!explanation && (
                <p>Wählen Sie einen Text aus, um eine detaillierte Zusammenfassung und Stilmittel-Analyse zu erhalten.</p>
              )}
            </div>
          </div>
        )}

        {/* Personen Tab */}
        {activeTab === 'characters' && (
          <div className="characters-tab">
            <div className="character-controls">
              <button 
                onClick={onToggleCharacters}
                className={`character-toggle-btn ${areCharactersVisible ? 'active' : ''}`}
              >
                {areCharactersVisible ? 'Charaktere ausblenden' : 'Charaktere anzeigen'}
              </button>
              
              <button 
                onClick={onToggleHighlighting}
                className={`character-toggle-btn ${isCharacterHighlightingEnabled ? 'active' : ''}`}
              >
                {isCharacterHighlightingEnabled ? 'Hervorhebung aus' : 'Hervorhebung an'}
              </button>
            </div>

            {/* Character Information Section */}
            {selectedCharacter && areCharacterExplanationsVisible && (
              <div className="character-info-section">
                <div className="character-header">
                  <h3>{selectedCharacter.name}</h3>
                  {characterForComparison && characterForComparison.id !== selectedCharacter.id && (
                    <button 
                      className="compare-button"
                      onClick={onGenerateComparison}
                      disabled={isGeneratingComparison}
                    >
                      {isGeneratingComparison ? 'Wird generiert...' : `Vergleich mit ${characterForComparison.name}`}
                    </button>
                  )}
                </div>
                
                <div className="character-details">
                  <div className="character-main-info">
                    <div className="character-section">
                      <h4>Rolle</h4>
                      <p>{selectedCharacter.role}</p>
                    </div>
                    
                    <div className="character-section">
                      <h4>Beschreibung</h4>
                      <p>{selectedCharacter.description}</p>  
                    </div>

                    <div className="character-section">
                      <h4>Bedeutung</h4>
                      <p>{selectedCharacter.mythology}</p>
                    </div>
                  </div>

                  <div className="character-comparison-section">
                    <h4>Beziehungen zu anderen Charakteren</h4>
                    <div className="character-buttons">
                      {characters
                        .filter(char => char.id !== selectedCharacter.id)
                        .map(char => (
                          <button
                            key={char.id}
                            className={`character-select-btn ${characterForComparison?.id === char.id ? 'selected' : ''}`}
                            onClick={() => onCharacterComparisonSelect(char)}
                          >
                            {char.name}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Character Generation Loading */}
            {isGeneratingComparison && (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Charakterbeziehung wird analysiert...</p>
                <small>Bitte einen Moment Geduld</small>
              </div>
            )}

            {/* Character Comparison Result */}
            {customAnswer && customQuestion.includes('Beziehung zwischen') && (
              <div className="character-comparison-result">
                <h4>{customQuestion}</h4>
                <div className="comparison-content">
                  {customAnswer.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {!selectedCharacter && (
              <div className="no-character-selected">
                <p>Klicken Sie auf einen Charakternamen im Text, um Informationen zu erhalten.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Cache Statistics */}
      {showCacheStats && (
        <div className="cache-stats">
          <h4>Cache-Statistiken</h4>
          {(() => {
            return (
              <div>
                <div className="stats-section">
                  <h5>Cache-Verwaltung</h5>
                  <p>Cache-Statistiken werden hier angezeigt</p>
                  <button 
                    className="clear-cache-btn"
                    onClick={() => {
                      if (CacheService.clearCache) {
                        CacheService.clearCache();
                      }
                      setShowCacheStats(false);
                    }}
                  >
                    Cache leeren
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}

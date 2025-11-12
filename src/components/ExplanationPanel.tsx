import { useState, useEffect } from 'react';
import type { ExplanationResponse } from '../types';
import type { Character } from '../data/characters';
import { characters } from '../data/characters';
import { OpenAIService } from '../services/openaiService';
import { CacheService } from '../services/cacheService';
import { GlobalCacheService } from '../services/globalCacheService';
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

  // Automatisch zum Erklärung-Tab wechseln, wenn eine neue Erklärung generiert wird
  useEffect(() => {
    if (explanation && !isLoading) {
      setActiveTab('explanation');
    }
  }, [explanation, isLoading]);

  const handleCustomQuestion = async () => {
    if (!customQuestion.trim()) return;
    
    setIsAnswering(true);
    try {
      // Wenn kein Text ausgewählt ist, verwenden wir eine allgemeine Frage-Funktion
      const response = selectedText ? 
        await OpenAIService.answerCustomQuestion(selectedText, customQuestion) :
        await OpenAIService.answerGeneralQuestion(customQuestion);
      setCustomAnswer(response);
    } catch (error) {
      console.error('Fehler beim Stellen der Frage:', error);
      setCustomAnswer('Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsAnswering(false);
    }
  };

  // Panel ist jetzt immer verfügbar, auch für allgemeine Fragen

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
              <h4>Stellen Sie eine Frage {selectedText ? 'zum ausgewählten Text' : 'zum Werk'}</h4>
              {!selectedText && (
                <div className="general-question-info">
                  <p>💡 Sie können allgemeine Fragen zu "Iphigenie auf Tauris" stellen, ohne Text auszuwählen:</p>
                  <ul>
                    <li>Fragen zur Handlung und Struktur</li>
                    <li>Charakteranalysen und Beziehungen</li>
                    <li>Themen und Motive des Werks</li>
                    <li>Historischer und mythologischer Kontext</li>
                    <li>Goethes Schreibstil und Sprache</li>
                  </ul>
                </div>
              )}
              <textarea
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder={selectedText ? 
                  "Stellen Sie hier Ihre Frage zum ausgewählten Text..." : 
                  "Fragen Sie z.B.: 'Was ist das zentrale Thema von Iphigenie auf Tauris?' oder 'Wie entwickelt sich Iphigenies Charakter im Verlauf des Dramas?'"
                }
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
                  <h4>{selectedText ? 'Antwort zum ausgewählten Text:' : 'Antwort zur allgemeinen Frage:'}</h4>
                  <div className="answer-content">
                    {customAnswer.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  {!selectedText && (
                    <div className="general-answer-hint">
                      <small>💡 Sie können auch spezifische Textabschnitte auswählen, um detailliertere Analysen zu erhalten.</small>
                    </div>
                  )}
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
                <h3>
                  {selectedText.startsWith('Charaktervergleich zwischen') ? 
                    '🎭 Charaktervergleich:' : 
                    'Ausgewählter Text:'
                  }
                </h3>
                <blockquote>{selectedText}</blockquote>
              </div>
            )}

            {isLoading && (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>
                  {isGeneratingComparison ? 
                    '🔄 Charaktervergleich wird generiert...' : 
                    'Literaturanalyse wird vorbereitet...'
                  }
                </p>
                <small>
                  {isGeneratingComparison ? 
                    'Charakterbeziehungen werden analysiert' : 
                    'Bitte einen Moment Geduld'
                  }
                </small>
              </div>
            )}

            {explanation && (
              <div className="explanation">
                <h3>
                  {selectedText?.startsWith('Charaktervergleich zwischen') ? 
                    '🎭 Vergleichsanalyse:' : 
                    'Erklärung:'
                  }
                </h3>
                <div className="explanation-content">
                  {explanation.explanation.split('\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Hintergrundtext wenn nichts ausgewählt ist */}
            {!selectedText && !isLoading && !explanation && !customAnswer && (
              <div className="explanation-background">
                <div className="background-content">
                  <div className="background-header">
                    <h3>📖 Literarische Analyse mit KI</h3>
                    <p className="subtitle">Entdecken Sie die Tiefe von Goethes "Iphigenie auf Tauris"</p>
                  </div>

                  <div className="analysis-features">
                    <div className="feature-section">
                      <h4>🎯 Verse analysieren</h4>
                      <p>Klicken Sie auf einzelne Verszeilen, um detaillierte Erklärungen zu erhalten:</p>
                      <ul>
                        <li>Literarische Stilmittel und deren Wirkung</li>
                        <li>Historischer und mythologischer Kontext</li>
                        <li>Sprachliche Besonderheiten und Wortwahl</li>
                        <li>Bezug zur Gesamthandlung</li>
                      </ul>
                    </div>

                    <div className="feature-section">
                      <h4>📝 Strophen verstehen</h4>
                      <p>Klicken Sie auf Strophen-Titel für umfassende Analyse:</p>
                      <ul>
                        <li>Zusammenfassung des Inhalts</li>
                        <li>Dramaturgische Funktion</li>
                        <li>Charakterentwicklung</li>
                        <li>Thematische Schwerpunkte</li>
                      </ul>
                    </div>

                    <div className="feature-section">
                      <h4>🔍 Multi-Selection</h4>
                      <p>Halten Sie <strong>Ctrl/Cmd</strong> gedrückt um mehrere Verse auszuwählen:</p>
                      <ul>
                        <li>Vergleichende Analyse</li>
                        <li>Thematische Verbindungen</li>
                        <li>Stilistische Entwicklung</li>
                        <li>Dramatische Spannungsbögen</li>
                      </ul>
                    </div>

                    <div className="feature-section">
                      <h4>🎭 Charaktere erforschen</h4>
                      <p>Klicken Sie auf hervorgehobene Namen im Text:</p>
                      <ul>
                        <li>Charakterbeschreibungen und Motivation</li>
                        <li>Mythologische Hintergründe</li>
                        <li>Beziehungen zwischen Figuren</li>
                        <li>Entwicklung im Handlungsverlauf</li>
                      </ul>
                    </div>
                  </div>

                  <div className="getting-started">
                    <div className="start-tip">
                      <h4>💡 Schnellstart</h4>
                      <p>Beginnen Sie mit dem ersten Aufzug und klicken Sie auf Iphigenies Monolog, um die KI-Analyse zu erleben!</p>
                    </div>
                  </div>
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
                  
                  <div className="analysis-section">
                    <h4>🎨 Stilmittel</h4>
                    {explanation.literaryDevices && explanation.literaryDevices.length > 0 ? (
                      <>
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
                      </>
                    ) : (
                      <div className="no-devices">
                        <p className="no-devices-message">
                          ✨ In diesem Textabschnitt wurden keine eindeutigen Stilmittel identifiziert.
                        </p>
                        <p className="no-devices-explanation">
                          Das ist vollkommen normal - nicht jeder Vers enthält spezifische rhetorische Figuren. 
                          Die sprachliche Schönheit liegt oft in der natürlichen, unverzierten Ausdrucksweise.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {explanation.metricAnalysis && (
                    <div className="analysis-section">
                      <h4>📏 Metrische Analyse</h4>
                      <p>{explanation.metricAnalysis}</p>
                    </div>
                  )}
                  
                  {explanation.historicalContext && (
                    <div className="analysis-section">
                      <h4>🏛️ Historischer Kontext</h4>
                      <p>{explanation.historicalContext}</p>
                    </div>
                  )}
                  
                  {explanation.mythologicalBackground && (
                    <div className="analysis-section">
                      <h4>⚡ Mythologischer Hintergrund</h4>
                      <p>{explanation.mythologicalBackground}</p>
                    </div>
                  )}
                  
                  {explanation.background && (
                    <div className="analysis-section">
                      <h4>🌟 Weitere Hintergründe</h4>
                      <p>{explanation.background}</p>
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
          <h4>📊 Cache-Statistiken</h4>
          {(() => {
            const [stats, setStats] = useState<any>(null);
            const [loading, setLoading] = useState(true);
            
            useEffect(() => {
              const loadStats = async () => {
                try {
                  const globalStats = await GlobalCacheService.getGlobalCacheStats();
                  const localStats = CacheService.getCacheStats();
                  setStats({ global: globalStats, local: localStats });
                } catch (error) {
                  console.error('Stats load error:', error);
                } finally {
                  setLoading(false);
                }
              };
              loadStats();
            }, []);

            if (loading) {
              return (
                <div className="loading">
                  <div className="loading-spinner-small"></div>
                  <p>Statistiken laden...</p>
                </div>
              );
            }

            return (
              <div>
                <div className="stats-section">
                  <h5>🌐 Globaler Cache</h5>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <strong>{stats?.global?.totalEntries || 0}</strong>
                      <span>Einträge</span>
                    </div>
                    <div className="stat-item">
                      <strong>{stats?.global?.recentEntries || 0}</strong>
                      <span>Diese Woche</span>
                    </div>
                    <div className="stat-item">
                      <strong>{stats?.global?.cacheSize || '0 Bytes'}</strong>
                      <span>Größe</span>
                    </div>
                  </div>
                  
                  {stats?.global?.topUsedEntries?.length > 0 && (
                    <div className="top-entries">
                      <h6>🔥 Meistgenutzt:</h6>
                      {stats.global.topUsedEntries.map((entry: any, index: number) => (
                        <div key={index} className="top-entry">
                          <span className="context-tag">{entry.context}</span>
                          <span className="usage-count">{entry.usageCount}× verwendet</span>
                          <span className="age">{entry.age} alt</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="stats-section">
                  <h5>📱 Lokaler Cache</h5>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <strong>{stats?.local?.totalEntries || 0}</strong>
                      <span>Einträge</span>
                    </div>
                    <div className="stat-item">
                      <strong>{stats?.local?.cacheSize || '0 Bytes'}</strong>
                      <span>Größe</span>
                    </div>
                  </div>
                </div>

                <div className="cache-actions">
                  <button 
                    className="clear-cache-btn"
                    onClick={async () => {
                      GlobalCacheService.clearCache();
                      CacheService.clearCache();
                      setShowCacheStats(false);
                      // Statistiken neu laden
                      setTimeout(() => setShowCacheStats(true), 100);
                    }}
                  >
                    🗑️ Alle Caches leeren
                  </button>
                  <button 
                    className="cleanup-cache-btn"
                    onClick={async () => {
                      const deleted = await GlobalCacheService.cleanupOldEntries();
                      alert(`${deleted} alte Einträge gelöscht`);
                      // Statistiken neu laden
                      setShowCacheStats(false);
                      setTimeout(() => setShowCacheStats(true), 100);
                    }}
                  >
                    🧹 Alte Einträge bereinigen
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

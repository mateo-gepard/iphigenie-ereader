import { useState } from 'react';
import { EReader } from './components/EReader';
import { ExplanationPanel } from './components/ExplanationPanel';
import { iphigenieText } from './data/iphigenieText';
import type { ExplanationResponse } from './types';
import type { Character } from './data/characters';
import { OpenAIService } from './services/openaiService';
import './App.css';

function App() {
  const [selectedText, setSelectedText] = useState<string>('');
  const [explanation, setExplanation] = useState<ExplanationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExplanationVisible, setIsExplanationVisible] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [characterForComparison, setCharacterForComparison] = useState<Character | null>(null);
  const [areCharactersVisible, setAreCharactersVisible] = useState(true);
  const [isCharacterHighlightingEnabled, setIsCharacterHighlightingEnabled] = useState(true);
  const [areCharacterExplanationsVisible, setAreCharacterExplanationsVisible] = useState(true);
  const [canRegenerate, setCanRegenerate] = useState(false);
  const [currentContext, setCurrentContext] = useState<{
    context: 'verse' | 'stanza' | 'scene';
    actNumber?: number;
    sceneNumber?: number;
  } | null>(null);
  const [isGeneratingComparison, setIsGeneratingComparison] = useState(false);

  const handleTextSelection = (
    text: string, 
    explanation: ExplanationResponse | null, 
    loading: boolean,
    context?: {
      type: 'verse' | 'stanza' | 'scene';
      actNumber?: number;
      sceneNumber?: number;
    }
  ) => {
    setSelectedText(text);
    setExplanation(explanation);
    setIsLoading(loading);
    
    // Speichere Kontext für Regenerierung
    if (context) {
      setCurrentContext({
        context: context.type,
        actNumber: context.actNumber,
        sceneNumber: context.sceneNumber
      });
    }
    
    // Zeige Regenerierung-Option nur für Erklärungen (nicht für Loading-States)
    setCanRegenerate(!!explanation && !loading);
    
    // Automatisch Erklärungen anzeigen wenn neuer Text ausgewählt wird
    if (explanation && !isExplanationVisible) {
      setIsExplanationVisible(true);
    }
  };

  const toggleExplanation = () => {
    setIsExplanationVisible(!isExplanationVisible);
  };

  const handleCharacterSelection = (character: Character) => {
    setSelectedCharacter(character);
    // Automatisch Panel anzeigen wenn Charakter ausgewählt wird
    if (!isExplanationVisible) {
      setIsExplanationVisible(true);
    }
  };

  const handleCharacterComparison = (character: Character) => {
    if (characterForComparison?.id === character.id) {
      setCharacterForComparison(null);
    } else {
      setCharacterForComparison(character);
    }
  };

  const toggleCharacterVisibility = () => {
    setAreCharactersVisible(!areCharactersVisible);
  };

  const toggleCharacterHighlighting = () => {
    setIsCharacterHighlightingEnabled(!isCharacterHighlightingEnabled);
  };

  const toggleExplanationVisibility = () => {
    setIsExplanationVisible(!isExplanationVisible);
  };

  const toggleCharacterExplanationsVisibility = () => {
    setAreCharacterExplanationsVisible(!areCharacterExplanationsVisible);
  };

  const handleRegenerateExplanation = async () => {
    if (!selectedText || !currentContext) return;
    
    setIsLoading(true);
    setCanRegenerate(false);
    
    try {
      const explanation = await OpenAIService.getExplanation({
        text: selectedText,
        context: currentContext.context,
        actNumber: currentContext.actNumber,
        sceneNumber: currentContext.sceneNumber,
        forceRegenerate: true
      });
      
      setExplanation(explanation);
      setCanRegenerate(true);
    } catch (error) {
      console.error('Fehler bei der Regenerierung:', error);
      setCanRegenerate(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateComparison = async () => {
    if (!selectedCharacter || !characterForComparison) return;
    
    setIsGeneratingComparison(true);
    setIsLoading(true);
    setSelectedText('');
    setExplanation(null);
    
    try {
      // Erstelle einen Vergleichstext für die API
      const comparisonText = `Charaktervergleich zwischen ${selectedCharacter.name} und ${characterForComparison.name}`;
      
      const explanation = await OpenAIService.getExplanation({
        text: comparisonText,
        context: 'scene',
        forceRegenerate: true, // Immer neue Vergleiche generieren
        isCharacterComparison: true,
        character1: selectedCharacter,
        character2: characterForComparison
      });
      
      setSelectedText(comparisonText);
      setExplanation(explanation);
      setCanRegenerate(true);
      
      // Panel automatisch anzeigen
      if (!isExplanationVisible) {
        setIsExplanationVisible(true);
      }
    } catch (error) {
      console.error('Fehler beim Generieren des Vergleichs:', error);
    } finally {
      setIsLoading(false);
      setIsGeneratingComparison(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Iphigenie auf Tauris</h1>
        <p className="subtitle">Interaktiver E-Reader - Johann Wolfgang von Goethe</p>
        
        <div className="toggle-buttons">
          <button
            className="toggle-btn"
            onClick={toggleExplanationVisibility}
            title={isExplanationVisible ? 'Erklärung ausblenden' : 'Erklärung einblenden'}
          >
            {isExplanationVisible ? '📖' : '📕'}
          </button>
          
          <button
            className="toggle-btn"
            onClick={toggleCharacterVisibility}
            title={areCharactersVisible ? 'Charaktere ausblenden' : 'Charaktere einblenden'}
          >
            {areCharactersVisible ? '👥' : '👤'}
          </button>
          
          <button
            className="toggle-btn"
            onClick={toggleCharacterHighlighting}
            title={isCharacterHighlightingEnabled ? 'Hervorhebung deaktivieren' : 'Hervorhebung aktivieren'}
          >
            {isCharacterHighlightingEnabled ? '🎨' : '⚫'}
          </button>
          
          <button
            className="toggle-btn"
            onClick={toggleCharacterExplanationsVisibility}
            title={areCharacterExplanationsVisible ? 'Charaktererklärungen ausblenden' : 'Charaktererklärungen einblenden'}
          >
            {areCharacterExplanationsVisible ? '📝' : '📋'}
          </button>
          
          {selectedCharacter && characterForComparison && (
            <button
              className="compare-btn"
              onClick={handleGenerateComparison}
              disabled={isGeneratingComparison}
              title={`Vergleich zwischen ${selectedCharacter.name} und ${characterForComparison.name} generieren`}
            >
              {isGeneratingComparison ? '⏳' : '⚖️'} Vergleichen
            </button>
          )}
        </div>
      </header>
      
      <main className={`app-main ${!isExplanationVisible ? 'explanation-hidden' : ''}`}>
        <div className="reader-container">
          <EReader 
            text={iphigenieText} 
            onTextSelection={handleTextSelection}
            onCharacterSelection={handleCharacterSelection}
            onCharacterComparison={handleCharacterComparison}
            characterForComparison={characterForComparison}
            areCharactersVisible={areCharactersVisible}
            isCharacterHighlightingEnabled={isCharacterHighlightingEnabled}
          />
        </div>
        
        {isExplanationVisible && (
          <div className="explanation-container">
            <ExplanationPanel 
              selectedText={selectedText}
              explanation={explanation}
              isLoading={isLoading}
              selectedCharacter={selectedCharacter}
              characterForComparison={characterForComparison}
              onCharacterComparisonSelect={handleCharacterComparison}
              areCharacterExplanationsVisible={areCharacterExplanationsVisible}
              canRegenerate={canRegenerate}
              onRegenerate={handleRegenerateExplanation}
            />
          </div>
        )}
        
        <button 
          className="explanation-toggle-btn"
          onClick={toggleExplanation}
          aria-label={isExplanationVisible ? 'Erklärungen verstecken' : 'Erklärungen anzeigen'}
          title={isExplanationVisible ? 'Erklärungen verstecken' : 'Erklärungen anzeigen'}
        >
          {isExplanationVisible ? (
            <>
              <span className="toggle-icon">❌</span>
              <span className="toggle-text">Erklärungen verstecken</span>
            </>
          ) : (
            <>
              <span className="toggle-icon">�</span>
              <span className="toggle-text">Erklärungen anzeigen</span>
            </>
          )}
        </button>
      </main>
    </div>
  );
}

export default App;

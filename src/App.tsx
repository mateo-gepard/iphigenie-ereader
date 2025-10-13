import { useState } from 'react';
import { EReader } from './components/EReader';
import { ExplanationPanel } from './components/ExplanationPanel';
import { iphigenieText } from './data/iphigenieText';
import type { ExplanationResponse } from './types';
import type { Character } from './data/characters';
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

  const handleTextSelection = (text: string, explanation: ExplanationResponse | null, loading: boolean) => {
    setSelectedText(text);
    setExplanation(explanation);
    setIsLoading(loading);
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

import { useState } from 'react';
import { EReader } from './components/EReader';
import { ExplanationPanel } from './components/ExplanationPanel';
import { iphigenieText } from './data/iphigenieText';
import type { ExplanationResponse } from './types';
import './App.css';

function App() {
  const [selectedText, setSelectedText] = useState<string>('');
  const [explanation, setExplanation] = useState<ExplanationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExplanationVisible, setIsExplanationVisible] = useState(true);

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

  return (
    <div className="app">
      <header className="app-header">
        <h1>Iphigenie auf Tauris</h1>
        <p className="subtitle">Interaktiver E-Reader - Johann Wolfgang von Goethe</p>
      </header>
      
      <main className={`app-main ${!isExplanationVisible ? 'explanation-hidden' : ''}`}>
        <div className="reader-container">
          <EReader 
            text={iphigenieText} 
            onTextSelection={handleTextSelection}
          />
        </div>
        
        {isExplanationVisible && (
          <div className="explanation-container">
            <ExplanationPanel 
              selectedText={selectedText}
              explanation={explanation}
              isLoading={isLoading}
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

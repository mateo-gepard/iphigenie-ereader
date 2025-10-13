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

  const handleTextSelection = (text: string, explanation: ExplanationResponse | null, loading: boolean) => {
    setSelectedText(text);
    setExplanation(explanation);
    setIsLoading(loading);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Iphigenie auf Tauris</h1>
        <p className="subtitle">Interaktiver E-Reader - Johann Wolfgang von Goethe</p>
      </header>
      
      <main className="app-main">
        <div className="reader-container">
          <EReader 
            text={iphigenieText} 
            onTextSelection={handleTextSelection}
          />
        </div>
        
        <div className="explanation-container">
          <ExplanationPanel 
            selectedText={selectedText}
            explanation={explanation}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

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

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [characterForComparison, setCharacterForComparison] = useState<Character | null>(null);
  const [areCharactersVisible, setAreCharactersVisible] = useState(true);
  const [isCharacterHighlightingEnabled, setIsCharacterHighlightingEnabled] = useState(true);
  const [areCharacterExplanationsVisible] = useState(true);
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
    
  };

  const handleCharacterSelection = (character: Character) => {
    setSelectedCharacter(character);
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
      </header>
      
      <main className="app-main">
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
            onGenerateComparison={handleGenerateComparison}
            isGeneratingComparison={isGeneratingComparison}
            areCharactersVisible={areCharactersVisible}
            isCharacterHighlightingEnabled={isCharacterHighlightingEnabled}
            onToggleCharacters={toggleCharacterVisibility}
            onToggleHighlighting={toggleCharacterHighlighting}
          />
        </div>

      </main>
    </div>
  );
}

export default App;

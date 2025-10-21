import { useState, useEffect } from 'react';
import { EReader } from './components/EReader';
import { ExplanationPanel } from './components/ExplanationPanel';
import { SettingsPanel } from './components/SettingsPanel';
import { QuickNavigation } from './components/QuickNavigation';
import { SearchBox } from './components/SearchBox';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { iphigenieText } from './data/iphigenieText';
import type { ExplanationResponse } from './types';
import type { Character } from './data/characters';
import { OpenAIService } from './services/openaiService';
import { analyticsService } from './services/analyticsService';
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
  const [currentAct, setCurrentAct] = useState<number>(1);
  
  // Panel states
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  // Analytics Setup
  useEffect(() => {
    // Track page view on component mount
    analyticsService.trackPageView();

    // Global event listeners für erweiterte Analytics
    window.addEventListener('beforeunload', () => {
      analyticsService.endSession();
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
    if (!isSettingsOpen) {
      setIsNavigationOpen(false); // Close navigation when opening settings
    }
  };

  const handleNavigationToggle = () => {
    setIsNavigationOpen(!isNavigationOpen);
    if (!isNavigationOpen) {
      setIsSettingsOpen(false); // Close settings when opening navigation
    }
  };

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
    
    // Track text selection event
    if (text) {
      analyticsService.trackEvent('text_selected', {
        textLength: text.length,
        context: context?.type,
        actNumber: context?.actNumber,
        sceneNumber: context?.sceneNumber
      });
    }
    
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
    analyticsService.trackEvent('character_selected', {
      characterName: character.name,
      characterId: character.id
    });
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
    
    analyticsService.trackEvent('character_comparison_generated', {
      character1: selectedCharacter.name,
      character2: characterForComparison.name
    });
    
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
        <div className="app" onClick={(e) => {
          // Close panels when clicking outside
          const target = e.target as HTMLElement;
          const isSettingsClick = target.closest('.settings-panel');
          const isNavigationClick = target.closest('.quick-navigation');
          
          if (!isSettingsClick && !isNavigationClick) {
            setIsSettingsOpen(false);
            setIsNavigationOpen(false);
          }
        }}>
      <header className="app-header">
        <div className="app-header-content">
          <h1>Iphigenie auf Tauris</h1>
          <p className="subtitle">Ein interaktiver eReader mit KI-unterstützter Analyse</p>
        </div>
        <div className="app-header-controls">
          <SearchBox 
            text={iphigenieText}
            onResultSelect={(result) => {
              // Close panels when searching
              setIsSettingsOpen(false);
              setIsNavigationOpen(false);
              setIsAnalyticsOpen(false);
              
              analyticsService.trackEvent('search_result_selected', {
                resultId: result.id,
                resultText: result.text.substring(0, 50)
              });
              
              // Scroll to the selected element
              const element = document.getElementById(result.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Highlight the element briefly
                element.style.backgroundColor = 'var(--accent-color)';
                element.style.color = 'white';
                setTimeout(() => {
                  element.style.backgroundColor = '';
                  element.style.color = '';
                }, 2000);
              }
            }}
          />
          <QuickNavigation 
            acts={iphigenieText.map(act => ({
              id: act.id,
              title: act.title,
              number: act.number
            }))}
            currentAct={currentAct}
            isExpanded={isNavigationOpen}
            onToggle={handleNavigationToggle}
            onActSelect={(actNumber) => {
              setCurrentAct(actNumber);
              setIsNavigationOpen(false); // Close navigation after selection
              analyticsService.trackEvent('act_navigation', { actNumber });
              // Scroll to act
              const actElement = document.getElementById(`act-${actNumber}`);
              if (actElement) {
                actElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          />
          <button 
            className="analytics-btn"
            onClick={() => {
              setIsAnalyticsOpen(!isAnalyticsOpen);
              setIsSettingsOpen(false);
              setIsNavigationOpen(false);
              analyticsService.trackEvent('analytics_dashboard_opened');
            }}
            title="Website Analytics anzeigen"
          >
            📊
          </button>
          <SettingsPanel 
            isOpen={isSettingsOpen}
            onToggle={handleSettingsToggle}
          />
        </div>
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

      {/* Analytics Dashboard */}
      <AnalyticsDashboard 
        isVisible={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
      />
    </div>
  );
}

export default App;

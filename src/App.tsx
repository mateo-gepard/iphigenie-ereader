import { useState, useEffect } from 'react';
import { EReader } from './components/EReader';
import { ExplanationPanel } from './components/ExplanationPanel';
import { SettingsPanel } from './components/SettingsPanel';
import { QuickNavigation } from './components/QuickNavigation';
import { SearchBox } from './components/SearchBox';
import { Library } from './components/Library';
import { iphigenieText } from './data/iphigenieText';
import { WorkManager } from './data/works';
import type { ExplanationResponse, WorkConfig } from './types';
import type { Character } from './data/characters';
import { OpenAIService } from './services/openaiService';
import { analyticsService } from './services/analyticsService';
import './App.css';

function App() {
  const [selectedText, setSelectedText] = useState<string>('');
  const [explanation, setExplanation] = useState<ExplanationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCharacter] = useState<Character | null>(null);
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
  
  // Library & Work Management
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [currentWork, setCurrentWork] = useState<WorkConfig | null>(null);
  const [currentWorkId, setCurrentWorkId] = useState<string>('iphigenie');
  
  // Panel states
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  
  // Header auto-hide
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Load initial work
  useEffect(() => {
    const loadWork = async () => {
      const work = await WorkManager.setCurrentWork(currentWorkId);
      if (work) {
        setCurrentWork(work);
      }
    };
    loadWork();
  }, [currentWorkId]);

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

  // Header auto-hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const shouldHideHeader = isScrollingDown && currentScrollY > 100;
      
      // Show header when mouse is at top of screen
      const mouseHandler = (e: MouseEvent) => {
        if (e.clientY < 60) {
          setIsHeaderVisible(true);
        }
      };

      if (shouldHideHeader) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < 50) {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
      
      // Add mouse listener when header is hidden
      if (!isHeaderVisible) {
        window.addEventListener('mousemove', mouseHandler);
        return () => window.removeEventListener('mousemove', mouseHandler);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHeaderVisible]);

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

  const handleWorkSelect = async (work: WorkConfig) => {
    analyticsService.trackEvent('work_changed', {
      from: currentWorkId,
      to: work.id,
      title: work.title
    });
    
    setCurrentWorkId(work.id);
    setCurrentAct(1);
    setSelectedText('');
    setExplanation(null);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app" onClick={(e) => {
      // Close panels when clicking outside
      const target = e.target as HTMLElement;
      const isSettingsClick = target.closest('.settings-panel');
      const isNavigationClick = target.closest('.quick-navigation');
      const isMenuClick = target.closest('.menu-toggle') || target.closest('.menu-panel') || target.closest('.menu-overlay');
      
      if (!isSettingsClick && !isNavigationClick && !isMenuClick) {
        setIsSettingsOpen(false);
        setIsNavigationOpen(false);
      }
    }}>
      <header className={`app-header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
        <div className="header-content">
          {/* Left: Logo + Book Title */}
          <button 
            className="header-book-info"
            onClick={(e) => {
              e.stopPropagation();
              setIsLibraryOpen(true);
              analyticsService.trackEvent('library_opened');
            }}
            title="Bibliothek öffnen"
          >
            <span className="header-book-icon">📚</span>
            <div className="header-book-text">
              <span className="header-book-title">Iphigenie auf Tauris</span>
              <span className="header-book-author">Johann Wolfgang von Goethe</span>
            </div>
          </button>

          {/* Right: Menu Toggle */}
          <button 
            className={`menu-toggle ${isSettingsOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsSettingsOpen(!isSettingsOpen);
              // Close other panels when opening menu
              if (!isSettingsOpen) {
                setIsNavigationOpen(false);
                setIsAnalyticsOpen(false);
              }
            }}
            title="Menü"
          >
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </button>
        </div>
      </header>

      {/* Slide-out Menu Panel */}
      {isSettingsOpen && (
        <div className="menu-overlay" onClick={() => setIsSettingsOpen(false)}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <h3>Menü</h3>
              <button 
                className="menu-close"
                onClick={() => setIsSettingsOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="menu-content">
              {/* Search */}
              <div className="menu-section">
                <SearchBox 
                  text={iphigenieText}
                  onResultSelect={(result) => {
                    setIsSettingsOpen(false);
                    setIsNavigationOpen(false);
                    setIsAnalyticsOpen(false);
                    
                    analyticsService.trackEvent('search_result_selected', {
                      resultId: result.id,
                      resultText: result.text.substring(0, 50)
                    });
                    
                    const element = document.getElementById(result.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      element.style.backgroundColor = 'var(--accent-color)';
                      element.style.color = 'white';
                      setTimeout(() => {
                        element.style.backgroundColor = '';
                        element.style.color = '';
                      }, 2000);
                    }
                  }}
                />
              </div>

              {/* Menu Items */}
              <div className="menu-section">
                <button 
                  className="menu-item"
                  onClick={() => {
                    setIsLibraryOpen(true);
                    setIsSettingsOpen(false);
                    analyticsService.trackEvent('library_opened');
                  }}
                >
                  <span className="menu-item-icon">📚</span>
                  <span className="menu-item-text">Bibliothek</span>
                </button>

                <button 
                  className="menu-item"
                  onClick={() => {
                    setIsNavigationOpen(true);
                    setIsSettingsOpen(false);
                  }}
                >
                  <span className="menu-item-icon">🧭</span>
                  <span className="menu-item-text">Navigation</span>
                </button>

                <button 
                  className="menu-item"
                  onClick={() => {
                    setIsAnalyticsOpen(!isAnalyticsOpen);
                    setIsSettingsOpen(false);
                    analyticsService.trackEvent('analytics_dashboard_opened');
                  }}
                >
                  <span className="menu-item-icon">📊</span>
                  <span className="menu-item-text">Analytics</span>
                </button>
              </div>

              {/* Settings Section */}
              <div className="menu-section menu-section--settings">
                <h4 className="menu-section-title">Einstellungen</h4>
                <SettingsPanel 
                  isOpen={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Panel (separate overlay) */}
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
          setIsNavigationOpen(false);
          analyticsService.trackEvent('act_navigation', { actNumber });
          const actElement = document.getElementById(`act-${actNumber}`);
          if (actElement) {
            actElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />
      
      <main className="app-main">
        <div className="reader-container">
          <EReader 
            text={iphigenieText} 
            onTextSelection={handleTextSelection}
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

      {/* Library Modal */}
      {isLibraryOpen && (
        <Library 
          onClose={() => setIsLibraryOpen(false)}
          onWorkSelect={handleWorkSelect}
          currentWorkId={currentWorkId}
        />
      )}

      {/* Simple Secure Analytics Dashboard */}
      {isAnalyticsOpen && (
        <div className="analytics-overlay">
          <div className="analytics-login">
            <div className="login-header">
              <h2>🔐 Analytics Login</h2>
              <button className="close-btn" onClick={() => setIsAnalyticsOpen(false)}>✕</button>
            </div>
            <div className="login-content">
              <p>Passwort erforderlich für Analytics-Zugang</p>
              <input 
                type="password" 
                placeholder="Analytics-Passwort eingeben..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.target as HTMLInputElement;
                    if (input.value === 'MPI4711WIDZSM!') {
                      alert('🎯 Analytics-Funktionen sind implementiert!\n\n✅ Passwort-geschütztes System\n✅ Session-Tracking aktiv\n✅ Event-Logging läuft\n✅ Datenexport verfügbar\n\nSiehe Konsole (F12) für Live-Analytics!');
                      analyticsService.trackEvent('analytics_access_granted', { timestamp: Date.now() });
                    } else {
                      alert('❌ Falsches Passwort');
                    }
                    setIsAnalyticsOpen(false);
                  }
                }}
                autoFocus
              />
              <p className="hint">💡 Tipp: Analytics läuft bereits - siehe Browser-Konsole (F12)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState, useRef } from 'react';
import type { Act, ExplanationResponse, WorkType } from '../types';
import type { Character } from '../data/characters';
import { OpenAIService } from '../services/openaiService';

import { CharacterPopup } from './CharacterPopup';
import { SmartDramaRenderer } from './drama-renderers/SmartDramaRenderer';
import './EReader.css';

interface EReaderProps {
  text: Act[];
  workType: WorkType;
  onTextSelection: (
    text: string, 
    explanation: ExplanationResponse | null, 
    loading: boolean,
    context?: {
      type: 'verse' | 'stanza' | 'scene';
      actNumber?: number;
      sceneNumber?: number;
    }
  ) => void;
  onCharacterComparison: (character: Character) => void;
  characterForComparison: Character | null;
  areCharactersVisible: boolean;
  isCharacterHighlightingEnabled: boolean;
}

export function EReader({ 
  text,
  workType,
  onTextSelection, 
  onCharacterComparison,
  characterForComparison,
  isCharacterHighlightingEnabled
}: EReaderProps) {
  const [selectedVerseIds, setSelectedVerseIds] = useState<string[]>([]);
  const [selectedStanzaId, setSelectedStanzaId] = useState<string>('');
  const [lastAnalyzedElement, setLastAnalyzedElement] = useState<{
    id: string;
    type: 'verse' | 'stanza';
    text: string;
  } | null>(null);
  const [showCharacterPopup, setShowCharacterPopup] = useState(false);
  const [selectedCharacter] = useState<Character | null>(null);
  const [popupPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Scrolle zurück zum analysierten Element
  const scrollToAnalyzedElement = () => {
    console.log('scrollToAnalyzedElement called with:', lastAnalyzedElement);
    
    if (!lastAnalyzedElement) {
      console.log('No lastAnalyzedElement found');
      return;
    }
    
    if (!containerRef.current) {
      console.log('No containerRef found');
      return;
    }
    
    const element = document.getElementById(lastAnalyzedElement.id);
    console.log('Found element:', element);
    
    if (element) {
      try {
        // Methode 1: Einfaches scrollIntoView (als Fallback)
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
        
        // Methode 2: Container-basiertes Scrollen
        const container = containerRef.current;
        const elementTop = element.offsetTop;
        const containerHeight = container.clientHeight;
        const elementHeight = element.offsetHeight;
        
        // Zentriere das Element im Container
        const scrollPosition = elementTop - (containerHeight / 2) + (elementHeight / 2);
        
        console.log('Scroll calculation:', {
          elementTop,
          containerHeight,
          elementHeight,
          scrollPosition
        });
        
        // Scrolle mit beiden Methoden für maximale Kompatibilität
        container.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
        
        // Visuelle Hervorhebung
        element.style.transition = 'all 0.5s ease';
        element.style.backgroundColor = 'rgba(255, 193, 7, 0.2)';
        element.style.transform = 'scale(1.02)';
        element.style.boxShadow = '0 0 20px rgba(255, 193, 7, 0.4)';
        element.style.borderRadius = '8px';
        
        setTimeout(() => {
          element.style.backgroundColor = '';
          element.style.transform = '';
          element.style.boxShadow = '';
          element.style.borderRadius = '';
        }, 2000);
        
        console.log('Scroll completed successfully');
        
      } catch (error) {
        console.error('Error during scroll:', error);
      }
    } else {
      console.error('Element not found with ID:', lastAnalyzedElement.id);
    }
  };

  // Hilfsfunktion um alle ausgewählten Verse zu finden
  const getAllSelectedVerses = (verseIds: string[]): any[] => {
    const verses: any[] = [];
    text.forEach(act => {
      act.scenes.forEach((scene: any) => {
        scene.stanzas.forEach((stanza: any) => {
          stanza.verses.forEach((verse: any) => {
            if (verseIds.includes(verse.id)) {
              verses.push(verse);
            }
          });
        });
      });
    });
    return verses;
  };

  // Funktion für Multi-Verse Erklärungen
  const handleMultiVerseExplanation = async (verses: any[], actNumber: number, sceneNumber: number, contextInfo: any) => {
    try {
      const combinedText = verses.map((v: any) => v.text).join('\n');
      const explanation = await OpenAIService.getExplanation({
        text: combinedText,
        context: 'verse',
        actNumber,
        sceneNumber
      });

      const delay = explanation.fromCache ? 300 : 0;
      setTimeout(() => {
        onTextSelection(combinedText, explanation, false, contextInfo);
      }, delay);
      
    } catch (error) {
      console.error('Fehler beim Laden der Multi-Vers Erklärung:', error);
      const combinedText = verses.map((v: any) => v.text).join('\n');
      onTextSelection(combinedText, null, false);
    }
  };

  const handleVerseClick = async (verse: any, actNumber: number, sceneNumber: number, event: React.MouseEvent) => {
    
    const contextInfo = {
      type: 'verse' as const,
      actNumber,
      sceneNumber
    };

    // Multi-selection mit Ctrl/Cmd + Klick
    if (event.ctrlKey || event.metaKey) {
      setSelectedVerseIds(prevIds => {
        if (prevIds.includes(verse.id)) {
          // Entferne Vers aus Auswahl
          const newIds = prevIds.filter(id => id !== verse.id);
          if (newIds.length === 0) {
            onTextSelection('', null, false);
            return newIds;
          }
          // Aktualisiere Text mit verbleibenden Versen
          const remainingVerses = getAllSelectedVerses(newIds);
          const combinedText = remainingVerses.map(v => v.text).join('\n');
          onTextSelection(combinedText, null, false, contextInfo);
          return newIds;
        } else {
          // Füge Vers zur Auswahl hinzu
          const newIds = [...prevIds, verse.id];
          const allSelectedVerses = getAllSelectedVerses(newIds);
          const combinedText = allSelectedVerses.map(v => v.text).join('\n');
          
          // Zeige Loading für kombinierte Erklärung
          onTextSelection(combinedText, null, true, contextInfo);
          
          // Speichere letztes analysiertes Element für Back-Button (verwende ersten Vers der Auswahl)
          setLastAnalyzedElement({
            id: newIds[0], // Nimm den ersten ausgewählten Vers
            type: 'verse',
            text: combinedText
          });
          
          // Hole Erklärung für alle ausgewählten Verse
          handleMultiVerseExplanation(allSelectedVerses, actNumber, sceneNumber, contextInfo);
          
          return newIds;
        }
      });
      setSelectedStanzaId(''); // Clear stanza selection
      return;
    }

    // Normale Einzelauswahl
    setSelectedVerseIds([verse.id]);
    setSelectedStanzaId(''); // Clear stanza selection

    // Speichere letztes analysiertes Element für Back-Button
    setLastAnalyzedElement({
      id: verse.id,
      type: 'verse',
      text: verse.text
    });

    // Zeige immer kurz Loading-Animation für besseres UX
    onTextSelection(verse.text, null, true, contextInfo);
    
    try {
      const explanation = await OpenAIService.getExplanation({
        text: verse.text,
        context: 'verse',
        actNumber,
        sceneNumber
      });

      // Bei gecachtem Inhalt: kurze Verzögerung für glatte Animation
      // Bei neuem Inhalt: normale Anzeige
      const delay = explanation.fromCache ? 300 : 0;
      
      setTimeout(() => {
        onTextSelection(verse.text, explanation, false, contextInfo);
      }, delay);
      
    } catch (error) {
      console.error('Fehler beim Laden der Erklärung:', error);
      onTextSelection(verse.text, null, false);
    }
  };









  const handleStanzaClick = async (stanza: any, actNumber: number, sceneNumber: number) => {
    if (selectedStanzaId === stanza.id) {
      // Deselect if clicking the same stanza
      setSelectedStanzaId('');
      setSelectedVerseIds([]);
      onTextSelection('', null, false);
      return;
    }

    const stanzaText = stanza.verses.map((v: any) => v.text).join('\n');
    
    const contextInfo = {
      type: 'stanza' as const,
      actNumber,
      sceneNumber
    };
    
    // Setze den Selected State sofort für visuelles Feedback
    setSelectedStanzaId(stanza.id);
    setSelectedVerseIds([]); // Clear verse selection

    // Speichere letztes analysiertes Element für Back-Button
    setLastAnalyzedElement({
      id: stanza.id,
      type: 'stanza',
      text: stanzaText
    });

    // Zeige immer kurz Loading-Animation für besseres UX
    onTextSelection(stanzaText, null, true, contextInfo);
    
    try {
      const explanation = await OpenAIService.getExplanation({
        text: stanzaText,
        context: 'stanza',
        actNumber,
        sceneNumber
      });

      // Bei gecachtem Inhalt: kurze Verzögerung für glatte Animation
      // Bei neuem Inhalt: normale Anzeige
      const delay = explanation.fromCache ? 300 : 0;
      
      setTimeout(() => {
        onTextSelection(stanzaText, explanation, false, contextInfo);
      }, delay);
      
    } catch (error) {
      console.error('Fehler beim Laden der Erklärung:', error);
      onTextSelection(stanzaText, null, false, contextInfo);
    }
  };

  return (
    <div className="e-reader" ref={containerRef}>
      {/* Debug Info */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          background: 'black',
          color: 'white',
          padding: '10px',
          fontSize: '12px',
          zIndex: 9999,
          borderRadius: '4px'
        }}>
          <div>LastAnalyzedElement: {lastAnalyzedElement ? 'YES' : 'NO'}</div>
          {lastAnalyzedElement && (
            <>
              <div>ID: {lastAnalyzedElement.id}</div>
              <div>Type: {lastAnalyzedElement.type}</div>
              <div>Text: {lastAnalyzedElement.text.substring(0, 30)}...</div>
            </>
          )}
        </div>
      )}

      {/* Zurück zum analysierten Vers Button - IMMER SICHTBAR FÜR TEST */}
      <button 
        className="back-to-verse-btn"
        onClick={() => {
          console.log('Back to verse button clicked:', lastAnalyzedElement);
          if (lastAnalyzedElement) {
            scrollToAnalyzedElement();
          } else {
            console.log('No element to scroll to');
            alert('Kein analysiertes Element gefunden. Klicke erst auf einen Vers!');
          }
        }}
        title={lastAnalyzedElement ? `Zurück zu "${lastAnalyzedElement.text.substring(0, 50)}..."` : 'Klicke erst auf einen Vers'}
        style={{
          opacity: lastAnalyzedElement ? 1 : 0.5,
          pointerEvents: 'all' // Immer klickbar für Debug
        }}
      >
        <span className="back-icon">↑</span>
        <span className="back-text">
          {lastAnalyzedElement 
            ? `Zurück zum ${lastAnalyzedElement.type === 'verse' ? 'Vers' : 'Abschnitt'}`
            : 'Wähle einen Vers'
          }
        </span>
      </button>

      {/* Character Comparison Status */}
      {characterForComparison && (
        <div className="character-comparison-status">
          <span>Ausgewählt für Vergleich: <strong>{characterForComparison.name}</strong></span>
          <button 
            className="clear-comparison"
            onClick={() => onCharacterComparison(characterForComparison)}
          >
            ✕
          </button>
        </div>
      )}

      <div className="text-content">
        {/* Multi-Selection Info */}
        {selectedVerseIds.length > 1 && (
          <div className="multi-selection-info">
            <span className="selection-count">
              {selectedVerseIds.length} Verse ausgewählt
            </span>
            <button 
              className="clear-selection"
              onClick={() => {
                setSelectedVerseIds([]);
                onTextSelection('', null, false);
              }}
              title="Auswahl löschen"
            >
              ✕
            </button>
          </div>
        )}

        {/* Multi-Selection Help */}
        {selectedVerseIds.length === 0 && (
          <div className="multi-selection-help">
            <span className="help-text">
              💡 Tipp: Halte Ctrl/Cmd gedrückt um mehrere Verse auszuwählen
            </span>
          </div>
        )}
        
        {text.map((act: Act) => (
        <div key={act.id} className="act" id={`act-${act.number}`}>
          <h2 
            className="act-title clickable" 
            onClick={() => {
              // Optional: Handle act click if needed
            }}
          >
            {act.title}
          </h2>
          
          {act.scenes.map((scene: any) => (
            <SmartDramaRenderer
              key={scene.id}
              scene={scene}
              workType={workType}
              onVerseClick={(verse, _speaker, e) => handleVerseClick(verse, act.number, scene.number, e)}
              onDialogBlockClick={(block, _e) => handleStanzaClick(block, act.number, scene.number)}
              selectedVerseIds={selectedVerseIds}
              selectedDialogBlockId={selectedStanzaId}
              isCharacterHighlightingEnabled={isCharacterHighlightingEnabled}
              actNumber={act.number}
              sceneNumber={scene.number}
            />
          ))}
        </div>
        ))}


      </div>

      {/* Character Popup */}
      {showCharacterPopup && selectedCharacter && (
        <CharacterPopup
          character={selectedCharacter}
          position={popupPosition}
          onClose={() => setShowCharacterPopup(false)}
          onSelectForComparison={onCharacterComparison}
          selectedForComparison={characterForComparison || undefined}
        />
      )}
    </div>
  );
}

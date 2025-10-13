import { useState } from 'react';
import type { IphigenieText, ExplanationResponse } from '../types';
import type { Character } from '../data/characters';
import { OpenAIService } from '../services/openaiService';
import { findCharactersInText } from '../data/characters';
import './EReader.css';

interface EReaderProps {
  text: IphigenieText;
  onTextSelection: (text: string, explanation: ExplanationResponse | null, loading: boolean) => void;
  onCharacterSelection: (character: Character) => void;
  onCharacterComparison: (character: Character) => void;
  characterForComparison: Character | null;
  areCharactersVisible: boolean;
  isCharacterHighlightingEnabled: boolean;
}

export function EReader({ 
  text, 
  onTextSelection, 
  onCharacterSelection,
  onCharacterComparison,
  characterForComparison,
  areCharactersVisible,
  isCharacterHighlightingEnabled
}: EReaderProps) {
  const [selectedVerseId, setSelectedVerseId] = useState<string>('');
  const [selectedStanzaId, setSelectedStanzaId] = useState<string>('');

  const handleVerseClick = async (verse: { id: string; text: string }, actNumber: number, sceneNumber: number) => {
    if (selectedVerseId === verse.id) {
      // Deselect if clicking the same verse
      setSelectedVerseId('');
      setSelectedStanzaId('');
      onTextSelection('', null, false);
      return;
    }

    setSelectedVerseId(verse.id);
    setSelectedStanzaId('');
    onTextSelection(verse.text, null, true);

    try {
      const explanation = await OpenAIService.getExplanation({
        text: verse.text,
        context: 'verse',
        actNumber,
        sceneNumber
      });
      onTextSelection(verse.text, explanation, false);
    } catch (error) {
      console.error('Fehler beim Laden der Erklärung:', error);
      onTextSelection(verse.text, null, false);
    }
  };

  const handleCharacterClick = (character: Character, event: React.MouseEvent) => {
    event.stopPropagation();
    onCharacterSelection(character);
  };

  // Funktion zum Markieren von Charakternamen im Text
  const highlightCharacters = (text: string) => {
    if (!areCharactersVisible) return text;
    
    const foundCharacters = findCharactersInText(text);
    if (foundCharacters.length === 0) return text;

    let highlightedText = text;
    
    // Sortiere nach Länge (längste zuerst) um Überschneidungen zu vermeiden
    const allMatches: Array<{character: Character, match: string}> = [];
    foundCharacters.forEach(({ character, matches }) => {
      matches.forEach(match => allMatches.push({ character, match }));
    });
    
    allMatches.sort((a, b) => b.match.length - a.match.length);
    
    allMatches.forEach(({ character, match }) => {
      const isSelected = characterForComparison?.id === character.id;
      const className = `character-name${isSelected ? ' selected-for-comparison' : ''}`;
      
      const regex = new RegExp(`\\b${match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      
      const styleAttributes = isCharacterHighlightingEnabled 
        ? `style="background-color: ${character.color}20; border-color: ${character.color}; color: ${character.color};"` 
        : '';
      
      highlightedText = highlightedText.replace(regex, (matched) => 
        `<span class="${className}" data-character-id="${character.id}" data-character-name="${character.name}" data-character-color="${character.color}" ${styleAttributes}>${matched}</span>`
      );
    });

    return highlightedText;
  };

  const handleStanzaClick = async (stanza: any, actNumber: number, sceneNumber: number) => {
    if (selectedStanzaId === stanza.id) {
      // Deselect if clicking the same stanza
      setSelectedStanzaId('');
      setSelectedVerseId('');
      onTextSelection('', null, false);
      return;
    }

    const stanzaText = stanza.verses.map((v: any) => v.text).join('\n');
    
    setSelectedStanzaId(stanza.id);
    setSelectedVerseId('');
    onTextSelection(stanzaText, null, true);

    try {
      const explanation = await OpenAIService.getExplanation({
        text: stanzaText,
        context: 'stanza',
        actNumber,
        sceneNumber
      });
      onTextSelection(stanzaText, explanation, false);
    } catch (error) {
      console.error('Fehler beim Laden der Erklärung:', error);
      onTextSelection(stanzaText, null, false);
    }
  };

  return (
    <div className="e-reader">
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
        {text.acts.map((act) => (
          <div key={act.id} className="act">
            <h2 className="act-title">{act.title}</h2>
            
            {act.scenes.map((scene) => (
              <div key={scene.id} className="scene">
                <h3 className="scene-title">{scene.title}</h3>
                
                {scene.stanzas.map((stanza) => (
                  <div 
                    key={stanza.id} 
                    className={`stanza ${selectedStanzaId === stanza.id ? 'selected-stanza' : ''}`}
                  >
                    <div className="stanza-header">
                      <h4 
                        className="stanza-title clickable"
                        onClick={() => handleStanzaClick(stanza, act.number, scene.number)}
                      >
                        {stanza.title}
                      </h4>
                    </div>
                    
                    <div className="verses">
                      {stanza.verses.map((verse) => (
                        <div
                          key={verse.id}
                          className={`verse ${selectedVerseId === verse.id ? 'selected-verse' : ''} clickable`}
                          onClick={() => handleVerseClick(verse, act.number, scene.number)}
                        >
                          <span className="line-number">{verse.lineNumber}</span>
                          <span 
                            className="verse-text"
                            dangerouslySetInnerHTML={{ __html: highlightCharacters(verse.text) }}
                            onClick={(e) => {
                              const target = e.target as HTMLElement;
                              if (target.classList.contains('character-name')) {
                                e.stopPropagation();
                                const characterId = target.getAttribute('data-character-id');
                                const character = findCharactersInText(verse.text)
                                  .find(c => c.character.id === characterId)?.character;
                                if (character) {
                                  handleCharacterClick(character, e as any);
                                }
                              }
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}


      </div>
    </div>
  );
}

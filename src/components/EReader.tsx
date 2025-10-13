import { useState } from 'react';
import type { IphigenieText, ExplanationResponse } from '../types';
import type { Character } from '../data/characters';
import { OpenAIService } from '../services/openaiService';
import { findCharactersInText } from '../data/characters';
import { CharacterPopup } from './CharacterPopup';
import './EReader.css';

interface EReaderProps {
  text: IphigenieText;
  onTextSelection: (text: string, explanation: ExplanationResponse | null, loading: boolean) => void;
}

export function EReader({ text, onTextSelection }: EReaderProps) {
  const [selectedVerseId, setSelectedVerseId] = useState<string>('');
  const [selectedStanzaId, setSelectedStanzaId] = useState<string>('');
  const [showCharacterPopup, setShowCharacterPopup] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [characterForComparison, setCharacterForComparison] = useState<Character | null>(null);

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
    setSelectedCharacter(character);
    setPopupPosition({ x: event.clientX, y: event.clientY });
    setShowCharacterPopup(true);
  };

  const handleCloseCharacterPopup = () => {
    setShowCharacterPopup(false);
    setSelectedCharacter(null);
  };

  const handleSelectForComparison = (character: Character) => {
    if (characterForComparison?.id === character.id) {
      setCharacterForComparison(null);
    } else {
      setCharacterForComparison(character);
    }
    setShowCharacterPopup(false);
  };

  // Funktion zum Markieren von Charakternamen im Text
  const highlightCharacters = (text: string) => {
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
      highlightedText = highlightedText.replace(regex, (matched) => 
        `<span class="${className}" data-character-id="${character.id}" data-character-name="${character.name}">${matched}</span>`
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
      {/* Character Info Bar */}
      <div className="character-info-bar">
        <span className="character-info-text">
          💡 <strong>Charaktere markiert:</strong> Klicken Sie auf hervorgehobene Namen für Details und Vergleiche
        </span>
        {characterForComparison && (
          <span className="comparison-info">
            | Ausgewählt: <strong>{characterForComparison.name}</strong>
          </span>
        )}
      </div>

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

        {/* Character Popup */}
        {showCharacterPopup && selectedCharacter && (
          <CharacterPopup
            character={selectedCharacter}
            position={popupPosition}
            onClose={handleCloseCharacterPopup}
            onSelectForComparison={handleSelectForComparison}
            selectedForComparison={characterForComparison || undefined}
          />
        )}


      </div>
    </div>
  );
}

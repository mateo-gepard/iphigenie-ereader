import { useState } from 'react';
import type { Character } from '../data/characters';
import { getCharacterRelationship, analyzeCharacterRelationshipInText } from '../data/characters';
import './CharacterPopup.css';

interface CharacterPopupProps {
  character: Character;
  position: { x: number; y: number };
  onClose: () => void;
  onSelectForComparison: (character: Character) => void;
  selectedForComparison?: Character;
  currentTextContent?: string; // Neuer Parameter für dynamische Analyse
}

export function CharacterPopup({ 
  character, 
  position, 
  onClose, 
  onSelectForComparison,
  selectedForComparison,
  currentTextContent = '' // Neuer Parameter mit Default-Wert
}: CharacterPopupProps) {
  const [showRelationship, setShowRelationship] = useState(false);
  const [relationshipText, setRelationshipText] = useState('');
  const [isLoadingRelationship, setIsLoadingRelationship] = useState(false);

  const handleComparisonClick = async () => {
    if (selectedForComparison && selectedForComparison.id !== character.id) {
      setIsLoadingRelationship(true);
      setShowRelationship(true);
      
      // Simuliere kurze Verzögerung für glatte Animation
      setTimeout(() => {
        // Versuche zuerst vordefinierte Beziehung zu finden
        let relationship = getCharacterRelationship(character.id, selectedForComparison.id);
        
        // Falls keine vordefinierte Beziehung existiert, nutze dynamische Textanalyse
        if (relationship.includes('Keine direkte Beziehung') && currentTextContent) {
          relationship = analyzeCharacterRelationshipInText(
            character.name, 
            selectedForComparison.name, 
            currentTextContent
          );
        }
        
        setRelationshipText(relationship);
        setIsLoadingRelationship(false);
      }, 800);
    } else {
      onSelectForComparison(character);
    }
  };

  const getComparisonButtonText = () => {
    if (selectedForComparison) {
      if (selectedForComparison.id === character.id) {
        return 'Bereits ausgewählt';
      } else {
        return `Vergleich mit ${selectedForComparison.name}`;
      }
    }
    return 'Für Vergleich auswählen';
  };

  return (
    <>
      {/* Backdrop */}
      <div className="character-popup-backdrop" onClick={onClose} />
      
      {/* Popup */}
      <div 
        className="character-popup"
        style={{
          left: Math.max(10, Math.min(position.x - 200, window.innerWidth - 410)), // Zentriert über dem Element
          top: Math.max(10, position.y - 10), // Direkt über dem Element
          transform: position.y < 300 ? 'translateY(0)' : 'translateY(-100%)' // Flip wenn zu nah am oberen Rand
        }}
      >
        <div className="character-popup-header">
          <h3>{character.name}</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="character-popup-content">
          {!showRelationship ? (
            <>
              <div className="character-section">
                <h4>🎭 Rolle</h4>
                <p>{character.role}</p>
              </div>

              <div className="character-section">
                <h4>📖 Beschreibung</h4>
                <p>{character.description}</p>
              </div>

              <div className="character-section">
                <h4>🏛️ Mythologie</h4>
                <p>{character.mythology}</p>
              </div>

              <div className="character-section">
                <h4>✨ Charakterzüge</h4>
                <div className="traits-list">
                  {character.keyTraits.map((trait, index) => (
                    <span key={index} className="trait-tag">{trait}</span>
                  ))}
                </div>
              </div>

              <div className="character-popup-actions">
                <button 
                  className="comparison-button"
                  onClick={handleComparisonClick}
                  disabled={selectedForComparison?.id === character.id}
                >
                  {getComparisonButtonText()}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="character-section">
                <h4>🔗 Charakterbeziehung</h4>
                {isLoadingRelationship ? (
                  <div className="relationship-loading">
                    <div className="loading-spinner-small"></div>
                    <p>✨ Beziehungsanalyse wird geladen...</p>
                    <small>Charakterverbindungen werden analysiert</small>
                  </div>
                ) : (
                  <div className="relationship-content">
                    {relationshipText.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                )}
              </div>

              <div className="character-popup-actions">
                <button 
                  className="back-button"
                  onClick={() => {
                    setShowRelationship(false);
                    setIsLoadingRelationship(false);
                    setRelationshipText('');
                  }}
                >
                  ← Zurück zu {character.name}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

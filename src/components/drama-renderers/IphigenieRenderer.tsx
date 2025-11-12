import type { DialogBlock, Verse, Scene } from '../../types';
import './DramaRenderer.css';

interface IphigenieRendererProps {
  scene: Scene;
  onVerseClick: (verse: Verse, speaker: string, event: React.MouseEvent) => void;
  onDialogBlockClick: (block: DialogBlock, event: React.MouseEvent) => void;
  selectedVerseIds: string[];
  selectedDialogBlockId: string;
  isCharacterHighlightingEnabled: boolean;
  actNumber: number;
  sceneNumber: number;
}

/**
 * IPHIGENIE RENDERER
 * - Very regular verse structure
 * - Speaker marked with : (Iphigenie:)
 * - Minimal stage directions
 * - Clean, elegant presentation
 */
export function IphigenieRenderer({
  scene,
  onVerseClick,
  onDialogBlockClick,
  selectedVerseIds,
  selectedDialogBlockId
}: IphigenieRendererProps) {
  
  const getDialogBlocks = () => {
    // Support both new dialogBlocks and legacy stanzas
    return (scene as any).dialogBlocks || (scene as any).stanzas || [];
  };

  return (
    <div className="scene iphigenie-scene">
      <h3 className="scene-title">{scene.title}</h3>
      
      {getDialogBlocks().map((block: DialogBlock) => {
        const speaker = block.speaker || (block as any).title?.replace(':', '').trim();
        const isSelected = selectedDialogBlockId === block.id;
        
        return (
          <div
            key={block.id}
            id={block.id}
            className={`dialog-block iphigenie-block ${isSelected ? 'selected' : ''}`}
            onClick={(e) => onDialogBlockClick(block, e)}
          >
            {speaker && (
              <div className="speaker iphigenie-speaker">
                <span className="speaker-name">{speaker}</span>
                <span className="speaker-punctuation">:</span>
              </div>
            )}
            
            <div className="verses iphigenie-verses">
              {(block.verses || []).map((verse: Verse) => {
                const isVerseSelected = selectedVerseIds.includes(verse.id);
                
                return (
                  <div
                    key={verse.id}
                    id={verse.id}
                    className={`verse iphigenie-verse ${isVerseSelected ? 'verse-selected' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onVerseClick(verse, speaker || '', e);
                    }}
                  >
                    {verse.lineNumber && (
                      <span className="line-number">{verse.lineNumber}</span>
                    )}
                    <span className="verse-text">{verse.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

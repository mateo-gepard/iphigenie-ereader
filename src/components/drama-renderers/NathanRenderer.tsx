import type { DialogBlock, Verse, Scene } from '../../types';
import './DramaRenderer.css';

interface NathanRendererProps {
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
 * NATHAN DER WEISE RENDERER
 * - Verse structure
 * - Speaker marked with . (Nathan.)
 * - Frequent stage directions in parentheses
 * - Stage directions need special highlighting
 */
export function NathanRenderer({
  scene,
  onVerseClick,
  onDialogBlockClick,
  selectedVerseIds,
  selectedDialogBlockId,
  isCharacterHighlightingEnabled,
  actNumber,
  sceneNumber
}: NathanRendererProps) {
  
  const getDialogBlocks = () => {
    return (scene as any).dialogBlocks || (scene as any).stanzas || [];
  };

  // Check if a verse is a stage direction
  const isStageDirection = (verse: Verse): boolean => {
    return verse.text?.startsWith('(') && verse.text?.endsWith(')');
  };

  // Render scene-level stage directions (only once at the top)
  const renderSceneDirections = () => {
    const firstBlock = getDialogBlocks()[0];
    if (!firstBlock || !firstBlock.verses) return null;
    
    // Only show directions from the very first block
    const directions = firstBlock.verses.filter((v: Verse) => isStageDirection(v));
    if (directions.length === 0) return null;

    return (
      <div className="scene-directions nathan-directions">
        {directions.map((verse: Verse) => (
          <div key={verse.id} className="stage-direction scene-setting">
            {verse.text}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="scene nathan-scene">
      <h3 className="scene-title">{scene.title}</h3>
      
      {renderSceneDirections()}
      
      {getDialogBlocks().map((block: DialogBlock, blockIndex: number) => {
        const speaker = block.speaker || (block as any).title?.replace('.', '').trim();
        const isSelected = selectedDialogBlockId === block.id;
        
        // Skip the first block if it only contains scene directions (already shown at top)
        const hasOnlyDirections = block.verses.every(v => isStageDirection(v));
        if (hasOnlyDirections && blockIndex === 0) {
          return null;
        }
        
        return (
          <div
            key={block.id}
            id={block.id}
            className={`dialog-block nathan-block ${isSelected ? 'selected' : ''}`}
            onClick={(e) => onDialogBlockClick(block, e)}
          >
            {speaker && (
              <div className="speaker nathan-speaker">
                <span className="speaker-name">{speaker}</span>
                <span className="speaker-punctuation">.</span>
              </div>
            )}
            
            <div className="verses nathan-verses">
              {block.verses.map((verse: Verse) => {
                const isVerseSelected = selectedVerseIds.includes(verse.id);
                const isDirection = isStageDirection(verse);
                
                // Don't render inline directions - they clutter the dialog
                if (isDirection) return null;
                
                return (
                  <div
                    key={verse.id}
                    id={verse.id}
                    className={`verse nathan-verse ${isVerseSelected ? 'verse-selected' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onVerseClick(verse, speaker || '', e);
                    }}
                  >
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

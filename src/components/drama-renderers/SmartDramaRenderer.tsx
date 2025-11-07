import type { Scene, DialogBlock, Verse, WorkType } from '../../types';
import { IphigenieRenderer } from './IphigenieRenderer';
import { NathanRenderer } from './NathanRenderer';

interface SmartDramaRendererProps {
  scene: Scene;
  workType: WorkType;
  onVerseClick: (verse: Verse, speaker: string, event: React.MouseEvent) => void;
  onDialogBlockClick: (block: DialogBlock, event: React.MouseEvent) => void;
  selectedVerseIds: string[];
  selectedDialogBlockId: string;
  isCharacterHighlightingEnabled: boolean;
  actNumber: number;
  sceneNumber: number;
}

/**
 * SMART DRAMA RENDERER
 * Automatically selects the optimal renderer based on work type
 */
export function SmartDramaRenderer(props: SmartDramaRendererProps) {
  const { workType } = props;

  // Select renderer based on work type
  switch (workType) {
    case 'iphigenie':
      return <IphigenieRenderer {...props} />;
    
    case 'nathan':
      return <NathanRenderer {...props} />;
    
    case 'faust':
      // TODO: Implement FaustRenderer for special structure
      return <IphigenieRenderer {...props} />;
    
    case 'zerbrochner-krug':
      // TODO: Implement ZerbrochnerKrugRenderer for prose with many directions
      return <NathanRenderer {...props} />;
    
    case 'raeuber':
      // TODO: Implement RaeuberRenderer for prose with narrator
      return <NathanRenderer {...props} />;
    
    default:
      // Fallback to Iphigenie renderer
      console.warn(`Unknown work type: ${workType}, using Iphigenie renderer as fallback`);
      return <IphigenieRenderer {...props} />;
  }
}

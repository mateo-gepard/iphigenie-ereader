import { useState } from 'react';
import { WorkManager, getWorkDescription } from '../data/works';
import type { WorkConfig } from '../types';
import './Library.css';

interface LibraryProps {
  onClose: () => void;
  onWorkSelect: (work: WorkConfig) => void;
  currentWorkId: string;
}

export function Library({ onClose, onWorkSelect, currentWorkId }: LibraryProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'implemented' | 'planned'>('all');
  
  const allWorks = WorkManager.getAllWorks();
  const implementedWorks = WorkManager.getImplementedWorks();
  const plannedWorks = WorkManager.getPlaceholderWorks();
  
  const worksToDisplay = 
    selectedFilter === 'all' ? allWorks :
    selectedFilter === 'implemented' ? implementedWorks :
    plannedWorks;

  const handleWorkClick = (work: WorkConfig) => {
    if (WorkManager.isWorkImplemented(work.id)) {
      onWorkSelect(work);
      onClose();
    } else {
      alert(`📚 "${work.title}" ist noch nicht verfügbar.\n\nDieses Werk wird in einer zukünftigen Version hinzugefügt.`);
    }
  };

  return (
    <div className="library-overlay" onClick={onClose}>
      <div className="library-modal" onClick={(e) => e.stopPropagation()}>
        <div className="library-header">
          <h2>📚 Bibliothek</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="library-filters">
          <button 
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            Alle ({allWorks.length})
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'implemented' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('implemented')}
          >
            ✅ Verfügbar ({implementedWorks.length})
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'planned' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('planned')}
          >
            🚧 Geplant ({plannedWorks.length})
          </button>
        </div>

        <div className="library-content">
          <div className="works-grid">
            {worksToDisplay.map(work => {
              const isImplemented = WorkManager.isWorkImplemented(work.id);
              const isCurrent = work.id === currentWorkId;
              
              return (
                <div 
                  key={work.id}
                  className={`work-card ${!isImplemented ? 'work-card--disabled' : ''} ${isCurrent ? 'work-card--current' : ''}`}
                  onClick={() => handleWorkClick(work)}
                >
                  {/* Cover Image */}
                  <div className="work-cover">
                    {work.metadata?.cover ? (
                      <img 
                        src={work.metadata.cover} 
                        alt={`Cover: ${work.title}`}
                        onError={(e) => {
                          // Fallback wenn Bild nicht geladen werden kann
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="work-cover-fallback">📖</div>`;
                          }
                        }}
                      />
                    ) : (
                      <div className="work-cover-fallback">📖</div>
                    )}
                    
                    {/* Status Badge */}
                    {isCurrent && (
                      <div className="work-badge work-badge--current">
                        ✓ Aktuell
                      </div>
                    )}
                    {!isImplemented && (
                      <div className="work-badge work-badge--planned">
                        🚧 Geplant
                      </div>
                    )}
                  </div>

                  {/* Work Info */}
                  <div className="work-info">
                    <h3 className="work-title">{work.title}</h3>
                    {work.metadata?.subtitle && (
                      <p className="work-subtitle">{work.metadata.subtitle}</p>
                    )}
                    <p className="work-author">{getWorkDescription(work)}</p>
                    <div className="work-meta">
                      <span className="work-epoch">{work.epoch}</span>
                    </div>
                    
                    {/* Themes */}
                    {work.metadata?.themes && work.metadata.themes.length > 0 && (
                      <div className="work-themes">
                        {work.metadata.themes.slice(0, 3).map((theme, idx) => (
                          <span key={idx} className="work-theme">{theme}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="library-footer">
          <p className="library-stats">
            📊 {implementedWorks.length} von {allWorks.length} Werken verfügbar
          </p>
        </div>
      </div>
    </div>
  );
}

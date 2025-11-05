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
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const allWorks = WorkManager.getAllWorks();

  // Set initial index to current work
  useState(() => {
    const currentIdx = allWorks.findIndex(w => w.id === currentWorkId);
    if (currentIdx !== -1) setCurrentIndex(currentIdx);
  });

  const handleWorkClick = (work: WorkConfig) => {
    if (WorkManager.isWorkImplemented(work.id)) {
      onWorkSelect(work);
      onClose();
    } else {
      alert(`📚 "${work.title}" ist noch nicht verfügbar.\n\nDieses Werk wird in einer zukünftigen Version hinzugefügt.`);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allWorks.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allWorks.length) % allWorks.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="library-overlay" onClick={onClose}>
      <div className="library-modal" onClick={(e) => e.stopPropagation()}>
        <div className="library-header">
          <h2>📚 Bibliothek</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="library-content">
          <div className="carousel-container">
            {/* Navigation Arrows */}
            <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev}>
              ‹
            </button>
            <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
              ›
            </button>

            {/* 3D Carousel */}
            <div className="carousel-3d">
              {allWorks.map((work, index) => {
                const isImplemented = WorkManager.isWorkImplemented(work.id);
                const isCurrent = work.id === currentWorkId;
                const offset = index - currentIndex;
                
                return (
                  <div 
                    key={work.id}
                    className={`carousel-card ${offset === 0 ? 'carousel-card--center' : ''} ${!isImplemented ? 'carousel-card--disabled' : ''} ${isCurrent ? 'carousel-card--current' : ''}`}
                    style={{
                      transform: `
                        translateX(${offset * 350}px)
                        translateZ(${-Math.abs(offset) * 150}px)
                        rotateY(${offset * -8}deg)
                        scale(${1 - Math.abs(offset) * 0.1})
                      `,
                      opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
                      zIndex: 10 - Math.abs(offset),
                      pointerEvents: Math.abs(offset) > 1 ? 'none' : 'auto',
                      filter: Math.abs(offset) > 0 ? `brightness(${1 - Math.abs(offset) * 0.15})` : 'none'
                    }}
                    onClick={() => {
                      if (offset === 0) {
                        handleWorkClick(work);
                      } else {
                        goToSlide(index);
                      }
                    }}
                  >
                    {/* Cover Image */}
                    <div className="carousel-cover">
                      {work.metadata?.cover ? (
                        <img 
                          src={work.metadata.cover} 
                          alt={`Cover: ${work.title}`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const parent = (e.target as HTMLImageElement).parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="carousel-cover-fallback">📖</div>`;
                            }
                          }}
                        />
                      ) : (
                        <div className="carousel-cover-fallback">📖</div>
                      )}
                      
                      {/* Status Badge */}
                      {isCurrent && (
                        <div className="carousel-badge carousel-badge--current">
                          ✓ Aktuell
                        </div>
                      )}
                      {!isImplemented && (
                        <div className="carousel-badge carousel-badge--planned">
                          🚧 Geplant
                        </div>
                      )}
                    </div>

                    {/* Work Info - Only visible when centered */}
                    {offset === 0 && (
                      <div className="carousel-info">
                        <h3 className="carousel-title">{work.title}</h3>
                        {work.metadata?.subtitle && (
                          <p className="carousel-subtitle">{work.metadata.subtitle}</p>
                        )}
                        <p className="carousel-author">{getWorkDescription(work)}</p>
                        <div className="carousel-meta">
                          <span className="carousel-epoch">{work.epoch}</span>
                        </div>
                        
                        {/* Themes */}
                        {work.metadata?.themes && work.metadata.themes.length > 0 && (
                          <div className="carousel-themes">
                            {work.metadata.themes.slice(0, 3).map((theme, idx) => (
                              <span key={idx} className="carousel-theme">{theme}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dots Navigation */}
            <div className="carousel-dots">
              {allWorks.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'carousel-dot--active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="library-footer">
          <p className="library-stats">
            📊 {WorkManager.getImplementedWorks().length} von {allWorks.length} Werken verfügbar
          </p>
        </div>
      </div>
    </div>
  );
}

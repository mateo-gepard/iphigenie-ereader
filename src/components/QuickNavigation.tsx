import { useState } from 'react';
import './QuickNavigation.css';

interface QuickNavigationProps {
  acts: Array<{ id: string; title: string; number: number }>;
  currentAct?: number;
  isExpanded?: boolean;
  onToggle?: () => void;
  onActSelect: (actNumber: number) => void;
}

export function QuickNavigation({ acts, currentAct, isExpanded = false, onToggle, onActSelect }: QuickNavigationProps) {
  const [internalIsExpanded, setInternalIsExpanded] = useState(false);
  
  // Use controlled or uncontrolled mode
  const expanded = onToggle ? isExpanded : internalIsExpanded;
  const handleToggle = onToggle || (() => setInternalIsExpanded(!internalIsExpanded));

  return (
    <div className="quick-navigation">
      {!onToggle && (
        <button 
          className="quick-nav-toggle"
          onClick={handleToggle}
          title="Schnelle Navigation"
        >
          <span className="nav-icon">📚</span>
          <span className="nav-text">Aufzüge</span>
        </button>
      )}
      
      {expanded && (
        <div className="quick-nav-menu">
          <h3>Aufzüge</h3>
          <div className="acts-grid">
            {acts.map(act => (
              <button
                key={act.id}
                className={`act-button ${currentAct === act.number ? 'active' : ''}`}
                onClick={() => {
                  onActSelect(act.number);
                  if (onToggle) {
                    // In controlled mode, parent handles closing
                    // onToggle(); // Don't call this as parent will handle it
                  } else {
                    setInternalIsExpanded(false);
                  }
                }}
              >
                <span className="act-number">{act.number}</span>
                <span className="act-title">{act.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { TypographyControls } from './TypographyControls';
import './SettingsPanel.css';

interface SettingsPanelProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export function SettingsPanel({ isOpen = false, onToggle }: SettingsPanelProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  // Use controlled or uncontrolled mode
  const open = onToggle ? isOpen : internalIsOpen;
  const handleToggle = onToggle || (() => setInternalIsOpen(!internalIsOpen));

  return (
    <div className="settings-panel">
      {onToggle && (
        <button 
          className="settings-toggle"
          onClick={handleToggle}
          title="Einstellungen"
          aria-label="Einstellungen öffnen"
        >
          <span className="settings-icon">⚙️</span>
          <span className="settings-label">Einstellungen</span>
        </button>
      )}
      
      {(open || !onToggle) && (
        <div className="settings-dropdown">
          <div className="settings-section">
            <h3>Typografie</h3>
            <TypographyControls />
          </div>
        </div>
      )}
    </div>
  );
}

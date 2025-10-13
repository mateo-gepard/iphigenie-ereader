import type { ExplanationResponse } from '../types';
import './ExplanationPanel.css';

interface ExplanationPanelProps {
  selectedText: string;
  explanation: ExplanationResponse | null;
  isLoading: boolean;
}

export function ExplanationPanel({ selectedText, explanation, isLoading }: ExplanationPanelProps) {
  if (!selectedText) {
    return (
      <div className="explanation-panel empty">
        <div className="empty-state">
          <h3>Willkommen zum interaktiven E-Reader</h3>
          <p>Klicken Sie auf einen Vers oder eine Strophe, um detaillierte Erklärungen, Zusammenfassungen und Hintergrundinformationen zu erhalten.</p>
          <div className="instructions">
            <h4>Anleitung:</h4>
            <ul>
              <li>🖱️ <strong>Einzelner Vers:</strong> Klicken Sie auf eine Zeile für spezifische Erklärungen</li>
              <li>📝 <strong>Strophe:</strong> Klicken Sie auf den Titel einer Strophe für Kontext und Zusammenfassung</li>
              <li>🤖 <strong>KI-gestützt:</strong> Alle Erklärungen werden von ChatGPT generiert</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="explanation-panel">
      <div className="selected-text">
        <h3>Ausgewählter Text:</h3>
        <blockquote>{selectedText}</blockquote>
      </div>

      {isLoading && (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Erklärung wird generiert...</p>
        </div>
      )}

      {explanation && !isLoading && (
        <div className="explanation-content">
          <div className="explanation-section">
            <h4>📚 Erklärung</h4>
            <p>{explanation.explanation}</p>
          </div>

          <div className="explanation-section">
            <h4>📋 Zusammenfassung</h4>
            <p>{explanation.summary}</p>
          </div>

          <div className="explanation-section">
            <h4>🏛️ Hintergrund</h4>
            <p>{explanation.background}</p>
          </div>

          {explanation.literaryDevices && explanation.literaryDevices.length > 0 && (
            <div className="explanation-section">
              <h4>✨ Stilmittel</h4>
              <ul className="tag-list">
                {explanation.literaryDevices.map((device, index) => (
                  <li key={index} className="tag literary-device">{device}</li>
                ))}
              </ul>
            </div>
          )}

          {explanation.themes && explanation.themes.length > 0 && (
            <div className="explanation-section">
              <h4>🎭 Themen</h4>
              <ul className="tag-list">
                {explanation.themes.map((theme, index) => (
                  <li key={index} className="tag theme">{theme}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {!explanation && !isLoading && selectedText && (
        <div className="error-state">
          <h4>⚠️ Fehler</h4>
          <p>Die Erklärung konnte nicht geladen werden. Bitte versuchen Sie es erneut.</p>
        </div>
      )}
    </div>
  );
}

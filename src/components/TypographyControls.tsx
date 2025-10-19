import { useTypography, type FontSize, type FontFamily, type LineHeight } from '../hooks/useTypography';
import './TypographyControls.css';

export function TypographyControls() {
  const { settings, updateSetting } = useTypography();

  return (
    <div className="typography-controls">
      <div className="typography-group">
        <label>Schriftgröße</label>
        <div className="button-group">
          {(['small', 'medium', 'large', 'xlarge'] as FontSize[]).map(size => (
            <button
              key={size}
              className={`typography-btn ${settings.fontSize === size ? 'active' : ''}`}
              onClick={() => updateSetting('fontSize', size)}
              title={`Schriftgröße: ${size}`}
            >
              {size === 'small' && 'A'}
              {size === 'medium' && 'A'}
              {size === 'large' && 'A'}
              {size === 'xlarge' && 'A'}
            </button>
          ))}
        </div>
      </div>

      <div className="typography-group">
        <label>Schriftart</label>
        <div className="button-group">
          {([
            { key: 'system', label: 'Sans', title: 'System-Schrift' },
            { key: 'serif', label: 'Serif', title: 'Serifenschrift' },
            { key: 'mono', label: 'Mono', title: 'Monospace' }
          ] as Array<{ key: FontFamily; label: string; title: string }>).map(font => (
            <button
              key={font.key}
              className={`typography-btn ${settings.fontFamily === font.key ? 'active' : ''}`}
              onClick={() => updateSetting('fontFamily', font.key)}
              title={font.title}
            >
              {font.label}
            </button>
          ))}
        </div>
      </div>

      <div className="typography-group">
        <label>Zeilenhöhe</label>
        <div className="button-group">
          {([
            { key: 'compact', label: '≡', title: 'Kompakt' },
            { key: 'normal', label: '☰', title: 'Normal' },
            { key: 'relaxed', label: '⚌', title: 'Entspannt' }
          ] as Array<{ key: LineHeight; label: string; title: string }>).map(spacing => (
            <button
              key={spacing.key}
              className={`typography-btn ${settings.lineHeight === spacing.key ? 'active' : ''}`}
              onClick={() => updateSetting('lineHeight', spacing.key)}
              title={spacing.title}
            >
              {spacing.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

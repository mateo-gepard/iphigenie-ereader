import { useTheme, type Theme } from '../hooks/useTheme';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light': return '☀️';
      case 'dark': return '🌙';
      case 'auto': return '🌓';
      default: return '🌓';
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light': return 'Hell';
      case 'dark': return 'Dunkel';
      case 'auto': return 'Auto';
      default: return 'Auto';
    }
  };

  return (
    <button 
      className={`theme-toggle ${resolvedTheme}`}
      onClick={toggleTheme}
      title={`Aktuell: ${getLabel()}`}
      aria-label={`Theme wechseln. Aktuell: ${getLabel()}`}
    >
      <span className="theme-icon">{getIcon()}</span>
      <span className="theme-label">{getLabel()}</span>
    </button>
  );
}

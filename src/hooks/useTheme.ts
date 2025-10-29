import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'auto';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('iphigenie-theme');
    // Konvertiere alte 'light' Einstellungen zu 'dark'
    if (saved === 'light') return 'dark';
    return (saved as Theme) || 'dark';  // Dark mode als default
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('iphigenie-theme');
    let resolved: 'light' | 'dark';
    
    if (saved === 'dark') {
      resolved = 'dark';
    } else if (saved === 'auto') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      resolved = 'dark'; // Default für neue Nutzer
    }
    
    // Setze das Theme sofort beim initialisieren
    document.documentElement.setAttribute('data-theme', resolved);
    return resolved;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateResolvedTheme = () => {
      if (theme === 'auto') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setResolvedTheme(theme);
      }
    };

    updateResolvedTheme();
    mediaQuery.addEventListener('change', updateResolvedTheme);

    return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('iphigenie-theme', theme);
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [theme, resolvedTheme]);

  return { theme, setTheme, resolvedTheme };
}

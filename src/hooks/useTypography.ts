import { useState, useEffect } from 'react';

export type FontSize = 'small' | 'medium' | 'large' | 'xlarge';
export type FontFamily = 'system' | 'serif' | 'mono';
export type LineHeight = 'compact' | 'normal' | 'relaxed';

interface TypographySettings {
  fontSize: FontSize;
  fontFamily: FontFamily;
  lineHeight: LineHeight;
}

export function useTypography() {
  const [settings, setSettings] = useState<TypographySettings>(() => {
    const saved = localStorage.getItem('iphigenie-typography');
    return saved ? JSON.parse(saved) : {
      fontSize: 'medium',
      fontFamily: 'system',
      lineHeight: 'normal'
    };
  });

  useEffect(() => {
    localStorage.setItem('iphigenie-typography', JSON.stringify(settings));
    
    // Apply CSS custom properties
    const root = document.documentElement;
    
    // Font size
    const fontSizes = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.setProperty('--font-size-base', fontSizes[settings.fontSize]);
    
    // Font family
    const fontFamilies = {
      system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      serif: 'Georgia, "Times New Roman", serif',
      mono: '"Fira Code", "Cascadia Code", Consolas, monospace'
    };
    root.style.setProperty('--font-family-reading', fontFamilies[settings.fontFamily]);
    
    // Line height
    const lineHeights = {
      compact: '1.4',
      normal: '1.6',
      relaxed: '1.8'
    };
    root.style.setProperty('--line-height-reading', lineHeights[settings.lineHeight]);
    
  }, [settings]);

  const updateSetting = <K extends keyof TypographySettings>(
    key: K, 
    value: TypographySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return { settings, updateSetting };
}

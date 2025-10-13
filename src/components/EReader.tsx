import { useState } from 'react';
import type { IphigenieText, ExplanationResponse } from '../types';
import { OpenAIService } from '../services/openaiService';
import './EReader.css';

interface EReaderProps {
  text: IphigenieText;
  onTextSelection: (text: string, explanation: ExplanationResponse | null, loading: boolean) => void;
}

export function EReader({ text, onTextSelection }: EReaderProps) {
  const [selectedVerseId, setSelectedVerseId] = useState<string>('');
  const [selectedStanzaId, setSelectedStanzaId] = useState<string>('');

  const handleVerseClick = async (verse: { id: string; text: string }, actNumber: number, sceneNumber: number) => {
    if (selectedVerseId === verse.id) {
      // Deselect if clicking the same verse
      setSelectedVerseId('');
      setSelectedStanzaId('');
      onTextSelection('', null, false);
      return;
    }

    setSelectedVerseId(verse.id);
    setSelectedStanzaId('');
    onTextSelection(verse.text, null, true);

    try {
      const explanation = await OpenAIService.getExplanation({
        text: verse.text,
        context: 'verse',
        actNumber,
        sceneNumber
      });
      onTextSelection(verse.text, explanation, false);
    } catch (error) {
      console.error('Fehler beim Laden der Erklärung:', error);
      onTextSelection(verse.text, null, false);
    }
  };

  const handleStanzaClick = async (stanza: any, actNumber: number, sceneNumber: number) => {
    if (selectedStanzaId === stanza.id) {
      // Deselect if clicking the same stanza
      setSelectedStanzaId('');
      setSelectedVerseId('');
      onTextSelection('', null, false);
      return;
    }

    const stanzaText = stanza.verses.map((v: any) => v.text).join('\n');
    
    setSelectedStanzaId(stanza.id);
    setSelectedVerseId('');
    onTextSelection(stanzaText, null, true);

    try {
      const explanation = await OpenAIService.getExplanation({
        text: stanzaText,
        context: 'stanza',
        actNumber,
        sceneNumber
      });
      onTextSelection(stanzaText, explanation, false);
    } catch (error) {
      console.error('Fehler beim Laden der Erklärung:', error);
      onTextSelection(stanzaText, null, false);
    }
  };

  return (
    <div className="e-reader">
      <div className="text-content">
        {text.acts.map((act) => (
          <div key={act.id} className="act">
            <h2 className="act-title">{act.title}</h2>
            
            {act.scenes.map((scene) => (
              <div key={scene.id} className="scene">
                <h3 className="scene-title">{scene.title}</h3>
                
                {scene.stanzas.map((stanza) => (
                  <div 
                    key={stanza.id} 
                    className={`stanza ${selectedStanzaId === stanza.id ? 'selected-stanza' : ''}`}
                  >
                    <div className="stanza-header">
                      <h4 
                        className="stanza-title clickable"
                        onClick={() => handleStanzaClick(stanza, act.number, scene.number)}
                      >
                        {stanza.title}
                      </h4>
                    </div>
                    
                    <div className="verses">
                      {stanza.verses.map((verse) => (
                        <div
                          key={verse.id}
                          className={`verse ${selectedVerseId === verse.id ? 'selected-verse' : ''} clickable`}
                          onClick={() => handleVerseClick(verse, act.number, scene.number)}
                        >
                          <span className="line-number">{verse.lineNumber}</span>
                          <span className="verse-text">{verse.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

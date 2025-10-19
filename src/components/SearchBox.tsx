import { useState, useMemo } from 'react';
import type { Act } from '../types';
import './SearchBox.css';

interface SearchResult {
  type: 'verse' | 'stanza' | 'scene' | 'act';
  id: string;
  text: string;
  actNumber: number;
  sceneNumber?: number;
  context: string;
  matchIndex: number;
}

interface SearchBoxProps {
  text: Act[];
  onResultSelect: (result: SearchResult) => void;
}

export function SearchBox({ text, onResultSelect }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const searchResults = useMemo(() => {
    if (!query || query.length < 2) return [];

    const results: SearchResult[] = [];
    const searchTerm = query.toLowerCase();

    text.forEach(act => {
      // Search in act title
      if (act.title.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'act',
          id: act.id,
          text: act.title,
          actNumber: act.number,
          context: `Aufzug ${act.number}`,
          matchIndex: act.title.toLowerCase().indexOf(searchTerm)
        });
      }

      act.scenes.forEach(scene => {
        // Search in scene title
        if (scene.title.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'scene',
            id: scene.id,
            text: scene.title,
            actNumber: act.number,
            sceneNumber: scene.number,
            context: `Aufzug ${act.number}, Szene ${scene.number}`,
            matchIndex: scene.title.toLowerCase().indexOf(searchTerm)
          });
        }

        scene.stanzas.forEach(stanza => {
          // Search in stanza title
          if (stanza.title.toLowerCase().includes(searchTerm)) {
            results.push({
              type: 'stanza',
              id: stanza.id,
              text: stanza.title,
              actNumber: act.number,
              sceneNumber: scene.number,
              context: `Aufzug ${act.number}, Szene ${scene.number}`,
              matchIndex: stanza.title.toLowerCase().indexOf(searchTerm)
            });
          }

          stanza.verses.forEach(verse => {
            // Search in verse text
            if (verse.text.toLowerCase().includes(searchTerm)) {
              results.push({
                type: 'verse',
                id: verse.id,
                text: verse.text,
                actNumber: act.number,
                sceneNumber: scene.number,
                context: `Aufzug ${act.number}, Szene ${scene.number}, Vers ${verse.lineNumber}`,
                matchIndex: verse.text.toLowerCase().indexOf(searchTerm)
              });
            }
          });
        });
      });
    });

    // Sort by relevance (exact matches first, then by position)
    return results
      .sort((a, b) => {
        // Prioritize exact matches
        const aExact = a.text.toLowerCase() === searchTerm;
        const bExact = b.text.toLowerCase() === searchTerm;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        // Then by match index (earlier matches first)
        return a.matchIndex - b.matchIndex;
      })
      .slice(0, 20); // Limit to 20 results
  }, [query, text]);

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;

    return (
      <>
        {text.substring(0, index)}
        <mark className="search-highlight">{text.substring(index, index + query.length)}</mark>
        {text.substring(index + query.length)}
      </>
    );
  };

  return (
    <div className="search-box">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Text durchsuchen..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      {isExpanded && query && (
        <div className="search-results">
          {searchResults.length > 0 ? (
            <div className="results-list">
              <div className="results-header">
                <span>{searchResults.length} Ergebnisse für "{query}"</span>
                <button 
                  className="close-search"
                  onClick={() => setIsExpanded(false)}
                >
                  ✕
                </button>
              </div>
              {searchResults.map((result, index) => (
                <div
                  key={`${result.id}-${index}`}
                  className={`search-result ${result.type}`}
                  onClick={() => {
                    onResultSelect(result);
                    setIsExpanded(false);
                    setQuery('');
                  }}
                >
                  <div className="result-type">
                    {result.type === 'act' && '📚'}
                    {result.type === 'scene' && '🎭'}
                    {result.type === 'stanza' && '📝'}
                    {result.type === 'verse' && '💬'}
                  </div>
                  <div className="result-content">
                    <div className="result-text">
                      {highlightMatch(result.text, query)}
                    </div>
                    <div className="result-context">{result.context}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <div className="no-results-text">
                Keine Ergebnisse für "{query}"
              </div>
              <div className="search-tips">
                <small>Tipp: Versuchen Sie andere Suchbegriffe oder prüfen Sie die Schreibweise</small>
              </div>
            </div>
          ) : (
            <div className="search-hint">
              <small>Mindestens 2 Zeichen eingeben</small>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export interface Character {
  id: string;
  name: string;
  aliases: string[];
  description: string;
  role: string;
  mythology: string;
  keyTraits: string[];
  relationships: Record<string, string>;
  color: string; // Eindeutige Farbe für jeden Charakter
}

export const characters: Character[] = [
  {
    id: 'iphigenie',
    name: 'Iphigenie',
    aliases: ['Iphigenia', 'Priesterin', 'Tochter des Agamemnon'],
    description: 'Protagonistin des Dramas, Priesterin der Diana auf Tauris. Verkörpert Goethes Ideal der "schönen Seele" - rein, wahrhaftig und humanitär.',
    role: 'Protagonistin, moralisches Zentrum des Dramas',
    mythology: 'In der griechischen Mythologie sollte sie von ihrem Vater Agamemnon geopfert werden, wurde aber von Diana gerettet und nach Tauris gebracht.',
    keyTraits: ['Wahrhaftigkeit', 'Reinheit', 'Humanität', 'Sehnsucht nach Heimat', 'Gewissenskonflikt'],
    color: '#e11d48', // Rosa/Rot - Protagonistin, zentrale Figur
    relationships: {
      'thoas': 'Respektvolle aber distanzierte Beziehung zum König, der sie liebt',
      'orest': 'Innige Geschwisterliebe, sie heilt seinen Wahnsinn',
      'pylades': 'Vertrauen und Dankbarkeit für seine Freundschaft zu Orest',
      'agamemnon': 'Komplexe Vater-Tochter-Beziehung, geprägt von Trauma und Vergebung'
    }
  },
  {
    id: 'thoas',
    name: 'Thoas',
    aliases: ['König Thoas', 'König der Taurier', 'der König'],
    description: 'König der Taurier, edelmütig aber von barbarischen Sitten geprägt. Liebt Iphigenie und wird durch sie zum humaneren Herrscher.',
    role: 'Antagonist und zugleich läuterungsfähiger Herrscher',
    mythology: 'Legendärer König der Taurier (Krim), in dessen Reich Fremdenopfer üblich waren.',
    keyTraits: ['Edelmut', 'Leidenschaft', 'Wandlungsfähigkeit', 'Königliche Würde', 'Barbarische Herkunft'],
    color: '#1d4ed8', // Blau - Königlich, mächtig
    relationships: {
      'iphigenie': 'Tiefe, unerfüllte Liebe; wird durch sie geläutert',
      'orest': 'Zunächst Feindschaft, dann Respekt und Großmut',
      'pylades': 'Misstrauen, das sich in Anerkennung wandelt',
      'arkas': 'Vertrauter Berater und loyaler Diener'
    }
  },
  {
    id: 'orest',
    name: 'Orest',
    aliases: ['Orestes', 'Sohn des Agamemnon', 'der Bruder'],
    description: 'Iphigenies Bruder, geplagt von Wahnsinn durch den Muttermord. Seine Heilung durch Schwesterliebe steht im Zentrum des Dramas.',
    role: 'Zweite Hauptfigur, Symbol der Läuterung durch Liebe',
    mythology: 'Sohn Agamemnons, tötete seine Mutter Klytämnestra aus Rache für den Mord an seinem Vater.',
    keyTraits: ['Wahnsinn', 'Schuldgefühl', 'Geschwisterliebe', 'Läuterungsfähigkeit', 'Tragische Vergangenheit'],
    color: '#059669', // Grün - Heilung, Läuterung
    relationships: {
      'iphigenie': 'Erlösende Geschwisterliebe, sie heilt seinen Wahnsinn',
      'pylades': 'Treue, lebenslange Freundschaft',
      'thoas': 'Von Feindschaft zu gegenseitigem Respekt',
      'klytaemnestra': 'Mutter-Sohn-Konflikt, der zu seinem Wahnsinn führte'
    }
  },
  {
    id: 'pylades',
    name: 'Pylades',
    aliases: ['der Freund', 'Gefährte des Orest'],
    description: 'Orests treuer Freund und Begleiter. Pragmatisch und listig, Gegenpol zu Iphigenies moralischem Rigorismus.',
    role: 'Treuer Freund, Pragmatiker und Handlungsmotor',
    mythology: 'Klassischer Freund des Orest in der griechischen Mythologie, Symbol bedingungsloser Freundschaft.',
    keyTraits: ['Treue', 'Pragmatismus', 'Klugheit', 'Mut', 'Loyalität'],
    color: '#ea580c', // Orange - Pragmatismus, Wärme der Freundschaft
    relationships: {
      'orest': 'Bedingungslose, lebenslange Freundschaft',
      'iphigenie': 'Respekt und Dankbarkeit, aber auch Meinungsverschiedenheiten',
      'thoas': 'Zunächst Misstrauen, später Anerkennung'
    }
  },
  {
    id: 'arkas',
    name: 'Arkas',
    aliases: ['der Diener', 'Thoas\' Vertrauter'],
    description: 'Thoas\' treuer Diener und Berater. Vermittelt zwischen den Charakteren und verkörpert loyale Dienerschaften.',
    role: 'Nebenfigur, Vermittler und Botschafter',
    mythology: 'Erfindung Goethes, nicht aus antiken Quellen stammend.',
    keyTraits: ['Loyalität', 'Diplomatisches Geschick', 'Treue zum König', 'Vermittlerrolle'],
    color: '#6b7280', // Grau - Dienerschaft, Neutralität
    relationships: {
      'thoas': 'Bedingungslose Loyalität und Vertrauen',
      'iphigenie': 'Respektvolle Distanz, Überbringer königlicher Botschaften'
    }
  },
  {
    id: 'agamemnon',
    name: 'Agamemnon',
    aliases: ['Vater', 'König von Mykene', 'der tote König'],
    description: 'Iphigenies und Orests Vater, bereits verstorben. Seine Taten wirken als Fluch auf die Familie nach.',
    role: 'Unsichtbare, aber zentrale Figur der Vorgeschichte',
    mythology: 'König von Mykene, Anführer der Griechen im Trojanischen Krieg, opferte Iphigenie für günstigen Wind.',
    keyTraits: ['Königliche Macht', 'Opferbereitschaft für den Krieg', 'Familienfluch', 'Tragische Schuld'],
    color: '#7c2d12', // Dunkelbraun - Tod, Vergangenheit, Schwere
    relationships: {
      'iphigenie': 'Vater-Tochter-Trauma durch geplantes Opfer',
      'orest': 'Posthume Vater-Sohn-Beziehung, Racheauftrag',
      'klytaemnestra': 'Ehepaar-Konflikt, der zu seinem Tod führte'
    }
  },
  {
    id: 'klytaemnestra',
    name: 'Klytämnestra',
    aliases: ['Mutter', 'die Königin', 'Gattin Agamemnons'],
    description: 'Mutter von Iphigenie und Orest, tötete Agamemnon aus Rache und wurde von Orest erschlagen.',
    role: 'Unsichtbare Figur der Vorgeschichte, Auslöser des Familienfluchs',
    mythology: 'Agamemnons Gattin, rächte sich für Iphigenies geplantes Opfer durch Mord an ihrem Mann.',
    keyTraits: ['Rachedurst', 'Mütterliche Liebe', 'Königliche Macht', 'Tragische Schuld'],
    color: '#7c3aed', // Violett - Tragödie, komplexe Mutter-Figur
    relationships: {
      'agamemnon': 'Zerrüttete Ehe, die im Mord endet',
      'iphigenie': 'Mutter-Tochter-Liebe, überschattet von Familientragödie',
      'orest': 'Mutter-Sohn-Konflikt, der zu ihrem Tod führt'
    }
  },
  {
    id: 'diana',
    name: 'Diana',
    aliases: ['Artemis', 'die Göttin', 'Göttin der Jagd'],
    description: 'Römische Göttin der Jagd (griechisch: Artemis), der auf Tauris Menschenopfer dargebracht werden.',
    role: 'Gottheit, der Iphigenie als Priesterin dient',
    mythology: 'Jungfräuliche Göttin der Jagd und des Mondes, forderte ursprünglich Iphigenies Opferung.',
    keyTraits: ['Göttliche Macht', 'Jungfräulichkeit', 'Jagd und Natur', 'Opferkult'],
    color: '#c2410c', // Gold/Gelb - Göttlichkeit, Licht
    relationships: {
      'iphigenie': 'Priesterin-Göttin-Verhältnis, Schutz und Dienstbarkeit'
    }
  }
];

// Dynamische Charaktererkennung - erkennt automatisch alle Charaktere in jedem Text
export function findCharactersInText(text: string): Array<{character: Character, matches: string[]}> {
  const foundCharacters: Array<{character: Character, matches: string[]}> = [];
  
  characters.forEach(character => {
    const allNames = [character.name, ...character.aliases];
    const matches: string[] = [];
    
    allNames.forEach(name => {
      // Erstelle flexible Regex für verschiedene Textformen
      const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Verschiedene Regex-Patterns für maximale Abdeckung
      const patterns = [
        // Exakte Wortgrenze
        new RegExp(`\\b${escapedName}\\b`, 'gi'),
        // Mit Satzzeichen (für Dialoge)
        new RegExp(`${escapedName}[.!?:;,]`, 'gi'),
        // Am Satzanfang
        new RegExp(`^${escapedName}\\b`, 'gim'),
        // Nach Leerzeichen/Zeilenumbruch
        new RegExp(`\\s${escapedName}\\b`, 'gi'),
        // In Klammern oder Anführungszeichen
        new RegExp(`[("']${escapedName}[)"']`, 'gi')
      ];
      
      patterns.forEach(regex => {
        const textMatches = text.match(regex);
        if (textMatches) {
          // Bereinige die Matches (entferne Satzzeichen etc.)
          const cleanMatches = textMatches.map(match => 
            match.replace(/^[\s("']+|[.!?:;,)"'\s]+$/g, '').trim()
          ).filter(match => match.length > 0);
          matches.push(...cleanMatches);
        }
      });
    });
    
    // Entferne Duplikate
    const uniqueMatches = [...new Set(matches)];
    
    if (uniqueMatches.length > 0) {
      foundCharacters.push({ character, matches: uniqueMatches });
    }
  });
  
  return foundCharacters;
}

// Neue Funktion: Automatische Charaktererkennung für unbekannte Texte
export function discoverCharactersInText(text: string): Array<{name: string, frequency: number, contexts: string[]}> {
  // Finde alle Eigennamen (Großbuchstaben am Wortanfang)
  const nameRegex = /\b[A-ZÄÖÜ][a-zäöüß]+(?:\s+[A-ZÄÖÜ][a-zäöüß]+)?\b/g;
  const potentialNames = text.match(nameRegex) || [];
  
  // Zähle Häufigkeiten
  const nameFrequency: Record<string, {count: number, contexts: string[]}> = {};
  
  potentialNames.forEach(name => {
    if (name.length > 2 && !isCommonWord(name)) {
      if (!nameFrequency[name]) {
        nameFrequency[name] = {count: 0, contexts: []};
      }
      nameFrequency[name].count++;
      
      // Sammle Kontext (Satz um den Namen)
      const nameIndex = text.indexOf(name);
      const contextStart = Math.max(0, nameIndex - 50);
      const contextEnd = Math.min(text.length, nameIndex + name.length + 50);
      const context = text.slice(contextStart, contextEnd).trim();
      
      if (nameFrequency[name].contexts.length < 3) {
        nameFrequency[name].contexts.push(context);
      }
    }
  });
  
  // Sortiere nach Häufigkeit und gib die wahrscheinlichsten Charaktere zurück
  return Object.entries(nameFrequency)
    .filter(([, data]) => data.count >= 2) // Mindestens 2x erwähnt
    .map(([name, data]) => ({
      name,
      frequency: data.count,
      contexts: data.contexts
    }))
    .sort((a, b) => b.frequency - a.frequency);
}

// Hilfsfunktion: Prüfe ob es sich um ein gewöhnliches Wort handelt
function isCommonWord(word: string): boolean {
  const commonWords = [
    'Der', 'Die', 'Das', 'Ein', 'Eine', 'Und', 'Oder', 'Aber', 'Doch', 
    'Wenn', 'Dann', 'Wie', 'Was', 'Wer', 'Wo', 'Warum', 'Gott', 'Herr',
    'Frau', 'Mann', 'Kind', 'Vater', 'Mutter', 'Sohn', 'Tochter',
    'König', 'Königin', 'Prinz', 'Prinzessin', 'Göttin', 'Zeus', 'Apollo'
  ];
  return commonWords.includes(word);
}

// Funktion für Charaktervergleiche - jetzt vollständig dynamisch
export function getCharacterRelationship(char1Id: string, char2Id: string): string {
  const character1 = characters.find(c => c.id === char1Id);
  const character2 = characters.find(c => c.id === char2Id);
  
  if (!character1 || !character2) return '';
  
  // Prüfe direkte Beziehung
  const relationship1to2 = character1.relationships[char2Id];
  const relationship2to1 = character2.relationships[char1Id];
  
  if (relationship1to2 && relationship2to1) {
    return `**${character1.name}** zu **${character2.name}**: ${relationship1to2}\n\n**${character2.name}** zu **${character1.name}**: ${relationship2to1}`;
  } else if (relationship1to2) {
    return `**${character1.name}** zu **${character2.name}**: ${relationship1to2}`;
  } else if (relationship2to1) {
    return `**${character2.name}** zu **${character1.name}**: ${relationship2to1}`;
  }
  
  return `Keine direkte Beziehung zwischen ${character1.name} und ${character2.name} definiert.`;
}

// Neue Funktion: Dynamische Beziehungsanalyse basierend auf Textinhalt
export function analyzeCharacterRelationshipInText(
  char1Name: string, 
  char2Name: string, 
  textContent: string
): string {
  // Finde Textpassagen, wo beide Charaktere erwähnt werden
  const paragraphs = textContent.split(/\n\s*\n/);
  const relevantParagraphs: string[] = [];
  
  paragraphs.forEach(paragraph => {
    const hasChar1 = new RegExp(`\\b${char1Name}\\b`, 'gi').test(paragraph);
    const hasChar2 = new RegExp(`\\b${char2Name}\\b`, 'gi').test(paragraph);
    
    if (hasChar1 && hasChar2) {
      relevantParagraphs.push(paragraph.trim());
    }
  });
  
  if (relevantParagraphs.length === 0) {
    return `**${char1Name}** und **${char2Name}** werden nicht gemeinsam im verfügbaren Text erwähnt.`;
  }
  
  // Analysiere die Beziehung basierend auf dem Kontext
  const relationshipIndicators = analyzeRelationshipContext(relevantParagraphs, char1Name, char2Name);
  
  return `**Textbasierte Beziehungsanalyse zwischen ${char1Name} und ${char2Name}:**\n\n${relationshipIndicators}\n\n**Relevante Textpassagen:**\n${relevantParagraphs.slice(0, 3).map(p => `• ${p.substring(0, 200)}...`).join('\n')}`;
}

// Hilfsfunktion: Analysiere Beziehungskontext
function analyzeRelationshipContext(paragraphs: string[], _char1: string, _char2: string): string {
  const indicators: string[] = [];
  const allText = paragraphs.join(' ').toLowerCase();
  
  // Familiäre Beziehungen
  if (/(bruder|schwester|geschwister)/i.test(allText)) {
    indicators.push('🔗 **Familiäre Verbindung** - Hinweise auf Geschwisterbeziehung');
  }
  if (/(vater|tochter|sohn|mutter|eltern|kind)/i.test(allText)) {
    indicators.push('👨‍👩‍👧‍👦 **Familiäre Bindung** - Hinweise auf Eltern-Kind-Beziehung');
  }
  
  // Emotionale Beziehungen
  if (/(liebe|liebst|geliebt|herz)/i.test(allText)) {
    indicators.push('❤️ **Romantische/Emotionale Verbindung** - Hinweise auf Liebe oder tiefe Zuneigung');
  }
  if (/(freund|freundschaft|treue|vertrauen)/i.test(allText)) {
    indicators.push('🤝 **Freundschaftliche Beziehung** - Hinweise auf Vertrauen und Loyalität');
  }
  
  // Konfliktuelle Beziehungen
  if (/(feind|hass|zorn|wut|streit|konflikt)/i.test(allText)) {
    indicators.push('⚔️ **Konfliktuelle Beziehung** - Hinweise auf Spannungen oder Feindschaft');
  }
  if (/(verrat|betrug|täuschung|lüge)/i.test(allText)) {
    indicators.push('💔 **Problematische Beziehung** - Hinweise auf Vertrauensbruch');
  }
  
  // Soziale Hierarchien
  if (/(könig|herr|diener|gehorsam|befehl)/i.test(allText)) {
    indicators.push('👑 **Hierarchische Beziehung** - Hinweise auf Macht- oder Statusunterschiede');
  }
  
  // Gesprächsmuster
  const dialogCount = (allText.match(/[.!?]\s*[A-ZÄÖÜ]/g) || []).length;
  if (dialogCount > 3) {
    indicators.push('💬 **Intensive Kommunikation** - Häufige Dialoge und Interaktionen');
  }
  
  return indicators.length > 0 
    ? indicators.join('\n') 
    : '🔍 **Neutrale Erwähnung** - Charaktere werden gemeinsam erwähnt, aber ohne erkennbare spezifische Beziehungsdynamik';
}

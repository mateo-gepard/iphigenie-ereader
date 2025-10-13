export interface Character {
  id: string;
  name: string;
  aliases: string[];
  description: string;
  role: string;
  mythology: string;
  keyTraits: string[];
  relationships: Record<string, string>;
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
    relationships: {
      'iphigenie': 'Priesterin-Göttin-Verhältnis, Schutz und Dienstbarkeit'
    }
  }
];

// Funktion zum Finden von Charakteren im Text
export function findCharactersInText(text: string): Array<{character: Character, matches: string[]}> {
  const foundCharacters: Array<{character: Character, matches: string[]}> = [];
  
  characters.forEach(character => {
    const allNames = [character.name, ...character.aliases];
    const matches: string[] = [];
    
    allNames.forEach(name => {
      // Erstelle Regex für Wort-Grenzen
      const regex = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      const textMatches = text.match(regex);
      if (textMatches) {
        matches.push(...textMatches);
      }
    });
    
    if (matches.length > 0) {
      foundCharacters.push({ character, matches });
    }
  });
  
  return foundCharacters;
}

// Funktion für Charaktervergleiche
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

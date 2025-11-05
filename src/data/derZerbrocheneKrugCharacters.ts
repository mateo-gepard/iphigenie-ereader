export interface Character {
  id: string;
  name: string;
  aliases: string[];
  description: string;
  role: string;
  mythology: string;
  keyTraits: string[];
  relationships: Record<string, string>;
  color: string;
}

export const derZerbrocheneKrugCharacters: Character[] = [
  {
    id: 'adam',
    name: 'Adam',
    aliases: ['Dorfrichter Adam', 'Richter'],
    description: 'Korrupter Dorfrichter, der den Krug selbst zerbrochen hat und nun das Verfahren leiten muss.',
    role: 'Protagonist und Antagonist zugleich, komische Hauptfigur',
    mythology: 'Anspielung auf den biblischen Adam (Sündenfall)',
    keyTraits: ['Korruption', 'Verschlagenheit', 'Komik', 'Selbsterhaltungstrieb', 'Verlogenheit'],
    color: '#b45309',
    relationships: {
      'eve': 'Versuchte nächtliche Annäherung',
      'walter': 'Angst vor Entdeckung durch den Gerichtsrat',
      'licht': 'Misstrauische Kollegenbeziehung'
    }
  },
  {
    id: 'eve',
    name: 'Eve',
    aliases: ['Evchen'],
    description: 'Junges Mädchen, Opfer von Adams Annäherungsversuch und Tochter von Frau Marthe.',
    role: 'Weibliche Hauptfigur, Opfer und moralisches Zentrum',
    mythology: 'Biblische Eva (Unschuld und Versuchung)',
    keyTraits: ['Unschuld', 'Treue', 'Verzweiflung', 'Mut', 'Liebe'],
    color: '#ec4899',
    relationships: {
      'ruprecht': 'Verlobter, den sie schützen will',
      'adam': 'Opfer seiner Belästigung',
      'marthe': 'Tochter-Mutter-Beziehung'
    }
  },
  {
    id: 'walter',
    name: 'Walter',
    aliases: ['Gerichtsrat Walter', 'Der Gerichtsrat'],
    description: 'Gerechter Revisor aus Utrecht, der die Wahrheit ans Licht bringt.',
    role: 'Verkörperung der Gerechtigkeit',
    mythology: 'Keine direkte mythologische Referenz',
    keyTraits: ['Gerechtigkeit', 'Autorität', 'Scharfsinn', 'Unbestechlichkeit', 'Würde'],
    color: '#0891b2',
    relationships: {
      'adam': 'Aufdeckung von dessen Korruption',
      'licht': 'Vertrauen in dessen Ehrlichkeit'
    }
  },
  {
    id: 'licht',
    name: 'Licht',
    aliases: ['Schreiber Licht', 'Gerichtsschreiber'],
    description: 'Ehrlicher Gerichtsschreiber, der Adams Machenschaften durchschaut.',
    role: 'Aufklärer und moralisches Korrektiv',
    mythology: 'Name symbolisch: Licht der Wahrheit',
    keyTraits: ['Ehrlichkeit', 'Scharfsinn', 'Pflichtbewusstsein', 'Ironie', 'Loyalität'],
    color: '#eab308',
    relationships: {
      'adam': 'Durchschaut dessen Lügen',
      'walter': 'Unterstützt die Aufklärung'
    }
  }
];

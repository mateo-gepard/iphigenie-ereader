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

export const dieRaeuberCharacters: Character[] = [
  {
    id: 'karl',
    name: 'Karl Moor',
    aliases: ['Karl', 'Der Hauptmann', 'Der Räuberhauptmann'],
    description: 'Edler Räuberhauptmann, vom Vater verstoßen durch Franz\' Intrigen, wird zum Anführer einer Räuberbande.',
    role: 'Tragischer Held, Rebell gegen Ungerechtigkeit',
    mythology: 'Keine direkte Referenz, aber Robin-Hood-Motiv',
    keyTraits: ['Idealismus', 'Leidenschaft', 'Rebellion', 'Gewissen', 'Tragik'],
    color: '#dc2626',
    relationships: {
      'franz': 'Verfeindete Brüder, Opfer von Franz\' Intrigen',
      'alterMoor': 'Entfremdete Vater-Sohn-Beziehung',
      'amalia': 'Tragische Liebesbeziehung'
    }
  },
  {
    id: 'franz',
    name: 'Franz Moor',
    aliases: ['Franz', 'Der böse Bruder'],
    description: 'Intriganter jüngerer Bruder, der Karl beim Vater verleumdet, um das Erbe zu erlangen.',
    role: 'Antagonist, Verkörperung des Bösen',
    mythology: 'Kain-und-Abel-Motiv, Shakespeare\'s Iago',
    keyTraits: ['Intrige', 'Zynismus', 'Ehrgeiz', 'Kälte', 'Selbstzerstörung'],
    color: '#7c2d12',
    relationships: {
      'karl': 'Neid und Hass auf den Bruder',
      'alterMoor': 'Manipulation des Vaters',
      'amalia': 'Unerfüllte Begierde'
    }
  },
  {
    id: 'alterMoor',
    name: 'Maximilian von Moor',
    aliases: ['Der alte Moor', 'Vater Moor', 'Graf Moor'],
    description: 'Alter Graf, Vater von Karl und Franz, wird von Franz getäuscht und manipuliert.',
    role: 'Tragisches Opfer, Vaterfigur',
    mythology: 'König Lear-Parallele',
    keyTraits: ['Gutmütigkeit', 'Leichtgläubigkeit', 'Schwäche', 'Väterliche Liebe', 'Leid'],
    color: '#6b7280',
    relationships: {
      'karl': 'Entfremdete, aber tiefe Vater-Sohn-Liebe',
      'franz': 'Wird von ihm manipuliert und betrogen'
    }
  },
  {
    id: 'amalia',
    name: 'Amalia',
    aliases: ['Amalia von Edelreich'],
    description: 'Karls Verlobte, bleibt ihm treu trotz seiner Abwesenheit.',
    role: 'Liebende, Verkörperung von Treue',
    mythology: 'Penelope-Motiv (treue Wartende)',
    keyTraits: ['Treue', 'Liebe', 'Standhaftigkeit', 'Tragik', 'Reinheit'],
    color: '#ec4899',
    relationships: {
      'karl': 'Tiefe, tragische Liebesbeziehung',
      'franz': 'Abwehr seiner Annäherungsversuche'
    }
  }
];

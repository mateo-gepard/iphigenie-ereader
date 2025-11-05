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

export const nathanCharacters: Character[] = [
  {
    id: 'nathan',
    name: 'Nathan',
    aliases: ['Nathan der Weise', 'Der Jude', 'Der reiche Jude'],
    description: 'Weiser jüdischer Kaufmann in Jerusalem, Protagonist und Verkörperung der Aufklärung.',
    role: 'Protagonist, Verkörperung von Weisheit und Toleranz',
    mythology: 'Inspiriert von Moses Mendelssohn, dem Freund Lessings',
    keyTraits: ['Weisheit', 'Toleranz', 'Humanität', 'Vernunft', 'Güte'],
    color: '#0891b2',
    relationships: {
      'recha': 'Väterliche Liebe zu seiner Pflegetochter',
      'saladin': 'Freundschaft durch gegenseitigen Respekt',
      'tempelherr': 'Anfangs Misstrauen, später väterliche Zuneigung'
    }
  },
  {
    id: 'recha',
    name: 'Recha',
    aliases: ['Nathans Tochter', 'Blanda von Filnek'],
    description: 'Nathans Pflegetochter, die bei einem Brand vom Tempelherrn gerettet wird.',
    role: 'Nathans Tochter, Objekt der Liebe und Enthüllung',
    mythology: 'Christlich geboren, aber jüdisch erzogen',
    keyTraits: ['Unschuld', 'Religiosität', 'Dankbarkeit', 'Schwärmerei', 'Jugend'],
    color: '#ec4899',
    relationships: {
      'nathan': 'Innige Vater-Tochter-Beziehung',
      'tempelherr': 'Romantische Zuneigung und Geschwisterschaft',
      'daja': 'Vertraute Beziehung zur Gesellschafterin'
    }
  },
  {
    id: 'saladin',
    name: 'Saladin',
    aliases: ['Sultan', 'Der Sultan von Jerusalem'],
    description: 'Sultan von Jerusalem, edelmütig und großzügig, aber in Geldnot.',
    role: 'Herrscher, der durch Nathan Weisheit lernt',
    mythology: 'Historische Figur: Sultan von Ägypten und Syrien (1138-1193)',
    keyTraits: ['Edelmut', 'Großzügigkeit', 'Neugier', 'Gerechtigkeitssinn', 'Würde'],
    color: '#d97706',
    relationships: {
      'nathan': 'Entwicklung von Misstrauen zu tiefer Freundschaft',
      'sittah': 'Geschwisterliche Vertrautheit',
      'tempelherr': 'Gnade und väterliche Zuneigung'
    }
  },
  {
    id: 'tempelherr',
    name: 'Tempelherr',
    aliases: ['Curd von Stauffen', 'Leu von Filnek', 'Der Ritter'],
    description: 'Junger christlicher Ritter, von Saladin begnadigt, rettet Recha aus dem Brand.',
    role: 'Held und Liebender, Symbol der Vorurteile und Wandlung',
    mythology: 'Tempelritter - christlicher Ritterorden während der Kreuzzüge',
    keyTraits: ['Mut', 'Stolz', 'Vorurteil', 'Leidenschaft', 'Wandlungsfähigkeit'],
    color: '#dc2626',
    relationships: {
      'recha': 'Rettung, Liebe und Geschwisterschaft',
      'nathan': 'Von Ablehnung zu Respekt und Dankbarkeit',
      'saladin': 'Dankbarkeit für Begnadigung'
    }
  }
];

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

export const faust1Characters: Character[] = [
  {
    id: 'faust',
    name: 'Faust',
    aliases: ['Dr. Faust', 'Heinrich Faust', 'Doktor'],
    description: 'Gelehrter, der nach höherer Erkenntnis strebt und einen Pakt mit dem Teufel eingeht.',
    role: 'Protagonist, Suchender nach Wahrheit und Erfüllung',
    mythology: 'Basiert auf der historischen Figur des Dr. Johann Georg Faust, deutscher Alchemist',
    keyTraits: ['Erkenntnisdrang', 'Unzufriedenheit', 'Rastlosigkeit', 'Leidenschaft', 'Zwiespältigkeit'],
    color: '#dc2626',
    relationships: {
      'mephistopheles': 'Pakt und teuflische Partnerschaft',
      'gretchen': 'Tragische Liebesbeziehung',
      'wagner': 'Schüler-Lehrer-Verhältnis'
    }
  },
  {
    id: 'mephistopheles',
    name: 'Mephistopheles',
    aliases: ['Mephisto', 'Der Teufel', 'Der böse Geist'],
    description: 'Der Teufel, der Faust verführt und durch die Welt führt.',
    role: 'Antagonist, Verführer und zynischer Begleiter',
    mythology: 'Teufelsfigur aus der Faust-Sage',
    keyTraits: ['Zynismus', 'Verführung', 'Spott', 'Intelligenz', 'Verneinung'],
    color: '#7c2d12',
    relationships: {
      'faust': 'Vertraglicher Pakt, wechselseitiges Abhängigkeitsverhältnis',
      'gretchen': 'Instrumentalisierung für Fausts Verführung'
    }
  },
  {
    id: 'gretchen',
    name: 'Gretchen',
    aliases: ['Margarete', 'Grete'],
    description: 'Unschuldiges junges Mädchen, das durch Fausts Liebe ins Verderben stürzt.',
    role: 'Tragisches Opfer der Liebe',
    mythology: 'Verkörperung der "reinen Seele"',
    keyTraits: ['Unschuld', 'Religiosität', 'Naivität', 'Liebe', 'Tragik'],
    color: '#ec4899',
    relationships: {
      'faust': 'Leidenschaftliche, tragische Liebesbeziehung',
      'mephistopheles': 'Opfer seiner Machenschaften'
    }
  }
];

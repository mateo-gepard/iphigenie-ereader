export interface Verse {
  id: string;
  text: string;
  lineNumber: number;
}

export interface Stanza {
  id: string;
  title: string; // Speaker name like "IPHIGENIE", "THOAS"
  verses: Verse[];
  act: number;
  scene: number;
}

export interface Scene {
  id: string;
  title: string; // Like "ERSTER AUFTRITT", "ZWEITER AUFTRITT"
  number: number;
  stanzas: Stanza[];
}

export interface Act {
  id: string;
  title: string; // Like "ERSTER AUFZUG", "ZWEITER AUFZUG"
  number: number;
  scenes: Scene[];
}

export const iphigenieText: Act[] = [
  {
    "id": "act-1",
    "title": "ERSTER AUFZUG",
    "number": 1,
    "scenes": [
      {
        "id": "act-1-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": [
          {
            "id": "act-1-scene-1-stanza-1",
            "title": "IPHIGENIE:",
            "verses": [
              {
                "id": "act-1-scene-1-stanza-1-verse-1",
                "text": "Heraus in eure Schatten, rege Wipfel",
                "lineNumber": 1
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-2",
                "text": "Des alten, heil'gen, dichtbelaubten Haines,",
                "lineNumber": 2
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-3",
                "text": "Wie in der Göttin stilles Heiligtum,",
                "lineNumber": 3
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-4",
                "text": "Tret ich noch jetzt mit schauderndem Gefühl,",
                "lineNumber": 4
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-5",
                "text": "Als wenn ich sie zum erstenmal beträte,",
                "lineNumber": 5
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-6",
                "text": "Und es gewöhnt sich nicht mein Geist hierher.",
                "lineNumber": 6
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-7",
                "text": "So manches Jahr bewahrt mich hier verborgen",
                "lineNumber": 7
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-8",
                "text": "Ein hoher Wille, dem ich mich ergebe;",
                "lineNumber": 8
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-9",
                "text": "Doch immer bin ich, wie im ersten, fremd.",
                "lineNumber": 9
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-10",
                "text": "Denn ach! mich trennt das Meer von den Geliebten,",
                "lineNumber": 10
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-11",
                "text": "Und an dem Ufer steh ich lange Tage,",
                "lineNumber": 11
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-12",
                "text": "Das Land der Griechen mit der Seele suchend;",
                "lineNumber": 12
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-13",
                "text": "Und gegen meine Seufzer bringt die Welle",
                "lineNumber": 13
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-14",
                "text": "Nur dumpfe Töne brausend mir herüber.",
                "lineNumber": 14
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-15",
                "text": "Weh dem, der fern von Eltern und Geschwistern",
                "lineNumber": 15
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-16",
                "text": "Ein einsam Leben führt! Ihm zehrt der Gram",
                "lineNumber": 16
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-17",
                "text": "Das nächste Glück vor seinen Lippen weg,",
                "lineNumber": 17
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-18",
                "text": "Ihm schwärmen abwärts immer die Gedanken",
                "lineNumber": 18
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-19",
                "text": "Nach seines Vaters Hallen, wo die Sonne",
                "lineNumber": 19
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-20",
                "text": "Zürst den Himmel vor ihm aufschloß, wo",
                "lineNumber": 20
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-21",
                "text": "Sich Mitgeborne spielend fest und fester",
                "lineNumber": 21
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-22",
                "text": "Mit sanften Banden aneinanderknüpften.",
                "lineNumber": 22
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-23",
                "text": "Ich rechte mit den Göttern nicht; allein",
                "lineNumber": 23
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-24",
                "text": "Der Fraün Zustand ist beklagenswert.",
                "lineNumber": 24
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-25",
                "text": "Zu Haus und in dem Kriege herrscht der Mann,",
                "lineNumber": 25
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-26",
                "text": "Und in der Fremde weiß er sich zu helfen.",
                "lineNumber": 26
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-27",
                "text": "Ihn freüt der Besitz; ihn krönt der Sieg!",
                "lineNumber": 27
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-28",
                "text": "Ein ehrenvoller Tod ist ihm bereitet.",
                "lineNumber": 28
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-29",
                "text": "Wie eng-gebunden ist des Weibes Glück!",
                "lineNumber": 29
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-30",
                "text": "Schon einem rauhen Gatten zu gehorchen",
                "lineNumber": 30
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-31",
                "text": "Ist Pflicht und Trost; wie elend, wenn sie gar",
                "lineNumber": 31
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-32",
                "text": "Ein feindlich Schicksal in die Ferne treibt!",
                "lineNumber": 32
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-33",
                "text": "So hält mich Thoas hier, ein edler Mann,",
                "lineNumber": 33
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-34",
                "text": "In ernsten, heil'gen Sklavenbanden fest.",
                "lineNumber": 34
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-35",
                "text": "O wie beschämt gesteh ich, daß ich dir",
                "lineNumber": 35
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-36",
                "text": "Mit stillem Widerwillen diene, Göttin,",
                "lineNumber": 36
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-37",
                "text": "Dir, meiner Retterin! Mein Leben sollte",
                "lineNumber": 37
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-38",
                "text": "Zu freiem Dienste dir gewidmet sein.",
                "lineNumber": 38
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-39",
                "text": "Auch hab ich stets auf dich gehofft und hoffe",
                "lineNumber": 39
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-40",
                "text": "Noch jetzt auf dich, Diana, die du mich,",
                "lineNumber": 40
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-41",
                "text": "Des größten Königes verstoßne Tochter,",
                "lineNumber": 41
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-42",
                "text": "In deinen heil'gen, sanften Arm genommen.",
                "lineNumber": 42
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-43",
                "text": "Ja, Tochter Zeus', wenn du den hohen Mann,",
                "lineNumber": 43
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-44",
                "text": "Den du, die Tochter fordernd, ängstigtest,",
                "lineNumber": 44
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-45",
                "text": "Wenn du den göttergleichen Agamemnon,",
                "lineNumber": 45
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-46",
                "text": "Der dir sein Liebstes zum Altare brachte,",
                "lineNumber": 46
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-47",
                "text": "Von Trojas umgewandten Maürn rühmlich",
                "lineNumber": 47
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-48",
                "text": "Nach seinem Vaterland zurückbegleitet,",
                "lineNumber": 48
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-49",
                "text": "Die Gattin ihm, Elektren und den Sohn,",
                "lineNumber": 49
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-50",
                "text": "Die schonen Schätze, wohl erhalten hast:",
                "lineNumber": 50
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-51",
                "text": "So gib auch mich den Meinen endlich wieder,",
                "lineNumber": 51
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-52",
                "text": "Und rette mich, die du vom Tod errettet,",
                "lineNumber": 52
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-53",
                "text": "Auch von dem Leben hier, dem zweiten Tode!Zweiter Auftritt",
                "lineNumber": 53
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-54",
                "text": "Iphigenie. Arkas.Arkas:",
                "lineNumber": 54
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-55",
                "text": "Der König sendet mich hierher und beut",
                "lineNumber": 55
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-56",
                "text": "Der Priesterin Dianens Gruß und Heil!",
                "lineNumber": 56
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-57",
                "text": "Dies ist der Tag, da Tauris seiner Göttin",
                "lineNumber": 57
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-58",
                "text": "Für wunderbare neü Siege dankt.",
                "lineNumber": 58
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-59",
                "text": "Ich eile vor dem König und dem Heer,",
                "lineNumber": 59
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-60",
                "text": "Zu melden, daß er kommt und daß es naht.Iphigenie:",
                "lineNumber": 60
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-61",
                "text": "Wir sind bereit, sie würdig zu empfangen,",
                "lineNumber": 61
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-62",
                "text": "Und unsre Göttin sieht willkommnem Opfer",
                "lineNumber": 62
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-63",
                "text": "Von Thoas' Hand mit Gnadenblick entgegen.Arkas:",
                "lineNumber": 63
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-64",
                "text": "O fänd ich auch den Blick der Priesterin,",
                "lineNumber": 64
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-65",
                "text": "Der werten, vielgeehrten, deinen Blick,",
                "lineNumber": 65
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-66",
                "text": "O heil'ge Jungfrau, heller, leuchtender,",
                "lineNumber": 66
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-67",
                "text": "Uns allen gutes Zeichen! Noch bedeckt",
                "lineNumber": 67
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-68",
                "text": "Der Gram geheimnisvoll dein Innerstes;",
                "lineNumber": 68
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-69",
                "text": "Vergebens harren wir schon jahrelang",
                "lineNumber": 69
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-70",
                "text": "Auf ein vertraulich Wort aus deiner Brust.",
                "lineNumber": 70
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-71",
                "text": "Solang ich dich an dieser Stätte kenne,",
                "lineNumber": 71
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-72",
                "text": "Ist dies der Blick, vor dem ich immer schaudre;",
                "lineNumber": 72
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-73",
                "text": "Und wie mit Eisenbanden bleibt die Seele",
                "lineNumber": 73
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-74",
                "text": "Ins Innerste des Busens dir geschmiedet.Iphigenie:",
                "lineNumber": 74
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-75",
                "text": "Wie's der Vertriebnen, der Verwaisten ziemt.Arkas:",
                "lineNumber": 75
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-76",
                "text": "Scheinst du dir hier vertrieben und verwaist?Iphigenie:",
                "lineNumber": 76
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-77",
                "text": "Kann uns zum Vaterland die Fremde werden?Arkas:",
                "lineNumber": 77
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-78",
                "text": "Und dir ist fremd das Vaterland geworden.Iphigenie:",
                "lineNumber": 78
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-79",
                "text": "Das ist's, warum mein blutend Herz nicht heilt",
                "lineNumber": 79
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-80",
                "text": "In erster Jugend, da sich kaum die Seele",
                "lineNumber": 80
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-81",
                "text": "An Vater, Mutter und Geschwister band,",
                "lineNumber": 81
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-82",
                "text": "Die neün Schößlinge, gesellt und lieblich,",
                "lineNumber": 82
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-83",
                "text": "Vom Fuß der alten Stämme himmelwärts",
                "lineNumber": 83
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-84",
                "text": "Zu dringen strebten: leider faßte da",
                "lineNumber": 84
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-85",
                "text": "Ein fremder Fluch mich an und trennte mich",
                "lineNumber": 85
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-86",
                "text": "Von den Geliebten, riß das schöne Band",
                "lineNumber": 86
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-87",
                "text": "Mit ehrner Faust entzwei. Sie war dahin,",
                "lineNumber": 87
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-88",
                "text": "Der Jugend beste Freude, das Gedeihn",
                "lineNumber": 88
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-89",
                "text": "Der ersten Jahre. Selbst gerettet, war",
                "lineNumber": 89
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-90",
                "text": "Ich nur ein Schatten mir, und frische Lust",
                "lineNumber": 90
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-91",
                "text": "Des Lebens blüht in mir nicht wieder auf.Arkas:",
                "lineNumber": 91
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-92",
                "text": "Wenn du dich so unglücklich nennen willst,",
                "lineNumber": 92
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-93",
                "text": "So darf ich dich auch wohl undankbar nennen.Iphigenie:",
                "lineNumber": 93
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-94",
                "text": "Dank habt ihr stets.Arkas:",
                "lineNumber": 94
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-95",
                "text": "Doch nicht den reinen Dank,",
                "lineNumber": 95
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-96",
                "text": "Um deßentwillen man die Wohltat tut;",
                "lineNumber": 96
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-97",
                "text": "Den frohen Blick, der ein zufriednes Leben",
                "lineNumber": 97
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-98",
                "text": "Und ein geneigtes Herz dem Wirte zeigt.",
                "lineNumber": 98
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-99",
                "text": "Als dich ein tief geheimnisvolles Schicksal",
                "lineNumber": 99
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-100",
                "text": "Vor so viel Jahren diesem Tempel brachte,",
                "lineNumber": 100
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-101",
                "text": "Kam Thoas, dir als einer Gottgegebnen",
                "lineNumber": 101
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-102",
                "text": "Mit Ehrfurcht und mit Neigung zu begegnen,",
                "lineNumber": 102
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-103",
                "text": "Und dieses Ufer ward dir hold und freundlich,",
                "lineNumber": 103
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-104",
                "text": "Das jedem Fremden sonst voll Grausens war,",
                "lineNumber": 104
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-105",
                "text": "Weil niemand unser Reich vor dir betrat,",
                "lineNumber": 105
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-106",
                "text": "Der an Dianens heil'gen Stufen nicht",
                "lineNumber": 106
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-107",
                "text": "Nach altem Brauch, ein blutig Opfer, fiel.Iphigenie:",
                "lineNumber": 107
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-108",
                "text": "Frei atmen macht das Leben nicht allein.",
                "lineNumber": 108
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-109",
                "text": "Welch Leben ist's, das an der heil'gen Stätte",
                "lineNumber": 109
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-110",
                "text": "Gleich einem Schatten um sein eigen Grab",
                "lineNumber": 110
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-111",
                "text": "Ich nur vertraürn muß? Und nenn ich das",
                "lineNumber": 111
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-112",
                "text": "Ein fröhlich selbstbewußtes Leben, wenn",
                "lineNumber": 112
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-113",
                "text": "Uns jeder Tag, vergebens hingeträumt,",
                "lineNumber": 113
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-114",
                "text": "Zu jenen graün Tagen vorbereitet,",
                "lineNumber": 114
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-115",
                "text": "Die an dem Ufer Lethes selbstvergeßend",
                "lineNumber": 115
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-116",
                "text": "Die Traürschar der Abgeschiednen feiert?",
                "lineNumber": 116
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-117",
                "text": "Ein unnütz Leben ist ein früher Tod;",
                "lineNumber": 117
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-118",
                "text": "Dies Fraünschicksal ist vor allen meins.Arkas:",
                "lineNumber": 118
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-119",
                "text": "Den edlen Stolz, daß du dir selbst nicht gnügest,",
                "lineNumber": 119
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-120",
                "text": "Verzeih ich dir, sosehr ich dich bedaure:",
                "lineNumber": 120
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-121",
                "text": "Er raubet den Genuß des Lebens dir.",
                "lineNumber": 121
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-122",
                "text": "Du hast hier nichts getan seit deiner Ankunft?",
                "lineNumber": 122
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-123",
                "text": "Wer hat des Königs trüben Sinn erheitert?",
                "lineNumber": 123
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-124",
                "text": "Wer hat den alten grausamen Gebrauch,",
                "lineNumber": 124
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-125",
                "text": "Daß am Altar Dianens jeder Fremde",
                "lineNumber": 125
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-126",
                "text": "Sein Leben blutend läßt, von Jahr zu Jahr",
                "lineNumber": 126
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-127",
                "text": "Mit sanfter Überredung aufgehalten",
                "lineNumber": 127
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-128",
                "text": "Und die Gefangnen vom gewißen Tod",
                "lineNumber": 128
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-129",
                "text": "Ins Vaterland so oft zurückgeschickt?",
                "lineNumber": 129
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-130",
                "text": "Hat nicht Diane, statt erzürnt zu sein,",
                "lineNumber": 130
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-131",
                "text": "Daß sie der blut'gen alten Opfer mangelt,",
                "lineNumber": 131
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-132",
                "text": "Dein sanft Gebet in reichem Maß erhört?",
                "lineNumber": 132
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-133",
                "text": "Umschwebt mit frohem Fluge nicht der Sieg",
                "lineNumber": 133
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-134",
                "text": "Das Heer? und eilt er nicht sogar voraus?",
                "lineNumber": 134
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-135",
                "text": "Und fühlt nicht jeglicher ein beßer Los,",
                "lineNumber": 135
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-136",
                "text": "Seitdem der König, der uns weis' und tapfer",
                "lineNumber": 136
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-137",
                "text": "So lang geführet, nun sich auch der Milde",
                "lineNumber": 137
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-138",
                "text": "In deiner Gegenwart erfreut und uns",
                "lineNumber": 138
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-139",
                "text": "Des schweigenden Gehorsams Pflicht erleichtert?",
                "lineNumber": 139
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-140",
                "text": "Das nennst du unnütz, wenn von deinem Wesen",
                "lineNumber": 140
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-141",
                "text": "Auf Tausende herab ein Balsam träufelt?",
                "lineNumber": 141
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-142",
                "text": "Wenn du dem Volke, dem ein Gott dich brachte,",
                "lineNumber": 142
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-143",
                "text": "Des neün Glückes ew'ge Qülle wirst",
                "lineNumber": 143
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-144",
                "text": "Und an dem unwirtbaren Todesufer",
                "lineNumber": 144
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-145",
                "text": "Dem Fremden Heil und Rückkehr zubereitest?Iphigenie:",
                "lineNumber": 145
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-146",
                "text": "Das Wenige verschwindet leicht dem Blick,",
                "lineNumber": 146
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-147",
                "text": "Der vorwärts sieht, wie viel noch übrigbleibt.Arkas:",
                "lineNumber": 147
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-148",
                "text": "Doch lobst du den, der, was er tut, nicht schätzt?Iphigenie:",
                "lineNumber": 148
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-149",
                "text": "Man tadelt den, der seine Taten wägt.Arkas:",
                "lineNumber": 149
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-150",
                "text": "Auch den, der wahren Wert zu stolz nicht achtet,",
                "lineNumber": 150
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-151",
                "text": "Wie den, der falschen Wert zu eitel hebt.",
                "lineNumber": 151
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-152",
                "text": "Glaub mir und hör auf eines Mannes Wort,",
                "lineNumber": 152
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-153",
                "text": "Der treu und redlich dir ergeben ist:",
                "lineNumber": 153
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-154",
                "text": "Wenn heut der König mit dir redet, so",
                "lineNumber": 154
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-155",
                "text": "Erleichtr ihm, was er dir zu sagen denkt.Iphigenie:",
                "lineNumber": 155
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-156",
                "text": "Du ängstest mich mit jedem guten Worte;",
                "lineNumber": 156
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-157",
                "text": "Oft wich ich seinem Antrag mühsam aus.Arkas:",
                "lineNumber": 157
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-158",
                "text": "Bedenke, was du tust und was dir nützt.",
                "lineNumber": 158
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-159",
                "text": "Seitdem der König seinen Sohn verloren,",
                "lineNumber": 159
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-160",
                "text": "Vertraut er wenigen der Seinen mehr,",
                "lineNumber": 160
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-161",
                "text": "Und diesen wenigen nicht mehr wie sonst.",
                "lineNumber": 161
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-162",
                "text": "Mißgünstig sieht er jedes Edlen Sohn",
                "lineNumber": 162
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-163",
                "text": "Als seines Reiches Folger an, er fürchtet",
                "lineNumber": 163
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-164",
                "text": "Ein einsam hülflos Alter, ja vielleicht",
                "lineNumber": 164
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-165",
                "text": "Verwegnen Aufstand und frühzeit'gen Tod.",
                "lineNumber": 165
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-166",
                "text": "Der Skythe setzt ins Reden keinen Vorzug,",
                "lineNumber": 166
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-167",
                "text": "Am wenigsten der König. Er, der nur",
                "lineNumber": 167
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-168",
                "text": "Gewohnt ist, zu befehlen und zu tun,",
                "lineNumber": 168
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-169",
                "text": "Kennt nicht die Kunst, von weitem ein Gespräch",
                "lineNumber": 169
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-170",
                "text": "Nach seiner Absicht langsam fein zu lenken.",
                "lineNumber": 170
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-171",
                "text": "Erschwer's ihm nicht durch ein rückhaltend Weigern,",
                "lineNumber": 171
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-172",
                "text": "Durch ein vorsätzlich Mißverstehen. Geh",
                "lineNumber": 172
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-173",
                "text": "Gefällig ihm den halben Weg entgegen.Iphigenie:",
                "lineNumber": 173
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-174",
                "text": "Soll ich beschleunigen, was mich bedroht?Arkas:",
                "lineNumber": 174
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-175",
                "text": "Willst du sein Werben eine Drohung nennen?Iphigenie:",
                "lineNumber": 175
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-176",
                "text": "Es ist die schrecklichste von allen mir.Arkas:",
                "lineNumber": 176
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-177",
                "text": "Gib ihm für seine Neigung nur Vertraun.Iphigenie:",
                "lineNumber": 177
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-178",
                "text": "Wenn er von Furcht erst meine Seele löst.Arkas:",
                "lineNumber": 178
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-179",
                "text": "Warum verschweigst du deine Herkunft ihm?Iphigenie:",
                "lineNumber": 179
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-180",
                "text": "Weil einer Priesterin Geheimnis ziemt.Arkas:",
                "lineNumber": 180
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-181",
                "text": "Dem König sollte nichts Geheimnis sein;",
                "lineNumber": 181
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-182",
                "text": "Und ob er's gleich nicht fordert, fühlt er's doch",
                "lineNumber": 182
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-183",
                "text": "Und fühlt es tief in seiner großen Seele,",
                "lineNumber": 183
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-184",
                "text": "Daß du sorgfältig dich vor ihm verwahrst.Iphigenie:",
                "lineNumber": 184
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-185",
                "text": "Nährt er Verdruß und Unmut gegen mich?Arkas:",
                "lineNumber": 185
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-186",
                "text": "So scheint es fast. Zwar schweigt er auch von dir;",
                "lineNumber": 186
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-187",
                "text": "Doch haben hingeworfne Worte mich",
                "lineNumber": 187
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-188",
                "text": "Belehrt, daß seine Seele fest den Wunsch",
                "lineNumber": 188
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-189",
                "text": "Ergriffen hat, dich zu besitzen. Laß,",
                "lineNumber": 189
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-190",
                "text": "O überlaß ihn nicht sich selbst! damit",
                "lineNumber": 190
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-191",
                "text": "In seinem Busen nicht der Unmut reife",
                "lineNumber": 191
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-192",
                "text": "Und dir Entsetzen bringe, du zu spät",
                "lineNumber": 192
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-193",
                "text": "An meinen treün Rat mit Reü denkest.Iphigenie:",
                "lineNumber": 193
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-194",
                "text": "Wie? Sinnt der König, was kein edler Mann,",
                "lineNumber": 194
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-195",
                "text": "Der seinen Namen liebt und dem Verehrung",
                "lineNumber": 195
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-196",
                "text": "Der Himmlischen den Busen bändiget,",
                "lineNumber": 196
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-197",
                "text": "Je denken sollte? Sinnt er, vom Altar",
                "lineNumber": 197
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-198",
                "text": "Mich in sein Bette mit Gewalt zu ziehn?",
                "lineNumber": 198
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-199",
                "text": "So ruf ich alle Götter und vor allen",
                "lineNumber": 199
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-200",
                "text": "Dianen, die entschloßne Göttin, an,",
                "lineNumber": 200
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-201",
                "text": "Die ihren Schutz der Priesterin gewiß",
                "lineNumber": 201
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-202",
                "text": "Und Jungfrau einer Jungfrau gern gewährt.Arkas:",
                "lineNumber": 202
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-203",
                "text": "Sei ruhig! Ein gewaltsam neüs Blut",
                "lineNumber": 203
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-204",
                "text": "Treibt nicht den König, solche Jünglingstat",
                "lineNumber": 204
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-205",
                "text": "Verwegen auszuüben. Wie er sinnt,",
                "lineNumber": 205
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-206",
                "text": "Befürcht ich andern harten Schluß von ihm,",
                "lineNumber": 206
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-207",
                "text": "Den unaufhaltbar er vollenden wird:",
                "lineNumber": 207
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-208",
                "text": "Denn seine Seel ist fest und unbeweglich.",
                "lineNumber": 208
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-209",
                "text": "Drum bitt ich dich, vertrau ihm, sei ihm dankbar,",
                "lineNumber": 209
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-210",
                "text": "Wenn du ihm weiter nichts gewähren kannst.Iphigenie:",
                "lineNumber": 210
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-211",
                "text": "O sage, was dir weiter noch bekannt ist!Arkas:",
                "lineNumber": 211
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-212",
                "text": "Erfahr's von ihm. Ich seh den König kommen;",
                "lineNumber": 212
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-213",
                "text": "Du ehrst ihn, und dich heißt dein eigen Herz,",
                "lineNumber": 213
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-214",
                "text": "Ihm freundlich und vertraulich zu begegnen.",
                "lineNumber": 214
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-215",
                "text": "Ein edler Mann wird durch ein gutes Wort",
                "lineNumber": 215
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-216",
                "text": "Der Fraün weit geführt.Iphigenie allein:",
                "lineNumber": 216
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-217",
                "text": "Zwar seh ich nicht,",
                "lineNumber": 217
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-218",
                "text": "Wie ich dem Rat des Treün folgen soll;",
                "lineNumber": 218
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-219",
                "text": "Doch folg ich gern der Pflicht, dem Könige",
                "lineNumber": 219
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-220",
                "text": "Für seine Wohltat gutes Wort zu geben,",
                "lineNumber": 220
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-221",
                "text": "Und wünsche mir, daß ich dem Mächtigen,",
                "lineNumber": 221
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-222",
                "text": "Was ihm gefällt, mit Wahrheit sagen möge.Dritter Auftritt",
                "lineNumber": 222
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-223",
                "text": "Iphigenie. Thoas.Iphigenie:",
                "lineNumber": 223
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-224",
                "text": "Mit königlichen Gütern segne dich",
                "lineNumber": 224
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-225",
                "text": "Die Göttin! Sie gewähre Sieg und Ruhm",
                "lineNumber": 225
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-226",
                "text": "Und Reichtum und das Wohl der Deinigen",
                "lineNumber": 226
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-227",
                "text": "Und jedes frommen Wunsches Fülle dir!",
                "lineNumber": 227
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-228",
                "text": "Daß, der du über viele sorgend herrschest,",
                "lineNumber": 228
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-229",
                "text": "Du auch vor vielen seltnes Glück genießest.Thoas:",
                "lineNumber": 229
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-230",
                "text": "Zufrieden wär ich, wenn mein Volk mich rühmte:",
                "lineNumber": 230
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-231",
                "text": "Was ich erwarb, genießen andre mehr",
                "lineNumber": 231
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-232",
                "text": "Als ich. Der ist am glücklichsten, er sei",
                "lineNumber": 232
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-233",
                "text": "Ein König oder ein Geringer, dem",
                "lineNumber": 233
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-234",
                "text": "In seinem Hause Wohl bereitet ist.",
                "lineNumber": 234
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-235",
                "text": "Du nahmest teil an meinen tiefen Schmerzen,",
                "lineNumber": 235
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-236",
                "text": "Als mir das Schwert der Feinde meinen Sohn,",
                "lineNumber": 236
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-237",
                "text": "Den letzten, besten, von der Seite riß.",
                "lineNumber": 237
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-238",
                "text": "Solang die Rache meinen Geist besaß,",
                "lineNumber": 238
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-239",
                "text": "Empfand ich nicht die Öde meiner Wohnung;",
                "lineNumber": 239
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-240",
                "text": "Doch jetzt, da ich befriedigt wiederkehre,",
                "lineNumber": 240
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-241",
                "text": "Ihr Reich zerstört, mein Sohn gerochen ist,",
                "lineNumber": 241
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-242",
                "text": "Bleibt mir zu Hause nichts, das mich ergetze.",
                "lineNumber": 242
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-243",
                "text": "Der fröhliche Gehorsam, den ich sonst",
                "lineNumber": 243
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-244",
                "text": "Aus einem jeden Auge blicken sah,",
                "lineNumber": 244
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-245",
                "text": "Ist nun von Sorg' und Unmut still gedämpft.",
                "lineNumber": 245
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-246",
                "text": "Ein jeder sinnt, was künftig werden wird,",
                "lineNumber": 246
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-247",
                "text": "Und folgt dem Kinderlosen, weil er muß.",
                "lineNumber": 247
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-248",
                "text": "Nun komm ich heut in diesen Tempel, den",
                "lineNumber": 248
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-249",
                "text": "Ich oft betrat, um Sieg zu bitten und",
                "lineNumber": 249
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-250",
                "text": "Für Sieg zu danken. Einen alten Wunsch",
                "lineNumber": 250
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-251",
                "text": "Trag ich im Busen, der auch dir nicht fremd",
                "lineNumber": 251
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-252",
                "text": "Noch unerwartet ist: ich hoffe, dich",
                "lineNumber": 252
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-253",
                "text": "Zum Segen meines Volks und mir zum Segen",
                "lineNumber": 253
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-254",
                "text": "Als Braut in meine Wohnung einzuführen.Iphigenie:",
                "lineNumber": 254
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-255",
                "text": "Der Unbekannten bietest du zu viel,",
                "lineNumber": 255
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-256",
                "text": "O König, an. Es steht die Flüchtige",
                "lineNumber": 256
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-257",
                "text": "Beschämt vor dir, die nichts an diesem Ufer",
                "lineNumber": 257
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-258",
                "text": "Als Schutz und Ruhe sucht, die du ihr gabst.Thoas:",
                "lineNumber": 258
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-259",
                "text": "Daß du in das Geheimnis deiner Ankunft",
                "lineNumber": 259
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-260",
                "text": "Vor mir wie vor dem Letzten stets dich hüllest,",
                "lineNumber": 260
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-261",
                "text": "Wär unter keinem Volke recht und gut.",
                "lineNumber": 261
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-262",
                "text": "Dies Ufer schreckt die Fremden: das Gesetz",
                "lineNumber": 262
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-263",
                "text": "Gebietet's und die Not. Allein von dir,",
                "lineNumber": 263
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-264",
                "text": "Die jedes frommen Rechts genießt, ein wohl",
                "lineNumber": 264
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-265",
                "text": "Von uns empfangner Gast, nach eignem Sinn",
                "lineNumber": 265
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-266",
                "text": "Und Willen ihres Tages sich erfreut,",
                "lineNumber": 266
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-267",
                "text": "Von dir hofft ich Vertraün, das der Wirt",
                "lineNumber": 267
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-268",
                "text": "Für seine Treü wohl erwarten darf.Iphigenie:",
                "lineNumber": 268
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-269",
                "text": "Verbarg ich meiner Eltern Namen und",
                "lineNumber": 269
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-270",
                "text": "Mein Haus, o König, war's Verlegenheit,",
                "lineNumber": 270
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-271",
                "text": "Nicht Mißtraun. Denn vielleicht, ach wüßtest du,",
                "lineNumber": 271
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-272",
                "text": "Wer vor dir steht und welch verwünschtes Haupt",
                "lineNumber": 272
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-273",
                "text": "Du nährst und schützest: ein Entsetzen faßte",
                "lineNumber": 273
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-274",
                "text": "Dein großes Herz mit seltnem Schaür an,",
                "lineNumber": 274
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-275",
                "text": "Und statt die Seite deines Thrones mir",
                "lineNumber": 275
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-276",
                "text": "Zu bieten, triebest du mich vor der Zeit",
                "lineNumber": 276
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-277",
                "text": "Aus deinem Reiche; stießest mich vielleicht,",
                "lineNumber": 277
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-278",
                "text": "Eh zu den Meinen frohe Rückkehr mir",
                "lineNumber": 278
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-279",
                "text": "Und meiner Wandrung Ende zugedacht ist,",
                "lineNumber": 279
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-280",
                "text": "Dem Elend zu, das jeden Schweifenden,",
                "lineNumber": 280
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-281",
                "text": "Von seinem Haus Vertriebnen überall",
                "lineNumber": 281
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-282",
                "text": "Mit kalter, fremder Schreckenshand erwartet.Thoas:",
                "lineNumber": 282
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-283",
                "text": "Was auch der Rat der Götter mit dir sei",
                "lineNumber": 283
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-284",
                "text": "Und was sie deinem Haus und dir gedenken,",
                "lineNumber": 284
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-285",
                "text": "So fehlt es doch, seitdem du bei uns wohnst",
                "lineNumber": 285
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-286",
                "text": "Und eines frommen Gastes Recht genießest,",
                "lineNumber": 286
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-287",
                "text": "An Segen nicht, der mir von oben kommt.",
                "lineNumber": 287
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-288",
                "text": "Ich möchte schwer zu überreden sein,",
                "lineNumber": 288
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-289",
                "text": "Daß ich an dir ein schuldvoll Haupt beschütze.Iphigenie:",
                "lineNumber": 289
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-290",
                "text": "Dir bringt die Wohltat Segen, nicht der Gast.Thoas:",
                "lineNumber": 290
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-291",
                "text": "Was man Verruchten tut, wird nicht gesegnet.",
                "lineNumber": 291
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-292",
                "text": "Drum endige dein Schweigen und dein Weigern;",
                "lineNumber": 292
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-293",
                "text": "Es fordert dies kein ungerechter Mann.",
                "lineNumber": 293
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-294",
                "text": "Die Göttin übergab dich meinen Händen;",
                "lineNumber": 294
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-295",
                "text": "Wie du ihr heilig warst, so warst du's mir.",
                "lineNumber": 295
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-296",
                "text": "Auch sei ihr Wink noch künftig mein Gesetz:",
                "lineNumber": 296
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-297",
                "text": "Wenn du nach Hause Rückkehr hoffen kannst,",
                "lineNumber": 297
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-298",
                "text": "So sprech ich dich von aller Fordrung los.",
                "lineNumber": 298
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-299",
                "text": "Doch ist der Weg auf ewig dir versperrt",
                "lineNumber": 299
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-300",
                "text": "Und ist dein Stamm vertrieben oder durch",
                "lineNumber": 300
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-301",
                "text": "Ein ungeheures Unheil ausgelöscht,",
                "lineNumber": 301
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-302",
                "text": "So bist du mein durch mehr als ein Gesetz.",
                "lineNumber": 302
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-303",
                "text": "Sprich offen! und du weißt, ich halte Wort.Iphigenie:",
                "lineNumber": 303
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-304",
                "text": "Vom alten Bande löset ungern sich",
                "lineNumber": 304
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-305",
                "text": "Die Zunge los, ein langverschwiegenes",
                "lineNumber": 305
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-306",
                "text": "Geheimnis endlich zu entdecken. Denn",
                "lineNumber": 306
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-307",
                "text": "Einmal vertraut, verläßt es ohne Rückkehr",
                "lineNumber": 307
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-308",
                "text": "Des tiefen Herzens sichre Wohnung, schadet,",
                "lineNumber": 308
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-309",
                "text": "Wie es die Götter wollen, oder nützt.",
                "lineNumber": 309
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-310",
                "text": "Vernimm! Ich bin aus Tantalus' Geschlecht.Thoas:",
                "lineNumber": 310
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-311",
                "text": "Du sprichst ein großes Wort gelaßen aus.",
                "lineNumber": 311
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-312",
                "text": "Nennst du den deinen Ahnherrn, den die Welt",
                "lineNumber": 312
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-313",
                "text": "Als einen ehmals Hochbegnadigten",
                "lineNumber": 313
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-314",
                "text": "Der Götter kennt? Ist's jener Tantalus,",
                "lineNumber": 314
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-315",
                "text": "Den Jupiter zu Rat und Tafel zog,",
                "lineNumber": 315
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-316",
                "text": "An deßen alterfahrnen, vielen Sinn",
                "lineNumber": 316
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-317",
                "text": "Verknüpfenden Gesprächen Götter selbst,",
                "lineNumber": 317
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-318",
                "text": "Wie an Orakelsprüchen, sich ergötzten?Iphigenie:",
                "lineNumber": 318
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-319",
                "text": "Et ist es; aber Götter sollten nicht",
                "lineNumber": 319
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-320",
                "text": "Mit Menschen wie mit ihresgleichen wandeln:",
                "lineNumber": 320
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-321",
                "text": "Das sterbliche Geschlecht ist viel zu schwach,",
                "lineNumber": 321
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-322",
                "text": "In ungewohnter Höhe nicht zu schwindeln.",
                "lineNumber": 322
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-323",
                "text": "Unedel war er nicht und kein Verräter,",
                "lineNumber": 323
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-324",
                "text": "Allein zum Knecht zu groß, und zum Gesellen",
                "lineNumber": 324
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-325",
                "text": "Des großen Donnrers nur ein Mensch. So war",
                "lineNumber": 325
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-326",
                "text": "Auch sein Vergehen menschlich; ihr Gericht",
                "lineNumber": 326
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-327",
                "text": "War streng, und Dichter singen: Übermut",
                "lineNumber": 327
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-328",
                "text": "Und Untreu stürzten ihn von Jovis Tisch",
                "lineNumber": 328
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-329",
                "text": "Zur Schmach des alten Tartarus hinab.",
                "lineNumber": 329
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-330",
                "text": "Ach, und sein ganz Geschlecht trug ihren Haß!Thoas:",
                "lineNumber": 330
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-331",
                "text": "Trug es die Schuld des Ahnherrn oder eigne?Iphigenie:",
                "lineNumber": 331
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-332",
                "text": "Zwar die gewalt'ge Brust und der Titanen",
                "lineNumber": 332
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-333",
                "text": "Kraftvolles Mark war seiner Söhn' und Enkel",
                "lineNumber": 333
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-334",
                "text": "Gewißes Erbteil; doch es schmiedete",
                "lineNumber": 334
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-335",
                "text": "Der Gott um ihre Stirn ein ehern Band.",
                "lineNumber": 335
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-336",
                "text": "Rat, Mäßigung und Weisheit und Geduld",
                "lineNumber": 336
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-337",
                "text": "Verbarg er ihrem scheün, düstern Blick;",
                "lineNumber": 337
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-338",
                "text": "Zur Wut ward ihnen jegliche Begier,",
                "lineNumber": 338
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-339",
                "text": "Und grenzenlos drang ihre Wut umher.",
                "lineNumber": 339
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-340",
                "text": "Schon Pelops, der Gewaltig-Wollende,",
                "lineNumber": 340
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-341",
                "text": "Des Tantalus geliebter Sohn, erwarb",
                "lineNumber": 341
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-342",
                "text": "Sich durch Verrat und Mord das schönste Weib,",
                "lineNumber": 342
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-343",
                "text": "Önomaus' Erzeugte, Hippodamien.",
                "lineNumber": 343
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-344",
                "text": "Sie bringt den Wünschen des Gemahls zwei Söhne,",
                "lineNumber": 344
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-345",
                "text": "Thyest und Atreus. Neidisch sehen sie",
                "lineNumber": 345
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-346",
                "text": "Des Vaters Liebe zu dem ersten Sohn,",
                "lineNumber": 346
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-347",
                "text": "Aus einem andern Bette wachsend, an.",
                "lineNumber": 347
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-348",
                "text": "Der Haß verbindet sie, und heimlich wagt",
                "lineNumber": 348
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-349",
                "text": "Das Paar im Brudermord die erste Tat.",
                "lineNumber": 349
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-350",
                "text": "Der Vater wähnet Hippodamien",
                "lineNumber": 350
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-351",
                "text": "Die Mörderin, und grimmig fordert er",
                "lineNumber": 351
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-352",
                "text": "Von ihr den Sohn zurück, und sie entleibt",
                "lineNumber": 352
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-353",
                "text": "Sich selbst –Thoas:",
                "lineNumber": 353
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-354",
                "text": "Du schweigest? Fahre fort zu reden!",
                "lineNumber": 354
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-355",
                "text": "Laß dein Vertraun dich nicht gereün! Sprich!Iphigenie:",
                "lineNumber": 355
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-356",
                "text": "Wohl dem, der seiner Väter gern gedenkt,",
                "lineNumber": 356
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-357",
                "text": "Der froh von ihren Taten, ihrer Größe",
                "lineNumber": 357
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-358",
                "text": "Den Hörer unterhält und still sich freünd",
                "lineNumber": 358
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-359",
                "text": "Ans Ende dieser schönen Reihe sich",
                "lineNumber": 359
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-360",
                "text": "Geschloßen sieht! Denn es erzeugt nicht gleich",
                "lineNumber": 360
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-361",
                "text": "Ein Haus den Halbgott noch das Ungeheür;",
                "lineNumber": 361
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-362",
                "text": "Erst eine Reihe Böser oder Guter",
                "lineNumber": 362
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-363",
                "text": "Bringt endlich das Entsetzen, bringt die Freude",
                "lineNumber": 363
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-364",
                "text": "Der Welt hervor. – Nach ihres Vaters Tode",
                "lineNumber": 364
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-365",
                "text": "Gebieten Atreus und Thyest der Stadt,",
                "lineNumber": 365
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-366",
                "text": "Gemeinsam herrschend. Lange konnte nicht",
                "lineNumber": 366
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-367",
                "text": "Die Eintracht daürn. Bald entehrt Thyest",
                "lineNumber": 367
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-368",
                "text": "Des Bruders Bette. Rächend treibet Atreus",
                "lineNumber": 368
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-369",
                "text": "Ihn aus dem Reiche. Tückisch hatte schon",
                "lineNumber": 369
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-370",
                "text": "Thyest, auf schwere Taten sinnend, lange",
                "lineNumber": 370
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-371",
                "text": "Dem Bruder einen Sohn entwandt und heimlich",
                "lineNumber": 371
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-372",
                "text": "Ihn als den seinen schmeichelnd auferzogen.",
                "lineNumber": 372
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-373",
                "text": "Dem füllet er die Brust mit Wut und Rache",
                "lineNumber": 373
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-374",
                "text": "Und sendet ihn zur Königßtadt, daß er",
                "lineNumber": 374
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-375",
                "text": "Im Oheim seinen eignen Vater morde.",
                "lineNumber": 375
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-376",
                "text": "Des Jünglings Vorsatz wird entdeckt: der König",
                "lineNumber": 376
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-377",
                "text": "Straft grausam den gesandten Mörder, wähnend,",
                "lineNumber": 377
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-378",
                "text": "Er töte seines Bruders Sohn. Zu spät",
                "lineNumber": 378
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-379",
                "text": "Erfährt er, wer vor seinen trunknen Augen",
                "lineNumber": 379
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-380",
                "text": "Gemartert stirbt; und die Begier der Rache",
                "lineNumber": 380
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-381",
                "text": "Aus seiner Brust zu tilgen, sinnt er still",
                "lineNumber": 381
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-382",
                "text": "Auf unerhörte Tat. Er scheint gelaßen,",
                "lineNumber": 382
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-383",
                "text": "Gleichgültig und versöhnt und lockt den Bruder",
                "lineNumber": 383
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-384",
                "text": "Mit seinen beiden Söhnen in das Reich",
                "lineNumber": 384
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-385",
                "text": "Zurück, ergreift die Knaben, schlachtet sie",
                "lineNumber": 385
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-386",
                "text": "Und setzt die ekle, schaudervolle Speise",
                "lineNumber": 386
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-387",
                "text": "Dem Vater bei dem ersten Mahle vor.",
                "lineNumber": 387
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-388",
                "text": "Und da Thyest an seinem Fleische sich",
                "lineNumber": 388
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-389",
                "text": "Gesättigt, eine Wehmut ihn ergreift,",
                "lineNumber": 389
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-390",
                "text": "Er nach den Kindern fragt, den Tritt, die Stimme",
                "lineNumber": 390
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-391",
                "text": "Der Knaben an des Saales Türe schon",
                "lineNumber": 391
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-392",
                "text": "Zu hören glaubt, wirft Atreus grinsend",
                "lineNumber": 392
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-393",
                "text": "Ihm Haupt und Füße der Erschlagnen hin. –",
                "lineNumber": 393
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-394",
                "text": "Du wendest schaudernd dein Gesicht, o König:",
                "lineNumber": 394
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-395",
                "text": "So wendete die Sonn ihr Antlitz weg",
                "lineNumber": 395
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-396",
                "text": "Und ihren Wagen aus dem ew'gen Gleise.",
                "lineNumber": 396
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-397",
                "text": "Dies sind die Ahnherrn deiner Priesterin;",
                "lineNumber": 397
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-398",
                "text": "Und viel unseliges Geschick der Männer,",
                "lineNumber": 398
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-399",
                "text": "Viel Taten des verworrnen Sinnes deckt",
                "lineNumber": 399
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-400",
                "text": "Die Nacht mit schweren Fittichen und läßt",
                "lineNumber": 400
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-401",
                "text": "Uns nur in graünvolle Dämmrung sehn.Thoas:",
                "lineNumber": 401
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-402",
                "text": "Verbirg sie schweigend auch. Es sei genug",
                "lineNumber": 402
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-403",
                "text": "Der Greül! Sage nun, durch welch ein Wunder",
                "lineNumber": 403
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-404",
                "text": "Von diesem wilden Stamme du entsprangst.Iphigenie:",
                "lineNumber": 404
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-405",
                "text": "Des Atreus ältster Sohn war Agamemnon:",
                "lineNumber": 405
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-406",
                "text": "Er ist mein Vater. Doch ich darf es sagen,",
                "lineNumber": 406
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-407",
                "text": "In ihm hab ich seit meiner ersten Zeit",
                "lineNumber": 407
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-408",
                "text": "Ein Muster des vollkommnen Manns gesehn.",
                "lineNumber": 408
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-409",
                "text": "Ihm brachte Klytämnestra mich, den Erstling",
                "lineNumber": 409
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-410",
                "text": "Der Liebe, dann Elektren. Ruhig herrschte",
                "lineNumber": 410
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-411",
                "text": "Der König, und es war dem Hause Tantals",
                "lineNumber": 411
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-412",
                "text": "Die lang entbehrte Rast gewährt. Allein",
                "lineNumber": 412
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-413",
                "text": "Es mangelte dem Glück der Eltern noch",
                "lineNumber": 413
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-414",
                "text": "Ein Sohn, und kaum war dieser Wunsch erfüllt,",
                "lineNumber": 414
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-415",
                "text": "Daß zwischen beiden Schwestern nun Orest,",
                "lineNumber": 415
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-416",
                "text": "Der Liebling, wuchs, als neüs Übel schon",
                "lineNumber": 416
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-417",
                "text": "Dem sichern Hause zubereitet war.",
                "lineNumber": 417
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-418",
                "text": "Der Ruf des Krieges ist zu euch gekommen,",
                "lineNumber": 418
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-419",
                "text": "Der, um den Raub der schönsten Frau zu rächen,",
                "lineNumber": 419
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-420",
                "text": "Die ganze Macht der Fürsten Griechenlands",
                "lineNumber": 420
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-421",
                "text": "Um Trojens Maürn lagerte. Ob sie",
                "lineNumber": 421
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-422",
                "text": "Die Stadt gewonnen, ihrer Rache Ziel",
                "lineNumber": 422
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-423",
                "text": "Erreicht, vernahm ich nicht. Mein Vater führte",
                "lineNumber": 423
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-424",
                "text": "Der Griechen Heer. In Aulis harrten sie",
                "lineNumber": 424
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-425",
                "text": "Auf günst'gen Wind vergebens: denn Diane,",
                "lineNumber": 425
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-426",
                "text": "Erzürnt auf ihren großen Führer, hielt",
                "lineNumber": 426
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-427",
                "text": "Die Eilenden zurück und forderte",
                "lineNumber": 427
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-428",
                "text": "Durch Kalchas' Mund des Königs ältste Tochter.",
                "lineNumber": 428
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-429",
                "text": "Sie lockten mit der Mutter mich ins Lager;",
                "lineNumber": 429
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-430",
                "text": "Sie rißen mich vor den Altar und weihten",
                "lineNumber": 430
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-431",
                "text": "Der Göttin dieses Haupt. – Sie war versöhnt:",
                "lineNumber": 431
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-432",
                "text": "Sie wollte nicht mein Blut und hüllte rettend",
                "lineNumber": 432
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-433",
                "text": "In eine Wolke mich; in diesem Tempel",
                "lineNumber": 433
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-434",
                "text": "Erkannt ich mich zürst vom Tode wieder.",
                "lineNumber": 434
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-435",
                "text": "Ich bin es selbst, bin Iphigenie,",
                "lineNumber": 435
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-436",
                "text": "Des Atreus Enkel, Agamemnons Tochter,",
                "lineNumber": 436
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-437",
                "text": "Des Göttin Eigentum, die mit dir spricht.Thoas:",
                "lineNumber": 437
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-438",
                "text": "Mehr Vorzug und Vertraün geb ich nicht",
                "lineNumber": 438
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-439",
                "text": "Der Königstochter als der Unbekannten.",
                "lineNumber": 439
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-440",
                "text": "Ich wiederhole meinen ersten Antrag:",
                "lineNumber": 440
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-441",
                "text": "Komm, folge mir und teile, was ich habe.Iphigenie:",
                "lineNumber": 441
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-442",
                "text": "Wie darf ich solchen Schritt, o König, wagen?",
                "lineNumber": 442
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-443",
                "text": "Hat nicht die Göttin, die mich rettete,",
                "lineNumber": 443
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-444",
                "text": "Allein das Recht auf mein geweihtes Leben?",
                "lineNumber": 444
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-445",
                "text": "Sie hat für mich den Schutzort ausgesucht,",
                "lineNumber": 445
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-446",
                "text": "Und sie bewahrt mich einem Vater, den",
                "lineNumber": 446
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-447",
                "text": "Sie durch den Schein genug gestraft, vielleicht",
                "lineNumber": 447
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-448",
                "text": "Zur schönsten Freude seines Alters hier.",
                "lineNumber": 448
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-449",
                "text": "Vielleicht ist mir die frohe Rückkehr nah;",
                "lineNumber": 449
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-450",
                "text": "Und ich, auf ihren Weg nicht achtend, hätte",
                "lineNumber": 450
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-451",
                "text": "Mich wider ihren Willen hier gefeßelt?",
                "lineNumber": 451
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-452",
                "text": "Ein Zeichen bat ich, wenn ich bleiben sollte.Thoas:",
                "lineNumber": 452
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-453",
                "text": "Das Zeichen ist, daß du noch hier verweilst.",
                "lineNumber": 453
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-454",
                "text": "Such Ausflucht solcher Art nicht ängstlich auf.",
                "lineNumber": 454
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-455",
                "text": "Man spricht vergebens viel, um zu versagen;",
                "lineNumber": 455
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-456",
                "text": "Der andre hört von allem nur das Nein.Iphigenie:",
                "lineNumber": 456
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-457",
                "text": "Nicht Worte sind es, die nur blenden sollen;",
                "lineNumber": 457
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-458",
                "text": "Ich habe dir mein tiefstes Herz entdeckt.",
                "lineNumber": 458
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-459",
                "text": "Und sagst du dir nicht selbst, wie ich dem Vater,",
                "lineNumber": 459
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-460",
                "text": "Der Mutter, den Geschwistern mich entgegen",
                "lineNumber": 460
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-461",
                "text": "Mit ängstlichen Gefühlen sehnen muß?",
                "lineNumber": 461
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-462",
                "text": "Daß in den alten Hallen, wo die Traür",
                "lineNumber": 462
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-463",
                "text": "Noch manchmal stille meinen Namen lispelt,",
                "lineNumber": 463
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-464",
                "text": "Die Freude, wie um eine Neugeborne,",
                "lineNumber": 464
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-465",
                "text": "Den schönsten Kranz von Säul' an Säulen schlinge!",
                "lineNumber": 465
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-466",
                "text": "O sendetest du mich auf Schiffen hin!",
                "lineNumber": 466
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-467",
                "text": "Du gäbest mir und allen neüs Leben.Thoas:",
                "lineNumber": 467
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-468",
                "text": "So kehr zurück! Tu, was dein Herz dich heißt,",
                "lineNumber": 468
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-469",
                "text": "Und höre nicht die Stimme guten Rats",
                "lineNumber": 469
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-470",
                "text": "Und der Vernunft. Sei ganz ein Weib und gib",
                "lineNumber": 470
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-471",
                "text": "Dich hin dem Triebe, der dich zügellos",
                "lineNumber": 471
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-472",
                "text": "Ergreift und dahin oder dorthin reißt.",
                "lineNumber": 472
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-473",
                "text": "Wenn ihnen eine Lust im Busen brennt,",
                "lineNumber": 473
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-474",
                "text": "Hält vom Verräter sie kein heilig Band,",
                "lineNumber": 474
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-475",
                "text": "Der sie dem Vater oder dem Gemahl",
                "lineNumber": 475
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-476",
                "text": "Aus langbewährten, treün Armen lockt;",
                "lineNumber": 476
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-477",
                "text": "Und schweigt in ihrer Brust die rasche Glut,",
                "lineNumber": 477
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-478",
                "text": "So dringt auf sie vergebens treu und mächtig",
                "lineNumber": 478
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-479",
                "text": "Der Überredung goldne Zunge los.Iphigenie:",
                "lineNumber": 479
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-480",
                "text": "Gedenk, o König, deines edeln Wortes!",
                "lineNumber": 480
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-481",
                "text": "Willst du mein Zutraum so erwidern? Du",
                "lineNumber": 481
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-482",
                "text": "Schienst vorbereitet, alles zu vernehmen.Thoas:",
                "lineNumber": 482
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-483",
                "text": "Aufs Ungehoffte war ich nicht bereitet;",
                "lineNumber": 483
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-484",
                "text": "Doch sollt ich's auch erwarten: wußt ich nicht,",
                "lineNumber": 484
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-485",
                "text": "Daß ich mit einem Weibe handeln ging?Iphigenie:",
                "lineNumber": 485
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-486",
                "text": "Schilt nicht, o König, unser arm Geschlecht.",
                "lineNumber": 486
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-487",
                "text": "Nicht herrlich wie die eürn, aber nicht",
                "lineNumber": 487
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-488",
                "text": "Unedel sind die Waffen eines Weibes.",
                "lineNumber": 488
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-489",
                "text": "Glaub es, darin bin ich dir vorzuziehn,",
                "lineNumber": 489
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-490",
                "text": "Daß ich dein Glück mehr als du selber kenne.",
                "lineNumber": 490
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-491",
                "text": "Du wähnest, unbekannt mit dir und mir,",
                "lineNumber": 491
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-492",
                "text": "Ein näher Band werd uns zum Glück vereinen.",
                "lineNumber": 492
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-493",
                "text": "Voll guten Mutes wie voll guten Willens",
                "lineNumber": 493
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-494",
                "text": "Dringst du in mich, daß ich mich fügen soll;",
                "lineNumber": 494
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-495",
                "text": "Und hier dank ich den Göttern, daß sie mir",
                "lineNumber": 495
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-496",
                "text": "Die Festigkeit gegeben, dieses Bündnis",
                "lineNumber": 496
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-497",
                "text": "Nicht einzugehen, das sie nicht gebilligt.Thoas:",
                "lineNumber": 497
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-498",
                "text": "Es spricht kein Gott; es spricht dein eignes Herz.Iphigenie:",
                "lineNumber": 498
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-499",
                "text": "Sie reden nur durch unser Herz zu uns.Thoas:",
                "lineNumber": 499
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-500",
                "text": "Und hab ich, sie zu hören, nicht das Recht?Iphigenie:",
                "lineNumber": 500
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-501",
                "text": "Es überbraust der Sturm die zarte Stimme.Thoas:",
                "lineNumber": 501
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-502",
                "text": "Die Priesterin vernimmt sie wohl allein?Iphigenie:",
                "lineNumber": 502
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-503",
                "text": "Vor allen andern merke sie der Fürst.Thoas:",
                "lineNumber": 503
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-504",
                "text": "Dein heilig Amt und dein geerbtes Recht",
                "lineNumber": 504
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-505",
                "text": "An Jovis Tisch bringt dich den Göttern näher",
                "lineNumber": 505
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-506",
                "text": "Als einen erdgeborenen Wilden.Iphigenie:",
                "lineNumber": 506
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-507",
                "text": "So",
                "lineNumber": 507
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-508",
                "text": "Büß ich nun das Vertraun, das du erzwangst.Thoas:",
                "lineNumber": 508
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-509",
                "text": "Ich bin ein Mensch; und beßer ist's, wir enden.",
                "lineNumber": 509
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-510",
                "text": "So bleibe denn mein Wort: Sei Priesterin",
                "lineNumber": 510
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-511",
                "text": "Der Göttin, wie sie dich erkoren hat;",
                "lineNumber": 511
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-512",
                "text": "Doch mir verzeih Diane, daß ich ihr",
                "lineNumber": 512
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-513",
                "text": "Bisher mit Unrecht und mit innerm Vorwurf",
                "lineNumber": 513
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-514",
                "text": "Die alten Opfer vorenthalten habe.",
                "lineNumber": 514
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-515",
                "text": "Kein Fremder nahet glücklich unserm Ufer:",
                "lineNumber": 515
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-516",
                "text": "Von alters her ist ihm der Tod gewiß.",
                "lineNumber": 516
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-517",
                "text": "Nur du hast mich mit einer Freundlichkeit,",
                "lineNumber": 517
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-518",
                "text": "In der ich bald der zarten Tochter Liebe,",
                "lineNumber": 518
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-519",
                "text": "Bald stille Neigung einer Braut zu sehn",
                "lineNumber": 519
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-520",
                "text": "Mich tief erfreute, wie mit Zauberbanden",
                "lineNumber": 520
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-521",
                "text": "Gefeßelt, daß ich meiner Pflicht vergaß.",
                "lineNumber": 521
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-522",
                "text": "Du hattest mir die Sinnen eingewiegt,",
                "lineNumber": 522
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-523",
                "text": "Das Murren meines Volks vernahm ich nicht;",
                "lineNumber": 523
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-524",
                "text": "Nun rufen sie die Schuld von meines Sohnes",
                "lineNumber": 524
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-525",
                "text": "Frühzeit'gem Tode lauter über mich.",
                "lineNumber": 525
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-526",
                "text": "Um deinetwillen halt ich länger nicht",
                "lineNumber": 526
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-527",
                "text": "Die Menge, die das Opfer dringend fordert.Iphigenie:",
                "lineNumber": 527
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-528",
                "text": "Um meinetwillen hab ich's nie begehrt.",
                "lineNumber": 528
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-529",
                "text": "Der mißversteht die Himmlischen, der sie",
                "lineNumber": 529
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-530",
                "text": "Blutgierig wähnt; er dichtet ihnen nur",
                "lineNumber": 530
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-531",
                "text": "Die eignen grausamen Begierden an.",
                "lineNumber": 531
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-532",
                "text": "Entzog die Göttin mich nicht selbst dem Priester?",
                "lineNumber": 532
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-533",
                "text": "Ihr war mein Dienst willkommner als mein Tod.Thoas:",
                "lineNumber": 533
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-534",
                "text": "Es ziemt sich nicht für uns, den heiligen",
                "lineNumber": 534
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-535",
                "text": "Gebrauch mit leicht beweglicher Vernunft",
                "lineNumber": 535
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-536",
                "text": "Nach unserm Sinn zu deuten und zu lenken.",
                "lineNumber": 536
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-537",
                "text": "Tu deine Pflicht, ich werde meine tun.",
                "lineNumber": 537
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-538",
                "text": "Zwei Fremde, die wir in des Ufers Höhlen",
                "lineNumber": 538
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-539",
                "text": "Versteckt gefunden und die meinem Lande",
                "lineNumber": 539
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-540",
                "text": "Nichts Gutes bringen, sind in meiner Hand.",
                "lineNumber": 540
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-541",
                "text": "Mit diesen nehme deine Göttin wieder",
                "lineNumber": 541
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-542",
                "text": "Ihr erstes, rechtes, lang entbehrtes Opfer!",
                "lineNumber": 542
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-543",
                "text": "Ich sende sie hierher; du weißt den Dienst.Vierter Auftritt",
                "lineNumber": 543
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-544",
                "text": "Iphigenie: allein",
                "lineNumber": 544
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-545",
                "text": "Du hast Wolken, gnädige Retterin,",
                "lineNumber": 545
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-546",
                "text": "Einzuhüllen unschuldig Verfolgte",
                "lineNumber": 546
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-547",
                "text": "Und auf Winden dem ehrnen Geschick sie",
                "lineNumber": 547
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-548",
                "text": "Aus den Armen, über das Meer,",
                "lineNumber": 548
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-549",
                "text": "Über der Erde weiteste Strecken,",
                "lineNumber": 549
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-550",
                "text": "Und wohin es dir gut dünkt, zu tragen.",
                "lineNumber": 550
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-551",
                "text": "Weise bist du und siehest das Künftige;",
                "lineNumber": 551
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-552",
                "text": "Nicht vorüber ist dir das Vergangne,",
                "lineNumber": 552
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-553",
                "text": "Und dein Blick ruht über den Deinen,",
                "lineNumber": 553
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-554",
                "text": "Wie dein Licht, das Leben der Nächte,",
                "lineNumber": 554
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-555",
                "text": "Über der Erde ruhet und waltet.",
                "lineNumber": 555
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-556",
                "text": "O enthalte vom Blut meine Hände!",
                "lineNumber": 556
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-557",
                "text": "Nimmer bringt es Segen und Ruhe;",
                "lineNumber": 557
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-558",
                "text": "Und die Gestalt des zufällig Ermordeten",
                "lineNumber": 558
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-559",
                "text": "Wird auf des traurig-unwilligen Mörders",
                "lineNumber": 559
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-560",
                "text": "Böse Stunden laürn und schrecken.",
                "lineNumber": 560
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-561",
                "text": "Denn die Unsterblichen lieben der Menschen",
                "lineNumber": 561
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-562",
                "text": "Weit verbreitete gute Geschlechter,",
                "lineNumber": 562
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-563",
                "text": "Und sie fristen das flüchtige Leben",
                "lineNumber": 563
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-564",
                "text": "Gerne dem Sterblichen, wollen ihm gerne",
                "lineNumber": 564
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-565",
                "text": "Ihres eigenen, ewigen Himmels",
                "lineNumber": 565
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-566",
                "text": "Mitgenießendes fröhliches Anschaun",
                "lineNumber": 566
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-567",
                "text": "Eine Weile gönnen und laßen.Zweiter Aufzug",
                "lineNumber": 567
              }
            ],
            "act": 1,
            "scene": 1
          }
        ]
      },
      {
        "id": "act-1-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": [
          {
            "id": "act-1-scene-1-stanza-1",
            "title": "REGIE",
            "verses": [
              {
                "id": "act-1-scene-1-stanza-1-verse-568",
                "text": "Orest. Pylades.Orest:",
                "lineNumber": 568
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-569",
                "text": "Es ist der Weg des Todes, den wir treten:",
                "lineNumber": 569
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-570",
                "text": "Mit jedem Schritt wird meine Seele stiller.",
                "lineNumber": 570
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-571",
                "text": "Als ich Apollen bat, das gräßliche",
                "lineNumber": 571
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-572",
                "text": "Geleit der Rachegeister von der Seite",
                "lineNumber": 572
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-573",
                "text": "Mir abzunehmen; schien er Hülf und Rettung",
                "lineNumber": 573
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-574",
                "text": "Im Tempel seiner vielgeliebten Schwester,",
                "lineNumber": 574
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-575",
                "text": "Die über Tauris herrscht, mit hoffnungsreichen,",
                "lineNumber": 575
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-576",
                "text": "Gewißen Götterworten zu versprechen;",
                "lineNumber": 576
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-577",
                "text": "Und nun erfüllet sich's, daß alle Not",
                "lineNumber": 577
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-578",
                "text": "Mit meinem Leben völlig enden soll.",
                "lineNumber": 578
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-579",
                "text": "Wie leicht wird's mir, dem eine Götterhand",
                "lineNumber": 579
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-580",
                "text": "Das Herz zusammendrückt, den Sinn betäubt,",
                "lineNumber": 580
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-581",
                "text": "Dem schönen Licht der Sonne zu entsagen.",
                "lineNumber": 581
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-582",
                "text": "Und sollen Atreus' Enkel in der Schlacht",
                "lineNumber": 582
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-583",
                "text": "Ein siegbekröntes Ende nicht gewinnen,",
                "lineNumber": 583
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-584",
                "text": "Soll ich wie meine Ahnen, wie mein Vater",
                "lineNumber": 584
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-585",
                "text": "Als Opfertier im Jammertode bluten:",
                "lineNumber": 585
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-586",
                "text": "So sei es! Beßer hier vor dem Altar",
                "lineNumber": 586
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-587",
                "text": "Als im verworfnen Winkel, wo die Netze",
                "lineNumber": 587
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-588",
                "text": "Der nahverwandte Meuchelmörder stellt.",
                "lineNumber": 588
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-589",
                "text": "Laßt mir so lange Ruh, ihr Unterird'schen,",
                "lineNumber": 589
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-590",
                "text": "Die nach dem Blut ihr, das von meinen Tritten",
                "lineNumber": 590
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-591",
                "text": "Herniederträufelnd meinen Pfad bezeichnet,",
                "lineNumber": 591
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-592",
                "text": "Wie losgelaßne Hunde spürend hetzt!",
                "lineNumber": 592
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-593",
                "text": "Laßt mich, ich komme bald zu euch hinab;",
                "lineNumber": 593
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-594",
                "text": "Das Licht des Tags soll euch nicht sehn noch mich.",
                "lineNumber": 594
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-595",
                "text": "Der Erde schöner grüner Teppich soll",
                "lineNumber": 595
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-596",
                "text": "Kein Tummelplatz für Larven sein. Dort unten",
                "lineNumber": 596
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-597",
                "text": "Such ich euch auf: dort bindet alle dann",
                "lineNumber": 597
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-598",
                "text": "Ein gleich Geschick in ew'ge matte Nacht.",
                "lineNumber": 598
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-599",
                "text": "Nur dich, mein Pylades, dich, meiner Schuld",
                "lineNumber": 599
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-600",
                "text": "Und meines Banns unschuldigen Genoßen,",
                "lineNumber": 600
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-601",
                "text": "Wie ungern nehm ich dich in jenes Traürland",
                "lineNumber": 601
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-602",
                "text": "Frühzeitig mit! Dein Leben oder Tod",
                "lineNumber": 602
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-603",
                "text": "Gibt mir allein noch Hoffnung oder Furcht.Pylades:",
                "lineNumber": 603
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-604",
                "text": "Ich bin noch nicht, Orest, wie du bereit,",
                "lineNumber": 604
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-605",
                "text": "In jenes Schattenreich hinabzugehn.",
                "lineNumber": 605
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-606",
                "text": "Ich sinne noch, durch die verworrnen Pfade,",
                "lineNumber": 606
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-607",
                "text": "Die nach der schwarzen Nacht zu führen scheinen,",
                "lineNumber": 607
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-608",
                "text": "Uns zu dem Leben wieder aufzuwinden.",
                "lineNumber": 608
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-609",
                "text": "Ich denke nicht den Tod; ich sinn und horche,",
                "lineNumber": 609
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-610",
                "text": "Ob nicht zu irgendeiner frohen Flucht",
                "lineNumber": 610
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-611",
                "text": "Die Götter Rat und Wege zubereiten.",
                "lineNumber": 611
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-612",
                "text": "Der Tod, gefürchtet oder ungefürchtet,",
                "lineNumber": 612
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-613",
                "text": "Kommt unaufhaltsam. Wenn die Priesterin",
                "lineNumber": 613
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-614",
                "text": "Schon, unsre Locken weihend abzuschneiden,",
                "lineNumber": 614
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-615",
                "text": "Die Hand erhebt, soll dein' und meine Rettung",
                "lineNumber": 615
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-616",
                "text": "Mein einziger Gedanke sein. Erhebe",
                "lineNumber": 616
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-617",
                "text": "Von diesem Unmut deine Seele; zweifelnd",
                "lineNumber": 617
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-618",
                "text": "Beschleunigest du die Gefahr. Apoll",
                "lineNumber": 618
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-619",
                "text": "Gab uns das Wort: im Heiligtum der Schwester",
                "lineNumber": 619
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-620",
                "text": "Sei Trost und Hülf und Rückkehr dir bereitet.",
                "lineNumber": 620
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-621",
                "text": "Der Götter Worte sind nicht doppelsinnig,",
                "lineNumber": 621
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-622",
                "text": "Wie der Gedrückte sie im Unmut wähnt.Orest:",
                "lineNumber": 622
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-623",
                "text": "Des Lebens dunkle Decke breitete",
                "lineNumber": 623
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-624",
                "text": "Die Mutter schon mir um das zarte Haupt,",
                "lineNumber": 624
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-625",
                "text": "Und so wuchs ich herauf, ein Ebenbild",
                "lineNumber": 625
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-626",
                "text": "Des Vaters, und es war mein stummer Blick",
                "lineNumber": 626
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-627",
                "text": "Ein bittrer Vorwurf ihr und ihrem Buhlen.",
                "lineNumber": 627
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-628",
                "text": "Wie oft, wenn still Elektra, meine Schwester,",
                "lineNumber": 628
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-629",
                "text": "Am Feür in der tiefen Halle saß,",
                "lineNumber": 629
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-630",
                "text": "Drängt ich beklommen mich an ihren Schoß",
                "lineNumber": 630
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-631",
                "text": "Und starrte, wie sie bitter weinte, sie",
                "lineNumber": 631
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-632",
                "text": "Mit großen Augen an. Dann sagte sie",
                "lineNumber": 632
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-633",
                "text": "Von unserm hohen Vater viel: wie sehr",
                "lineNumber": 633
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-634",
                "text": "Verlangt ich, ihn zu sehn, bei ihm zu sein!",
                "lineNumber": 634
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-635",
                "text": "Mich wünscht ich bald nach Troja, ihn bald her.",
                "lineNumber": 635
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-636",
                "text": "Es kam der Tag –Pylades:",
                "lineNumber": 636
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-637",
                "text": "O laß von jener Stunde",
                "lineNumber": 637
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-638",
                "text": "Sich Höllengeister nächtlich unterhalten!",
                "lineNumber": 638
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-639",
                "text": "Uns gebe die Erinnrung schöner Zeit",
                "lineNumber": 639
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-640",
                "text": "Zu frischem Heldenlaufe neü Kraft.",
                "lineNumber": 640
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-641",
                "text": "Die Götter brauchen manchen guten Mann",
                "lineNumber": 641
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-642",
                "text": "Zu ihrem Dienst auf dieser weiten Erde.",
                "lineNumber": 642
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-643",
                "text": "Sie haben noch auf dich gezählt; sie gaben",
                "lineNumber": 643
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-644",
                "text": "Dich nicht dem Vater zum Geleite mit,",
                "lineNumber": 644
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-645",
                "text": "Da er unwillig nach dem Orkus ging.Orest:",
                "lineNumber": 645
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-646",
                "text": "O wär ich, seinen Saum ergreifend, ihm",
                "lineNumber": 646
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-647",
                "text": "Gefolgt!Pylades:",
                "lineNumber": 647
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-648",
                "text": "So haben die, die dich erhielten,",
                "lineNumber": 648
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-649",
                "text": "Für mich gesorgt: denn was ich worden wäre,",
                "lineNumber": 649
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-650",
                "text": "Wenn du nicht lebtest, kann ich mir nicht denken,",
                "lineNumber": 650
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-651",
                "text": "Da ich mit dir und deinetwillen nur",
                "lineNumber": 651
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-652",
                "text": "Seit meiner Kindheit leb und leben mag.Orest:",
                "lineNumber": 652
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-653",
                "text": "Erinnre mich nicht jener schönen Tage,",
                "lineNumber": 653
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-654",
                "text": "Da mir dein Haus die freie Stätte gab,",
                "lineNumber": 654
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-655",
                "text": "Dein edler Vater klug und liebevoll",
                "lineNumber": 655
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-656",
                "text": "Die halberstarrte junge Blüte pflegte;",
                "lineNumber": 656
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-657",
                "text": "Da du, ein immer munterer Geselle,",
                "lineNumber": 657
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-658",
                "text": "Gleich einem leichten bunten Schmetterling",
                "lineNumber": 658
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-659",
                "text": "Um eine dunkle Blume, jeden Tag",
                "lineNumber": 659
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-660",
                "text": "Um mich mit neüm Leben gaukeltest,",
                "lineNumber": 660
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-661",
                "text": "Mir deine Lust in meine Seele spieltest,",
                "lineNumber": 661
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-662",
                "text": "Daß ich, vergeßend meiner Not, mit dir",
                "lineNumber": 662
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-663",
                "text": "In rascher Jugend hingerißen schwärmte.Pylades:",
                "lineNumber": 663
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-664",
                "text": "Da fing mein Leben an, als ich dich liebte.Orest:",
                "lineNumber": 664
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-665",
                "text": "Sag: Meine Not begann, und du sprichst wahr.",
                "lineNumber": 665
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-666",
                "text": "Das ist das Ängstliche von meinem Schicksal,",
                "lineNumber": 666
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-667",
                "text": "Daß ich wie ein verpesteter Vertriebner",
                "lineNumber": 667
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-668",
                "text": "Geheimen Schmerz und Tod im Busen trage;",
                "lineNumber": 668
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-669",
                "text": "Daß, wo ich den gesundsten Ort betrete,",
                "lineNumber": 669
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-670",
                "text": "Gar bald um mich die blühenden Gesichter",
                "lineNumber": 670
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-671",
                "text": "Den Schmerzenszug langsamen Tods verraten.Pylades:",
                "lineNumber": 671
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-672",
                "text": "Der Nächste wär ich, diesen Tod zu sterben,",
                "lineNumber": 672
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-673",
                "text": "Wenn je dein Hauch, Orest, vergiftete.",
                "lineNumber": 673
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-674",
                "text": "Bin ich nicht immer noch voll Mut und Lust?",
                "lineNumber": 674
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-675",
                "text": "Und Lust und Liebe sind die Fittiche",
                "lineNumber": 675
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-676",
                "text": "Zu großen Taten.Orest:",
                "lineNumber": 676
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-677",
                "text": "Große Taten? Ja,",
                "lineNumber": 677
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-678",
                "text": "Ich weiß die Zeit, da wir sie vor uns sahn!",
                "lineNumber": 678
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-679",
                "text": "Wenn wir zusammen oft dem Wilde nach",
                "lineNumber": 679
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-680",
                "text": "Durch Berg' und Täler rannten und dereinst,",
                "lineNumber": 680
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-681",
                "text": "An Brust und Faust dem hohen Ahnherrn gleich,",
                "lineNumber": 681
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-682",
                "text": "Mit Keul und Schwert dem Ungeheür so,",
                "lineNumber": 682
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-683",
                "text": "Dem Räuber auf der Spur zu jagen hofften;",
                "lineNumber": 683
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-684",
                "text": "Und dann wir abends an der weiten See",
                "lineNumber": 684
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-685",
                "text": "Uns aneinanderlehnend ruhig saßen,",
                "lineNumber": 685
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-686",
                "text": "Die Wellen bis zu unsern Füßen spielten,",
                "lineNumber": 686
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-687",
                "text": "Die Welt so weit, so offen vor uns lag:",
                "lineNumber": 687
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-688",
                "text": "Da fuhr wohl einer manchmal nach dem Schwert,",
                "lineNumber": 688
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-689",
                "text": "Und künft'ge Taten drangen wie die Sterne",
                "lineNumber": 689
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-690",
                "text": "Rings um uns her unzählig aus der Nacht.Pylades:",
                "lineNumber": 690
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-691",
                "text": "Unendlich ist das Werk, das zu vollführen",
                "lineNumber": 691
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-692",
                "text": "Die Seele dringt. Wir möchten jede Tat",
                "lineNumber": 692
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-693",
                "text": "So groß gleich tun, als wie sie wächst und wird,",
                "lineNumber": 693
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-694",
                "text": "Wenn jahrelang durch Länder und Geschlechter",
                "lineNumber": 694
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-695",
                "text": "Der Mund der Dichter sie vermehrend wälzt.",
                "lineNumber": 695
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-696",
                "text": "Es klingt so schön, was unsre Väter taten,",
                "lineNumber": 696
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-697",
                "text": "Wenn es, in stillen Abendschatten ruhend,",
                "lineNumber": 697
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-698",
                "text": "Der Jüngling mit dem Ton der Harfe schlürft;",
                "lineNumber": 698
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-699",
                "text": "Und was wir tun, ist, wie es ihnen war,",
                "lineNumber": 699
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-700",
                "text": "Voll Müh und eitel Stückwerk!",
                "lineNumber": 700
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-701",
                "text": "So laufen wir nach dem, was vor uns flieht,",
                "lineNumber": 701
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-702",
                "text": "Und achten nicht des Weges, den wir treten,",
                "lineNumber": 702
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-703",
                "text": "Und sehen neben uns der Ahnherrn Tritte",
                "lineNumber": 703
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-704",
                "text": "Und ihres Erdelebens Spuren kaum.",
                "lineNumber": 704
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-705",
                "text": "Wir eilen immer ihrem Schatten nach,",
                "lineNumber": 705
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-706",
                "text": "Der göttergleich in einer weiten Ferne",
                "lineNumber": 706
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-707",
                "text": "Der Berge Haupt auf goldnen Wolken krönt.",
                "lineNumber": 707
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-708",
                "text": "Ich halte nichts von dem, der von sich denkt,",
                "lineNumber": 708
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-709",
                "text": "Wie ihn das Volk vielleicht erheben möchte.",
                "lineNumber": 709
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-710",
                "text": "Allein, o Jüngling, danke du den Göttern,",
                "lineNumber": 710
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-711",
                "text": "Daß sie so früh durch dich so viel getan.Orest:",
                "lineNumber": 711
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-712",
                "text": "Wenn sie dem Menschen frohe Tat bescheren,",
                "lineNumber": 712
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-713",
                "text": "Daß er ein Unheil von den Seinen wendet,",
                "lineNumber": 713
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-714",
                "text": "Daß er sein Reich vermehrt, die Grenzen sichert",
                "lineNumber": 714
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-715",
                "text": "Und alte Feinde fallen oder fliehn:",
                "lineNumber": 715
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-716",
                "text": "Dann mag er danken! denn ihm hat ein Gott",
                "lineNumber": 716
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-717",
                "text": "Des Lebens erste, letzte Lust gegönnt.",
                "lineNumber": 717
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-718",
                "text": "Mich haben sie zum Schlächter auserkoren,",
                "lineNumber": 718
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-719",
                "text": "Zum Mörder meiner doch verehrten Mutter,",
                "lineNumber": 719
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-720",
                "text": "Und, eine Schandtat schändlich rächend, mich",
                "lineNumber": 720
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-721",
                "text": "Durch ihren Wink zugrund gerichtet. Glaube,",
                "lineNumber": 721
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-722",
                "text": "Sie haben es auf Tantals Haus gerichtet,",
                "lineNumber": 722
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-723",
                "text": "Und ich, der Letzte, soll nicht schuldlos, soll",
                "lineNumber": 723
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-724",
                "text": "Nicht ehrenvoll vergehn.Pylades:",
                "lineNumber": 724
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-725",
                "text": "Die Götter rächen",
                "lineNumber": 725
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-726",
                "text": "Der Väter Mißetat nicht an dem Sohn;",
                "lineNumber": 726
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-727",
                "text": "Ein jeglicher, gut oder böse, nimmt",
                "lineNumber": 727
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-728",
                "text": "Sich seinen Lohn mit seiner Tat hinweg.",
                "lineNumber": 728
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-729",
                "text": "Et erbt der Eltern Segen, nicht ihr Fluch.Orest:",
                "lineNumber": 729
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-730",
                "text": "Uns führt ihr Segen, dünkt mich, nicht hierher.Pylades:",
                "lineNumber": 730
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-731",
                "text": "Doch wenigstens der hohen Götter Wille.Orest:",
                "lineNumber": 731
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-732",
                "text": "So ist's ihr Wille denn, der uns verderbt.Pylades:",
                "lineNumber": 732
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-733",
                "text": "Tu, was sie dir gebieten, und erwarte!",
                "lineNumber": 733
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-734",
                "text": "Bringst du die Schwester zu Apollen hin",
                "lineNumber": 734
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-735",
                "text": "Und wohnen beide dann vereint zu Delphi,",
                "lineNumber": 735
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-736",
                "text": "Verehrt von einem Volk, das edel denkt,",
                "lineNumber": 736
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-737",
                "text": "So wird für diese Tat das hohe Paar",
                "lineNumber": 737
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-738",
                "text": "Dir gnädig sein, sie werden aus der Hand",
                "lineNumber": 738
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-739",
                "text": "Der Unterird'schen dich erretten. Schon",
                "lineNumber": 739
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-740",
                "text": "In diesen heil'gen Hain wagt keine sich.Orest:",
                "lineNumber": 740
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-741",
                "text": "So hab ich wenigstens geruh'gen Tod.Pylades:",
                "lineNumber": 741
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-742",
                "text": "Ganz anders denk ich, und nicht ungeschickt",
                "lineNumber": 742
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-743",
                "text": "Hab ich das schon Geschehne mit dem Künft'gen",
                "lineNumber": 743
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-744",
                "text": "Verbunden und im stillen ausgelegt.",
                "lineNumber": 744
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-745",
                "text": "Vielleicht reift in der Götter Rat schon lange",
                "lineNumber": 745
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-746",
                "text": "Das große Werk. Diana sehnet sich",
                "lineNumber": 746
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-747",
                "text": "Von diesem rauhen Ufer der Barbaren",
                "lineNumber": 747
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-748",
                "text": "Und ihren blut'gen Menschenopfern weg.",
                "lineNumber": 748
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-749",
                "text": "Wir waren zu der schönen Tat bestimmt,",
                "lineNumber": 749
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-750",
                "text": "Uns wird sie auferlegt, und seltsam sind",
                "lineNumber": 750
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-751",
                "text": "Wir an der Pforte schon gezwungen hier.Orest:",
                "lineNumber": 751
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-752",
                "text": "Mit seltner Kunst flichtst du der Götter Rat",
                "lineNumber": 752
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-753",
                "text": "Und deine Wünsche klug in eins zusammen.Pylades:",
                "lineNumber": 753
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-754",
                "text": "Was ist des Menschen Klugheit, wenn sie nicht",
                "lineNumber": 754
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-755",
                "text": "Auf jener Willen droben achtend lauscht?",
                "lineNumber": 755
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-756",
                "text": "Zu einer schweren Tat beruft ein Gott",
                "lineNumber": 756
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-757",
                "text": "Den edeln Mann, der viel verbrach, und legt",
                "lineNumber": 757
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-758",
                "text": "Ihm auf, was uns unmöglich scheint, zu enden.",
                "lineNumber": 758
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-759",
                "text": "Es siegt der Held, und büßend dienet er",
                "lineNumber": 759
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-760",
                "text": "Den Göttern und der Welt, die ihn verehrt.Orest:",
                "lineNumber": 760
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-761",
                "text": "Bin ich bestimmt, zu leben und zu handeln,",
                "lineNumber": 761
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-762",
                "text": "So nehm ein Gott von meiner schweren Stirn",
                "lineNumber": 762
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-763",
                "text": "Den Schwindel weg, der auf dem schlüpfrigen,",
                "lineNumber": 763
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-764",
                "text": "Mit Mutterblut besprengten Pfade fort",
                "lineNumber": 764
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-765",
                "text": "Mich zu den Toten reißt. Er trockne gnädig",
                "lineNumber": 765
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-766",
                "text": "Die Qülle, die, mir aus der Mutter Wunden",
                "lineNumber": 766
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-767",
                "text": "Entgegensprudelnd, ewig mich befleckt.Pylades:",
                "lineNumber": 767
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-768",
                "text": "Erwart es ruhiger! Du mehrst das Übel",
                "lineNumber": 768
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-769",
                "text": "Und nimmst das Amt der Furien auf dich.",
                "lineNumber": 769
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-770",
                "text": "Laß mich nur sinnen, bleibe still! Zuletzt,",
                "lineNumber": 770
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-771",
                "text": "Bedarf's zur Tat vereinter Kräfte, dann",
                "lineNumber": 771
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-772",
                "text": "Ruf ich dich auf, und beide schreiten wir",
                "lineNumber": 772
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-773",
                "text": "Mit überlegter Kühnheit zur Vollendung.Orest:",
                "lineNumber": 773
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-774",
                "text": "Ich hör Ulyßen reden!Pylades:",
                "lineNumber": 774
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-775",
                "text": "Spotte nicht!",
                "lineNumber": 775
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-776",
                "text": "Ein jeglicher muß seinen Helden wählen,",
                "lineNumber": 776
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-777",
                "text": "Dem er die Wege zum Olymp hinauf",
                "lineNumber": 777
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-778",
                "text": "Sich nacharbeitet. Laß es mich gestehn:",
                "lineNumber": 778
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-779",
                "text": "Mir scheinen List und Klugheit nicht den Mann",
                "lineNumber": 779
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-780",
                "text": "Zu schänden, der sich kühnen Taten weiht.Orest:",
                "lineNumber": 780
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-781",
                "text": "Ich schätze den, der tapfer ist und grad.Pylades:",
                "lineNumber": 781
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-782",
                "text": "Drum hab ich keinen Rat von dir verlangt.",
                "lineNumber": 782
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-783",
                "text": "Schon ist ein Schritt getan. Von unsern Wächtern",
                "lineNumber": 783
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-784",
                "text": "Hab ich bisher gar vieles ausgelockt.",
                "lineNumber": 784
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-785",
                "text": "Ich weiß, ein fremdes, göttergleiches Weib",
                "lineNumber": 785
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-786",
                "text": "Hält jenes blutige Gesetz gefeßelt:",
                "lineNumber": 786
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-787",
                "text": "Ein reines Herz und Weihrauch und Gebet",
                "lineNumber": 787
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-788",
                "text": "Bringt sie den Göttern dar. Man rühmet hoch",
                "lineNumber": 788
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-789",
                "text": "Die Gütige; man glaubet, sie entspringe",
                "lineNumber": 789
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-790",
                "text": "Vom Stamm der Amazonen, sei geflohn,",
                "lineNumber": 790
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-791",
                "text": "Um einem großen Unheil zu entgehn.Orest:",
                "lineNumber": 791
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-792",
                "text": "Es scheint, ihr lichtes Reich verlor die Kraft",
                "lineNumber": 792
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-793",
                "text": "Durch des Verbrechers Nähe, den der Fluch",
                "lineNumber": 793
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-794",
                "text": "Wie eine breite Nacht verfolgt und deckt.",
                "lineNumber": 794
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-795",
                "text": "Die fromme Blutgier löst den alten Brauch",
                "lineNumber": 795
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-796",
                "text": "Von seinen Feßeln los, uns zu verderben.",
                "lineNumber": 796
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-797",
                "text": "Der wilde Sinn des Königs tötet uns;",
                "lineNumber": 797
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-798",
                "text": "Ein Weib wird uns nicht retten, wenn er zürnt.Pylades:",
                "lineNumber": 798
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-799",
                "text": "Wohl uns, daß es ein Weib ist! denn ein Mann,",
                "lineNumber": 799
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-800",
                "text": "Der beste selbst, gewöhnet seinen Geist",
                "lineNumber": 800
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-801",
                "text": "An Grausamkeit und macht sich auch zuletzt",
                "lineNumber": 801
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-802",
                "text": "Aus dem, was er verabscheut, ein Gesetz,",
                "lineNumber": 802
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-803",
                "text": "Wird aus Gewohnheit hart und fast unkenntlich.",
                "lineNumber": 803
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-804",
                "text": "Allein ein Weib bleibt stet auf einem Sinn,",
                "lineNumber": 804
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-805",
                "text": "Den sie gefaßt. Du rechnest sicherer",
                "lineNumber": 805
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-806",
                "text": "Auf sie im Guten wie im Bösen. – Still!",
                "lineNumber": 806
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-807",
                "text": "Sie kommt; laß uns allein. Ich darf nicht gleich",
                "lineNumber": 807
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-808",
                "text": "Ihr unsre Namen nennen, unser Schicksal",
                "lineNumber": 808
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-809",
                "text": "Nicht ohne Rückhalt ihr vertraun. Du gehst,",
                "lineNumber": 809
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-810",
                "text": "Und eh sie mit dir spricht, treff ich dich noch.Zweiter Auftritt",
                "lineNumber": 810
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-811",
                "text": "Iphigenie. Pylades.Iphigenie:",
                "lineNumber": 811
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-812",
                "text": "Woher du seist und kommst, o Fremdling, sprich!",
                "lineNumber": 812
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-813",
                "text": "Mir scheint es, daß ich eher einem Griechen",
                "lineNumber": 813
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-814",
                "text": "Als einem Skythen dich vergleichen soll.",
                "lineNumber": 814
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-815",
                "text": "Sie nimmt ihm die Ketten ab.",
                "lineNumber": 815
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-816",
                "text": "Gefährlich ist die Freiheit, die ich gebe;",
                "lineNumber": 816
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-817",
                "text": "Die Götter wenden ab, was euch bedroht!Pylades:",
                "lineNumber": 817
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-818",
                "text": "O süße Stimme! Vielwillkommner Ton",
                "lineNumber": 818
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-819",
                "text": "Der Muttersprach in einem fremden Lande!",
                "lineNumber": 819
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-820",
                "text": "Des väterlichen Hafens blaü Berge",
                "lineNumber": 820
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-821",
                "text": "Seh ich Gefangner neu willkommen wieder",
                "lineNumber": 821
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-822",
                "text": "Vor meinen Augen. Laß dir diese Freude",
                "lineNumber": 822
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-823",
                "text": "Versichern, daß auch ich ein Grieche bin!",
                "lineNumber": 823
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-824",
                "text": "Vergeßen hab ich einen Augenblick,",
                "lineNumber": 824
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-825",
                "text": "Wie sehr ich dein bedarf, und meinen Geist",
                "lineNumber": 825
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-826",
                "text": "Der herrlichen Erscheinung zugewendet.",
                "lineNumber": 826
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-827",
                "text": "O sage, wenn dir ein Verhängnis nicht",
                "lineNumber": 827
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-828",
                "text": "Die Lippe schließt, aus welchem unsrer Stämme",
                "lineNumber": 828
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-829",
                "text": "Du deine göttergleiche Herkunft zählst.Iphigenie:",
                "lineNumber": 829
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-830",
                "text": "Die Priesterin, von ihrer Göttin selbst",
                "lineNumber": 830
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-831",
                "text": "Gewählet und geheiligt, spricht mit dir.",
                "lineNumber": 831
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-832",
                "text": "Das laß dir genügen; sage, wer du seist",
                "lineNumber": 832
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-833",
                "text": "Und welch unselig waltendes Geschick",
                "lineNumber": 833
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-834",
                "text": "Mit dem Gefährten dich hierhergebracht.Pylades:",
                "lineNumber": 834
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-835",
                "text": "Leicht kann ich dir erzählen, welch ein Übel",
                "lineNumber": 835
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-836",
                "text": "Mit lastender Gesellschaft uns verfolgt.",
                "lineNumber": 836
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-837",
                "text": "O könntest du der Hoffnung frohen Blick",
                "lineNumber": 837
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-838",
                "text": "Uns auch so leicht, du Göttliche, gewähren!",
                "lineNumber": 838
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-839",
                "text": "Aus Kreta sind wir, Söhne des Adrasts:",
                "lineNumber": 839
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-840",
                "text": "Ich bin der jüngste, Cephalus genannt,",
                "lineNumber": 840
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-841",
                "text": "Und er Laodamas, der älteste",
                "lineNumber": 841
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-842",
                "text": "Des Hauses. Zwischen uns stand rauh und wild",
                "lineNumber": 842
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-843",
                "text": "Ein mittlerer und trennte schon im Spiel",
                "lineNumber": 843
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-844",
                "text": "Der ersten Jugend Einigkeit und Lust.",
                "lineNumber": 844
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-845",
                "text": "Gelaßen folgten wir der Mutter Worten,",
                "lineNumber": 845
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-846",
                "text": "Solang des Vaters Kraft vor Troja stritt;",
                "lineNumber": 846
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-847",
                "text": "Doch als er beutereich zurücke kam",
                "lineNumber": 847
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-848",
                "text": "Und kurz darauf verschied, da trennte bald",
                "lineNumber": 848
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-849",
                "text": "Der Streit um Reich und Erbe die Geschwister.",
                "lineNumber": 849
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-850",
                "text": "Ich neigte mich zum ältsten. Er erschlug",
                "lineNumber": 850
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-851",
                "text": "Den Bruder Um der Blutschuld willen treibt",
                "lineNumber": 851
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-852",
                "text": "Die Furie gewaltig ihn umher.",
                "lineNumber": 852
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-853",
                "text": "Doch diesem wilden Ufer sendet uns",
                "lineNumber": 853
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-854",
                "text": "Apoll, der Delphische, mit Hoffnung zu.",
                "lineNumber": 854
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-855",
                "text": "Im Tempel seiner Schwester hieß er uns",
                "lineNumber": 855
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-856",
                "text": "Der Hülfe segensvolle Hand erwarten.",
                "lineNumber": 856
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-857",
                "text": "Gefangen sind wir und hierhergebracht",
                "lineNumber": 857
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-858",
                "text": "Und dir als Opfer dargestellt. Du weißt's.Iphigenie:",
                "lineNumber": 858
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-859",
                "text": "Fiel Troja? Teurer Mann, versichr es mir.Pylades:",
                "lineNumber": 859
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-860",
                "text": "Es liegt. O sichre du uns Rettung zu!",
                "lineNumber": 860
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-861",
                "text": "Beschleunige die Hülfe, die ein Gott",
                "lineNumber": 861
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-862",
                "text": "Versprach. Erbarme meines Bruders dich.",
                "lineNumber": 862
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-863",
                "text": "O sag ihm bald ein gutes, holdes Wort;",
                "lineNumber": 863
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-864",
                "text": "Doch schone seiner, wenn du mit ihm sprichst,",
                "lineNumber": 864
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-865",
                "text": "Das bitt ich eifrig: denn es wird gar leicht",
                "lineNumber": 865
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-866",
                "text": "Durch Freud und Schmerz und durch Erinnerung",
                "lineNumber": 866
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-867",
                "text": "Sein Innerstes ergriffen und zerrüttet.",
                "lineNumber": 867
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-868",
                "text": "Ein fieberhafter Wahnsinn fällt ihn an,",
                "lineNumber": 868
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-869",
                "text": "Und seine schöne freie Seele wird",
                "lineNumber": 869
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-870",
                "text": "Den Furien zum Raube hingegeben.Iphigenie:",
                "lineNumber": 870
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-871",
                "text": "So groß dein Unglück ist, beschwör ich dich:",
                "lineNumber": 871
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-872",
                "text": "Vergiß es, bis du mir genuggetan.Pylades:",
                "lineNumber": 872
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-873",
                "text": "Die hohe Stadt, die zehen lange Jahre",
                "lineNumber": 873
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-874",
                "text": "Dem ganzen Heer der Griechen widerstand,",
                "lineNumber": 874
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-875",
                "text": "Liegt nun im Schutte, steigt nicht wieder auf.",
                "lineNumber": 875
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-876",
                "text": "Doch manche Gräber unsrer Besten heißen",
                "lineNumber": 876
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-877",
                "text": "Uns an das Ufer der Barbaren denken.",
                "lineNumber": 877
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-878",
                "text": "Achill liegt dort mit seinem schönen Freunde.Iphigenie:",
                "lineNumber": 878
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-879",
                "text": "So seid ihr Götterbilder auch zu Staub!Pylades:",
                "lineNumber": 879
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-880",
                "text": "Auch Palamedes, Ajax Telamons,",
                "lineNumber": 880
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-881",
                "text": "Sie sahn des Vaterlandes Tag nicht wieder.Iphigenie:",
                "lineNumber": 881
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-882",
                "text": "Er schweigt von meinem Vater, nennt ihn nicht",
                "lineNumber": 882
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-883",
                "text": "Mit den Erschlagnen. Ja! er lebt mir noch!",
                "lineNumber": 883
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-884",
                "text": "Ich werd ihn sehn. O hoffe, liebes Herz!Pylades:",
                "lineNumber": 884
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-885",
                "text": "Doch selig sind die Tausende, die starben",
                "lineNumber": 885
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-886",
                "text": "Den bittersüßen Tod von Feindes Hand!",
                "lineNumber": 886
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-887",
                "text": "Denn wüste Schrecken und ein traurig Ende",
                "lineNumber": 887
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-888",
                "text": "Hat den Rückkehrenden statt des Triumphs",
                "lineNumber": 888
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-889",
                "text": "Ein feindlich aufgebrachter Gott bereitet.",
                "lineNumber": 889
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-890",
                "text": "Kommt denn der Menschen Stimme nicht zu euch?",
                "lineNumber": 890
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-891",
                "text": "So weit sie reicht, trägt sie den Ruf umher",
                "lineNumber": 891
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-892",
                "text": "Von unerhörten Taten, die geschahn.",
                "lineNumber": 892
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-893",
                "text": "So ist der Jammer, der Mykenens Hallen",
                "lineNumber": 893
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-894",
                "text": "Mit immer wiederholten Seufzern füllt,",
                "lineNumber": 894
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-895",
                "text": "Dir ein Geheimnis? – Klytämnestra hat",
                "lineNumber": 895
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-896",
                "text": "Mit Hülf Ägisthens den Gemahl berückt,",
                "lineNumber": 896
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-897",
                "text": "Am Tage seiner Rückkehr ihn ermordet! –",
                "lineNumber": 897
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-898",
                "text": "Ja, du verehrest dieses Königs Haus!",
                "lineNumber": 898
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-899",
                "text": "Ich seh es, deine Brust bekämpft vergebens",
                "lineNumber": 899
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-900",
                "text": "Das unerwartet ungeheure Wort.",
                "lineNumber": 900
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-901",
                "text": "Bist du die Tochter eines Freundes? bist",
                "lineNumber": 901
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-902",
                "text": "Du nachbarlich in dieser Stadt geboren?",
                "lineNumber": 902
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-903",
                "text": "Verbirg es nicht und rechne mir's nicht zu,",
                "lineNumber": 903
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-904",
                "text": "Daß ich der erste diese Greül melde.Iphigenie:",
                "lineNumber": 904
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-905",
                "text": "Sag an, wie ward die schwere Tat vollbracht?Pylades:",
                "lineNumber": 905
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-906",
                "text": "Am Tage seiner Ankunft, da der König,",
                "lineNumber": 906
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-907",
                "text": "Vom Bad erquickt und ruhig, sein Gewand",
                "lineNumber": 907
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-908",
                "text": "Aus der Gemahlin Hand verlangend, stieg,",
                "lineNumber": 908
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-909",
                "text": "Warf die Verderbliche ein faltenreich",
                "lineNumber": 909
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-910",
                "text": "Und künstlich sich verwirrendes Gewebe",
                "lineNumber": 910
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-911",
                "text": "Ihm auf die Schultern, um das edle Haupt;",
                "lineNumber": 911
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-912",
                "text": "Und da er wie von einem Netze sich",
                "lineNumber": 912
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-913",
                "text": "Vergebens zu entwickeln strebte, schlug",
                "lineNumber": 913
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-914",
                "text": "Ägisth ihn, der Verräter, und verhüllt",
                "lineNumber": 914
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-915",
                "text": "Ging zu den Toten dieser große Fürst.Iphigenie:",
                "lineNumber": 915
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-916",
                "text": "Und welchen Lohn erhielt der Mitverschworne?Pylades:",
                "lineNumber": 916
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-917",
                "text": "Ein Reich und Bette, das er schon besaß.Iphigenie:",
                "lineNumber": 917
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-918",
                "text": "So trieb zur Schandtat eine böse Lust?Pylades:",
                "lineNumber": 918
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-919",
                "text": "Und einer alten Rache tief Gefühl.Iphigenie:",
                "lineNumber": 919
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-920",
                "text": "Und wie beleidigte der König sie?Pylades:",
                "lineNumber": 920
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-921",
                "text": "Mit schwerer Tat, die, wenn Entschuldigung",
                "lineNumber": 921
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-922",
                "text": "Des Mordes wäre, sie entschuldigte.",
                "lineNumber": 922
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-923",
                "text": "Nach Aulis lockt' er sie und brachte dort,",
                "lineNumber": 923
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-924",
                "text": "Als eine Gottheit sich der Griechen Fahrt",
                "lineNumber": 924
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-925",
                "text": "Mit ungestümen Winden widersetzte,",
                "lineNumber": 925
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-926",
                "text": "Die ältste Tochter, Iphigenien,",
                "lineNumber": 926
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-927",
                "text": "Vor den Altar Dianens, und sie fiel,",
                "lineNumber": 927
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-928",
                "text": "Ein blutig Opfer, für der Griechen Heil.",
                "lineNumber": 928
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-929",
                "text": "Dies, sagt man, hat ihr einen Widerwillen",
                "lineNumber": 929
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-930",
                "text": "So tief ins Herz geprägt, daß sie dem Werben",
                "lineNumber": 930
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-931",
                "text": "Ägisthens sich ergab und den Gemahl",
                "lineNumber": 931
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-932",
                "text": "Mit Netzen des Verderbens selbst umschlang.Iphigenie sich verhüllend:",
                "lineNumber": 932
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-933",
                "text": "Es ist genug. Du wirst mich wiedersehn.Pylades allein:",
                "lineNumber": 933
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-934",
                "text": "Von dem Geschick des Königshauses scheint",
                "lineNumber": 934
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-935",
                "text": "Sie tief gerührt. Wer sie auch immer sei,",
                "lineNumber": 935
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-936",
                "text": "So hat sie selbst den König wohl gekannt",
                "lineNumber": 936
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-937",
                "text": "Und ist, zu unserm Glück, aus hohem Hause",
                "lineNumber": 937
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-938",
                "text": "Hierher verkauft. Nur stille, liebes Herz,",
                "lineNumber": 938
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-939",
                "text": "Und laß dem Stern der Hoffnung, der uns blinkt,",
                "lineNumber": 939
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-940",
                "text": "Mit frohem Mut uns klug entgegensteürn.Dritter Aufzug",
                "lineNumber": 940
              }
            ],
            "act": 1,
            "scene": 1
          }
        ]
      },
      {
        "id": "act-1-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": [
          {
            "id": "act-1-scene-1-stanza-1",
            "title": "REGIE",
            "verses": [
              {
                "id": "act-1-scene-1-stanza-1-verse-941",
                "text": "Iphigenie. Orest.Iphigenie:",
                "lineNumber": 941
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-942",
                "text": "Unglücklicher, ich löse deine Bande",
                "lineNumber": 942
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-943",
                "text": "Zum Zeichen eines schmerzlichern Geschicks.",
                "lineNumber": 943
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-944",
                "text": "Die Freiheit, die das Heiligtum gewährt,",
                "lineNumber": 944
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-945",
                "text": "Ist, wie der letzte lichte Lebensblick",
                "lineNumber": 945
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-946",
                "text": "Des schwer Erkrankten, Todesbote. Noch",
                "lineNumber": 946
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-947",
                "text": "Kann ich es mir und darf es mir nicht sagen,",
                "lineNumber": 947
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-948",
                "text": "Daß ihr verloren seid! Wie könnt ich euch",
                "lineNumber": 948
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-949",
                "text": "Mit mörderischer Hand dem Tode weihen?",
                "lineNumber": 949
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-950",
                "text": "Und niemand, wer es sei, darf eür Haupt,",
                "lineNumber": 950
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-951",
                "text": "Solang ich Priesterin Dianens bin,",
                "lineNumber": 951
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-952",
                "text": "Berühren. Doch verweigr ich jene Pflicht,",
                "lineNumber": 952
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-953",
                "text": "Wie sie der aufgebrachte König fordert,",
                "lineNumber": 953
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-954",
                "text": "So wählt er eine meiner Jungfraun mir",
                "lineNumber": 954
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-955",
                "text": "Zur Folgerin, und ich vermag alsdann",
                "lineNumber": 955
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-956",
                "text": "Mit heißem Wunsch allein euch beizustehn.",
                "lineNumber": 956
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-957",
                "text": "O werter Landsmann! Selbst der letzte Knecht,",
                "lineNumber": 957
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-958",
                "text": "Der an den Herd der Vatergötter streifte,",
                "lineNumber": 958
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-959",
                "text": "Ist uns in fremdem Lande hoch willkommen:",
                "lineNumber": 959
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-960",
                "text": "Wie soll ich euch genug mit Freud und Segen",
                "lineNumber": 960
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-961",
                "text": "Empfangen, die ihr mir das Bild der Helden,",
                "lineNumber": 961
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-962",
                "text": "Die ich von Eltern her verehren lernte,",
                "lineNumber": 962
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-963",
                "text": "Entgegenbringet und das innre Herz",
                "lineNumber": 963
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-964",
                "text": "Mit neür, schöner Hoffnung schmeichelnd labet!Orest:",
                "lineNumber": 964
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-965",
                "text": "Verbirgst du deinen Namen, deine Herkunft",
                "lineNumber": 965
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-966",
                "text": "Mit klugem Vorsatz? oder darf ich wißen,",
                "lineNumber": 966
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-967",
                "text": "Wer mir, gleich einer Himmlischen, begegnet?Iphigenie:",
                "lineNumber": 967
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-968",
                "text": "Du sollst mich kennen. Jetzo sag mir an,",
                "lineNumber": 968
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-969",
                "text": "Was ich nur halb von deinem Bruder hörte,",
                "lineNumber": 969
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-970",
                "text": "Das Ende derer, die, von Troja kehrend,",
                "lineNumber": 970
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-971",
                "text": "Ein hartes, unerwartetes Geschick",
                "lineNumber": 971
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-972",
                "text": "Auf ihrer Wohnung Schwelle stumm empfing.",
                "lineNumber": 972
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-973",
                "text": "Zwar ward ich jung an diesen Strand geführt;",
                "lineNumber": 973
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-974",
                "text": "Doch wohl erinnr ich mich des scheün Blicks,",
                "lineNumber": 974
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-975",
                "text": "Den ich mit Staunen und mit Bangigkeit",
                "lineNumber": 975
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-976",
                "text": "Auf jene Helden warf. Sie zogen aus,",
                "lineNumber": 976
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-977",
                "text": "Als hätte der Olymp sich aufgetan",
                "lineNumber": 977
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-978",
                "text": "Und die Gestalten der erlauchten Vorwelt",
                "lineNumber": 978
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-979",
                "text": "Zum Schrecken Ilions herabgesendet,",
                "lineNumber": 979
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-980",
                "text": "Und Agamemnon war vor allen herrlich!",
                "lineNumber": 980
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-981",
                "text": "O sage mir! er fiel, sein Haus betretend,",
                "lineNumber": 981
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-982",
                "text": "Durch seiner Fraün und Ägisthens Tücke?Orest:",
                "lineNumber": 982
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-983",
                "text": "Du sagst's!Iphigenie:",
                "lineNumber": 983
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-984",
                "text": "Weh dir, unseliges Myken!",
                "lineNumber": 984
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-985",
                "text": "So haben Tantals Enkel Fluch auf Fluch",
                "lineNumber": 985
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-986",
                "text": "Mit vollen, wilden Händen ausgesät.",
                "lineNumber": 986
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-987",
                "text": "Und, gleich dem Unkraut, wüste Häupter schüttelnd",
                "lineNumber": 987
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-988",
                "text": "Und tausendfält'gen Samen um sich streünd,",
                "lineNumber": 988
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-989",
                "text": "Den Kindeskindern nahverwandte Mörder",
                "lineNumber": 989
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-990",
                "text": "Zur ew'gen Wechselwut erzeugt! Enthülle,",
                "lineNumber": 990
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-991",
                "text": "Was von der Rede deines Bruders schnell",
                "lineNumber": 991
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-992",
                "text": "Die Finsternis des Schreckens mir verdeckte.",
                "lineNumber": 992
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-993",
                "text": "Wie ist des großen Stammes letzter Sohn,",
                "lineNumber": 993
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-994",
                "text": "Das holde Kind, bestimmt, des Vaters Rächer",
                "lineNumber": 994
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-995",
                "text": "Dereinst zu sein, wie ist Orest dem Tage",
                "lineNumber": 995
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-996",
                "text": "Des Bluts entgangen? Hat ein gleich Geschick",
                "lineNumber": 996
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-997",
                "text": "Mit des Avernus Netzen ihn umschlungen?",
                "lineNumber": 997
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-998",
                "text": "Ist er gerettet? Lebt er? Lebt Elektra?Orest:",
                "lineNumber": 998
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-999",
                "text": "Sie leben.Iphigenie:",
                "lineNumber": 999
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1000",
                "text": "Goldne Sonne, leihe mir",
                "lineNumber": 1000
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1001",
                "text": "Die schönsten Strahlen, lege sie zum Dank",
                "lineNumber": 1001
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1002",
                "text": "Vor Jovis Thron! denn ich bin arm und stumm.Orest:",
                "lineNumber": 1002
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1003",
                "text": "Bist du gastfreundlich diesem Königshause,",
                "lineNumber": 1003
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1004",
                "text": "Bist du mit nähern Banden ihm verbunden,",
                "lineNumber": 1004
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1005",
                "text": "Wie deine schöne Freude mir verrät,",
                "lineNumber": 1005
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1006",
                "text": "So bändige dein Herz und halt es fest!",
                "lineNumber": 1006
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1007",
                "text": "Denn unerträglich muß dem Fröhlichen",
                "lineNumber": 1007
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1008",
                "text": "Ein jäher Rückfall in die Schmerzen sein.",
                "lineNumber": 1008
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1009",
                "text": "Du weißt nur, merk ich, Agamemnons Tod.Iphigenie:",
                "lineNumber": 1009
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1010",
                "text": "Hab ich an dieser Nachricht nicht genug?Orest:",
                "lineNumber": 1010
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1011",
                "text": "Du hast des Greüls Hälfte nur erfahren.Iphigenie:",
                "lineNumber": 1011
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1012",
                "text": "Was fürcht ich noch? Orest, Elektra leben.Orest:",
                "lineNumber": 1012
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1013",
                "text": "Und fürchtest du für Klytämnestren nichts?Iphigenie:",
                "lineNumber": 1013
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1014",
                "text": "Sie rettet weder Hoffnung, weder Furcht.Orest:",
                "lineNumber": 1014
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1015",
                "text": "Auch schied sie aus dem Land der Hoffnung ab.Iphigenie:",
                "lineNumber": 1015
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1016",
                "text": "Vergoß sie reuig wütend selbst ihr Blut?Orest:",
                "lineNumber": 1016
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1017",
                "text": "Nein, doch ihr eigen Blut gab ihr den Tod.Iphigenie:",
                "lineNumber": 1017
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1018",
                "text": "Sprich deutlicher, daß ich nicht länger sinne.",
                "lineNumber": 1018
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1019",
                "text": "Die Ungewißheit schlägt mir tausendfältig",
                "lineNumber": 1019
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1020",
                "text": "Die dunkeln Schwingen um das bange Haupt.Orest:",
                "lineNumber": 1020
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1021",
                "text": "So haben mich die Götter ausersehn",
                "lineNumber": 1021
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1022",
                "text": "Zum Boten einer Tat, die ich so gern",
                "lineNumber": 1022
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1023",
                "text": "Ins klanglos-dumpfe Höhlenreich der Nacht",
                "lineNumber": 1023
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1024",
                "text": "Verbergen möchte? Wider meinen Willen",
                "lineNumber": 1024
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1025",
                "text": "Zwingt mich dein holder Mund; allein er darf",
                "lineNumber": 1025
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1026",
                "text": "Auch etwas Schmerzlichs fordern und erhält's.",
                "lineNumber": 1026
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1027",
                "text": "Am Tage, da der Vater fiel, verbarg",
                "lineNumber": 1027
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1028",
                "text": "Elektra rettend ihren Bruder: Strophius,",
                "lineNumber": 1028
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1029",
                "text": "Des Vaters Schwäher, nahm ihn willig auf,",
                "lineNumber": 1029
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1030",
                "text": "Erzog ihn neben seinem eignen Sohne,",
                "lineNumber": 1030
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1031",
                "text": "Der, Pylades genannt, die schönsten Bande",
                "lineNumber": 1031
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1032",
                "text": "Der Freundschaft um den Angekommnen knüpfte.",
                "lineNumber": 1032
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1033",
                "text": "Und wie sie wuchsen, wuchs in ihrer Seele",
                "lineNumber": 1033
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1034",
                "text": "Die brennende Begier, des Königs Tod",
                "lineNumber": 1034
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1035",
                "text": "Zu rächen. Unversehen, fremd gekleidet,",
                "lineNumber": 1035
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1036",
                "text": "Erreichen sie Myken, als brächten sie",
                "lineNumber": 1036
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1037",
                "text": "Die Traürnachricht von Orestens Tode",
                "lineNumber": 1037
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1038",
                "text": "Mit seiner Asche. Wohl empfänget sie",
                "lineNumber": 1038
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1039",
                "text": "Die Königin; sie treten in das Haus.",
                "lineNumber": 1039
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1040",
                "text": "Elektren gibt Orest sich zu erkennen;",
                "lineNumber": 1040
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1041",
                "text": "Sie bläst der Rache Feür in ihm auf,",
                "lineNumber": 1041
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1042",
                "text": "Das vor der Mutter heil'ger Gegenwart",
                "lineNumber": 1042
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1043",
                "text": "In sich zurückgebrannt war. Stille führt",
                "lineNumber": 1043
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1044",
                "text": "Sie ihn zum Orte, wo sein Vater fiel,",
                "lineNumber": 1044
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1045",
                "text": "Wo eine alte, leichte Spur des frech",
                "lineNumber": 1045
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1046",
                "text": "Vergoßnen Blutes oft gewaschnen Boden",
                "lineNumber": 1046
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1047",
                "text": "Mit blaßen, ahndungsvollen Streifen färbte.",
                "lineNumber": 1047
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1048",
                "text": "Mit ihrer Feürzunge schilderte",
                "lineNumber": 1048
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1049",
                "text": "Sie jeden Umstand der verruchten Tat,",
                "lineNumber": 1049
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1050",
                "text": "Ihr knechtisch elend durchgebrachtes Leben,",
                "lineNumber": 1050
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1051",
                "text": "Den Übermut der glücklichen Verräter",
                "lineNumber": 1051
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1052",
                "text": "Und die Gefahren, die nun der Geschwister",
                "lineNumber": 1052
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1053",
                "text": "Von einer stiefgewordnen Mutter warteten. –",
                "lineNumber": 1053
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1054",
                "text": "Hier drang sie jenen alten Dolch ihm auf,",
                "lineNumber": 1054
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1055",
                "text": "Der schon in Tantals Hause grimmig wütete,",
                "lineNumber": 1055
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1056",
                "text": "Und Klytämnestra fiel durch Sohnes Hand.Iphigenie:",
                "lineNumber": 1056
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1057",
                "text": "Unsterbliche, die ihr den reinen Tag",
                "lineNumber": 1057
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1058",
                "text": "Auf immer neün Wolken selig lebet,",
                "lineNumber": 1058
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1059",
                "text": "Habt ihr nur darum mich so manches Jahr",
                "lineNumber": 1059
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1060",
                "text": "Von Menschen abgesondert, mich so nah",
                "lineNumber": 1060
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1061",
                "text": "Bei euch gehalten, mir die kindliche",
                "lineNumber": 1061
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1062",
                "text": "Beschäftigung, des heil'gen Feürs Glut",
                "lineNumber": 1062
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1063",
                "text": "Zu nähren, aufgetragen, meine Seele",
                "lineNumber": 1063
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1064",
                "text": "Der Flamme gleich in ew'ger, frommer Klarheit",
                "lineNumber": 1064
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1065",
                "text": "Zu eürn Wohnungen hinaufgezogen,",
                "lineNumber": 1065
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1066",
                "text": "Daß ich nur meines Hauses Greül später",
                "lineNumber": 1066
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1067",
                "text": "Und tiefer fühlen sollte? – Sage mir",
                "lineNumber": 1067
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1068",
                "text": "Vom Unglücksel'gen! Sprich mir von Orest! –Orest:",
                "lineNumber": 1068
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1069",
                "text": "O könnte man von seinem Tode sprechen!",
                "lineNumber": 1069
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1070",
                "text": "Wie gärend stieg aus der Erschlagnen Blut",
                "lineNumber": 1070
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1071",
                "text": "Der Mutter Geist",
                "lineNumber": 1071
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1072",
                "text": "Und ruft der Nacht uralten Töchtern zu:",
                "lineNumber": 1072
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1073",
                "text": "»Laßt nicht den Muttermörder entfliehn!",
                "lineNumber": 1073
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1074",
                "text": "Verfolgt den Verbrecher! Euch ist er geweiht!«",
                "lineNumber": 1074
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1075",
                "text": "Sie horchen auf, es schaut ihr hohler Blick",
                "lineNumber": 1075
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1076",
                "text": "Mit der Begier des Adlers um sich her.",
                "lineNumber": 1076
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1077",
                "text": "Sie rühren sich in ihren schwarzen Höhlen,",
                "lineNumber": 1077
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1078",
                "text": "Und aus den Winkeln schleichen ihre Gefährten,",
                "lineNumber": 1078
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1079",
                "text": "Der Zweifel und die Reü, leis herbei.",
                "lineNumber": 1079
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1080",
                "text": "Vor ihnen steigt ein Dampf vom Acheron;",
                "lineNumber": 1080
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1081",
                "text": "In seinen Wolkenkreisen wälzet sich",
                "lineNumber": 1081
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1082",
                "text": "Die ewige Betrachtung des Geschehnen",
                "lineNumber": 1082
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1083",
                "text": "Verwirrend um des Schuld'gen Haupt umher.",
                "lineNumber": 1083
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1084",
                "text": "Und sie, berechtigt zum Verderben, treten",
                "lineNumber": 1084
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1085",
                "text": "Der gottbesäten Erde schönen Boden,",
                "lineNumber": 1085
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1086",
                "text": "Von dem ein alter Fluch sie längst verbannte.",
                "lineNumber": 1086
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1087",
                "text": "Den Flüchtigen verfolgt ihr schneller Fuß;",
                "lineNumber": 1087
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1088",
                "text": "Sie geben nur, um neu zu schrecken, Rast.Iphigenie:",
                "lineNumber": 1088
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1089",
                "text": "Unseliger, du bist in gleichem Fall",
                "lineNumber": 1089
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1090",
                "text": "Und fühlst, was er, der arme Flüchtling, leidet!Orest:",
                "lineNumber": 1090
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1091",
                "text": "Was sagst du mir? Was wähnst du gleichen Fall?Iphigenie:",
                "lineNumber": 1091
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1092",
                "text": "Dich drückt ein Brudermord wie jenen; mir",
                "lineNumber": 1092
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1093",
                "text": "Vertraute dies dein jüngster Bruder schon.Orest:",
                "lineNumber": 1093
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1094",
                "text": "Ich kann nicht leiden, daß du große Seele",
                "lineNumber": 1094
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1095",
                "text": "Mit einem falschen Wort betrogen werdest.",
                "lineNumber": 1095
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1096",
                "text": "Ein lügenhaft Gewebe knüpf ein Fremder",
                "lineNumber": 1096
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1097",
                "text": "Dem Fremden, sinnreich und der List gewohnt,",
                "lineNumber": 1097
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1098",
                "text": "Zur Falle vor die Füße; zwischen uns",
                "lineNumber": 1098
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1099",
                "text": "Sei Wahrheit!",
                "lineNumber": 1099
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1100",
                "text": "Ich bin Orest! und dieses schuld'ge Haupt",
                "lineNumber": 1100
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1101",
                "text": "Senkt nach der Grube sich und sucht den Tod;",
                "lineNumber": 1101
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1102",
                "text": "In jeglicher Gestalt sei er willkommen!",
                "lineNumber": 1102
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1103",
                "text": "Wer du auch seist, so wünsch ich Rettung dir",
                "lineNumber": 1103
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1104",
                "text": "Und meinem Freunde; mir wünsch ich sie nicht.",
                "lineNumber": 1104
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1105",
                "text": "Du scheinst hier wider Willen zu verweilen;",
                "lineNumber": 1105
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1106",
                "text": "Erfindet Rat zur Flucht und laßt mich hier.",
                "lineNumber": 1106
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1107",
                "text": "Es stürze mein entseelter Leib vom Fels,",
                "lineNumber": 1107
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1108",
                "text": "Es rauche bis zum Meer hinab mein Blut",
                "lineNumber": 1108
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1109",
                "text": "Und bringe Fluch dem Ufer der Barbaren!",
                "lineNumber": 1109
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1110",
                "text": "Geht ihr, daheim im schönen Griechenland",
                "lineNumber": 1110
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1111",
                "text": "Ein neüs Leben freundlich anzufangen!",
                "lineNumber": 1111
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1112",
                "text": "Er entfernt sich.Iphigenie:",
                "lineNumber": 1112
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1113",
                "text": "So steigst du denn, Erfüllung, schönste Tochter",
                "lineNumber": 1113
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1114",
                "text": "Des größten Vaters, endlich zu mir nieder!",
                "lineNumber": 1114
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1115",
                "text": "Wie ungeheür steht dein Bild vor mir!",
                "lineNumber": 1115
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1116",
                "text": "Kaum reicht mein Blick dir an die Hände, die,",
                "lineNumber": 1116
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1117",
                "text": "Mit Frucht und Segenskränzen angefüllt,",
                "lineNumber": 1117
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1118",
                "text": "Die Schätze des Olympus niederbringen.",
                "lineNumber": 1118
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1119",
                "text": "Wie man den König an dem Übermaß",
                "lineNumber": 1119
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1120",
                "text": "Der Gaben kennt – denn ihm muß wenig scheinen,",
                "lineNumber": 1120
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1121",
                "text": "Was Tausenden schon Reichtum ist –, so kennt",
                "lineNumber": 1121
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1122",
                "text": "Man euch, ihr Götter, an gesparten, lang",
                "lineNumber": 1122
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1123",
                "text": "Und weise zubereiteten Geschenken.",
                "lineNumber": 1123
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1124",
                "text": "Denn ihr allein wißt, was uns frommen kann,",
                "lineNumber": 1124
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1125",
                "text": "Und schaut der Zukunft ausgedehntes Reich,",
                "lineNumber": 1125
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1126",
                "text": "Wenn jedes Abends Stern- und Nebelhülle",
                "lineNumber": 1126
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1127",
                "text": "Die Außicht uns verdeckt. Gelaßen hört",
                "lineNumber": 1127
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1128",
                "text": "Ihr unser Flehn, das um Beschleunigung",
                "lineNumber": 1128
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1129",
                "text": "Euch kindisch bittet; aber eure Hand",
                "lineNumber": 1129
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1130",
                "text": "Bricht unreif nie die goldnen Himmelsfrüchte,",
                "lineNumber": 1130
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1131",
                "text": "Und wehe dem, der, ungeduldig sie",
                "lineNumber": 1131
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1132",
                "text": "Ertrotzend, saure Speise sich zum Tod",
                "lineNumber": 1132
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1133",
                "text": "Genießt. O laßt das lang erwartete,",
                "lineNumber": 1133
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1134",
                "text": "Noch kaum gedachte Glück nicht wie den Schatten",
                "lineNumber": 1134
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1135",
                "text": "Des abgeschiednen Freundes eitel mir",
                "lineNumber": 1135
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1136",
                "text": "Und dreifach schmerzlicher vorübergehn!Orest tritt wieder zu ihr:",
                "lineNumber": 1136
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1137",
                "text": "Rufst du die Götter an für dich und Pylades,",
                "lineNumber": 1137
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1138",
                "text": "So nenne meinen Namen nicht mit eurem.",
                "lineNumber": 1138
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1139",
                "text": "Du rettest den Verbrecher nicht, zu dem",
                "lineNumber": 1139
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1140",
                "text": "Du dich gesellst, und teilest Fluch und Not.Iphigenie:",
                "lineNumber": 1140
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1141",
                "text": "Mein Schicksal ist an deines fest gebunden.Orest:",
                "lineNumber": 1141
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1142",
                "text": "Mitnichten! Laß allein und unbegleitet",
                "lineNumber": 1142
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1143",
                "text": "Mich zu den Toten gehn. Verhülltest du",
                "lineNumber": 1143
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1144",
                "text": "In deinen Schleier selbst den Schuldigen:",
                "lineNumber": 1144
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1145",
                "text": "Du birgst ihn nicht vorm Blick der immer Wachen,",
                "lineNumber": 1145
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1146",
                "text": "Und deine Gegenwart, du Himmlische,",
                "lineNumber": 1146
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1147",
                "text": "Drängt sie nur seitwärts und verscheucht sie nicht.",
                "lineNumber": 1147
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1148",
                "text": "Sie dürfen mit den ehrnen frechen Füßen",
                "lineNumber": 1148
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1149",
                "text": "Des heil'gen Waldes Boden nicht betreten;",
                "lineNumber": 1149
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1150",
                "text": "Doch hör ich aus der Ferne hier und da",
                "lineNumber": 1150
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1151",
                "text": "Ihr gräßliches Gelächter. Wölfe harren",
                "lineNumber": 1151
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1152",
                "text": "So um den Baum, auf den ein Reisender",
                "lineNumber": 1152
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1153",
                "text": "Sich rettete. Da draußen ruhen sie",
                "lineNumber": 1153
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1154",
                "text": "Gelagert; und verlaß ich diesen Hain,",
                "lineNumber": 1154
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1155",
                "text": "Dann steigen sie, die Schlangenhäupter schüttelnd,",
                "lineNumber": 1155
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1156",
                "text": "Von allen Seiten Staub erregend auf",
                "lineNumber": 1156
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1157",
                "text": "Und treiben ihre Beute vor sich her.Iphigenie:",
                "lineNumber": 1157
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1158",
                "text": "Kannst du, Orest, ein freundlich Wort vernehmen?Orest:",
                "lineNumber": 1158
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1159",
                "text": "Spar es für einen Freund der Götter auf.Iphigenie:",
                "lineNumber": 1159
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1160",
                "text": "Sie geben dir zu neür Hoffnung Licht.Orest:",
                "lineNumber": 1160
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1161",
                "text": "Durch Rauch und Qualm seh ich den matten Schein",
                "lineNumber": 1161
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1162",
                "text": "Des Totenflußes mir zur Hölle leuchten.Iphigenie:",
                "lineNumber": 1162
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1163",
                "text": "Hast du Elektren, eine Schwester nur?Orest:",
                "lineNumber": 1163
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1164",
                "text": "Die eine kannt ich; doch die ältste nahm",
                "lineNumber": 1164
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1165",
                "text": "Ihr gut Geschick, das uns so schrecklich schien,",
                "lineNumber": 1165
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1166",
                "text": "Beizeiten aus dem Elend unsers Hauses.",
                "lineNumber": 1166
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1167",
                "text": "O laß dein Fragen und geselle dich",
                "lineNumber": 1167
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1168",
                "text": "Nicht auch zu den Erinnyen; sie blasen",
                "lineNumber": 1168
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1169",
                "text": "Mir schadenfroh die Asche von der Seele",
                "lineNumber": 1169
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1170",
                "text": "Und leiden nicht, daß sich die letzten Kohlen",
                "lineNumber": 1170
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1171",
                "text": "Von unsers Hauses Schreckensbrande still",
                "lineNumber": 1171
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1172",
                "text": "In mir verglimmen. Soll die Glut denn ewig,",
                "lineNumber": 1172
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1173",
                "text": "Vorsätzlich angefacht, mit Höllenschwefel",
                "lineNumber": 1173
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1174",
                "text": "Genährt, mir auf der Seele marternd brennen?Iphigenie:",
                "lineNumber": 1174
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1175",
                "text": "Ich bringe süßes Rauchwerk in die Flamme.",
                "lineNumber": 1175
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1176",
                "text": "O laß den reinen Hauch der Liebe dir",
                "lineNumber": 1176
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1177",
                "text": "Die Glut des Busens leise wehend kühlen.",
                "lineNumber": 1177
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1178",
                "text": "Orest, mein Teurer, kannst du nicht vernehmen?",
                "lineNumber": 1178
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1179",
                "text": "Hat das Geleit der Schreckensgötter so",
                "lineNumber": 1179
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1180",
                "text": "Das Blut in deinen Adern aufgetrocknet?",
                "lineNumber": 1180
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1181",
                "text": "Schleicht, wie vom Haupt der gräßlichen Gorgone,",
                "lineNumber": 1181
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1182",
                "text": "Versteinernd dir ein Zauber durch die Glieder?",
                "lineNumber": 1182
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1183",
                "text": "O wenn vergoßnen Mutterblutes Stimme",
                "lineNumber": 1183
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1184",
                "text": "Zur Höll hinab mit dumpfen Tönen ruft,",
                "lineNumber": 1184
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1185",
                "text": "Soll nicht der reinen Schwester Segenswort",
                "lineNumber": 1185
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1186",
                "text": "Hülfreiche Götter vom Olympus rufen?Orest:",
                "lineNumber": 1186
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1187",
                "text": "Es ruft! es ruft! So willst du mein Verderben?",
                "lineNumber": 1187
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1188",
                "text": "Verbirgt in dir sich eine Rachegöttin?",
                "lineNumber": 1188
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1189",
                "text": "Wer bist du, deren Stimme mir entsetzlich",
                "lineNumber": 1189
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1190",
                "text": "Das Innerste in seinen Tiefen wendet?Iphigenie:",
                "lineNumber": 1190
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1191",
                "text": "Es zeigt sich dir im tiefsten Herzen an:",
                "lineNumber": 1191
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1192",
                "text": "Orest, ich bin's! Sieh Iphigenien!",
                "lineNumber": 1192
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1193",
                "text": "Ich lebe!Orest:",
                "lineNumber": 1193
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1194",
                "text": "Du!Iphigenie:",
                "lineNumber": 1194
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1195",
                "text": "Mein Bruder!Orest:",
                "lineNumber": 1195
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1196",
                "text": "Laß! Hinweg!",
                "lineNumber": 1196
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1197",
                "text": "Ich rate dir, berühre nicht die Locken!",
                "lineNumber": 1197
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1198",
                "text": "Wie von Kreusas Brautkleid zündet sich",
                "lineNumber": 1198
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1199",
                "text": "Ein unauslöschlich Feür von mir fort.",
                "lineNumber": 1199
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1200",
                "text": "Laß mich! Wie Herkules will ich Unwürd'ger",
                "lineNumber": 1200
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1201",
                "text": "Den Tod voll Schmach, in mich verschloßen, sterben.Iphigenie:",
                "lineNumber": 1201
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1202",
                "text": "Du wirst nicht untergehn! O daß ich nur",
                "lineNumber": 1202
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1203",
                "text": "Ein ruhig Wort von dir vernehmen könnte!",
                "lineNumber": 1203
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1204",
                "text": "O löse meine Zweifel, laß des Glückes,",
                "lineNumber": 1204
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1205",
                "text": "Des lang erflehten, mich auch sicher werden.",
                "lineNumber": 1205
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1206",
                "text": "Es wälzet sich ein Rad von Freud und Schmerz",
                "lineNumber": 1206
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1207",
                "text": "Durch meine Seele. Von dem fremden Manne",
                "lineNumber": 1207
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1208",
                "text": "Entfernet mich ein Schaür; doch es reißt",
                "lineNumber": 1208
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1209",
                "text": "Mein Innerstes gewaltig mich zum Bruder.Orest:",
                "lineNumber": 1209
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1210",
                "text": "Ist hier Lyäens Tempel? und ergreift",
                "lineNumber": 1210
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1211",
                "text": "Unbändig-heil'ge Wut die Priesterin?Iphigenie:",
                "lineNumber": 1211
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1212",
                "text": "O höre mich! O sieh mich an, wie mir",
                "lineNumber": 1212
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1213",
                "text": "Nach einer langen Zeit das Herz sich öffnet,",
                "lineNumber": 1213
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1214",
                "text": "Der Seligkeit, dem Liebsten, was die Welt",
                "lineNumber": 1214
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1215",
                "text": "Noch für mich tragen kann, das Haupt zu küßen,",
                "lineNumber": 1215
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1216",
                "text": "Mit meinen Armen, die den leeren Winden",
                "lineNumber": 1216
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1217",
                "text": "Nur ausgebreitet waren, dich zu faßen!",
                "lineNumber": 1217
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1218",
                "text": "O laß mich! Laß mich! Denn es quillet heller",
                "lineNumber": 1218
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1219",
                "text": "Nicht vom Parnaß die ew'ge Qülle sprudelnd",
                "lineNumber": 1219
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1220",
                "text": "Von Fels zu Fels ins goldne Tal hinab,",
                "lineNumber": 1220
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1221",
                "text": "Wie Freude mir vom Herzen wallend fließt",
                "lineNumber": 1221
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1222",
                "text": "Und wie ein selig Meer mich rings umfängt.",
                "lineNumber": 1222
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1223",
                "text": "Orest! Orest! Mein Bruder!Orest:",
                "lineNumber": 1223
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1224",
                "text": "Schöne Nymphe,",
                "lineNumber": 1224
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1225",
                "text": "Ich traü dir und deinem Schmeicheln nicht.",
                "lineNumber": 1225
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1226",
                "text": "Diana fordert strenge Dienerinnen",
                "lineNumber": 1226
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1227",
                "text": "Und rächet das entweihte Heiligtum.",
                "lineNumber": 1227
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1228",
                "text": "Entferne deinen Arm von meiner Brust!",
                "lineNumber": 1228
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1229",
                "text": "Und wenn du einen Jüngling rettend lieben,",
                "lineNumber": 1229
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1230",
                "text": "Das schöne Glück ihm zärtlich bieten willst,",
                "lineNumber": 1230
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1231",
                "text": "So wende meinem Freunde dein Gemüt,",
                "lineNumber": 1231
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1232",
                "text": "Dem würd'gern Manne, zu. Er irrt umher",
                "lineNumber": 1232
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1233",
                "text": "Auf jenem Felsenpfade; such ihn auf,",
                "lineNumber": 1233
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1234",
                "text": "Weis ihn zurecht und schone meiner.Iphigenie:",
                "lineNumber": 1234
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1235",
                "text": "Faße",
                "lineNumber": 1235
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1236",
                "text": "Dich, Bruder, und erkenne die Gefundne!",
                "lineNumber": 1236
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1237",
                "text": "Schilt einer Schwester reine Himmelsfreude",
                "lineNumber": 1237
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1238",
                "text": "Nicht unbesonnene, strafbare Lust.",
                "lineNumber": 1238
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1239",
                "text": "O nehmt den Wahn ihm von dem starren Auge,",
                "lineNumber": 1239
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1240",
                "text": "Daß uns der Augenblick der höchsten Freude",
                "lineNumber": 1240
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1241",
                "text": "Nicht dreifach elend mache! Sie ist hier,",
                "lineNumber": 1241
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1242",
                "text": "Die längst verlorne Schwester. Vom Altar",
                "lineNumber": 1242
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1243",
                "text": "Riß mich die Göttin weg und rettete",
                "lineNumber": 1243
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1244",
                "text": "Hierher mich in ihr eigen Heiligtum.",
                "lineNumber": 1244
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1245",
                "text": "Gefangen bist du, dargestellt zum Opfer,",
                "lineNumber": 1245
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1246",
                "text": "Und findest in der Priesterin die Schwester.Orest:",
                "lineNumber": 1246
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1247",
                "text": "Unselige! So mag die Sonne denn",
                "lineNumber": 1247
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1248",
                "text": "Die letzten Greül unsers Hauses sehn!",
                "lineNumber": 1248
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1249",
                "text": "Ist nicht Elektra hier, damit auch sie",
                "lineNumber": 1249
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1250",
                "text": "Mit uns zugrunde gehe, nicht ihr Leben",
                "lineNumber": 1250
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1251",
                "text": "Zu schwererem Geschick und Leiden friste?",
                "lineNumber": 1251
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1252",
                "text": "Gut, Priesterin! ich folge zum Altar:",
                "lineNumber": 1252
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1253",
                "text": "Der Brudermord ist hergebrachte Sitte",
                "lineNumber": 1253
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1254",
                "text": "Des alten Stammes; und ich danke, Götter,",
                "lineNumber": 1254
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1255",
                "text": "Daß ihr mich ohne Kinder auszurotten",
                "lineNumber": 1255
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1256",
                "text": "Beschloßen habt. Und laß dir raten, habe",
                "lineNumber": 1256
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1257",
                "text": "Die Sonne nicht zu lieb und nicht die Sterne;",
                "lineNumber": 1257
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1258",
                "text": "Komm, folge mir ins dunkle Reich hinab!",
                "lineNumber": 1258
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1259",
                "text": "Wie sich vom Schwefelpfuhl erzeugte Drachen,",
                "lineNumber": 1259
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1260",
                "text": "Bekämpfend die verwandte Brut, verschlingen,",
                "lineNumber": 1260
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1261",
                "text": "Zerstört sich selbst das wütende Geschlecht;",
                "lineNumber": 1261
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1262",
                "text": "Komm kinderlos und schuldlos mit hinab!",
                "lineNumber": 1262
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1263",
                "text": "Du siehst mich mit Erbarmen an? Laß ab!",
                "lineNumber": 1263
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1264",
                "text": "Mit solchen Blicken suchte Klytämnestra",
                "lineNumber": 1264
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1265",
                "text": "Sich einen Weg nach ihres Sohnes Herzen;",
                "lineNumber": 1265
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1266",
                "text": "Doch sein geschwungner Arm traf ihre Brust.",
                "lineNumber": 1266
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1267",
                "text": "Die Mutter fiel! – Tritt auf, unwill'ger Geist!",
                "lineNumber": 1267
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1268",
                "text": "Im Kreis geschloßen tretet an, ihr Furien,",
                "lineNumber": 1268
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1269",
                "text": "Und wohnet dem willkommnen Schauspiel bei,",
                "lineNumber": 1269
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1270",
                "text": "Dem letzten, gräßlichsten, das ihr bereitet!",
                "lineNumber": 1270
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1271",
                "text": "Nicht Haß und Rache schärfen ihren Dolch;",
                "lineNumber": 1271
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1272",
                "text": "Die liebevolle Schwester wird zur Tat",
                "lineNumber": 1272
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1273",
                "text": "Gezwungen. Weine nicht! Du hast nicht schuld.",
                "lineNumber": 1273
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1274",
                "text": "Seit meinen ersten Jahren hab ich nichts",
                "lineNumber": 1274
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1275",
                "text": "Geliebt, wie ich dich lieben könnte, Schwester.",
                "lineNumber": 1275
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1276",
                "text": "Ja, schwinge deinen Stahl, verschone nicht,",
                "lineNumber": 1276
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1277",
                "text": "Zerreiße diesen Busen und eröffne",
                "lineNumber": 1277
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1278",
                "text": "Den Strömen, die hier sieden, einen Weg!",
                "lineNumber": 1278
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1279",
                "text": "Er sinkt in Ermattung.Iphigenie:",
                "lineNumber": 1279
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1280",
                "text": "Allein zu tragen dieses Glück und Elend,",
                "lineNumber": 1280
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1281",
                "text": "Vermag ich nicht. – Wo bist du, Pylades?",
                "lineNumber": 1281
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1282",
                "text": "Wo find ich deine Hülfe, teurer Mann?",
                "lineNumber": 1282
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1283",
                "text": "Sie entfernt sich suchend.Zweiter Auftritt",
                "lineNumber": 1283
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1284",
                "text": "Orest aus seiner Betäubung erwachend und sich aufrichtend:",
                "lineNumber": 1284
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1285",
                "text": "Noch einen' reiche mir aus Lethes Fluten",
                "lineNumber": 1285
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1286",
                "text": "Den letzten kühlen Becher der Erquickung!",
                "lineNumber": 1286
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1287",
                "text": "Bald ist der Krampf des Lebens aus dem Busen",
                "lineNumber": 1287
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1288",
                "text": "Hinweggespült; bald fließet still mein Geist,",
                "lineNumber": 1288
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1289",
                "text": "Der Qülle des Vergeßens hingegeben,",
                "lineNumber": 1289
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1290",
                "text": "Zu euch, ihr Schatten, in die ew'gen Nebel.",
                "lineNumber": 1290
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1291",
                "text": "Gefällig laßt in eurer Ruhe sich",
                "lineNumber": 1291
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1292",
                "text": "Den umgetriebnen Sohn der Erde laben! –",
                "lineNumber": 1292
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1293",
                "text": "Welch ein Gelispel hör ich in den Zweigen,",
                "lineNumber": 1293
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1294",
                "text": "Welch ein Geräusch aus jener Dämmrung säuseln? –",
                "lineNumber": 1294
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1295",
                "text": "Sie kommen schon, den neün Gast zu sehn!",
                "lineNumber": 1295
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1296",
                "text": "Wer ist die Schar, die herrlich miteinander",
                "lineNumber": 1296
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1297",
                "text": "Wie ein versammelt Fürstenhaus sich freut?",
                "lineNumber": 1297
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1298",
                "text": "Sie gehen friedlich, Alt' und Junge, Männer",
                "lineNumber": 1298
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1299",
                "text": "Mit Weibern; göttergleich und ähnlich scheinen",
                "lineNumber": 1299
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1300",
                "text": "Die wandelnden Gestalten. Ja, sie sind's,",
                "lineNumber": 1300
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1301",
                "text": "Die Ahnherrn meines Hauses! – Mit Thyesten",
                "lineNumber": 1301
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1302",
                "text": "Geht Atreus in vertraulichen Gesprächen,",
                "lineNumber": 1302
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1303",
                "text": "Die Knaben schlüpfen scherzend um sie her.",
                "lineNumber": 1303
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1304",
                "text": "Ist keine Feindschaft hier mehr unter euch?",
                "lineNumber": 1304
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1305",
                "text": "Verlosch die Rache wie das Licht der Sonne?",
                "lineNumber": 1305
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1306",
                "text": "So bin auch ich willkommen, und ich darf",
                "lineNumber": 1306
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1307",
                "text": "In eürn feierlichen Zug mich mischen.",
                "lineNumber": 1307
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1308",
                "text": "Willkommen, Väter! euch grüßt Orest,",
                "lineNumber": 1308
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1309",
                "text": "Von eürm Stamme der letzte Mann;",
                "lineNumber": 1309
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1310",
                "text": "Was ihr gesät, hat er geerntet:",
                "lineNumber": 1310
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1311",
                "text": "Mit Fluch beladen stieg er herab.",
                "lineNumber": 1311
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1312",
                "text": "Doch leichter träget sich hier jede Bürde:",
                "lineNumber": 1312
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1313",
                "text": "Nehmt ihn, o nehmt ihn in eürn Kreis! –",
                "lineNumber": 1313
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1314",
                "text": "Dich, Atreus, ehr ich, auch dich, Thyesten:",
                "lineNumber": 1314
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1315",
                "text": "Wir sind hier alle der Feindschaft los. –",
                "lineNumber": 1315
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1316",
                "text": "Zeigt mir den Vater, den ich nur einmal",
                "lineNumber": 1316
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1317",
                "text": "Im Leben sah! – Bist du's, mein Vater?",
                "lineNumber": 1317
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1318",
                "text": "Und führst die Mutter vertraut mit dir?",
                "lineNumber": 1318
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1319",
                "text": "Darf Klytämnestra die Hand dir reichen,",
                "lineNumber": 1319
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1320",
                "text": "So darf Orest auch zu ihr treten",
                "lineNumber": 1320
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1321",
                "text": "Und darf ihr sagen: Sieh deinen Sohn! –",
                "lineNumber": 1321
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1322",
                "text": "Seht eürn Sohn! Heißt ihn willkommen!",
                "lineNumber": 1322
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1323",
                "text": "Auf Erden war in unserm Hause",
                "lineNumber": 1323
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1324",
                "text": "Der Gruß des Mordes gewiße Losung,",
                "lineNumber": 1324
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1325",
                "text": "Und das Geschlecht des alten Tantalus",
                "lineNumber": 1325
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1326",
                "text": "Hat seine Freuden jenseits der Nacht.",
                "lineNumber": 1326
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1327",
                "text": "Ihr ruft: »Willkommen!« und nehmt mich auf.",
                "lineNumber": 1327
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1328",
                "text": "O führt zum Alten, zum Ahnherrn mich!",
                "lineNumber": 1328
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1329",
                "text": "Wo ist der Alte? daß ich ihn sehe,",
                "lineNumber": 1329
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1330",
                "text": "Das teure Haupt, das vielverehrte,",
                "lineNumber": 1330
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1331",
                "text": "Das mit den Göttern zu Rate saß.",
                "lineNumber": 1331
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1332",
                "text": "Ihr scheint zu zaudern, euch wegzuwenden?",
                "lineNumber": 1332
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1333",
                "text": "Was ist es? Leidet der Göttergleiche?",
                "lineNumber": 1333
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1334",
                "text": "Weh mir! es haben die Übermächt'gen",
                "lineNumber": 1334
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1335",
                "text": "Der Heldenbrust grausame Qualen",
                "lineNumber": 1335
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1336",
                "text": "Mit ehrnen Ketten fest aufgeschmiedet.Dritter Auftritt",
                "lineNumber": 1336
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1337",
                "text": "Orest. Iphigenie. Pylades.Orest:",
                "lineNumber": 1337
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1338",
                "text": "Seid ihr auch schon herabgekommen?",
                "lineNumber": 1338
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1339",
                "text": "Wohl, Schwester, dir! Noch fehlt Elektra:",
                "lineNumber": 1339
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1340",
                "text": "Ein güt'ger Gott send uns die eine",
                "lineNumber": 1340
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1341",
                "text": "Mit sanften Pfeilen auch schnell herab.",
                "lineNumber": 1341
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1342",
                "text": "Dich, armer Freund, muß ich bedaürn!",
                "lineNumber": 1342
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1343",
                "text": "Komm mit! komm mit! zu Plutos Thron,",
                "lineNumber": 1343
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1344",
                "text": "Als neü Gäste den Wirt zu grüßen.Iphigenie:",
                "lineNumber": 1344
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1345",
                "text": "Geschwister, die ihr an dem weiten Himmel",
                "lineNumber": 1345
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1346",
                "text": "Das schöne Licht bei Tag und Nacht herauf",
                "lineNumber": 1346
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1347",
                "text": "Den Menschen bringet und den Abgeschiednen",
                "lineNumber": 1347
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1348",
                "text": "Nicht leuchten dürfet, rettet uns Geschwister!",
                "lineNumber": 1348
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1349",
                "text": "Du liebst Diane, deinen holden Bruder",
                "lineNumber": 1349
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1350",
                "text": "Vor allem, was dir Erd und Himmel bietet",
                "lineNumber": 1350
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1351",
                "text": "Und wendest dein jungfräulich Angesicht",
                "lineNumber": 1351
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1352",
                "text": "Nach seinem ew'gen Lichte sehnend still.",
                "lineNumber": 1352
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1353",
                "text": "O laß den einz'gen, spätgefundnen mir",
                "lineNumber": 1353
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1354",
                "text": "Nicht in der Finsternis des Wahnsinns rasen!",
                "lineNumber": 1354
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1355",
                "text": "Und ist dein Wille, da du hier mich bargst,",
                "lineNumber": 1355
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1356",
                "text": "Nunmehr vollendet, willst du mir durch ihn",
                "lineNumber": 1356
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1357",
                "text": "Und ihm durch mich die sel'ge Hülfe geben,",
                "lineNumber": 1357
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1358",
                "text": "So lös ihn von den Banden jenes Fluchs,",
                "lineNumber": 1358
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1359",
                "text": "Daß nicht die teure Zeit der Rettung schwinde!Pylades:",
                "lineNumber": 1359
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1360",
                "text": "Erkennst du uns und diesen heil'gen Hain",
                "lineNumber": 1360
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1361",
                "text": "Und dieses Licht, das nicht den Toten leuchtet?",
                "lineNumber": 1361
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1362",
                "text": "Fühlst du den Arm des Freundes und der Schwester,",
                "lineNumber": 1362
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1363",
                "text": "Die dich noch fest, noch lebend halten? Faß",
                "lineNumber": 1363
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1364",
                "text": "Uns kräftig an; wir sind nicht leere Schatten.",
                "lineNumber": 1364
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1365",
                "text": "Merk auf mein Wort! Vernimm es! Raffe dich",
                "lineNumber": 1365
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1366",
                "text": "Zusammen! Jeder Augenblick ist teür,",
                "lineNumber": 1366
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1367",
                "text": "Und unsre Rückkehr hängt an zarten Fäden,",
                "lineNumber": 1367
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1368",
                "text": "Die, scheint es, eine günst'ge Parze spinnt.Orest zu Iphigenien:",
                "lineNumber": 1368
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1369",
                "text": "Laß mich zum erstenmal mit freiem Herzen",
                "lineNumber": 1369
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1370",
                "text": "In deinen Armen reine Freude haben!",
                "lineNumber": 1370
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1371",
                "text": "Ihr Götter, die mit flammender Gewalt",
                "lineNumber": 1371
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1372",
                "text": "Ihr schwere Wolken aufzuzehren wandelt",
                "lineNumber": 1372
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1373",
                "text": "Und gnädig-ernst den lang erflehten Regen",
                "lineNumber": 1373
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1374",
                "text": "Mit Donnerstimmen und mit Windesbrausen",
                "lineNumber": 1374
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1375",
                "text": "In wilden Strömen auf die Erde schüttet,",
                "lineNumber": 1375
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1376",
                "text": "Doch bald der Menschen grausendes Erwarten",
                "lineNumber": 1376
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1377",
                "text": "In Segen auflöst und das bange Staunen",
                "lineNumber": 1377
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1378",
                "text": "In Freudeblick und lauten Dank verwandelt,",
                "lineNumber": 1378
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1379",
                "text": "Wenn in den Tropfen frisch erquickter Blätter",
                "lineNumber": 1379
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1380",
                "text": "Die neü Sonne tausendfach sich spiegelt",
                "lineNumber": 1380
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1381",
                "text": "Und Iris freundlich bunt mit leichter Hand",
                "lineNumber": 1381
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1382",
                "text": "Den graün Flor der letzten Wolken trennt:",
                "lineNumber": 1382
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1383",
                "text": "O laßt mich auch in meiner Schwester Armen,",
                "lineNumber": 1383
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1384",
                "text": "An meines Freundes Brust, was ihr mir gönnt,",
                "lineNumber": 1384
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1385",
                "text": "Mit vollem Dank genießen und behalten!",
                "lineNumber": 1385
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1386",
                "text": "Es löset sich der Fluch, mir sagt's das Herz.",
                "lineNumber": 1386
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1387",
                "text": "Die Eumeniden ziehn, ich höre sie,",
                "lineNumber": 1387
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1388",
                "text": "Zum Tartarus und schlagen hinter sich",
                "lineNumber": 1388
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1389",
                "text": "Die ehrnen Tore fernabdonnernd zu.",
                "lineNumber": 1389
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1390",
                "text": "Die Erde dampft erquickenden Geruch",
                "lineNumber": 1390
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1391",
                "text": "Und ladet mich auf ihren Flächen ein,",
                "lineNumber": 1391
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1392",
                "text": "Nach Lebensfreud und großer Tat zu jagen.Pylades:",
                "lineNumber": 1392
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1393",
                "text": "Versäumt die Zeit nicht, die gemeßen ist!",
                "lineNumber": 1393
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1394",
                "text": "Der Wind, der unsre Segel schwellt, er bringe",
                "lineNumber": 1394
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1395",
                "text": "Erst unsre volle Freude zum Olymp.",
                "lineNumber": 1395
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1396",
                "text": "Kommt! Es bedarf hier schnellen Rat und Schluß.Vierter Aufzug",
                "lineNumber": 1396
              }
            ],
            "act": 1,
            "scene": 1
          }
        ]
      },
      {
        "id": "act-1-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": [
          {
            "id": "act-1-scene-1-stanza-1",
            "title": "IPHIGENIE:",
            "verses": [
              {
                "id": "act-1-scene-1-stanza-1-verse-1397",
                "text": "Denken die Himmlischen",
                "lineNumber": 1397
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1398",
                "text": "Einem der Erdgebornen",
                "lineNumber": 1398
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1399",
                "text": "Viele Verwirrungen zu",
                "lineNumber": 1399
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1400",
                "text": "Und bereiten sie ihm",
                "lineNumber": 1400
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1401",
                "text": "Von der Freude zu Schmerzen",
                "lineNumber": 1401
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1402",
                "text": "Und von Schmerzen zur Freude",
                "lineNumber": 1402
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1403",
                "text": "Tief erschütternden Übergang:",
                "lineNumber": 1403
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1404",
                "text": "Dann erziehen sie ihm",
                "lineNumber": 1404
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1405",
                "text": "In der Nähe der Stadt",
                "lineNumber": 1405
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1406",
                "text": "Oder am fernen Gestade,",
                "lineNumber": 1406
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1407",
                "text": "Daß in Stunden der Not",
                "lineNumber": 1407
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1408",
                "text": "Auch die Hülfe bereit sei,",
                "lineNumber": 1408
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1409",
                "text": "Einen ruhigen Freund.",
                "lineNumber": 1409
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1410",
                "text": "O segnet, Götter, unsern Pylades",
                "lineNumber": 1410
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1411",
                "text": "Und was er immer unternehmen mag!",
                "lineNumber": 1411
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1412",
                "text": "Er ist der Arm des Jünglings in der Schlacht,",
                "lineNumber": 1412
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1413",
                "text": "Der Greises leuchtend Aug in der Versammlung:",
                "lineNumber": 1413
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1414",
                "text": "Denn seine Seel ist stille; sie bewahrt",
                "lineNumber": 1414
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1415",
                "text": "Der Ruhe heil'ges, unerschöpftes Gut,",
                "lineNumber": 1415
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1416",
                "text": "Und den Umhergetriebnen reichet er",
                "lineNumber": 1416
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1417",
                "text": "Aus ihren Tiefen Rat und Hülfe. Mich",
                "lineNumber": 1417
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1418",
                "text": "Riß er vom Bruder los; den staunt ich an",
                "lineNumber": 1418
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1419",
                "text": "Und immer wieder an und konnte mir",
                "lineNumber": 1419
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1420",
                "text": "Das Glück nicht eigen machen, ließ ihn nicht",
                "lineNumber": 1420
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1421",
                "text": "Aus meinen Armen los und fühlte nicht",
                "lineNumber": 1421
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1422",
                "text": "Die Nähe der Gefahr, die uns umgibt.",
                "lineNumber": 1422
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1423",
                "text": "Jetzt gehn sie, ihren Anschlag auszuführen,",
                "lineNumber": 1423
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1424",
                "text": "Der See zu, wo das Schiff mit den Gefährten,",
                "lineNumber": 1424
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1425",
                "text": "In einer Bucht versteckt, aufs Zeichen laürt,",
                "lineNumber": 1425
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1426",
                "text": "Und haben kluges Wort mir in den Mund",
                "lineNumber": 1426
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1427",
                "text": "Gegeben, mich gelehrt, was ich dem König",
                "lineNumber": 1427
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1428",
                "text": "Antworte, wenn er sendet und das Opfer",
                "lineNumber": 1428
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1429",
                "text": "Mir dringender gebietet. Ach! ich sehe wohl,",
                "lineNumber": 1429
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1430",
                "text": "Ich muß mich leiten laßen wie ein Kind.",
                "lineNumber": 1430
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1431",
                "text": "Ich habe nicht gelernt zu hinterhalten",
                "lineNumber": 1431
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1432",
                "text": "Noch jemand etwas abzulisten. Weh!",
                "lineNumber": 1432
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1433",
                "text": "O weh der Lüge! Sie befreiet nicht",
                "lineNumber": 1433
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1434",
                "text": "Wie jedes andre, wahrgesprochne Wort",
                "lineNumber": 1434
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1435",
                "text": "Die Brust; sie macht uns nicht getrost, sie ängstet",
                "lineNumber": 1435
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1436",
                "text": "Den, der sie heimlich schmiedet, und sie kehrt,",
                "lineNumber": 1436
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1437",
                "text": "Ein losgedruckter Pfeil, von einem Gotte",
                "lineNumber": 1437
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1438",
                "text": "Gewendet und versagend, sich zurück",
                "lineNumber": 1438
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1439",
                "text": "Und trifft den Schützen. Sorg auf Sorge schwankt",
                "lineNumber": 1439
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1440",
                "text": "Mir durch die Brust. Es greift die Furie",
                "lineNumber": 1440
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1441",
                "text": "Vielleicht den Bruder auf dem Boden wieder",
                "lineNumber": 1441
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1442",
                "text": "Des ungeweihten Ufers grimmig an.",
                "lineNumber": 1442
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1443",
                "text": "Entdeckt man sie vielleicht? Mich dünkt, ich höre",
                "lineNumber": 1443
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1444",
                "text": "Gewaffnete sich nahen! – Hier! – Der Bote",
                "lineNumber": 1444
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1445",
                "text": "Kommt von dem Könige mit schnellem Schritt.",
                "lineNumber": 1445
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1446",
                "text": "Es schlägt mein Herz, es trübt sich meine Seele,",
                "lineNumber": 1446
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1447",
                "text": "Da ich des Mannes Angesicht erblicke,",
                "lineNumber": 1447
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1448",
                "text": "Dem ich mit falschem Wort begegnen soll.Zweiter Auftritt",
                "lineNumber": 1448
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1449",
                "text": "Iphigenie. Arkas.Arkas:",
                "lineNumber": 1449
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1450",
                "text": "Beschleunige das Opfer, Priesterin!",
                "lineNumber": 1450
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1451",
                "text": "Der König wartet, und es harrt das Volk.Iphigenie:",
                "lineNumber": 1451
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1452",
                "text": "Ich folgte meiner Pflicht und deinem Wink,",
                "lineNumber": 1452
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1453",
                "text": "Wenn unvermutet nicht ein Hindernis",
                "lineNumber": 1453
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1454",
                "text": "Sich zwischen mich und die Erfüllung stellte.Arkas:",
                "lineNumber": 1454
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1455",
                "text": "Was ist's, das den Befehl des Königs hindert?Iphigenie:",
                "lineNumber": 1455
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1456",
                "text": "Der Zufall, deßen wir nicht Meister sind.Arkas:",
                "lineNumber": 1456
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1457",
                "text": "So sage mir's, daß ich's ihm schnell vermelde:",
                "lineNumber": 1457
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1458",
                "text": "Denn er beschloß bei sich der beiden Tod.Iphigenie:",
                "lineNumber": 1458
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1459",
                "text": "Die Götter haben ihn noch nicht beschloßen.",
                "lineNumber": 1459
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1460",
                "text": "Der ältste dieser Männer trägt die Schuld",
                "lineNumber": 1460
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1461",
                "text": "Des nahverwandten Bluts, das er vergoß.",
                "lineNumber": 1461
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1462",
                "text": "Die Furien verfolgen seinen Pfad,",
                "lineNumber": 1462
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1463",
                "text": "Ja, in dem innern Tempel faßte selbst",
                "lineNumber": 1463
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1464",
                "text": "Das Übel ihn, und seine Gegenwart",
                "lineNumber": 1464
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1465",
                "text": "Entheiligte die reine Stätte. Nun",
                "lineNumber": 1465
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1466",
                "text": "Eil ich mit meinen Jungfraun, an dem Meere",
                "lineNumber": 1466
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1467",
                "text": "Der Göttin Bild mit frischer Welle netzend,",
                "lineNumber": 1467
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1468",
                "text": "Geheimnisvolle Weihe zu begehn.",
                "lineNumber": 1468
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1469",
                "text": "Es störe niemand unsern stillen Zug!Arkas:",
                "lineNumber": 1469
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1470",
                "text": "Ich melde dieses neü Hindernis",
                "lineNumber": 1470
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1471",
                "text": "Dem Könige geschwind; beginne du",
                "lineNumber": 1471
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1472",
                "text": "Das heil'ge Werk nicht eh, bis er's erlaubt.Iphigenie:",
                "lineNumber": 1472
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1473",
                "text": "Dies ist allein der Priestrin uberlaßen.Arkas:",
                "lineNumber": 1473
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1474",
                "text": "Solch seltnen Fall soll auch der König wißen.Iphigenie:",
                "lineNumber": 1474
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1475",
                "text": "Sein Rat wie sein Befehl verändert nichts.Arkas:",
                "lineNumber": 1475
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1476",
                "text": "Oft wird der Mächtige zum Schein gefragt.Iphigenie:",
                "lineNumber": 1476
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1477",
                "text": "Erdringe nicht, was ich versagen sollte.Arkas:",
                "lineNumber": 1477
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1478",
                "text": "Versage nicht, was gut und nützlich ist.Iphigenie:",
                "lineNumber": 1478
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1479",
                "text": "Ich gebe nach, wenn du nicht säumen willst.Arkas:",
                "lineNumber": 1479
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1480",
                "text": "Schnell bin ich mit der Nachricht in dem Lager.",
                "lineNumber": 1480
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1481",
                "text": "Und schnell mit seinen Worten hier zurück.",
                "lineNumber": 1481
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1482",
                "text": "O könnt ich ihm noch eine Botschaft bringen,",
                "lineNumber": 1482
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1483",
                "text": "Die alles löste, was uns jetzt verwirrt:",
                "lineNumber": 1483
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1484",
                "text": "Denn du hast nicht des Treün Rat geachtet.Iphigenie:",
                "lineNumber": 1484
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1485",
                "text": "Was ich vermochte, hab ich gern getan.Arkas:",
                "lineNumber": 1485
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1486",
                "text": "Noch änderst du den Sinn zur rechten Zeit.Iphigenie:",
                "lineNumber": 1486
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1487",
                "text": "Das steht nun einmal nicht in unsrer Macht.Arkas:",
                "lineNumber": 1487
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1488",
                "text": "Du hältst unmöglich, was dir Mühe kostet.Iphigenie:",
                "lineNumber": 1488
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1489",
                "text": "Dir scheint es möglich, weil der Wunsch dich trügt.Arkas:",
                "lineNumber": 1489
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1490",
                "text": "Willst du denn alles so gelaßen wagen?Iphigenie:",
                "lineNumber": 1490
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1491",
                "text": "Ich hab es in der Götter Hand gelegt.Arkas:",
                "lineNumber": 1491
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1492",
                "text": "Sie pflegen Menschen menschlich zu erretten.Iphigenie:",
                "lineNumber": 1492
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1493",
                "text": "Auf ihren Fingerzeig kömmt alles an.Arkas:",
                "lineNumber": 1493
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1494",
                "text": "Ich sage dir, es liegt in deiner Hand.",
                "lineNumber": 1494
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1495",
                "text": "Des Königs aufgebrachter Sinn allein",
                "lineNumber": 1495
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1496",
                "text": "Bereitet diesen Fremden bittern Tod.",
                "lineNumber": 1496
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1497",
                "text": "Das Heer entwöhnte längst vom harten Opfer",
                "lineNumber": 1497
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1498",
                "text": "Und von dem blut'gen Dienste sein Gemüt.",
                "lineNumber": 1498
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1499",
                "text": "Ja, mancher, den ein widriges Geschick",
                "lineNumber": 1499
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1500",
                "text": "An fremdes Ufer trug, empfand es selbst,",
                "lineNumber": 1500
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1501",
                "text": "Wie göttergleich dem armen Irrenden,",
                "lineNumber": 1501
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1502",
                "text": "Umhergetriebnen an der fremden Grenze",
                "lineNumber": 1502
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1503",
                "text": "Ein freundlich Menschenangesicht begegnet.",
                "lineNumber": 1503
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1504",
                "text": "O wende nicht von uns, was du vermagst!",
                "lineNumber": 1504
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1505",
                "text": "Du endest leicht, was du begonnen hast:",
                "lineNumber": 1505
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1506",
                "text": "Denn nirgends baut die Milde, die herab",
                "lineNumber": 1506
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1507",
                "text": "In menschlicher Gestalt vom Himmel kommt,",
                "lineNumber": 1507
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1508",
                "text": "Ein Reich sich schneller, als wo trüb und wild",
                "lineNumber": 1508
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1509",
                "text": "Ein neüs Volk voll Leben, Mut und Kraft,",
                "lineNumber": 1509
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1510",
                "text": "Sich selbst und banger Ahnung überlaßen,",
                "lineNumber": 1510
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1511",
                "text": "Des Menschenlebens schwere Bürden trägt.Iphigenie:",
                "lineNumber": 1511
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1512",
                "text": "Erschüttre meine Seele nicht, die du",
                "lineNumber": 1512
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1513",
                "text": "Nach deinem Willen nicht bewegen kannst.Arkas:",
                "lineNumber": 1513
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1514",
                "text": "Solang es Zeit ist, schont man weder Mühe",
                "lineNumber": 1514
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1515",
                "text": "Noch eines guten Wortes Wiederholung.Iphigenie:",
                "lineNumber": 1515
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1516",
                "text": "Du machst dir Müh, und mir erregst du Schmerzen;",
                "lineNumber": 1516
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1517",
                "text": "Vergebens beides: darum laß mich nun.Arkas:",
                "lineNumber": 1517
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1518",
                "text": "Die Schmerzen sind's, die ich zu Hülfe rufe:",
                "lineNumber": 1518
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1519",
                "text": "Denn es sind Freunde, Gutes raten sie.Iphigenie:",
                "lineNumber": 1519
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1520",
                "text": "Sie faßen meine Seele mit Gewalt,",
                "lineNumber": 1520
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1521",
                "text": "Doch tilgen sie den Widerwillen nicht.Arkas:",
                "lineNumber": 1521
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1522",
                "text": "Fühlt eine schöne Seele Widerwillen",
                "lineNumber": 1522
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1523",
                "text": "Für eine Wohltat, die der Edle reicht?Iphigenie:",
                "lineNumber": 1523
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1524",
                "text": "Ja, wenn der Edle, was sich nicht geziemt,",
                "lineNumber": 1524
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1525",
                "text": "Statt meines Dankes mich erwerben will.Arkas:",
                "lineNumber": 1525
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1526",
                "text": "Wer keine Neigung fühlt, dem mangelt es",
                "lineNumber": 1526
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1527",
                "text": "An einem Worte der Entschuld'gung nie.",
                "lineNumber": 1527
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1528",
                "text": "Dem Fürsten sag ich an, was hier geschehn.",
                "lineNumber": 1528
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1529",
                "text": "O wiederholtest du in deiner Seele,",
                "lineNumber": 1529
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1530",
                "text": "Wie edel er sich gegen dich betrug",
                "lineNumber": 1530
              },
              {
                "id": "act-1-scene-1-stanza-1-verse-1531",
                "text": "Von deiner Ankunft an bis diesen Tag!Dritter Auftritt",
                "lineNumber": 1531
              }
            ],
            "act": 1,
            "scene": 1
          },
          {
            "id": "act-1-scene-1-stanza-2",
            "title": "IPHIGENIE ALLEIN:",
            "verses": [
              {
                "id": "act-1-scene-1-stanza-2-verse-1532",
                "text": "Von dieses Mannes Rede fühl ich mir",
                "lineNumber": 1532
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1533",
                "text": "Zur ungelegnen Zeit das Herz im Busen",
                "lineNumber": 1533
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1534",
                "text": "Auf einmal umgewendet. Ich erschrecke! –",
                "lineNumber": 1534
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1535",
                "text": "Denn wie die Flut mit schnellen Strömen wachsend",
                "lineNumber": 1535
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1536",
                "text": "Die Felsen überspült, die in dem Sand",
                "lineNumber": 1536
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1537",
                "text": "Am Ufer liegen: so bedeckte ganz",
                "lineNumber": 1537
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1538",
                "text": "Ein Freudenstrom mein Innerstes. Ich hielt",
                "lineNumber": 1538
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1539",
                "text": "In meinen Armen das Unmögliche.",
                "lineNumber": 1539
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1540",
                "text": "Es schien sich eine Wolke wieder sanft",
                "lineNumber": 1540
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1541",
                "text": "Um mich zu legen, von der Erde mich",
                "lineNumber": 1541
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1542",
                "text": "Emporzuheben und in jenen Schlummer",
                "lineNumber": 1542
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1543",
                "text": "Mich einzuwiegen, den die gute Göttin",
                "lineNumber": 1543
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1544",
                "text": "Um meine Schläfe legte, da ihr Arm",
                "lineNumber": 1544
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1545",
                "text": "Mich rettend faßte. – Meinen Bruder",
                "lineNumber": 1545
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1546",
                "text": "Ergriff das Herz mit einziger Gewalt:",
                "lineNumber": 1546
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1547",
                "text": "Ich horchte nur auf seines Freundes Rat;",
                "lineNumber": 1547
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1548",
                "text": "Nur sie zu retten, drang die Seele vorwärts.",
                "lineNumber": 1548
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1549",
                "text": "Und wie den Klippen einer wüsten Insel",
                "lineNumber": 1549
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1550",
                "text": "Der Schiffer gern den Rücken wendet: so",
                "lineNumber": 1550
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1551",
                "text": "Lag Tauris hinter mir. Nun hat die Stimme",
                "lineNumber": 1551
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1552",
                "text": "Des treün Manns mich wieder aufgeweckt,",
                "lineNumber": 1552
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1553",
                "text": "Daß ich auch Menschen hier verlaße, mich",
                "lineNumber": 1553
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1554",
                "text": "Erinnert. Doppelt wird mir der Betrug",
                "lineNumber": 1554
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1555",
                "text": "Verhaßt. O bleibe ruhig, meine Seele!",
                "lineNumber": 1555
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1556",
                "text": "Beginnst du nun zu schwanken und zu zweifeln?",
                "lineNumber": 1556
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1557",
                "text": "Den festen Boden deiner Einsamkeit",
                "lineNumber": 1557
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1558",
                "text": "Mußt du verlaßen! Wieder eingeschifft,",
                "lineNumber": 1558
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1559",
                "text": "Ergreifen dich die Wellen schaukelnd, trüb",
                "lineNumber": 1559
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1560",
                "text": "Und bang verkennest du die Welt und dich.Vierter Auftritt",
                "lineNumber": 1560
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1561",
                "text": "Iphigenie. Pylades.Pylades:",
                "lineNumber": 1561
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1562",
                "text": "Wo ist sie? daß ich ihr mit schnellen Worten",
                "lineNumber": 1562
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1563",
                "text": "Die frohe Botschaft unsrer Rettung bringe!Iphigenie:",
                "lineNumber": 1563
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1564",
                "text": "Du siehst mich hier voll Sorgen und Erwartung",
                "lineNumber": 1564
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1565",
                "text": "Des sichern Trostes, den du mir versprichst.Pylades:",
                "lineNumber": 1565
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1566",
                "text": "Dein Bruder ist geheilt! Den Felsenboden",
                "lineNumber": 1566
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1567",
                "text": "Des ungeweihten Ufers und den Sand",
                "lineNumber": 1567
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1568",
                "text": "Betraten wir mit fröhlichen Gesprächen;",
                "lineNumber": 1568
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1569",
                "text": "Der Hain blieb hinter uns, wir merkten's nicht.",
                "lineNumber": 1569
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1570",
                "text": "Und herrlicher und immer herrlicher",
                "lineNumber": 1570
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1571",
                "text": "Umloderte der Jugend schöne Flamme",
                "lineNumber": 1571
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1572",
                "text": "Sein lockig Haupt; sein volles Auge glühte",
                "lineNumber": 1572
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1573",
                "text": "Von Mut und Hoffnung, und sein freies Herz",
                "lineNumber": 1573
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1574",
                "text": "Ergab sich ganz der Freude, ganz der Lust,",
                "lineNumber": 1574
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1575",
                "text": "Dich, seine Retterin, und mich zu retten.Iphigenie:",
                "lineNumber": 1575
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1576",
                "text": "Gesegnet seist du, und es möge nie",
                "lineNumber": 1576
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1577",
                "text": "Von deiner Lippe, die so Gutes sprach,",
                "lineNumber": 1577
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1578",
                "text": "Der Ton des Leidens und der Klage tönen!Pylades:",
                "lineNumber": 1578
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1579",
                "text": "Ich bringe mehr als das; denn schön begleitet",
                "lineNumber": 1579
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1580",
                "text": "Gleich einem Fürsten pflegt das Glück zu nahn.",
                "lineNumber": 1580
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1581",
                "text": "Auch die Gefährten haben wir gefunden.",
                "lineNumber": 1581
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1582",
                "text": "In einer Felsenbucht verbargen sie",
                "lineNumber": 1582
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1583",
                "text": "Das Schiff und saßen traurig und erwartend.",
                "lineNumber": 1583
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1584",
                "text": "Sie sahen deinen Bruder, und es regten",
                "lineNumber": 1584
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1585",
                "text": "Sich alle jauchzend, und sie baten dringend,",
                "lineNumber": 1585
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1586",
                "text": "Der Abfahrt Stunde zu béschleunigen.",
                "lineNumber": 1586
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1587",
                "text": "Es sehnet jede Faust sich nach dem Ruder,",
                "lineNumber": 1587
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1588",
                "text": "Und selbst ein Wind erhob vom Lande lispelnd,",
                "lineNumber": 1588
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1589",
                "text": "Von allen gleich bemerkt, die holden Schwingen.",
                "lineNumber": 1589
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1590",
                "text": "Drum laß uns eilen, führe mich zum Tempel,",
                "lineNumber": 1590
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1591",
                "text": "Laß mich das Heiligtum betreten, laß",
                "lineNumber": 1591
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1592",
                "text": "Mich unsrer Wünsche Ziel verehrend faßen!",
                "lineNumber": 1592
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1593",
                "text": "Ich bin allein genug, der Göttin Bild",
                "lineNumber": 1593
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1594",
                "text": "Auf wohlgeübten Schultern wegzutragen:",
                "lineNumber": 1594
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1595",
                "text": "Wie sehn ich mich nach der erwünschten Last!",
                "lineNumber": 1595
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1596",
                "text": "Er geht gegen den Tempel unter den letzten Worten, ohne zu bemerken, daß Iphigenie nicht folgt; endlich kehrt er sich um.",
                "lineNumber": 1596
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1597",
                "text": "Du stehst und zauderst – Sage mir – du schweigst!",
                "lineNumber": 1597
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1598",
                "text": "Du scheinst verworren! Widersetzet sich",
                "lineNumber": 1598
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1599",
                "text": "Ein neüs Unheil unserm Glück? Sag an!",
                "lineNumber": 1599
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1600",
                "text": "Hast du dem Könige das kluge Wort",
                "lineNumber": 1600
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1601",
                "text": "Vermelden laßen, das wir abgeredet?Iphigenie:",
                "lineNumber": 1601
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1602",
                "text": "Ich habe, teurer Mann; doch wirst du schelten.",
                "lineNumber": 1602
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1603",
                "text": "Ein schweigender Verweis war mir dein Anblick.",
                "lineNumber": 1603
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1604",
                "text": "Des Königs Bote kam, und wie du es",
                "lineNumber": 1604
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1605",
                "text": "Mir in den Mund gelegt, so sagt ich's ihm.",
                "lineNumber": 1605
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1606",
                "text": "Er schien zu staunen und verlangte dringend,",
                "lineNumber": 1606
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1607",
                "text": "Die seltne Feier erst dem Könige",
                "lineNumber": 1607
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1608",
                "text": "Zu melden, seinen Willen zu vernehmen;",
                "lineNumber": 1608
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1609",
                "text": "Und nun erwart ich seine Wiederkehr.Pylades:",
                "lineNumber": 1609
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1610",
                "text": "Weh uns! Erneürt schwebt nun die Gefahr",
                "lineNumber": 1610
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1611",
                "text": "Um unsre Schläfe! Warum hast du nicht",
                "lineNumber": 1611
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1612",
                "text": "Ins Priesterrecht dich weislich eingehüllt?Iphigenie:",
                "lineNumber": 1612
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1613",
                "text": "Als eine Hülle hab ich's nie gebraucht.Pylades:",
                "lineNumber": 1613
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1614",
                "text": "So wirst du, reine Seele, dich und uns",
                "lineNumber": 1614
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1615",
                "text": "Zugrunde richten. Warum dacht ich nicht",
                "lineNumber": 1615
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1616",
                "text": "Auf diesen Fall voraus und lehrte dich",
                "lineNumber": 1616
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1617",
                "text": "Auch dieser Fordrung auszuweichen!Iphigenie:",
                "lineNumber": 1617
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1618",
                "text": "Schilt",
                "lineNumber": 1618
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1619",
                "text": "Nur mich, die Schuld ist mein, ich fühl es wohl;",
                "lineNumber": 1619
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1620",
                "text": "Doch konnt ich anders nicht dem Mann begegnen,",
                "lineNumber": 1620
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1621",
                "text": "Der mit Vernunft und Ernst von mir verlangte,",
                "lineNumber": 1621
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1622",
                "text": "Was ihm mein Herz als Recht gestehen mußte.Pylades:",
                "lineNumber": 1622
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1623",
                "text": "Gefährlicher zieht sich's zusammen; doch auch so",
                "lineNumber": 1623
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1624",
                "text": "Laß uns nicht zagen oder unbesonnen",
                "lineNumber": 1624
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1625",
                "text": "Und übereilt uns selbst verraten. Ruhig",
                "lineNumber": 1625
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1626",
                "text": "Erwarte du die Wiederkunft des Boten,",
                "lineNumber": 1626
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1627",
                "text": "Und dann steh fest, er bringe, was er will:",
                "lineNumber": 1627
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1628",
                "text": "Denn solcher Weihung Feier anzuordnen",
                "lineNumber": 1628
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1629",
                "text": "Gehört der Priesterin und nicht dem König.",
                "lineNumber": 1629
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1630",
                "text": "Und fordert er, den fremden Mann zu sehn,",
                "lineNumber": 1630
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1631",
                "text": "Der von dem Wahnsinn schwer belastet ist,",
                "lineNumber": 1631
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1632",
                "text": "So lehn es ab, als hieltest du uns beide",
                "lineNumber": 1632
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1633",
                "text": "Im Tempel wohlverwahrt. So schaff uns Luft,",
                "lineNumber": 1633
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1634",
                "text": "Daß wir aufs eiligste, den heil'gen Schatz",
                "lineNumber": 1634
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1635",
                "text": "Dem rauh unwürd'gen Volk entwendend, fliehn.",
                "lineNumber": 1635
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1636",
                "text": "Die besten Zeichen sendet uns Apoll,",
                "lineNumber": 1636
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1637",
                "text": "Und eh wir die Bedingung fromm erfüllen,",
                "lineNumber": 1637
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1638",
                "text": "Erfüllt er göttlich sein Versprechen schon.",
                "lineNumber": 1638
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1639",
                "text": "Orest ist frei, geheilt! – Mit dem Befreiten",
                "lineNumber": 1639
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1640",
                "text": "O führet uns hinüber, günst'ge Winde,",
                "lineNumber": 1640
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1641",
                "text": "Zur Felseninsel, die der Gott bewohnt;",
                "lineNumber": 1641
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1642",
                "text": "Dann nach Myken, daß es lebendig werde,",
                "lineNumber": 1642
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1643",
                "text": "Daß von der Asche des verloschnen Herdes",
                "lineNumber": 1643
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1644",
                "text": "Die Vatergötter fröhlich sich erheben",
                "lineNumber": 1644
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1645",
                "text": "Und schönes Feür ihre Wohnungen",
                "lineNumber": 1645
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1646",
                "text": "Umleuchte! Deine Hand soll ihnen Weihrauch",
                "lineNumber": 1646
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1647",
                "text": "Zürst aus goldnen Schalen streün. Du",
                "lineNumber": 1647
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1648",
                "text": "Bringst über jene Schwelle Heil und Leben wieder,",
                "lineNumber": 1648
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1649",
                "text": "Entsühnst den Fluch und schmückest neu die Deinen",
                "lineNumber": 1649
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1650",
                "text": "Mit frischen Lebensblüten herrlich aus.Iphigenie:",
                "lineNumber": 1650
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1651",
                "text": "Vernehm ich dich, so wendet sich, o Teurer,",
                "lineNumber": 1651
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1652",
                "text": "Wie sich die Blume nach der Sonne wendet,",
                "lineNumber": 1652
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1653",
                "text": "Die Seele, von dem Strahle deiner Worte",
                "lineNumber": 1653
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1654",
                "text": "Getroffen, sich dem süßen Troste nach.",
                "lineNumber": 1654
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1655",
                "text": "Wie köstlich ist des gegenwärt'gen Freundes",
                "lineNumber": 1655
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1656",
                "text": "Gewiße Rede, deren Himmelskraft",
                "lineNumber": 1656
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1657",
                "text": "Ein Einsamer entbehrt und still versinkt.",
                "lineNumber": 1657
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1658",
                "text": "Denn langsam reift, verschloßen in dem Busen,",
                "lineNumber": 1658
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1659",
                "text": "Gedank ihm und Entschluß; die Gegenwart",
                "lineNumber": 1659
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1660",
                "text": "Des Liebenden entwickelte sie leicht.Pylades:",
                "lineNumber": 1660
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1661",
                "text": "Leb wohl! Die Freunde will ich nun geschwind",
                "lineNumber": 1661
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1662",
                "text": "Beruhigen, die sehnlich wartend harren.",
                "lineNumber": 1662
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1663",
                "text": "Dann komm ich schnell zurück und lausche hier",
                "lineNumber": 1663
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1664",
                "text": "Im Felsenbusch versteckt auf deinen Wink –",
                "lineNumber": 1664
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1665",
                "text": "Was sinnest du? Auf einmal überschwebt",
                "lineNumber": 1665
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1666",
                "text": "Ein stiller Traürzug die freie Stirne.Iphigenie:",
                "lineNumber": 1666
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1667",
                "text": "Verzeih! Wie leichte Wolken vor der Sonne,",
                "lineNumber": 1667
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1668",
                "text": "So zieht mir vor der Seele leichte Sorge",
                "lineNumber": 1668
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1669",
                "text": "Und Bangigkeit vorüber.Pylades:",
                "lineNumber": 1669
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1670",
                "text": "Fürchte nicht!",
                "lineNumber": 1670
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1671",
                "text": "Betrüglich schloß die Furcht mit der Gefahr",
                "lineNumber": 1671
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1672",
                "text": "Ein enges Bündnis: beide sind Gesellen.Iphigenie:",
                "lineNumber": 1672
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1673",
                "text": "Die Sorge nenn ich edel, die mich warnt,",
                "lineNumber": 1673
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1674",
                "text": "Den König, der mein zweiter Vater ward,",
                "lineNumber": 1674
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1675",
                "text": "Nicht tückisch zu betrügen, zu berauben.Pylades:",
                "lineNumber": 1675
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1676",
                "text": "Der deinen Bruder schlachtet, dem entfliehst du.Iphigenie:",
                "lineNumber": 1676
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1677",
                "text": "Es ist derselbe, der mir Gutes tat.Pylades:",
                "lineNumber": 1677
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1678",
                "text": "Das ist nicht Undank, was die Not gebeut.Iphigenie:",
                "lineNumber": 1678
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1679",
                "text": "Es bleibt wohl Undank; nur die Not entschuldigt.Pylades:",
                "lineNumber": 1679
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1680",
                "text": "Vor Göttern und vor Menschen dich gewiß.Iphigenie:",
                "lineNumber": 1680
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1681",
                "text": "Allein mein eigen Herz ist nicht befriedigt.Pylades:",
                "lineNumber": 1681
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1682",
                "text": "Zu strenge Fordrung ist verborgner Stolz.Iphigenie:",
                "lineNumber": 1682
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1683",
                "text": "Ich untersuche nicht, ich fühle nur.Pylades:",
                "lineNumber": 1683
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1684",
                "text": "Fühlst du dich recht, so mußt du dich verehren.Iphigenie:",
                "lineNumber": 1684
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1685",
                "text": "Ganz unbefleckt genießt sich nur das Herz.Pylades:",
                "lineNumber": 1685
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1686",
                "text": "So hast du dich im Tempel wohl bewahrt;",
                "lineNumber": 1686
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1687",
                "text": "Das Leben lehrt uns, weniger mit uns",
                "lineNumber": 1687
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1688",
                "text": "Und andern strenge sein; du lernst es auch.",
                "lineNumber": 1688
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1689",
                "text": "So wunderbar ist dies Geschlecht gebildet,",
                "lineNumber": 1689
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1690",
                "text": "So vielfach ist's verschlungen und verknüpft,",
                "lineNumber": 1690
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1691",
                "text": "Daß keiner in sich selbst noch mit den andern",
                "lineNumber": 1691
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1692",
                "text": "Sich rein und unverworren halten kann.",
                "lineNumber": 1692
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1693",
                "text": "Auch sind wir nicht bestellt, uns selbst zu richten;",
                "lineNumber": 1693
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1694",
                "text": "Zu wandeln und auf seinen Weg zu sehen,",
                "lineNumber": 1694
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1695",
                "text": "Ist eines Menschen erste, nächste Pflicht:",
                "lineNumber": 1695
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1696",
                "text": "Denn selten schätzt er recht, was er getan,",
                "lineNumber": 1696
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1697",
                "text": "Und was er tut, weiß er fast nie zu schätzen.Iphigenie:",
                "lineNumber": 1697
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1698",
                "text": "Fast überredst du mich zu deiner Meinung.Pylades:",
                "lineNumber": 1698
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1699",
                "text": "Braucht's Überredung, wo die Wahl versagt ist?",
                "lineNumber": 1699
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1700",
                "text": "Den Bruder, dich und einen Freund zu retten,",
                "lineNumber": 1700
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1701",
                "text": "Ist nur ein Weg, fragt sich's, ob wir ihn gehn?Iphigenie:",
                "lineNumber": 1701
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1702",
                "text": "O laß mich zaudern! denn du tätest selbst",
                "lineNumber": 1702
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1703",
                "text": "Ein solches Unrecht keinem Mann gelaßen,",
                "lineNumber": 1703
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1704",
                "text": "Dem du für Wohltat dich verpflichtet hieltest.Pylades:",
                "lineNumber": 1704
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1705",
                "text": "Wenn wir zugrunde gehen, wartet dein",
                "lineNumber": 1705
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1706",
                "text": "Ein härtrer Vorwurf, der Verzweiflung trägt.",
                "lineNumber": 1706
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1707",
                "text": "Man sieht, du bist nicht an Verlust gewohnt,",
                "lineNumber": 1707
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1708",
                "text": "Da du, dem großen Übel zu entgehen,",
                "lineNumber": 1708
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1709",
                "text": "Ein falsches Wort nicht einmal opfern willst.Iphigenie:",
                "lineNumber": 1709
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1710",
                "text": "O trüg ich doch ein männlich Herz in mir,",
                "lineNumber": 1710
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1711",
                "text": "Das, wenn es einen kühnen Vorsatz hegt,",
                "lineNumber": 1711
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1712",
                "text": "Vor jeder andern Stimme sich verschließt!Pylades:",
                "lineNumber": 1712
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1713",
                "text": "Du weigerst dich umsonst; die ehrne Hand",
                "lineNumber": 1713
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1714",
                "text": "Der Not gebietet, und ihr ernster Wink",
                "lineNumber": 1714
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1715",
                "text": "Ist oberstes Gesetz, dem Götter selbst",
                "lineNumber": 1715
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1716",
                "text": "Sich unterwerfen müßen. Schweigend herrscht",
                "lineNumber": 1716
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1717",
                "text": "Des ew'gen Schicksals unberatne Schwester.",
                "lineNumber": 1717
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1718",
                "text": "Was sie dir auferlegt, das trage: tu,",
                "lineNumber": 1718
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1719",
                "text": "Was sie gebeut. Das andre weißt du. Bald",
                "lineNumber": 1719
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1720",
                "text": "Komm ich zurück, aus deiner heil'gen Hand",
                "lineNumber": 1720
              },
              {
                "id": "act-1-scene-1-stanza-2-verse-1721",
                "text": "Der Rettung schönes Siegel zu empfangen.Fünfter Auftritt",
                "lineNumber": 1721
              }
            ],
            "act": 1,
            "scene": 1
          },
          {
            "id": "act-1-scene-1-stanza-3",
            "title": "IPHIGENIE ALLEIN:",
            "verses": [
              {
                "id": "act-1-scene-1-stanza-3-verse-1722",
                "text": "Ich muß ihm folgen: denn die Meinigen",
                "lineNumber": 1722
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1723",
                "text": "Seh ich in dringender Gefahr. Doch ach!",
                "lineNumber": 1723
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1724",
                "text": "Mein eigen Schicksal macht mir bang und bänger.",
                "lineNumber": 1724
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1725",
                "text": "O soll ich nicht die stille Hoffnung retten,",
                "lineNumber": 1725
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1726",
                "text": "Die in der Einsamkeit ich schön genährt?",
                "lineNumber": 1726
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1727",
                "text": "Soll dieser Fluch denn ewig walten? Soll",
                "lineNumber": 1727
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1728",
                "text": "Nie dies Geschlecht mit einem neün Segen",
                "lineNumber": 1728
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1729",
                "text": "Sich wieder heben? – Nimmt doch alles ab!",
                "lineNumber": 1729
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1730",
                "text": "Das beste Glück, des Lebens schönste Kraft",
                "lineNumber": 1730
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1731",
                "text": "Ermattet endlich: warum nicht der Fluch?",
                "lineNumber": 1731
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1732",
                "text": "So hofft ich denn vergebens, hier verwahrt,",
                "lineNumber": 1732
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1733",
                "text": "Von meines Hauses Schicksal abgeschieden,",
                "lineNumber": 1733
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1734",
                "text": "Dereinst mit reiner Hand und reinem Herzen",
                "lineNumber": 1734
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1735",
                "text": "Die schwerbefleckte Wohnung zu entsühnen!",
                "lineNumber": 1735
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1736",
                "text": "Kaum wird in meinen Armen mir ein Bruder",
                "lineNumber": 1736
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1737",
                "text": "Vom grimm'gen Übel wundervoll und schnell",
                "lineNumber": 1737
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1738",
                "text": "Geheilt, kaum naht ein lang erflehtes Schiff,",
                "lineNumber": 1738
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1739",
                "text": "Mich in den Port der Vaterwelt zu leiten,",
                "lineNumber": 1739
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1740",
                "text": "So legt die taube Not ein doppelt Laster",
                "lineNumber": 1740
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1741",
                "text": "Mit ehrner Hand mir auf: das heilige,",
                "lineNumber": 1741
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1742",
                "text": "Mir anvertraute, viel verehrte Bild",
                "lineNumber": 1742
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1743",
                "text": "Zu rauben und den Mann zu hintergehn,",
                "lineNumber": 1743
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1744",
                "text": "Dem ich mein Leben und mein Schicksal danke.",
                "lineNumber": 1744
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1745",
                "text": "O daß in meinem Busen nicht zuletzt",
                "lineNumber": 1745
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1746",
                "text": "Ein Widerwille keime! der Titanen,",
                "lineNumber": 1746
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1747",
                "text": "Der alten Götter tiefer Haß auf euch,",
                "lineNumber": 1747
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1748",
                "text": "Olympier, nicht auch die zarte Brust",
                "lineNumber": 1748
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1749",
                "text": "Mit Geierklaün faße! Rettet mich",
                "lineNumber": 1749
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1750",
                "text": "Und rettet eür Bild in meiner Seele!",
                "lineNumber": 1750
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1751",
                "text": "Vor meinen Ohren tönt das alte Lied –",
                "lineNumber": 1751
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1752",
                "text": "Vergeßen hatt ich's und vergaß es gern –,",
                "lineNumber": 1752
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1753",
                "text": "Das Lied der Parzen, das sie grausend sangen,",
                "lineNumber": 1753
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1754",
                "text": "Als Tantalus vom goldnen Stuhle fiel:",
                "lineNumber": 1754
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1755",
                "text": "Sie litten mit dem edeln Freunde; grimmig",
                "lineNumber": 1755
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1756",
                "text": "War ihre Brust und furchtbar ihr Gesang.",
                "lineNumber": 1756
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1757",
                "text": "In unsrer Jugend sang's die Amme mir",
                "lineNumber": 1757
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1758",
                "text": "Und den Geschwistern vor, ich merkt es wohl:",
                "lineNumber": 1758
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1759",
                "text": "Es fürchte die Götter",
                "lineNumber": 1759
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1760",
                "text": "Das Menschengeschlecht!",
                "lineNumber": 1760
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1761",
                "text": "Sie halten die Herrschaft",
                "lineNumber": 1761
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1762",
                "text": "In ewigen Händen",
                "lineNumber": 1762
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1763",
                "text": "Und können sie brauchen,",
                "lineNumber": 1763
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1764",
                "text": "Wie's ihnen gefällt.",
                "lineNumber": 1764
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1765",
                "text": "Der fürchte sie doppelt,",
                "lineNumber": 1765
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1766",
                "text": "Den je sie erheben!",
                "lineNumber": 1766
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1767",
                "text": "Auf Klippen und Wolken",
                "lineNumber": 1767
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1768",
                "text": "Sind Stühle bereitet",
                "lineNumber": 1768
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1769",
                "text": "Um goldene Tische.",
                "lineNumber": 1769
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1770",
                "text": "Erhebet ein Zwist sich:",
                "lineNumber": 1770
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1771",
                "text": "So stürzen die Gäste",
                "lineNumber": 1771
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1772",
                "text": "Geschmäht und geschändet",
                "lineNumber": 1772
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1773",
                "text": "In nächtliche Tiefen",
                "lineNumber": 1773
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1774",
                "text": "Und harren vergebens,",
                "lineNumber": 1774
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1775",
                "text": "Im Finstern gebunden,",
                "lineNumber": 1775
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1776",
                "text": "Gerechten Gerichtes.",
                "lineNumber": 1776
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1777",
                "text": "Sie aber, sie bleiben",
                "lineNumber": 1777
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1778",
                "text": "In ewigen Festen",
                "lineNumber": 1778
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1779",
                "text": "An goldenen Tischen.",
                "lineNumber": 1779
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1780",
                "text": "Sie schreiten vom Berge",
                "lineNumber": 1780
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1781",
                "text": "Zu Bergen hinüber:",
                "lineNumber": 1781
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1782",
                "text": "Aus Schlünden der Tiefe",
                "lineNumber": 1782
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1783",
                "text": "Dampft ihnen der Atem",
                "lineNumber": 1783
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1784",
                "text": "Erstickter Titanen,",
                "lineNumber": 1784
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1785",
                "text": "Gleich Opfergerüchen,",
                "lineNumber": 1785
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1786",
                "text": "Ein leichtes Gewölke.",
                "lineNumber": 1786
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1787",
                "text": "Es wenden die Herrscher",
                "lineNumber": 1787
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1788",
                "text": "Ihr segnendes Auge",
                "lineNumber": 1788
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1789",
                "text": "Von ganzen Geschlechtern",
                "lineNumber": 1789
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1790",
                "text": "Und meiden, im Enkel",
                "lineNumber": 1790
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1791",
                "text": "Die ehmals geliebten,",
                "lineNumber": 1791
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1792",
                "text": "Still redenden Züge",
                "lineNumber": 1792
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1793",
                "text": "Des Ahnherrn zu sehn.",
                "lineNumber": 1793
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1794",
                "text": "So sangen die Parzen;",
                "lineNumber": 1794
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1795",
                "text": "Es horcht der Verbannte",
                "lineNumber": 1795
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1796",
                "text": "In nächtlichen Höhlen,",
                "lineNumber": 1796
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1797",
                "text": "Der Alte, die Lieder,",
                "lineNumber": 1797
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1798",
                "text": "Denkt Kinder und Enkel",
                "lineNumber": 1798
              },
              {
                "id": "act-1-scene-1-stanza-3-verse-1799",
                "text": "Und schüttelt das Haupt.",
                "lineNumber": 1799
              }
            ],
            "act": 1,
            "scene": 1
          }
        ]
      }
    ]
  }
];

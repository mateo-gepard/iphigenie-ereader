import type { Act } from '../types';




export const iphigenieText: Act[] = [
 // HIER WÜRDE DER ERSTE AUFZUG BEGINNEN
 // {
 //   id: "act-1",
 //   title: "Erster Aufzug",
 //   number: 1,
 //   scenes: [ ... ]
 // },
 
 // HIER BEGINNT DER KONVERTIERTE ZWEITE AUFZUG
 {
   id: "act-2",
   title: "Zweiter Aufzug",
   number: 2,
   scenes: [
     {
       id: "act-2-scene-1",
       title: "Erster Auftritt",
       number: 1,
       stanzas: [
         {
           id: "act-2-scene-1-stanza-1",
           title: "Orest:",
           act: 2,
           scene: 1,
           verses: [
             { id: "act-2-scene-1-stanza-1-verse-1", text: "Es ist der Weg des Todes, den wir treten:", lineNumber: 1 },
             { id: "act-2-scene-1-stanza-1-verse-2", text: "Mit jedem Schritt wird meine Seele stiller.", lineNumber: 2 },
             { id: "act-2-scene-1-stanza-1-verse-3", text: "Als ich Apollen bat, das gräßliche", lineNumber: 3 },
             { id: "act-2-scene-1-stanza-1-verse-4", text: "Geleit der Rachegeister von der Seite", lineNumber: 4 },
             { id: "act-2-scene-1-stanza-1-verse-5", text: "Mir abzunehmen; schien er Hülf und Rettung", lineNumber: 5 },
             { id: "act-2-scene-1-stanza-1-verse-6", text: "Im Tempel seiner vielgeliebten Schwester,", lineNumber: 6 },
             { id: "act-2-scene-1-stanza-1-verse-7", text: "Die über Tauris herrscht, mit hoffnungsreichen,", lineNumber: 7 },
             { id: "act-2-scene-1-stanza-1-verse-8", text: "Gewissen Götterworten zu versprechen;", lineNumber: 8 },
             { id: "act-2-scene-1-stanza-1-verse-9", text: "Und nun erfüllet sich's, daß alle Not", lineNumber: 9 },
             { id: "act-2-scene-1-stanza-1-verse-10", text: "Mit meinem Leben völlig enden soll.", lineNumber: 10 },
             { id: "act-2-scene-1-stanza-1-verse-11", text: "Wie leicht wird's mir, dem eine Götterhand", lineNumber: 11 },
             { id: "act-2-scene-1-stanza-1-verse-12", text: "Das Herz zusammendrückt, den Sinn betäubt,", lineNumber: 12 },
             { id: "act-2-scene-1-stanza-1-verse-13", text: "Dem schönen Licht der Sonne zu entsagen.", lineNumber: 13 },
             { id: "act-2-scene-1-stanza-1-verse-14", text: "Und sollen Atreus' Enkel in der Schlacht", lineNumber: 14 },
             { id: "act-2-scene-1-stanza-1-verse-15", text: "Ein siegbekröntes Ende nicht gewinnen,", lineNumber: 15 },
             { id: "act-2-scene-1-stanza-1-verse-16", text: "Soll ich wie meine Ahnen, wie mein Vater", lineNumber: 16 },
             { id: "act-2-scene-1-stanza-1-verse-17", text: "Als Opfertier im Jammertode bluten:", lineNumber: 17 },
             { id: "act-2-scene-1-stanza-1-verse-18", text: "So sei es! Besser hier vor dem Altar", lineNumber: 18 },
             { id: "act-2-scene-1-stanza-1-verse-19", text: "Als im verworfnen Winkel, wo die Netze", lineNumber: 19 },
             { id: "act-2-scene-1-stanza-1-verse-20", text: "Der nahverwandte Meuchelmörder stellt.", lineNumber: 20 },
             { id: "act-2-scene-1-stanza-1-verse-21", text: "Laßt mir so lange Ruh, ihr Unterird'schen,", lineNumber: 21 },
             { id: "act-2-scene-1-stanza-1-verse-22", text: "Die nach dem Blut ihr, das von meinen Tritten", lineNumber: 22 },
             { id: "act-2-scene-1-stanza-1-verse-23", text: "Herniederträufelnd meinen Pfad bezeichnet,", lineNumber: 23 },
             { id: "act-2-scene-1-stanza-1-verse-24", text: "Wie losgelaßne Hunde spürend hetzt!", lineNumber: 24 },
             { id: "act-2-scene-1-stanza-1-verse-25", text: "Laßt mich, ich komme bald zu euch hinab;", lineNumber: 25 },
             { id: "act-2-scene-1-stanza-1-verse-26", text: "Das Licht des Tags soll euch nicht sehn noch mich.", lineNumber: 26 },
             { id: "act-2-scene-1-stanza-1-verse-27", text: "Der Erde schöner grüner Teppich soll", lineNumber: 27 },
             { id: "act-2-scene-1-stanza-1-verse-28", text: "Kein Tummelplatz für Larven sein. Dort unten", lineNumber: 28 },
             { id: "act-2-scene-1-stanza-1-verse-29", text: "Such ich euch auf: dort bindet alle dann", lineNumber: 29 },
             { id: "act-2-scene-1-stanza-1-verse-30", text: "Ein gleich Geschick in ew'ge matte Nacht.", lineNumber: 30 },
             { id: "act-2-scene-1-stanza-1-verse-31", text: "Nur dich, mein Pylades, dich, meiner Schuld", lineNumber: 31 },
             { id: "act-2-scene-1-stanza-1-verse-32", text: "Und meines Banns unschuldigen Genossen,", lineNumber: 32 },
             { id: "act-2-scene-1-stanza-1-verse-33", text: "Wie ungern nehm ich dich in jenes Trauerland", lineNumber: 33 },
             { id: "act-2-scene-1-stanza-1-verse-34", text: "Frühzeitig mit! Dein Leben oder Tod", lineNumber: 34 },
             { id: "act-2-scene-1-stanza-1-verse-35", text: "Gibt mir allein noch Hoffnung oder Furcht.", lineNumber: 35 }
         ]
         },
         {
           id: "act-2-scene-1-stanza-2",
           title: "Pylades:",
           act: 2,
           scene: 1,
           verses: [
             { id: "act-2-scene-1-stanza-2-verse-1", text: "Ich bin noch nicht, Orest, wie du bereit,", lineNumber: 36 },
             { id: "act-2-scene-1-stanza-2-verse-2", text: "In jenes Schattenreich hinabzugehn.", lineNumber: 37 },
             { id: "act-2-scene-1-stanza-2-verse-3", text: "Ich sinne noch, durch die verworrnen Pfade,", lineNumber: 38 },
             { id: "act-2-scene-1-stanza-2-verse-4", text: "Die nach der schwarzen Nacht zu führen scheinen,", lineNumber: 39 },
             { id: "act-2-scene-1-stanza-2-verse-5", text: "Uns zu dem Leben wieder aufzuwinden.", lineNumber: 40 },
             { id: "act-2-scene-1-stanza-2-verse-6", text: "Ich denke nicht den Tod; ich sinn und horche,", lineNumber: 41 },
             { id: "act-2-scene-1-stanza-2-verse-7", text: "Ob nicht zu irgendeiner frohen Flucht", lineNumber: 42 },
             { id: "act-2-scene-1-stanza-2-verse-8", text: "Die Götter Rat und Wege zubereiten.", lineNumber: 43 },
             { id: "act-2-scene-1-stanza-2-verse-9", text: "Der Tod, gefürchtet oder ungefürchtet,", lineNumber: 44 },
             { id: "act-2-scene-1-stanza-2-verse-10", text: "Kommt unaufhaltsam. Wenn die Priesterin", lineNumber: 45 },
             { id: "act-2-scene-1-stanza-2-verse-11", text: "Schon, unsre Locken weihend abzuschneiden,", lineNumber: 46 },
             { id: "act-2-scene-1-stanza-2-verse-12", text: "Die Hand erhebt, soll dein' und meine Rettung", lineNumber: 47 },
             { id: "act-2-scene-1-stanza-2-verse-13", text: "Mein einziger Gedanke sein. Erhebe", lineNumber: 48 },
             { id: "act-2-scene-1-stanza-2-verse-14", text: "Von diesem Unmut deine Seele; zweifelnd", lineNumber: 49 },
             { id: "act-2-scene-1-stanza-2-verse-15", text: "Beschleunigest du die Gefahr. Apoll", lineNumber: 50 },
             { id: "act-2-scene-1-stanza-2-verse-16", text: "Gab uns das Wort: im Heiligtum der Schwester", lineNumber: 51 },
             { id: "act-2-scene-1-stanza-2-verse-17", text: "Sei Trost und Hülf und Rückkehr dir bereitet.", lineNumber: 52 },
             { id: "act-2-scene-1-stanza-2-verse-18", text: "Der Götter Worte sind nicht doppelsinnig,", lineNumber: 53 },
             { id: "act-2-scene-1-stanza-2-verse-19", text: "Wie der Gedrückte sie im Unmut wähnt.", lineNumber: 54 }
           ]
         },
         {
           id: "act-2-scene-1-stanza-3",
           title: "Orest:",
           act: 2,
           scene: 1,
           verses: [
             { id: "act-2-scene-1-stanza-3-verse-1", text: "Des Lebens dunkle Decke breitete", lineNumber: 55 },
             { id: "act-2-scene-1-stanza-3-verse-2", text: "Die Mutter schon mir um das zarte Haupt,", lineNumber: 56 },
             { id: "act-2-scene-1-stanza-3-verse-3", text: "Und so wuchs ich herauf, ein Ebenbild", lineNumber: 57 },
             { id: "act-2-scene-1-stanza-3-verse-4", text: "Des Vaters, und es war mein stummer Blick", lineNumber: 58 },
             { id: "act-2-scene-1-stanza-3-verse-5", text: "Ein bittrer Vorwurf ihr und ihrem Buhlen.", lineNumber: 59 },
             { id: "act-2-scene-1-stanza-3-verse-6", text: "Wie oft, wenn still Elektra, meine Schwester,", lineNumber: 60 },
             { id: "act-2-scene-1-stanza-3-verse-7", text: "Am Feuer in der tiefen Halle saß,", lineNumber: 61 },
             { id: "act-2-scene-1-stanza-3-verse-8", text: "Drängt ich beklommen mich an ihren Schoß", lineNumber: 62 },
             { id: "act-2-scene-1-stanza-3-verse-9", text: "Und starrte, wie sie bitter weinte, sie", lineNumber: 63 },
             { id: "act-2-scene-1-stanza-3-verse-10", text: "Mit großen Augen an. Dann sagte sie", lineNumber: 64 },
             { id: "act-2-scene-1-stanza-3-verse-11", text: "Von unserm hohen Vater viel: wie sehr", lineNumber: 65 },
             { id: "act-2-scene-1-stanza-3-verse-12", text: "Verlangt ich, ihn zu sehn, bei ihm zu sein!", lineNumber: 66 },
             { id: "act-2-scene-1-stanza-3-verse-13", text: "Mich wünscht ich bald nach Troja, ihn bald her.", lineNumber: 67 },
             { id: "act-2-scene-1-stanza-3-verse-14", text: "Es kam der Tag –", lineNumber: 68 }
           ]
         },
         {
           id: "act-2-scene-1-stanza-4",
           title: "Pylades:",
           act: 2,
           scene: 1,
           verses: [
             { id: "act-2-scene-1-stanza-4-verse-1", text: "O laß von jener Stunde", lineNumber: 69 },
             { id: "act-2-scene-1-stanza-4-verse-2", text: "Sich Höllengeister nächtlich unterhalten!", lineNumber: 70 },
             { id: "act-2-scene-1-stanza-4-verse-3", text: "Uns gebe die Erinnrung schöner Zeit", lineNumber: 71 },
             { id: "act-2-scene-1-stanza-4-verse-4", text: "Zu frischem Heldenlaufe neue Kraft.", lineNumber: 72 },
             { id: "act-2-scene-1-stanza-4-verse-5", text: "Die Götter brauchen manchen guten Mann", lineNumber: 73 },
             { id: "act-2-scene-1-stanza-4-verse-6", text: "Zu ihrem Dienst auf dieser weiten Erde.", lineNumber: 74 },
             { id: "act-2-scene-1-stanza-4-verse-7", text: "Sie haben noch auf dich gezählt; sie gaben", lineNumber: 75 },
             { id: "act-2-scene-1-stanza-4-verse-8", text: "Dich nicht dem Vater zum Geleite mit,", lineNumber: 76 },
             { id: "act-2-scene-1-stanza-4-verse-9", text: "Da er unwillig nach dem Orkus ging.", lineNumber: 77 }
           ]
           },
           {
             id: "act-2-scene-1-stanza-5",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-5-verse-1", text: "O wär ich, seinen Saum ergreifend, ihm", lineNumber: 78 },
               { id: "act-2-scene-1-stanza-5-verse-2", text: "Gefolgt!", lineNumber: 79 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-6",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-6-verse-1", text: "So haben die, die dich erhielten,", lineNumber: 80 },
               { id: "act-2-scene-1-stanza-6-verse-2", text: "Für mich gesorgt: denn was ich worden wäre,", lineNumber: 81 },
               { id: "act-2-scene-1-stanza-6-verse-3", text: "Wenn du nicht lebtest, kann ich mir nicht denken,", lineNumber: 82 },
               { id: "act-2-scene-1-stanza-6-verse-4", text: "Da ich mit dir und deinetwillen nur", lineNumber: 83 },
               { id: "act-2-scene-1-stanza-6-verse-5", text: "Seit meiner Kindheit leb und leben mag.", lineNumber: 84 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-7",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-7-verse-1", text: "Erinnre mich nicht jener schönen Tage,", lineNumber: 85 },
               { id: "act-2-scene-1-stanza-7-verse-2", text: "Da mir dein Haus die freie Stätte gab,", lineNumber: 86 },
               { id: "act-2-scene-1-stanza-7-verse-3", text: "Dein edler Vater klug und liebevoll", lineNumber: 87 },
               { id: "act-2-scene-1-stanza-7-verse-4", text: "Die halberstarrte junge Blüte pflegte;", lineNumber: 88 },
               { id: "act-2-scene-1-stanza-7-verse-5", text: "Da du, ein immer munterer Geselle,", lineNumber: 89 },
               { id: "act-2-scene-1-stanza-7-verse-6", text: "Gleich einem leichten bunten Schmetterling", lineNumber: 90 },
               { id: "act-2-scene-1-stanza-7-verse-7", text: "Um eine dunkle Blume, jeden Tag", lineNumber: 91 },
               { id: "act-2-scene-1-stanza-7-verse-8", text: "Um mich mit neuem Leben gaukeltest,", lineNumber: 92 },
               { id: "act-2-scene-1-stanza-7-verse-9", text: "Mir deine Lust in meine Seele spieltest,", lineNumber: 93 },
               { id: "act-2-scene-1-stanza-7-verse-10", text: "Daß ich, vergessend meiner Not, mit dir", lineNumber: 94 },
               { id: "act-2-scene-1-stanza-7-verse-11", text: "In rascher Jugend hingerissen schwärmte.", lineNumber: 95 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-8",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-8-verse-1", text: "Da fing mein Leben an, als ich dich liebte.", lineNumber: 96 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-9",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-9-verse-1", text: "Sag: Meine Not begann, und du sprichst wahr.", lineNumber: 97 },
               { id: "act-2-scene-1-stanza-9-verse-2", text: "Das ist das Ängstliche von meinem Schicksal,", lineNumber: 98 },
               { id: "act-2-scene-1-stanza-9-verse-3", text: "Daß ich wie ein verpesteter Vertriebner", lineNumber: 99 },
               { id: "act-2-scene-1-stanza-9-verse-4", text: "Geheimen Schmerz und Tod im Busen trage;", lineNumber: 100 },
               { id: "act-2-scene-1-stanza-9-verse-5", text: "Daß, wo ich den gesundsten Ort betrete,", lineNumber: 101 },
               { id: "act-2-scene-1-stanza-9-verse-6", text: "Gar bald um mich die blühenden Gesichter", lineNumber: 102 },
               { id: "act-2-scene-1-stanza-9-verse-7", text: "Den Schmerzenszug langsamen Tods verraten.", lineNumber: 103 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-10",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-10-verse-1", text: "Der Nächste wär ich, diesen Tod zu sterben,", lineNumber: 104 },
               { id: "act-2-scene-1-stanza-10-verse-2", text: "Wenn je dein Hauch, Orest, vergiftete.", lineNumber: 105 },
               { id: "act-2-scene-1-stanza-10-verse-3", text: "Bin ich nicht immer noch voll Mut und Lust?", lineNumber: 106 },
               { id: "act-2-scene-1-stanza-10-verse-4", text: "Und Lust und Liebe sind die Fittiche", lineNumber: 107 },
               { id: "act-2-scene-1-stanza-10-verse-5", text: "Zu großen Taten.", lineNumber: 108 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-11",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-11-verse-1", text: "Große Taten? Ja,", lineNumber: 109 },
               { id: "act-2-scene-1-stanza-11-verse-2", text: "Ich weiß die Zeit, da wir sie vor uns sahn!", lineNumber: 110 },
               { id: "act-2-scene-1-stanza-11-verse-3", text: "Wenn wir zusammen oft dem Wilde nach", lineNumber: 111 },
               { id: "act-2-scene-1-stanza-11-verse-4", text: "Durch Berg' und Täler rannten und dereinst,", lineNumber: 112 },
               { id: "act-2-scene-1-stanza-11-verse-5", text: "An Brust und Faust dem hohen Ahnherrn gleich,", lineNumber: 113 },
               { id: "act-2-scene-1-stanza-11-verse-6", text: "Mit Keul und Schwert dem Ungeheuer so,", lineNumber: 114 },
               { id: "act-2-scene-1-stanza-11-verse-7", text: "Dem Räuber auf der Spur zu jagen hofften;", lineNumber: 115 },
               { id: "act-2-scene-1-stanza-11-verse-8", text: "Und dann wir abends an der weiten See", lineNumber: 116 },
               { id: "act-2-scene-1-stanza-11-verse-9", text: "Uns aneinanderlehnend ruhig saßen,", lineNumber: 117 },
               { id: "act-2-scene-1-stanza-11-verse-10", text: "Die Wellen bis zu unsern Füßen spielten,", lineNumber: 118 },
               { id: "act-2-scene-1-stanza-11-verse-11", text: "Die Welt so weit, so offen vor uns lag:", lineNumber: 119 },
               { id: "act-2-scene-1-stanza-11-verse-12", text: "Da fuhr wohl einer manchmal nach dem Schwert,", lineNumber: 120 },
               { id: "act-2-scene-1-stanza-11-verse-13", text: "Und künft'ge Taten drangen wie die Sterne", lineNumber: 121 },
               { id: "act-2-scene-1-stanza-11-verse-14", text: "Rings um uns her unzählig aus der Nacht.", lineNumber: 122 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-12",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-12-verse-1", text: "Unendlich ist das Werk, das zu vollführen", lineNumber: 123 },
               { id: "act-2-scene-1-stanza-12-verse-2", text: "Die Seele dringt. Wir möchten jede Tat", lineNumber: 124 },
               { id: "act-2-scene-1-stanza-12-verse-3", text: "So groß gleich tun, als wie sie wächst und wird,", lineNumber: 125 },
               { id: "act-2-scene-1-stanza-12-verse-4", text: "Wenn jahrelang durch Länder und Geschlechter", lineNumber: 126 },
               { id: "act-2-scene-1-stanza-12-verse-5", text: "Der Mund der Dichter sie vermehrend wälzt.", lineNumber: 127 },
               { id: "act-2-scene-1-stanza-12-verse-6", text: "Es klingt so schön, was unsre Väter taten,", lineNumber: 128 },
               { id: "act-2-scene-1-stanza-12-verse-7", text: "Wenn es, in stillen Abendschatten ruhend,", lineNumber: 129 },
               { id: "act-2-scene-1-stanza-12-verse-8", text: "Der Jüngling mit dem Ton der Harfe schlürft;", lineNumber: 130 },
               { id: "act-2-scene-1-stanza-12-verse-9", text: "Und was wir tun, ist, wie es ihnen war,", lineNumber: 131 },
               { id: "act-2-scene-1-stanza-12-verse-10", text: "Voll Müh und eitel Stückwerk!", lineNumber: 132 },
               { id: "act-2-scene-1-stanza-12-verse-11", text: "So laufen wir nach dem, was vor uns flieht,", lineNumber: 133 },
               { id: "act-2-scene-1-stanza-12-verse-12", text: "Und achten nicht des Weges, den wir treten,", lineNumber: 134 },
               { id: "act-2-scene-1-stanza-12-verse-13", text: "Und sehen neben uns der Ahnherrn Tritte", lineNumber: 135 },
               { id: "act-2-scene-1-stanza-12-verse-14", text: "Und ihres Erdelebens Spuren kaum.", lineNumber: 136 },
               { id: "act-2-scene-1-stanza-12-verse-15", text: "Wir eilen immer ihrem Schatten nach,", lineNumber: 137 },
               { id: "act-2-scene-1-stanza-12-verse-16", text: "Der göttergleich in einer weiten Ferne", lineNumber: 138 },
               { id: "act-2-scene-1-stanza-12-verse-17", text: "Der Berge Haupt auf goldnen Wolken krönt.", lineNumber: 139 },
               { id: "act-2-scene-1-stanza-12-verse-18", text: "Ich halte nichts von dem, der von sich denkt,", lineNumber: 140 },
               { id: "act-2-scene-1-stanza-12-verse-19", text: "Wie ihn das Volk vielleicht erheben möchte.", lineNumber: 141 },
               { id: "act-2-scene-1-stanza-12-verse-20", text: "Allein, o Jüngling, danke du den Göttern,", lineNumber: 142 },
               { id: "act-2-scene-1-stanza-12-verse-21", text: "Daß sie so früh durch dich so viel getan.", lineNumber: 143 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-13",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-13-verse-1", text: "Wenn sie dem Menschen frohe Tat bescheren,", lineNumber: 144 },
               { id: "act-2-scene-1-stanza-13-verse-2", text: "Daß er ein Unheil von den Seinen wendet,", lineNumber: 145 },
               { id: "act-2-scene-1-stanza-13-verse-3", text: "Daß er sein Reich vermehrt, die Grenzen sichert", lineNumber: 146 },
               { id: "act-2-scene-1-stanza-13-verse-4", text: "Und alte Feinde fallen oder fliehn:", lineNumber: 147 },
               { id: "act-2-scene-1-stanza-13-verse-5", text: "Dann mag er danken! denn ihm hat ein Gott", lineNumber: 148 },
               { id: "act-2-scene-1-stanza-13-verse-6", text: "Des Lebens erste, letzte Lust gegönnt.", lineNumber: 149 },
               { id: "act-2-scene-1-stanza-13-verse-7", text: "Mich haben sie zum Schlächter auserkoren,", lineNumber: 150 },
               { id: "act-2-scene-1-stanza-13-verse-8", text: "Zum Mörder meiner doch verehrten Mutter,", lineNumber: 151 },
               { id: "act-2-scene-1-stanza-13-verse-9", text: "Und, eine Schandtat schändlich rächend, mich", lineNumber: 152 },
               { id: "act-2-scene-1-stanza-13-verse-10", text: "Durch ihren Wink zugrund gerichtet. Glaube,", lineNumber: 153 },
               { id: "act-2-scene-1-stanza-13-verse-11", text: "Sie haben es auf Tantals Haus gerichtet,", lineNumber: 154 },
               { id: "act-2-scene-1-stanza-13-verse-12", text: "Und ich, der Letzte, soll nicht schuldlos, soll", lineNumber: 155 },
               { id: "act-2-scene-1-stanza-13-verse-13", text: "Nicht ehrenvoll vergehn.", lineNumber: 156 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-14",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-14-verse-1", text: "Die Götter rächen", lineNumber: 157 },
               { id: "act-2-scene-1-stanza-14-verse-2", text: "Der Väter Missetat nicht an dem Sohn;", lineNumber: 158 },
               { id: "act-2-scene-1-stanza-14-verse-3", text: "Ein jeglicher, gut oder böse, nimmt", lineNumber: 159 },
               { id: "act-2-scene-1-stanza-14-verse-4", text: "Sich seinen Lohn mit seiner Tat hinweg.", lineNumber: 160 },
               { id: "act-2-scene-1-stanza-14-verse-5", text: "Et erbt der Eltern Segen, nicht ihr Fluch.", lineNumber: 161 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-15",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-15-verse-1", text: "Uns führt ihr Segen, dünkt mich, nicht hierher.", lineNumber: 162 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-16",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-16-verse-1", text: "Doch wenigstens der hohen Götter Wille.", lineNumber: 163 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-17",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-17-verse-1", text: "So ist's ihr Wille denn, der uns verderbt.", lineNumber: 164 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-18",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-18-verse-1", text: "Tu, was sie dir gebieten, und erwarte!", lineNumber: 165 },
               { id: "act-2-scene-1-stanza-18-verse-2", text: "Bringst du die Schwester zu Apollen hin", lineNumber: 166 },
               { id: "act-2-scene-1-stanza-18-verse-3", text: "Und wohnen beide dann vereint zu Delphi,", lineNumber: 167 },
               { id: "act-2-scene-1-stanza-18-verse-4", text: "Verehrt von einem Volk, das edel denkt,", lineNumber: 168 },
               { id: "act-2-scene-1-stanza-18-verse-5", text: "So wird für diese Tat das hohe Paar", lineNumber: 169 },
               { id: "act-2-scene-1-stanza-18-verse-6", text: "Dir gnädig sein, sie werden aus der Hand", lineNumber: 170 },
               { id: "act-2-scene-1-stanza-18-verse-7", text: "Der Unterird'schen dich erretten. Schon", lineNumber: 171 },
               { id: "act-2-scene-1-stanza-18-verse-8", text: "In diesen heil'gen Hain wagt keine sich.", lineNumber: 172 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-19",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-19-verse-1", text: "So hab ich wenigstens geruh'gen Tod.", lineNumber: 173 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-20",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-20-verse-1", text: "Ganz anders denk ich, und nicht ungeschickt", lineNumber: 174 },
               { id: "act-2-scene-1-stanza-20-verse-2", text: "Hab ich das schon Geschehne mit dem Künft'gen", lineNumber: 175 },
               { id: "act-2-scene-1-stanza-20-verse-3", text: "Verbunden und im stillen ausgelegt.", lineNumber: 176 },
               { id: "act-2-scene-1-stanza-20-verse-4", text: "Vielleicht reift in der Götter Rat schon lange", lineNumber: 177 },
               { id: "act-2-scene-1-stanza-20-verse-5", text: "Das große Werk. Diana sehnet sich", lineNumber: 178 },
               { id: "act-2-scene-1-stanza-20-verse-6", text: "Von diesem rauhen Ufer der Barbaren", lineNumber: 179 },
               { id: "act-2-scene-1-stanza-20-verse-7", text: "Und ihren blut'gen Menschenopfern weg.", lineNumber: 180 },
               { id: "act-2-scene-1-stanza-20-verse-8", text: "Wir waren zu der schönen Tat bestimmt,", lineNumber: 181 },
               { id: "act-2-scene-1-stanza-20-verse-9", text: "Uns wird sie auferlegt, und seltsam sind", lineNumber: 182 },
               { id: "act-2-scene-1-stanza-20-verse-10", text: "Wir an der Pforte schon gezwungen hier.", lineNumber: 183 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-21",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-21-verse-1", text: "Mit seltner Kunst flichtst du der Götter Rat", lineNumber: 184 },
               { id: "act-2-scene-1-stanza-21-verse-2", text: "Und deine Wünsche klug in eins zusammen.", lineNumber: 185 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-22",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-22-verse-1", text: "Was ist des Menschen Klugheit, wenn sie nicht", lineNumber: 186 },
               { id: "act-2-scene-1-stanza-22-verse-2", text: "Auf jener Willen droben achtend lauscht?", lineNumber: 187 },
               { id: "act-2-scene-1-stanza-22-verse-3", text: "Zu einer schweren Tat beruft ein Gott", lineNumber: 188 },
               { id: "act-2-scene-1-stanza-22-verse-4", text: "Den edeln Mann, der viel verbrach, und legt", lineNumber: 189 },
               { id: "act-2-scene-1-stanza-22-verse-5", text: "Ihm auf, was uns unmöglich scheint, zu enden.", lineNumber: 190 },
               { id: "act-2-scene-1-stanza-22-verse-6", text: "Es siegt der Held, und büßend dienet er", lineNumber: 191 },
               { id: "act-2-scene-1-stanza-22-verse-7", text: "Den Göttern und der Welt, die ihn verehrt.", lineNumber: 192 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-23",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-23-verse-1", text: "Bin ich bestimmt, zu leben und zu handeln,", lineNumber: 193 },
               { id: "act-2-scene-1-stanza-23-verse-2", text: "So nehm ein Gott von meiner schweren Stirn", lineNumber: 194 },
               { id: "act-2-scene-1-stanza-23-verse-3", text: "Den Schwindel weg, der auf dem schlüpfrigen,", lineNumber: 195 },
               { id: "act-2-scene-1-stanza-23-verse-4", text: "Mit Mutterblut besprengten Pfade fort", lineNumber: 196 },
               { id: "act-2-scene-1-stanza-23-verse-5", text: "Mich zu den Toten reißt. Er trockne gnädig", lineNumber: 197 },
               { id: "act-2-scene-1-stanza-23-verse-6", text: "Die Quelle, die, mir aus der Mutter Wunden", lineNumber: 198 },
               { id: "act-2-scene-1-stanza-23-verse-7", text: "Entgegensprudelnd, ewig mich befleckt.", lineNumber: 199 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-24",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-24-verse-1", text: "Erwart es ruhiger! Du mehrst das Übel", lineNumber: 200 },
               { id: "act-2-scene-1-stanza-24-verse-2", text: "Und nimmst das Amt der Furien auf dich.", lineNumber: 201 },
               { id: "act-2-scene-1-stanza-24-verse-3", text: "Laß mich nur sinnen, bleibe still! Zuletzt,", lineNumber: 202 },
               { id: "act-2-scene-1-stanza-24-verse-4", text: "Bedarf's zur Tat vereinter Kräfte, dann", lineNumber: 203 },
               { id: "act-2-scene-1-stanza-24-verse-5", text: "Ruf ich dich auf, und beide schreiten wir", lineNumber: 204 },
               { id: "act-2-scene-1-stanza-24-verse-6", text: "Mit überlegter Kühnheit zur Vollendung.", lineNumber: 205 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-25",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-25-verse-1", text: "Ich hör Ulyssen reden!", lineNumber: 206 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-26",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-26-verse-1", text: "Spotte nicht!", lineNumber: 207 },
               { id: "act-2-scene-1-stanza-26-verse-2", text: "Ein jeglicher muß seinen Helden wählen,", lineNumber: 208 },
               { id: "act-2-scene-1-stanza-26-verse-3", text: "Dem er die Wege zum Olymp hinauf", lineNumber: 209 },
               { id: "act-2-scene-1-stanza-26-verse-4", text: "Sich nacharbeitet. Laß es mich gestehn:", lineNumber: 210 },
               { id: "act-2-scene-1-stanza-26-verse-5", text: "Mir scheinen List und Klugheit nicht den Mann", lineNumber: 211 },
               { id: "act-2-scene-1-stanza-26-verse-6", text: "Zu schänden, der sich kühnen Taten weiht.", lineNumber: 212 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-27",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-27-verse-1", text: "Ich schätze den, der tapfer ist und grad.", lineNumber: 213 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-28",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-28-verse-1", text: "Drum hab ich keinen Rat von dir verlangt.", lineNumber: 214 },
               { id: "act-2-scene-1-stanza-28-verse-2", text: "Schon ist ein Schritt getan. Von unsern Wächtern", lineNumber: 215 },
               { id: "act-2-scene-1-stanza-28-verse-3", text: "Hab ich bisher gar vieles ausgelockt.", lineNumber: 216 },
               { id: "act-2-scene-1-stanza-28-verse-4", text: "Ich weiß, ein fremdes, göttergleiches Weib", lineNumber: 217 },
               { id: "act-2-scene-1-stanza-28-verse-5", text: "Hält jenes blutige Gesetz gefesselt:", lineNumber: 218 },
               { id: "act-2-scene-1-stanza-28-verse-6", text: "Ein reines Herz und Weihrauch und Gebet", lineNumber: 219 },
               { id: "act-2-scene-1-stanza-28-verse-7", text: "Bringt sie den Göttern dar. Man rühmet hoch", lineNumber: 220 },
               { id: "act-2-scene-1-stanza-28-verse-8", text: "Die Gütige; man glaubet, sie entspringe", lineNumber: 221 },
               { id: "act-2-scene-1-stanza-28-verse-9", text: "Vom Stamm der Amazonen, sei geflohn,", lineNumber: 222 },
               { id: "act-2-scene-1-stanza-28-verse-10", text: "Um einem großen Unheil zu entgehn.", lineNumber: 223 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-29",
             title: "Orest:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-29-verse-1", text: "Es scheint, ihr lichtes Reich verlor die Kraft", lineNumber: 224 },
               { id: "act-2-scene-1-stanza-29-verse-2", text: "Durch des Verbrechers Nähe, den der Fluch", lineNumber: 225 },
               { id: "act-2-scene-1-stanza-29-verse-3", text: "Wie eine breite Nacht verfolgt und deckt.", lineNumber: 226 },
               { id: "act-2-scene-1-stanza-29-verse-4", text: "Die fromme Blutgier löst den alten Brauch", lineNumber: 227 },
               { id: "act-2-scene-1-stanza-29-verse-5", text: "Von seinen Fesseln los, uns zu verderben.", lineNumber: 228 },
               { id: "act-2-scene-1-stanza-29-verse-6", text: "Der wilde Sinn des Königs tötet uns;", lineNumber: 229 },
               { id: "act-2-scene-1-stanza-29-verse-7", text: "Ein Weib wird uns nicht retten, wenn er zürnt.", lineNumber: 230 }
             ]
           },
           {
             id: "act-2-scene-1-stanza-30",
             title: "Pylades:",
             act: 2,
             scene: 1,
             verses: [
               { id: "act-2-scene-1-stanza-30-verse-1", text: "Wohl uns, daß es ein Weib ist! denn ein Mann,", lineNumber: 231 },
               { id: "act-2-scene-1-stanza-30-verse-2", text: "Der beste selbst, gewöhnet seinen Geist", lineNumber: 232 },
               { id: "act-2-scene-1-stanza-30-verse-3", text: "An Grausamkeit und macht sich auch zuletzt", lineNumber: 233 },
               { id: "act-2-scene-1-stanza-30-verse-4", text: "Aus dem, was er verabscheut, ein Gesetz,", lineNumber: 234 },
               { id: "act-2-scene-1-stanza-30-verse-5", text: "Wird aus Gewohnheit hart und fast unkenntlich.", lineNumber: 235 },
               { id: "act-2-scene-1-stanza-30-verse-6", text: "Allein ein Weib bleibt stet auf einem Sinn,", lineNumber: 236 },
               { id: "act-2-scene-1-stanza-30-verse-7", text: "Den sie gefaßt. Du rechnest sicherer", lineNumber: 237 },
               { id: "act-2-scene-1-stanza-30-verse-8", text: "Auf sie im Guten wie im Bösen. – Still!", lineNumber: 238 },
               { id: "act-2-scene-1-stanza-30-verse-9", text: "Sie kommt; laß uns allein. Ich darf nicht gleich", lineNumber: 239 },
               { id: "act-2-scene-1-stanza-30-verse-10", text: "Ihr unsre Namen nennen, unser Schicksal", lineNumber: 240 },
               { id: "act-2-scene-1-stanza-30-verse-11", text: "Nicht ohne Rückhalt ihr vertraun. Du gehst,", lineNumber: 241 },
               { id: "act-2-scene-1-stanza-30-verse-12", text: "Und eh sie mit dir spricht, treff ich dich noch.", lineNumber: 242 }
             ]
           }
         ]
       },
       {
         id: "act-2-scene-2",
         title: "Zweiter Auftritt",
         number: 2,
         stanzas: [
           {
             id: "act-2-scene-2-stanza-1",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-1-verse-1", text: "Woher du seist und kommst, o Fremdling, sprich!", lineNumber: 243 },
               { id: "act-2-scene-2-stanza-1-verse-2", text: "Mir scheint es, daß ich eher einem Griechen", lineNumber: 244 },
               { id: "act-2-scene-2-stanza-1-verse-3", text: "Als einem Skythen dich vergleichen soll.", lineNumber: 245 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-2",
             title: "Sie nimmt ihm die Ketten ab.",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-2-verse-1", text: "Gefährlich ist die Freiheit, die ich gebe;", lineNumber: 246 },
               { id: "act-2-scene-2-stanza-2-verse-2", text: "Die Götter wenden ab, was euch bedroht!", lineNumber: 247 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-3",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-3-verse-1", text: "O süße Stimme! Vielwillkommner Ton", lineNumber: 248 },
               { id: "act-2-scene-2-stanza-3-verse-2", text: "Der Muttersprach in einem fremden Lande!", lineNumber: 249 },
               { id: "act-2-scene-2-stanza-3-verse-3", text: "Des väterlichen Hafens blaue Berge", lineNumber: 250 },
               { id: "act-2-scene-2-stanza-3-verse-4", text: "Seh ich Gefangner neu willkommen wieder", lineNumber: 251 },
               { id: "act-2-scene-2-stanza-3-verse-5", text: "Vor meinen Augen. Laß dir diese Freude", lineNumber: 252 },
               { id: "act-2-scene-2-stanza-3-verse-6", text: "Versichern, daß auch ich ein Grieche bin!", lineNumber: 253 },
               { id: "act-2-scene-2-stanza-3-verse-7", text: "Vergessen hab ich einen Augenblick,", lineNumber: 254 },
               { id: "act-2-scene-2-stanza-3-verse-8", text: "Wie sehr ich dein bedarf, und meinen Geist", lineNumber: 255 },
               { id: "act-2-scene-2-stanza-3-verse-9", text: "Der herrlichen Erscheinung zugewendet.", lineNumber: 256 },
               { id: "act-2-scene-2-stanza-3-verse-10", text: "O sage, wenn dir ein Verhängnis nicht", lineNumber: 257 },
               { id: "act-2-scene-2-stanza-3-verse-11", text: "Die Lippe schließt, aus welchem unsrer Stämme", lineNumber: 258 },
               { id: "act-2-scene-2-stanza-3-verse-12", text: "Du deine göttergleiche Herkunft zählst.", lineNumber: 259 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-4",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-4-verse-1", text: "Die Priesterin, von ihrer Göttin selbst", lineNumber: 260 },
               { id: "act-2-scene-2-stanza-4-verse-2", text: "Gewählet und geheiligt, spricht mit dir.", lineNumber: 261 },
               { id: "act-2-scene-2-stanza-4-verse-3", text: "Das laß dir gnügen; sage, wer du seist", lineNumber: 262 },
               { id: "act-2-scene-2-stanza-4-verse-4", text: "Und welch unselig waltendes Geschick", lineNumber: 263 },
               { id: "act-2-scene-2-stanza-4-verse-5", text: "Mit dem Gefährten dich hierhergebracht.", lineNumber: 264 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-5",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-5-verse-1", text: "Leicht kann ich dir erzählen, welch ein Übel", lineNumber: 265 },
               { id: "act-2-scene-2-stanza-5-verse-2", text: "Mit lastender Gesellschaft uns verfolgt.", lineNumber: 266 },
               { id: "act-2-scene-2-stanza-5-verse-3", text: "O könntest du der Hoffnung frohen Blick", lineNumber: 267 },
               { id: "act-2-scene-2-stanza-5-verse-4", text: "Uns auch so leicht, du Göttliche, gewähren!", lineNumber: 268 },
               { id: "act-2-scene-2-stanza-5-verse-5", text: "Aus Kreta sind wir, Söhne des Adrasts:", lineNumber: 269 },
               { id: "act-2-scene-2-stanza-5-verse-6", text: "Ich bin der jüngste, Cephalus genannt,", lineNumber: 270 },
               { id: "act-2-scene-2-stanza-5-verse-7", text: "Und er Laodamas, der älteste", lineNumber: 271 },
               { id: "act-2-scene-2-stanza-5-verse-8", text: "Des Hauses. Zwischen uns stand rauh und wild", lineNumber: 272 },
               { id: "act-2-scene-2-stanza-5-verse-9", text: "Ein mittlerer und trennte schon im Spiel", lineNumber: 273 },
               { id: "act-2-scene-2-stanza-5-verse-10", text: "Der ersten Jugend Einigkeit und Lust.", lineNumber: 274 },
               { id: "act-2-scene-2-stanza-5-verse-11", text: "Gelassen folgten wir der Mutter Worten,", lineNumber: 275 },
               { id: "act-2-scene-2-stanza-5-verse-12", text: "Solang des Vaters Kraft vor Troja stritt;", lineNumber: 276 },
               { id: "act-2-scene-2-stanza-5-verse-13", text: "Doch als er beutereich zurücke kam", lineNumber: 277 },
               { id: "act-2-scene-2-stanza-5-verse-14", text: "Und kurz darauf verschied, da trennte bald", lineNumber: 278 },
               { id: "act-2-scene-2-stanza-5-verse-15", text: "Der Streit um Reich und Erbe die Geschwister.", lineNumber: 279 },
               { id: "act-2-scene-2-stanza-5-verse-16", text: "Ich neigte mich zum ältsten. Er erschlug", lineNumber: 280 },
               { id: "act-2-scene-2-stanza-5-verse-17", text: "Den Bruder Um der Blutschuld willen treibt", lineNumber: 281 },
               { id: "act-2-scene-2-stanza-5-verse-18", text: "Die Furie gewaltig ihn umher.", lineNumber: 282 },
               { id: "act-2-scene-2-stanza-5-verse-19", text: "Doch diesem wilden Ufer sendet uns", lineNumber: 283 },
               { id: "act-2-scene-2-stanza-5-verse-20", text: "Apoll, der Delphische, mit Hoffnung zu.", lineNumber: 284 },
               { id: "act-2-scene-2-stanza-5-verse-21", text: "Im Tempel seiner Schwester hieß er uns", lineNumber: 285 },
               { id: "act-2-scene-2-stanza-5-verse-22", text: "Der Hülfe segensvolle Hand erwarten.", lineNumber: 286 },
               { id: "act-2-scene-2-stanza-5-verse-23", text: "Gefangen sind wir und hierhergebracht", lineNumber: 287 },
               { id: "act-2-scene-2-stanza-5-verse-24", text: "Und dir als Opfer dargestellt. Du weißt's.", lineNumber: 288 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-6",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-6-verse-1", text: "Fiel Troja? Teurer Mann, versichr es mir.", lineNumber: 289 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-7",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-7-verse-1", text: "Es liegt. O sichre du uns Rettung zu!", lineNumber: 290 },
               { id: "act-2-scene-2-stanza-7-verse-2", text: "Beschleunige die Hülfe, die ein Gott", lineNumber: 291 },
               { id: "act-2-scene-2-stanza-7-verse-3", text: "Versprach. Erbarme meines Bruders dich.", lineNumber: 292 },
               { id: "act-2-scene-2-stanza-7-verse-4", text: "O sag ihm bald ein gutes, holdes Wort;", lineNumber: 293 },
               { id: "act-2-scene-2-stanza-7-verse-5", text: "Doch schone seiner, wenn du mit ihm sprichst,", lineNumber: 294 },
               { id: "act-2-scene-2-stanza-7-verse-6", text: "Das bitt ich eifrig: denn es wird gar leicht", lineNumber: 295 },
               { id: "act-2-scene-2-stanza-7-verse-7", text: "Durch Freud und Schmerz und durch Erinnerung", lineNumber: 296 },
               { id: "act-2-scene-2-stanza-7-verse-8", text: "Sein Innerstes ergriffen und zerrüttet.", lineNumber: 297 },
               { id: "act-2-scene-2-stanza-7-verse-9", text: "Ein fieberhafter Wahnsinn fällt ihn an,", lineNumber: 298 },
               { id: "act-2-scene-2-stanza-7-verse-10", text: "Und seine schöne freie Seele wird", lineNumber: 299 },
               { id: "act-2-scene-2-stanza-7-verse-11", text: "Den Furien zum Raube hingegeben.", lineNumber: 300 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-8",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-8-verse-1", text: "So groß dein Unglück ist, beschwör ich dich:", lineNumber: 301 },
               { id: "act-2-scene-2-stanza-8-verse-2", text: "Vergiß es, bis du mir genuggetan.", lineNumber: 302 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-9",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-9-verse-1", text: "Die hohe Stadt, die zehen lange Jahre", lineNumber: 303 },
               { id: "act-2-scene-2-stanza-9-verse-2", text: "Dem ganzen Heer der Griechen widerstand,", lineNumber: 304 },
               { id: "act-2-scene-2-stanza-9-verse-3", text: "Liegt nun im Schutte, steigt nicht wieder auf.", lineNumber: 305 },
               { id: "act-2-scene-2-stanza-9-verse-4", text: "Doch manche Gräber unsrer Besten heißen", lineNumber: 306 },
               { id: "act-2-scene-2-stanza-9-verse-5", text: "Uns an das Ufer der Barbaren denken.", lineNumber: 307 },
               { id: "act-2-scene-2-stanza-9-verse-6", text: "Achill liegt dort mit seinem schönen Freunde.", lineNumber: 308 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-10",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-10-verse-1", text: "So seid ihr Götterbilder auch zu Staub!", lineNumber: 309 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-11",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-11-verse-1", text: "Auch Palamedes, Ajax Telamons,", lineNumber: 310 },
               { id: "act-2-scene-2-stanza-11-verse-2", text: "Sie sahn des Vaterlandes Tag nicht wieder.", lineNumber: 311 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-12",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-12-verse-1", text: "Er schweigt von meinem Vater, nennt ihn nicht", lineNumber: 312 },
               { id: "act-2-scene-2-stanza-12-verse-2", text: "Mit den Erschlagnen. Ja! er lebt mir noch!", lineNumber: 313 },
               { id: "act-2-scene-2-stanza-12-verse-3", text: "Ich werd ihn sehn. O hoffe, liebes Herz!", lineNumber: 314 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-13",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-13-verse-1", text: "Doch selig sind die Tausende, die starben", lineNumber: 315 },
               { id: "act-2-scene-2-stanza-13-verse-2", text: "Den bittersüßen Tod von Feindes Hand!", lineNumber: 316 },
               { id: "act-2-scene-2-stanza-13-verse-3", text: "Denn wüste Schrecken und ein traurig Ende", lineNumber: 317 },
               { id: "act-2-scene-2-stanza-13-verse-4", text: "Hat den Rückkehrenden statt des Triumphs", lineNumber: 318 },
               { id: "act-2-scene-2-stanza-13-verse-5", text: "Ein feindlich aufgebrachter Gott bereitet.", lineNumber: 319 },
               { id: "act-2-scene-2-stanza-13-verse-6", text: "Kommt denn der Menschen Stimme nicht zu euch?", lineNumber: 320 },
               { id: "act-2-scene-2-stanza-13-verse-7", text: "So weit sie reicht, trägt sie den Ruf umher", lineNumber: 321 },
               { id: "act-2-scene-2-stanza-13-verse-8", text: "Von unerhörten Taten, die geschahn.", lineNumber: 322 },
               { id: "act-2-scene-2-stanza-13-verse-9", text: "So ist der Jammer, der Mykenens Hallen", lineNumber: 323 },
               { id: "act-2-scene-2-stanza-13-verse-10", text: "Mit immer wiederholten Seufzern füllt,", lineNumber: 324 },
               { id: "act-2-scene-2-stanza-13-verse-11", text: "Dir ein Geheimnis? – Klytämnestra hat", lineNumber: 325 },
               { id: "act-2-scene-2-stanza-13-verse-12", text: "Mit Hülf Ägisthens den Gemahl berückt,", lineNumber: 326 },
               { id: "act-2-scene-2-stanza-13-verse-13", text: "Am Tage seiner Rückkehr ihn ermordet! –", lineNumber: 327 },
               { id: "act-2-scene-2-stanza-13-verse-14", text: "Ja, du verehrest dieses Königs Haus!", lineNumber: 328 },
               { id: "act-2-scene-2-stanza-13-verse-15", text: "Ich seh es, deine Brust bekämpft vergebens", lineNumber: 329 },
               { id: "act-2-scene-2-stanza-13-verse-16", text: "Das unerwartet ungeheure Wort.", lineNumber: 330 },
               { id: "act-2-scene-2-stanza-13-verse-17", text: "Bist du die Tochter eines Freundes? bist", lineNumber: 331 },
               { id: "act-2-scene-2-stanza-13-verse-18", text: "Du nachbarlich in dieser Stadt geboren?", lineNumber: 332 },
               { id: "act-2-scene-2-stanza-13-verse-19", text: "Verbirg es nicht und rechne mir's nicht zu,", lineNumber: 333 },
               { id: "act-2-scene-2-stanza-13-verse-20", text: "Daß ich der erste diese Greuel melde.", lineNumber: 334 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-14",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-14-verse-1", text: "Sag an, wie ward die schwere Tat vollbracht?", lineNumber: 335 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-15",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-15-verse-1", text: "Am Tage seiner Ankunft, da der König,", lineNumber: 336 },
               { id: "act-2-scene-2-stanza-15-verse-2", text: "Vom Bad erquickt und ruhig, sein Gewand", lineNumber: 337 },
               { id: "act-2-scene-2-stanza-15-verse-3", text: "Aus der Gemahlin Hand verlangend, stieg,", lineNumber: 338 },
               { id: "act-2-scene-2-stanza-15-verse-4", text: "Warf die Verderbliche ein faltenreich", lineNumber: 339 },
               { id: "act-2-scene-2-stanza-15-verse-5", text: "Und künstlich sich verwirrendes Gewebe", lineNumber: 340 },
               { id: "act-2-scene-2-stanza-15-verse-6", text: "Ihm auf die Schultern, um das edle Haupt;", lineNumber: 341 },
               { id: "act-2-scene-2-stanza-15-verse-7", text: "Und da er wie von einem Netze sich", lineNumber: 342 },
               { id: "act-2-scene-2-stanza-15-verse-8", text: "Vergebens zu entwickeln strebte, schlug", lineNumber: 343 },
               { id: "act-2-scene-2-stanza-15-verse-9", text: "Ägisth ihn, der Verräter, und verhüllt", lineNumber: 344 },
               { id: "act-2-scene-2-stanza-15-verse-10", text: "Ging zu den Toten dieser große Fürst.", lineNumber: 345 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-16",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-16-verse-1", text: "Und welchen Lohn erhielt der Mitverschworne?", lineNumber: 346 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-17",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-17-verse-1", text: "Ein Reich und Bette, das er schon besaß.", lineNumber: 347 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-18",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-18-verse-1", text: "So trieb zur Schandtat eine böse Lust?", lineNumber: 348 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-19",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-19-verse-1", text: "Und einer alten Rache tief Gefühl.", lineNumber: 349 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-20",
             title: "Iphigenie:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-20-verse-1", text: "Und wie beleidigte der König sie?", lineNumber: 350 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-21",
             title: "Pylades:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-21-verse-1", text: "Mit schwerer Tat, die, wenn Entschuldigung", lineNumber: 351 },
               { id: "act-2-scene-2-stanza-21-verse-2", text: "Des Mordes wäre, sie entschuldigte.", lineNumber: 352 },
               { id: "act-2-scene-2-stanza-21-verse-3", text: "Nach Aulis lockt' er sie und brachte dort,", lineNumber: 353 },
               { id: "act-2-scene-2-stanza-21-verse-4", text: "Als eine Gottheit sich der Griechen Fahrt", lineNumber: 354 },
               { id: "act-2-scene-2-stanza-21-verse-5", text: "Mit ungestümen Winden widersetzte,", lineNumber: 355 },
               { id: "act-2-scene-2-stanza-21-verse-6", text: "Die ältste Tochter, Iphigenien,", lineNumber: 356 },
               { id: "act-2-scene-2-stanza-21-verse-7", text: "Vor den Altar Dianens, und sie fiel,", lineNumber: 357 },
               { id: "act-2-scene-2-stanza-21-verse-8", text: "Ein blutig Opfer, für der Griechen Heil.", lineNumber: 358 },
               { id: "act-2-scene-2-stanza-21-verse-9", text: "Dies, sagt man, hat ihr einen Widerwillen", lineNumber: 359 },
               { id: "act-2-scene-2-stanza-21-verse-10", text: "So tief ins Herz geprägt, daß sie dem Werben", lineNumber: 360 },
               { id: "act-2-scene-2-stanza-21-verse-11", text: "Ägisthens sich ergab und den Gemahl", lineNumber: 361 },
               { id: "act-2-scene-2-stanza-21-verse-12", text: "Mit Netzen des Verderbens selbst umschlang.", lineNumber: 362 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-22",
             title: "Iphigenie allein:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-22-verse-1", text: "Es ist genug. Du wirst mich wiedersehn.", lineNumber: 363 }
             ]
           },
           {
             id: "act-2-scene-2-stanza-23",
             title: "Pylades allein:",
             act: 2,
             scene: 2,
             verses: [
               { id: "act-2-scene-2-stanza-23-verse-1", text: "Von dem Geschick des Königshauses scheint", lineNumber: 364 },
               { id: "act-2-scene-2-stanza-23-verse-2", text: "Sie tief gerührt. Wer sie auch immer sei,", lineNumber: 365 },
               { id: "act-2-scene-2-stanza-23-verse-3", text: "So hat sie selbst den König wohl gekannt", lineNumber: 366 },
               { id: "act-2-scene-2-stanza-23-verse-4", text: "Und ist, zu unserm Glück, aus hohem Hause", lineNumber: 367 },
               { id: "act-2-scene-2-stanza-23-verse-5", text: "Hierher verkauft. Nur stille, liebes Herz,", lineNumber: 368 },
               { id: "act-2-scene-2-stanza-23-verse-6", text: "Und laß dem Stern der Hoffnung, der uns blinkt,", lineNumber: 369 },
               { id: "act-2-scene-2-stanza-23-verse-7", text: "Mit frohem Mut uns klug entgegensteuern.", lineNumber: 370 }
             ]
           }
         ]
       }
   ]
 }
 // HIER WÜRDEN DER DRITTE, VIERTE UND FÜNFTE AUFZUG FOLGEN
];
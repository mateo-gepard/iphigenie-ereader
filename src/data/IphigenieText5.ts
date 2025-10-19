import type { Act, Verse } from '../types';




// Die Zählung wird fortgesetzt (Act 4 endete bei Vers 890).
let currentLineNumber = 891; 

// Hilfsfunktion zur Erstellung eines Verse-Objekts und Inkrementierung der Zeilennummer
const createVerse = (act: number, scene: number, stanza: number, verse: number, text: string): Verse => ({
 id: `act-${act}-scene-${scene}-stanza-${stanza}-verse-${verse}`,
 text: text,
 lineNumber: currentLineNumber++,
});

export const iphigenieText: Act[] = [
 // ... ACTS 1 BIS 4 WÜRDEN HIER STEHEN (Act 4 endete bei Vers 890)
 {
   id: "act-5",
   title: "Fünfter Aufzug",
   number: 5,
   scenes: [
     {
       id: "act-5-scene-1",
       title: "Erster Auftritt",
       number: 1,
       stanzas: [
         {
           id: "act-5-scene-1-stanza-1",
           title: "Arkas:",
           act: 5,
           scene: 1,
           verses: [
             createVerse(5, 1, 1, 1, "Verwirrt muß ich gestehn, daß ich nicht weiß,"),
             createVerse(5, 1, 1, 2, "Wohin ich meinen Argwohn richten soll."),
             createVerse(5, 1, 1, 3, "Sind's die Gefangnen, die auf ihre Flucht"),
             createVerse(5, 1, 1, 4, "Verstohlen sinnen? Ist's die Priesterin,"),
             createVerse(5, 1, 1, 5, "Die ihnen hilft? Es mehrt sich das Gerücht:"),
             createVerse(5, 1, 1, 6, "Das Schiff, das diese beiden hergebracht,"),
             createVerse(5, 1, 1, 7, "Sei irgend noch in einer Bucht versteckt."),
             createVerse(5, 1, 1, 8, "Und jenes Mannes Wahnsinn, diese Weihe,"),
             createVerse(5, 1, 1, 9, "Der heil'ge Vorwand dieser Zögrung, rufen"),
             createVerse(5, 1, 1, 10, "Den Argwohn lauter und die Vorsicht auf."),
         ]
         },
         {
           id: "act-5-scene-1-stanza-2",
           title: "Thoas:",
           act: 5,
           scene: 1,
           verses: [
             createVerse(5, 1, 2, 1, "Es komme schnell die Priesterin herbei!"),
             createVerse(5, 1, 2, 2, "Dann geht, durchsucht das Ufer scharf und schnell"),
             createVerse(5, 1, 2, 3, "Vom Vorgebirge bis zum Hain der Göttin."),
             createVerse(5, 1, 2, 4, "Verschonet seine heil'gen Tiefen, legt"),
             createVerse(5, 1, 2, 5, "Bedächt'gen Hinterhalt und greift sie an;"),
             createVerse(5, 1, 2, 6, "Wo ihr sie findet, faßt sie, wie ihr pflegt!"),
         ]
         }
       ]
     },
     {
       id: "act-5-scene-2",
       title: "Zweiter Auftritt",
       number: 2,
       stanzas: [
         {
           id: "act-5-scene-2-stanza-1",
           title: "Thoas allein:",
           act: 5,
           scene: 2,
           verses: [
             createVerse(5, 2, 1, 1, "Entsetzlich wechselt mir der Grimm im Busen:"),
             createVerse(5, 2, 1, 2, "Erst gegen sie, die ich so heilig hielt,"),
             createVerse(5, 2, 1, 3, "Dann gegen mich, der ich sie zum Verrat"),
             createVerse(5, 2, 1, 4, "Durch Nachsicht und durch Güte bildete."),
             createVerse(5, 2, 1, 5, "Zur Sklaverei gewöhnt der Mensch sich gut"),
             createVerse(5, 2, 1, 6, "Und lernet leicht gehorchen, wenn man ihn"),
             createVerse(5, 2, 1, 7, "Der Freiheit ganz beraubt. Ja, wäre sie"),
             createVerse(5, 2, 1, 8, "In meiner Ahnherrn rohe Hand gefallen"),
             createVerse(5, 2, 1, 9, "Und hätte sie der heil'ge Grimm verschont:"),
             createVerse(5, 2, 1, 10, "Sie wäre froh gewesen, sich allein"),
             createVerse(5, 2, 1, 11, "Zu retten, hätte dankbar ihr Geschick"),
             createVerse(5, 2, 1, 12, "Erkannt und fremdes Blut vor dem Altar"),
             createVerse(5, 2, 1, 13, "Vergossen, hätte Pflicht genannt,"),
             createVerse(5, 2, 1, 14, "Was Not war. Nun lockt meine Güte"),
             createVerse(5, 2, 1, 15, "In ihrer Brust verwegnen Wunsch herauf."),
             createVerse(5, 2, 1, 16, "Vergebens hofft ich, sie mir zu verbinden;"),
             createVerse(5, 2, 1, 17, "Sie sinnt sich nun ein eigen Schicksal aus."),
             createVerse(5, 2, 1, 18, "Durch Schmeichelei gewann sie mir das Herz:"),
             createVerse(5, 2, 1, 19, "Nun widersteh ich der, so sucht sie sich"),
             createVerse(5, 2, 1, 20, "Den Weg durch List und Trug, und meine Güte"),
             createVerse(5, 2, 1, 21, "Scheint ihr ein alt verjährtes Eigentum."),
         ]
         }
       ]
     },
     {
       id: "act-5-scene-3",
       title: "Dritter Auftritt",
       number: 3,
       stanzas: [
         {
           id: "act-5-scene-3-stanza-1",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 1, 1, "Du forderst mich! Was bringt dich zu uns her?"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-2",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 2, 1, "Du schiebst das Opfer auf; sag an, warum?"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-3",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 3, 1, "Ich hab an Arkas alles klar erzählt."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-4",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 4, 1, "Von dir möcht ich es weiter noch vernehmen."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-5",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 5, 1, "Die Göttin gibt dir Frist zur Überlegung."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-6",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 6, 1, "Sie scheint dir selbst gelegen, diese Frist."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-7",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 7, 1, "Wenn dir das Herz zum grausamen Entschluß"),
             createVerse(5, 3, 7, 2, "Verhärtet ist, so solltest du nicht kommen!"),
             createVerse(5, 3, 7, 3, "Ein König, der Unmenschliches verlangt,"),
             createVerse(5, 3, 7, 4, "Findt Diener gnug, die gegen Gnad und Lohn"),
             createVerse(5, 3, 7, 5, "Den halben Fluch der Tat begierig fassen;"),
             createVerse(5, 3, 7, 6, "Doch seine Gegenwart bleibt unbefleckt."),
             createVerse(5, 3, 7, 7, "Er sinnt den Tod in einer schweren Wolke,"),
             createVerse(5, 3, 7, 8, "Und seine Boten bringen flammendes"),
             createVerse(5, 3, 7, 9, "Verderben auf des Armen Haupt hinab;"),
             createVerse(5, 3, 7, 10, "Er aber schwebt durch seine Höhen ruhig,"),
             createVerse(5, 3, 7, 11, "Ein unerreichter Gott, im Sturme fort."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-8",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 8, 1, "Die heil'ge Lippe tönt ein wildes Lied."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-9",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 9, 1, "Nicht Priesterin! nur Agamemnons Tochter."),
             createVerse(5, 3, 9, 2, "Der Unbekannten Wort verehrtest du,"),
             createVerse(5, 3, 9, 3, "Der Fürstin willst du rasch gebieten? Nein!"),
             createVerse(5, 3, 9, 4, "Von Jugend auf hab ich gelernt gehorchen,"),
             createVerse(5, 3, 9, 5, "Erst meinen Eltern und dann einer Gottheit,"),
             createVerse(5, 3, 9, 6, "Und folgsam fühlt ich immer meine Seele"),
             createVerse(5, 3, 9, 7, "Am schönsten frei; allein dem harten Worte,"),
             createVerse(5, 3, 9, 8, "Dem rauhen Ausspruch eines Mannes mich"),
             createVerse(5, 3, 9, 9, "Zu fügen, lernt ich weder dort noch hier."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-10",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 10, 1, "Ein alt Gesetz, nicht ich, gebietet dir."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-11",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 11, 1, "Wir fassen ein Gesetz begierig an,"),
             createVerse(5, 3, 11, 2, "Das unsrer Leidenschaft zur Waffe dient."),
             createVerse(5, 3, 11, 3, "Ein andres spricht zu mir, ein älteres,"),
             createVerse(5, 3, 11, 4, "Mich dir zu widersetzen: das Gebot,"),
             createVerse(5, 3, 11, 5, "Dem jeder Fremde heilig ist."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-12",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 12, 1, "Es scheinen die Gefangnen dir sehr nah"),
             createVerse(5, 3, 12, 2, "Am Herzen, denn vor Anteil und Bewegung"),
             createVerse(5, 3, 12, 3, "Vergissest du der Klugheit erstes Wort,"),
             createVerse(5, 3, 12, 4, "Daß man den Mächtigen nicht reizen soll."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-13",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 13, 1, "Red oder schweig ich, immer kannst du wissen,"),
             createVerse(5, 3, 13, 2, "Was mir im Herzen ist und immer bleibt."),
             createVerse(5, 3, 13, 3, "Löst die Erinnerung des gleichen Schicksals"),
             createVerse(5, 3, 13, 4, "Nicht ein verschloßnes Herz zum Mitleid auf?"),
             createVerse(5, 3, 13, 5, "Wie mehr denn meins! In ihnen seh ich mich."),
             createVerse(5, 3, 13, 6, "Ich habe vorm Altare selbst gezittert,"),
             createVerse(5, 3, 13, 7, "Und feierlich umgab der frühe Tod"),
             createVerse(5, 3, 13, 8, "Die Knieende; das Messer zuckte schon,"),
             createVerse(5, 3, 13, 9, "Den lebenvollen Busen zu durchbohren;"),
             createVerse(5, 3, 13, 10, "Mein Innerstes entsetzte wirbelnd sich,"),
             createVerse(5, 3, 13, 11, "Mein Auge brach, und – ich fand mich gerettet."),
             createVerse(5, 3, 13, 12, "Sind wir, was Götter gnädig uns gewährt,"),
             createVerse(5, 3, 13, 13, "Unglücklichen nicht zu erstatten schuldig?"),
             createVerse(5, 3, 13, 14, "Du weißt es, kennst mich, und du willst mich zwingen!"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-14",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 14, 1, "Gehorche deinem Dienste, nicht dem Herrn!"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-15",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 15, 1, "Laß ab! Beschönige nicht die Gewalt,"),
             createVerse(5, 3, 15, 2, "Die sich der Schwachheit eines Weibes freut."),
             createVerse(5, 3, 15, 3, "Ich bin so frei geboren als ein Mann."),
             createVerse(5, 3, 15, 4, "Stünd Agamemnons Sohn dir gegenüber"),
             createVerse(5, 3, 15, 5, "Und du verlangtest, was sich nicht gebührt,"),
             createVerse(5, 3, 15, 6, "So hat auch er ein Schwert und einen Arm,"),
             createVerse(5, 3, 15, 7, "Die Rechte seines Busens zu verteid'gen."),
             createVerse(5, 3, 15, 8, "Ich habe nichts als Worte, und es ziemt"),
             createVerse(5, 3, 15, 9, "Dem edlen Mann, der Frauen Wort zu achten."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-16",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 16, 1, "Ich acht es mehr als eines Bruders Schwert."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-17",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 17, 1, "Das Los der Waffen wechselt hin und her:"),
             createVerse(5, 3, 17, 2, "Kein kluger Streiter hält den Feind gering."),
             createVerse(5, 3, 17, 3, "Auch ohne Hülfe gegen Trutz und Härte"),
             createVerse(5, 3, 17, 4, "Hat die Natur den Schwachen nicht gelassen."),
             createVerse(5, 3, 17, 5, "Sie gab zur List ihm Freude, lehrt' ihn Künste:"),
             createVerse(5, 3, 17, 6, "Bald weicht er aus, verspätet und umgeht."),
             createVerse(5, 3, 17, 7, "Ja, der Gewaltige verdient, daß man sie übt."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-18",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 18, 1, "Die Vorsicht stellt der List sich klug entgegen."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-19",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 19, 1, "Und eine reine Seele braucht sie nicht."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-20",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 20, 1, "Sprich unbehutsam nicht dein eigen Urteil!"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-21",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 21, 1, "O sähest du, wie meine Seele kämpft,"),
             createVerse(5, 3, 21, 2, "Ein bös Geschick, das sie ergreifen will,"),
             createVerse(5, 3, 21, 3, "Im ersten Anfall mutig abzutreiben!"),
             createVerse(5, 3, 21, 4, "So steh ich denn hier wehrlos gegen dich?"),
             createVerse(5, 3, 21, 5, "Die schöne Bitte, den anmut'gen Zweig,"),
             createVerse(5, 3, 21, 6, "In einer Frauen Hand gewaltiger"),
             createVerse(5, 3, 21, 7, "Als Schwert und Waffe, stößest du zurück:"),
             createVerse(5, 3, 21, 8, "Was bleibt mir nun, mein Innres zu verteid'gen?"),
             createVerse(5, 3, 21, 9, "Ruf ich die Göttin um ein Wunder an?"),
             createVerse(5, 3, 21, 10, "Ist keine Kraft in meiner Seele Tiefen?"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-22",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 22, 1, "Es scheint, der beiden Fremden Schicksal macht"),
             createVerse(5, 3, 22, 2, "Unmäßig dich besorgt. Wer sind sie, sprich,"),
             createVerse(5, 3, 22, 3, "Für die dein Geist gewaltig sich erhebt?"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-23",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 23, 1, "Sie sind – sie scheinen – für Griechen halt ich sie."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-24",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 24, 1, "Landsleute sind es? und sie haben wohl"),
             createVerse(5, 3, 24, 2, "Der Rückkehr schönes Bild in dir erneut?"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-25",
           title: "Iphigenie nach einigem Stillschweigen:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 25, 1, "Hat denn zur unerhörten Tat der Mann"),
             createVerse(5, 3, 25, 2, "Allein das Recht? Drückt denn Unmögliches"),
             createVerse(5, 3, 25, 3, "Nur er an die gewalt'ge Heldenbrust?"),
             createVerse(5, 3, 25, 4, "Was nennt man groß? Was hebt die Seele schaudernd"),
             createVerse(5, 3, 25, 5, "Dem immer wiederholenden Erzähler,"),
             createVerse(5, 3, 25, 6, "Als was mit unwahrscheinlichem Erfolg"),
             createVerse(5, 3, 25, 7, "Der Mutigste begann? Der in der Nacht"),
             createVerse(5, 3, 25, 8, "Allein das Heer des Feindes überschleicht,"),
             createVerse(5, 3, 25, 9, "Wie unversehen eine Flamme wütend"),
             createVerse(5, 3, 25, 10, "Die Schlafenden, Erwachenden ergreift,"),
             createVerse(5, 3, 25, 11, "Zuletzt, gedrängt von den Ermunterten,"),
             createVerse(5, 3, 25, 12, "Auf Feindes Pferden doch mit Beute kehrt,"),
             createVerse(5, 3, 25, 13, "Wird der allein gepriesen? der allein,"),
             createVerse(5, 3, 25, 14, "Der, einen sichern Weg verachtend, kühn"),
             createVerse(5, 3, 25, 15, "Gebirg und Wälder durchzustreifen geht,"),
             createVerse(5, 3, 25, 16, "Daß er von Räubern eine Gegend säubre?"),
             createVerse(5, 3, 25, 17, "Ist uns nichts übrig? Muß ein zartes Weib"),
             createVerse(5, 3, 25, 18, "Sich ihres angebornen Rechts entäußern,"),
             createVerse(5, 3, 25, 19, "Wild gegen Wilde sein, wie Amazonen"),
             createVerse(5, 3, 25, 20, "Das Recht des Schwerts euch rauben und mit Blute"),
             createVerse(5, 3, 25, 21, "Die Unterdrückung rächen? Auf und ab"),
             createVerse(5, 3, 25, 22, "Steigt in der Brust ein kühnes Unternehmen:"),
             createVerse(5, 3, 25, 23, "Ich werde großem Vorwurf nicht entgehn"),
             createVerse(5, 3, 25, 24, "Noch schwerem Übel, wenn es mir mißlingt;"),
             createVerse(5, 3, 25, 25, "Allein euch leg ich's auf die Kniee! Wenn"),
             createVerse(5, 3, 25, 26, "Ihr wahrhaft seid, wie ihr gepriesen werdet,"),
             createVerse(5, 3, 25, 27, "So zeigt's durch euern Beistand und verherrlicht"),
             createVerse(5, 3, 25, 28, "Durch mich die Wahrheit! – Ja, vernimm, o König,"),
             createVerse(5, 3, 25, 29, "Es wird ein heimlicher Betrug geschmiedet:"),
             createVerse(5, 3, 25, 30, "Vergebens fragst du den Gefangnen nach;"),
             createVerse(5, 3, 25, 31, "Sie sind hinweg und suchen ihre Freunde,"),
             createVerse(5, 3, 25, 32, "Die mit dem Schiff am Ufer warten, auf."),
             createVerse(5, 3, 25, 33, "Der ältste, den das Übel hier ergriffen"),
             createVerse(5, 3, 25, 34, "Und nun verlassen hat – es ist Orest,"),
             createVerse(5, 3, 25, 35, "Mein Bruder, und der andre sein Vertrauter,"),
             createVerse(5, 3, 25, 36, "Sein Jugendfreund, mit Namen Pylades."),
             createVerse(5, 3, 25, 37, "Apoll schickt sie von Delphi diesem Ufer"),
             createVerse(5, 3, 25, 38, "Mit göttlichen Befehlen zu, das Bild"),
             createVerse(5, 3, 25, 39, "Dianens wegzurauben und zu ihm"),
             createVerse(5, 3, 25, 40, "Die Schwester hinzubringen, und dafür"),
             createVerse(5, 3, 25, 41, "Verspricht er dem von Furien Verfolgten,"),
             createVerse(5, 3, 25, 42, "Des Mutterblutes Schuldigen, Befreiung."),
             createVerse(5, 3, 25, 43, "Uns beide hab ich nun, die Überbliebnen"),
             createVerse(5, 3, 25, 44, "Von Tantals Haus, in deine Hand gelegt:"),
             createVerse(5, 3, 25, 45, "Verdirb uns – wenn du darfst."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-26",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 26, 1, "Du glaubst, es höre"),
             createVerse(5, 3, 26, 2, "Der rohe Skythe, der Barbar, die Stimme"),
             createVerse(5, 3, 26, 3, "Der Wahrheit und der Menschlichkeit, die Atreus,"),
             createVerse(5, 3, 26, 4, "Der Grieche, nicht vernahm?"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-27",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 27, 1, "Es hört sie jeder,"),
             createVerse(5, 3, 27, 2, "Geboren unter jedem Himmel, dem"),
             createVerse(5, 3, 27, 3, "Des Lebens Quelle durch den Busen rein"),
             createVerse(5, 3, 27, 4, "Und ungehindert fließt. – Was sinnst du mir,"),
             createVerse(5, 3, 27, 5, "O König, schweigend in der tiefen Seele?"),
             createVerse(5, 3, 27, 6, "Ist es Verderben? so töte mich zuerst!"),
             createVerse(5, 3, 27, 7, "Denn nun empfind ich, da uns keine Rettung"),
             createVerse(5, 3, 27, 8, "Mehr übrigbleibt, die gräßliche Gefahr,"),
             createVerse(5, 3, 27, 9, "Worein ich die Geliebten übereilt"),
             createVerse(5, 3, 27, 10, "Vorsätzlich stürzte. Weh! Ich werde sie"),
             createVerse(5, 3, 27, 11, "Gebunden vor mir sehn! Mit welchen Blicken"),
             createVerse(5, 3, 27, 12, "Kann ich von meinem Bruder Abschied nehmen,"),
             createVerse(5, 3, 27, 13, "Den ich ermorde? Nimmer kann ich ihm"),
             createVerse(5, 3, 27, 14, "Mehr in die vielgeliebten Augen schaun!"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-28",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 28, 1, "So haben die Betrüger künstlich dichtend"),
             createVerse(5, 3, 28, 2, "Der lang Verschloßnen, ihre Wünsche leicht"),
             createVerse(5, 3, 28, 3, "Und willig Glaubenden ein solch Gespinst"),
             createVerse(5, 3, 28, 4, "Ums Haupt geworfen!"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-29",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 29, 1, "Nein! o König, nein!"),
             createVerse(5, 3, 29, 2, "Ich könnte hintergangen werden; diese"),
             createVerse(5, 3, 29, 3, "Sind treu und wahr. Wirst du sie anders finden,"),
             createVerse(5, 3, 29, 4, "So laß sie fallen und verstoße mich,"),
             createVerse(5, 3, 29, 5, "Verbanne mich zur Strafe meiner Torheit"),
             createVerse(5, 3, 29, 6, "An einer Klippeninsel traurig Ufer."),
             createVerse(5, 3, 29, 7, "Ist aber dieser Mann der lang erflehte"),
             createVerse(5, 3, 29, 8, "Geliebte Bruder, so entlaß uns, sei"),
             createVerse(5, 3, 29, 9, "Auch den Geschwistern wie der Schwester freundlich!"),
             createVerse(5, 3, 29, 10, "Mein Vater fiel durch seiner Frauen Schuld"),
             createVerse(5, 3, 29, 11, "Und sie durch ihren Sohn. Die letzte Hoffnung"),
             createVerse(5, 3, 29, 12, "Von Atreus' Stamme ruht auf ihm allein."),
             createVerse(5, 3, 29, 13, "Laß mich mit reinem Herzen, reiner Hand"),
             createVerse(5, 3, 29, 14, "Hinübergehn und unser Haus entsühnen."),
             createVerse(5, 3, 29, 15, "Du hältst mir Wort! – Wenn zu den Meinen je"),
             createVerse(5, 3, 29, 16, "Mir Rückkehr zubereitet wäre, schwurst"),
             createVerse(5, 3, 29, 17, "Du, mich zu lassen; und sie ist es nun."),
             createVerse(5, 3, 29, 18, "Ein König sagt nicht, wie gemeine Menschen,"),
             createVerse(5, 3, 29, 19, "Verlegen zu, daß er den Bittenden"),
             createVerse(5, 3, 29, 20, "Auf einen Augenblick entferne; noch"),
             createVerse(5, 3, 29, 21, "Verspricht er auf den Fall, den er nicht hofft:"),
             createVerse(5, 3, 29, 22, "Dann fühlt er erst die Höhe seiner Würde,"),
             createVerse(5, 3, 29, 23, "Wenn er den Harrenden beglücken kann."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-30",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 30, 1, "Unwillig, wie sich Feuer gegen Wasser"),
             createVerse(5, 3, 30, 2, "Im Kampfe wehrt und gischend seinen Feind"),
             createVerse(5, 3, 30, 3, "Zu tilgen sucht, so wehret sich der Zorn"),
             createVerse(5, 3, 30, 4, "In meinem Busen gegen deine Worte."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-31",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 31, 1, "O laß die Gnade wie das heil'ge Licht"),
             createVerse(5, 3, 31, 2, "Der stillen Opferflamme mir, umkränzt"),
             createVerse(5, 3, 31, 3, "Von Lobgesang und Dank und Freude, lodern."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-32",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 32, 1, "Wie oft besänftigte mich diese Stimme!"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-33",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 33, 1, "O reiche mir die Hand zum Friedenszeichen!"),
         ]
         },
         {
           id: "act-5-scene-3-stanza-34",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 34, 1, "Du forderst viel in einer kurzen Zeit."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-35",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 35, 1, "Um Guts zu tun, braucht's keiner Überlegung."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-36",
           title: "Thoas:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 36, 1, "Sehr viel! denn auch dem Guten folgt das Übel."),
         ]
         },
         {
           id: "act-5-scene-3-stanza-37",
           title: "Iphigenie:",
           act: 5,
           scene: 3,
           verses: [
             createVerse(5, 3, 37, 1, "Der Zweifel ist's, der Gutes böse macht."),
             createVerse(5, 3, 37, 2, "Bedenke nicht; gewähre, wie du's fühlst."),
         ]
         }
       ]
     },
     {
       id: "act-5-scene-4",
       title: "Vierter Auftritt",
       number: 4,
       stanzas: [
         {
           id: "act-5-scene-4-stanza-1",
           title: "Orest, gewaffnet. Die Vorigen.",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 1, 1, "Verdoppelt eure Kräfte! Haltet sie"),
             createVerse(5, 4, 1, 2, "Zurück! Nur wenig Augenblicke! Weicht"),
             createVerse(5, 4, 1, 3, "Der Menge nicht und deckt den Weg zum Schiffe"),
             createVerse(5, 4, 1, 4, "Mir und der Schwester!"),
         ]
         },
         {
           id: "act-5-scene-4-stanza-2",
           title: "Zu Iphigenien, ohne den König zu sehen:",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 2, 1, "Komm, wir sind verraten."),
             createVerse(5, 4, 2, 2, "Geringer Raum bleibt uns zur Flucht. Geschwind!"),
         ]
         },
         {
           id: "act-5-scene-4-stanza-3",
           title: "Er erblickt den König.",
           act: 5,
           scene: 4,
           verses: [
             // Leer, nur Bühnenanweisung
         ]
         },
         {
           id: "act-5-scene-4-stanza-4",
           title: "Thoas nach dem Schwerte greifend:",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 4, 1, "In meiner Gegenwart führt ungestraft"),
             createVerse(5, 4, 4, 2, "Kein Mann das nackte Schwert."),
         ]
         },
         {
           id: "act-5-scene-4-stanza-5",
           title: "Iphigenie:",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 5, 1, "Entheiliget"),
             createVerse(5, 4, 5, 2, "Der Göttin Wohnung nicht durch Wut und Mord!"),
             createVerse(5, 4, 5, 3, "Gebietet eurem Volke Stillstand, höret"),
             createVerse(5, 4, 5, 4, "Die Priesterin, die Schwester!"),
         ]
         },
         {
           id: "act-5-scene-4-stanza-6",
           title: "Orest:",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 6, 1, "Sage mir!"),
             createVerse(5, 4, 6, 2, "Wer ist es, der uns droht?"),
         ]
         },
         {
           id: "act-5-scene-4-stanza-7",
           title: "Iphigenie:",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 7, 1, "Verehr in ihm"),
             createVerse(5, 4, 7, 2, "Den König, der mein zweiter Vater ward!"),
             createVerse(5, 4, 7, 3, "Verzeih mir, Bruder! doch mein kindlich Herz"),
             createVerse(5, 4, 7, 4, "Hat unser ganz Geschick in seine Hand"),
             createVerse(5, 4, 7, 5, "Gelegt. Gestanden hab ich euern Anschlag"),
             createVerse(5, 4, 7, 6, "Und meine Seele vom Verrat gerettet."),
         ]
         },
         {
           id: "act-5-scene-4-stanza-8",
           title: "Orest:",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 8, 1, "Will er die Rückkehr friedlich uns gewähren?"),
         ]
         },
         {
           id: "act-5-scene-4-stanza-9",
           title: "Iphigenie:",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 9, 1, "Dein blinkend Schwert verbietet mir die Antwort."),
         ]
         },
         {
           id: "act-5-scene-4-stanza-10",
           title: "Orest (der das Schwert einsteckt):",
           act: 5,
           scene: 4,
           verses: [
             createVerse(5, 4, 10, 1, "So sprich! Du siehst, ich horche deinen Worten."),
         ]
         }
       ]
     },
     {
       id: "act-5-scene-5",
       title: "Fünfter Auftritt",
       number: 5,
       stanzas: [
         {
           id: "act-5-scene-5-stanza-1",
           title: "Pylades:",
           act: 5,
           scene: 5,
           verses: [
             createVerse(5, 5, 1, 1, "Verweilet nicht! Die letzten Kräfte raffen"),
             createVerse(5, 5, 1, 2, "Die Unsrigen zusammen; weichend werden"),
             createVerse(5, 5, 1, 3, "Sie nach der See langsam zurückgedrängt."),
             createVerse(5, 5, 1, 4, "Welch ein Gespräch der Fürsten find ich hier!"),
             createVerse(5, 5, 1, 5, "Dies ist des Königes verehrtes Haupt!"),
         ]
         },
         {
           id: "act-5-scene-5-stanza-2",
           title: "Arkas:",
           act: 5,
           scene: 5,
           verses: [
             createVerse(5, 5, 2, 1, "Gelassen, wie es dir, o König, ziemt,"),
             createVerse(5, 5, 2, 2, "Stehst du den Feinden gegenüber. Gleich"),
             createVerse(5, 5, 2, 3, "Ist die Verwegenheit bestraft; es weicht"),
             createVerse(5, 5, 2, 4, "Und fällt ihr Anhang, und ihr Schiff ist unser."),
             createVerse(5, 5, 2, 5, "Ein Wort von dir, so steht's in Flammen."),
         ]
         },
         {
           id: "act-5-scene-5-stanza-3",
           title: "Thoas:",
           act: 5,
           scene: 5,
           verses: [
             createVerse(5, 5, 3, 1, "Geh!"),
             createVerse(5, 5, 3, 2, "Gebiete Stillstand meinem Volke! Keiner"),
             createVerse(5, 5, 3, 3, "Beschädige den Feind, solang wir reden."),
         ]
         },
         {
           id: "act-5-scene-5-stanza-4",
           title: "Arkas ab.",
           act: 5,
           scene: 5,
           verses: [
             // Leer, nur Bühnenanweisung
         ]
         },
         {
           id: "act-5-scene-5-stanza-5",
           title: "Orest:",
           act: 5,
           scene: 5,
           verses: [
             createVerse(5, 5, 5, 1, "Ich nehm es an. Geh, sammle, treuer Freund,"),
             createVerse(5, 5, 5, 2, "Den Rest des Volkes; harret still, welch Ende"),
             createVerse(5, 5, 5, 3, "Die Götter unsern Taten zubereiten"),
         ]
         },
         {
           id: "act-5-scene-5-stanza-6",
           title: "Pylades ab.",
           act: 5,
           scene: 5,
           verses: [
             // Leer, nur Bühnenanweisung
         ]
         }
       ]
     },
     {
       id: "act-5-scene-6",
       title: "Sechster Auftritt",
       number: 6,
       stanzas: [
         {
           id: "act-5-scene-6-stanza-1",
           title: "Iphigenie:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 1, 1, "Befreit von Sorge mich, eh ihr zu sprechen"),
             createVerse(5, 6, 1, 2, "Beginnet. Ich befürchte bösen Zwist,"),
             createVerse(5, 6, 1, 3, "Wenn du, o König, nicht der Billigkeit"),
             createVerse(5, 6, 1, 4, "Gelinde Stimme hörest; du, mein Bruder,"),
             createVerse(5, 6, 1, 5, "Der raschen Jugend nicht gebieten willst."),
         ]
         },
         {
           id: "act-5-scene-6-stanza-2",
           title: "Thoas:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 2, 1, "Ich halte meinen Zorn, wie es dem Ältern"),
             createVerse(5, 6, 2, 2, "Geziemt, zurück. Antworte mir! Womit"),
             createVerse(5, 6, 2, 3, "Bezeugst du, daß du Agamemnons Sohn"),
             createVerse(5, 6, 2, 4, "Und dieser Bruder bist?"),
         ]
         },
         {
           id: "act-5-scene-6-stanza-3",
           title: "Orest:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 3, 1, "Hier ist das Schwert,"),
             createVerse(5, 6, 3, 2, "Mit dem er Trojas tapfre Männer schlug."),
             createVerse(5, 6, 3, 3, "Dies nahm ich seinem Mörder ab und bat"),
             createVerse(5, 6, 3, 4, "Die Himmlischen, den Mut und Arm, das Glück"),
             createVerse(5, 6, 3, 5, "Des großen Königes mir zu verleihn"),
             createVerse(5, 6, 3, 6, "Und einen schönern Tod mir zu gewähren."),
             createVerse(5, 6, 3, 7, "Wähl einen aus den Edeln deines Heers"),
             createVerse(5, 6, 3, 8, "Und stelle mir den Besten gegenüber!"),
             createVerse(5, 6, 3, 9, "So weit die Erde Heldensöhne nährt,"),
             createVerse(5, 6, 3, 10, "Ist keinem Fremdling dies Gesuch verweigert."),
         ]
         },
         {
           id: "act-5-scene-6-stanza-4",
           title: "Thoas:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 4, 1, "Dies Vorrecht hat die alte Sitte nie"),
             createVerse(5, 6, 4, 2, "Dem Fremden hier gestattet."),
         ]
         },
         {
           id: "act-5-scene-6-stanza-5",
           title: "Orest:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 5, 1, "So beginne"),
             createVerse(5, 6, 5, 2, "Die neue Sitte denn von dir und mir!"),
             createVerse(5, 6, 5, 3, "Nachahmend heiliget ein ganzes Volk"),
             createVerse(5, 6, 5, 4, "Die edle Tat der Herrscher zum Gesetz."),
             createVerse(5, 6, 5, 5, "Und laß mich nicht allein für unsre Freiheit,"),
             createVerse(5, 6, 5, 6, "Laß mich, den Fremden, für die Fremden kämpfen!"),
             createVerse(5, 6, 5, 7, "Fall ich, so ist ihr Urteil mit dem meinen"),
             createVerse(5, 6, 5, 8, "Gesprochen; aber gönnet mir das Glück"),
             createVerse(5, 6, 5, 9, "Zu überwinden, so betrete nie"),
             createVerse(5, 6, 5, 10, "Ein Mann dies Ufer, dem der schnelle Blick"),
             createVerse(5, 6, 5, 11, "Hülfreicher Liebe nicht begegnet, und"),
             createVerse(5, 6, 5, 12, "Getröstet scheide jeglicher hinweg!"),
         ]
         },
         {
           id: "act-5-scene-6-stanza-6",
           title: "Thoas:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 6, 1, "Nicht unwert scheinest du, o Jüngling, mir"),
             createVerse(5, 6, 6, 2, "Der Ahnherrn, deren du dich rühmst, zu sein."),
             createVerse(5, 6, 6, 3, "Groß ist die Zahl der edeln, tapfern Männer,"),
             createVerse(5, 6, 6, 4, "Die mich begleiten; dich ich stehe selbst"),
             createVerse(5, 6, 6, 5, "In meinen Jahren noch dem Feinde, bin"),
             createVerse(5, 6, 6, 6, "Bereit, mit dir der Waffen Los zu wagen."),
         ]
         },
         {
           id: "act-5-scene-6-stanza-7",
           title: "Iphigenie:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 7, 1, "Mitnichten! Dieses blutigen Beweises"),
             createVerse(5, 6, 7, 2, "Bedarf es nicht, o König! Laßt die Hand"),
             createVerse(5, 6, 7, 3, "Vom Schwerte! Denkt an mich und mein Geschick."),
             createVerse(5, 6, 7, 4, "Der rasche Kampf verewigt einen Mann:"),
             createVerse(5, 6, 7, 5, "Er falle gleich, so preiset ihn das Lied."),
             createVerse(5, 6, 7, 6, "Allein die Tränen, die unendlichen,"),
             createVerse(5, 6, 7, 7, "Der überbliebnen, der verlaßnen Frau"),
             createVerse(5, 6, 7, 8, "Zählt keine Nachwelt, und der Dichter schweigt"),
             createVerse(5, 6, 7, 9, "Von tausend durchgeweinten Tag' und Nächten,"),
             createVerse(5, 6, 7, 10, "Wo eine stille Seele den verlornen,"),
             createVerse(5, 6, 7, 11, "Rasch abgeschiednen Freund vergebens sich"),
             createVerse(5, 6, 7, 12, "Zurückzurufen bangt und sich verzehrt."),
             createVerse(5, 6, 7, 13, "Mich selbst hat eine Sorge gleich gewarnt,"),
             createVerse(5, 6, 7, 14, "Daß der Betrug nicht eines Räubers mich"),
             createVerse(5, 6, 7, 15, "Vom sichern Schutzort reiße, mich der Knechtschaft"),
             createVerse(5, 6, 7, 16, "Verrate. Fleißig hab ich sie befragt,"),
             createVerse(5, 6, 7, 17, "Nach jedem Umstand mich erkundigt, Zeichen"),
             createVerse(5, 6, 7, 18, "Gefordert, und gewiß ist nun mein Herz."),
             createVerse(5, 6, 7, 19, "Sieh hier an seiner rechten Hand das Mal"),
             createVerse(5, 6, 7, 20, "Wie von drei Sternen, das am Tage schon,"),
             createVerse(5, 6, 7, 21, "Da er geboren ward, sich zeigte, das"),
             createVerse(5, 6, 7, 22, "Auf schwere Tat, mit dieser Faust zu üben,"),
             createVerse(5, 6, 7, 23, "Der Priester deutete. Dann überzeugt"),
             createVerse(5, 6, 7, 24, "Mich doppelt diese Schramme, die ihm hier"),
             createVerse(5, 6, 7, 25, "Die Augenbraune spaltet. Als ein Kind"),
             createVerse(5, 6, 7, 26, "Ließ ihn Elektra, rasch und unvorsichtig"),
             createVerse(5, 6, 7, 27, "Nach ihrer Art, aus ihren Armen stürzen."),
             createVerse(5, 6, 7, 28, "Er schlug auf einen Dreifuß auf – Er ist's –"),
             createVerse(5, 6, 7, 29, "Soll ich dir noch die Ähnlichkeit des Vaters,"),
             createVerse(5, 6, 7, 30, "Soll ich das innre Jauchzen meines Herzens"),
             createVerse(5, 6, 7, 31, "Dir auch als Zeugen der Versichrung nennen?"),
         ]
         },
         {
           id: "act-5-scene-6-stanza-8",
           title: "Thoas:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 8, 1, "Und hübe deine Rede jeden Zweifel"),
             createVerse(5, 6, 8, 2, "Und bändigt ich den Zorn in meiner Brust."),
             createVerse(5, 6, 8, 3, "So würden doch die Waffen zwischen uns"),
             createVerse(5, 6, 8, 4, "Entscheiden müssen; Frieden seh ich nicht."),
             createVerse(5, 6, 8, 5, "Sie sind gekommen, du bekennest selbst,"),
             createVerse(5, 6, 8, 6, "Das heil'ge Bild der Göttin mir zu rauben."),
             createVerse(5, 6, 8, 7, "Glaubt ihr, ich sehe dies gelassen an?"),
             createVerse(5, 6, 8, 8, "Der Grieche wendet oft sein lüstern Auge"),
             createVerse(5, 6, 8, 9, "Den fernen Schätzen der Barbaren zu,"),
             createVerse(5, 6, 8, 10, "Dem goldnen Felle, Pferden, schönen Töchtern;"),
             createVerse(5, 6, 8, 11, "Doch führte sie Gewalt und List nicht immer"),
             createVerse(5, 6, 8, 12, "Mit den erlangten Gütern glücklich heim."),
         ]
         },
         {
           id: "act-5-scene-6-stanza-9",
           title: "Orest:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 9, 1, "Das Bild, o König, soll uns nicht entzweien!"),
             createVerse(5, 6, 9, 2, "Jetzt kennen wir den Irrtum, den ein Gott"),
             createVerse(5, 6, 9, 3, "Wie einen Schleier um das Haupt uns legte,"),
             createVerse(5, 6, 9, 4, "Da er den Weg hierher uns wandern hieß."),
             createVerse(5, 6, 9, 5, "Um Rat und um Befreiung bat ich ihn"),
             createVerse(5, 6, 9, 6, "Von dem Geleit der Furien; er sprach:"),
             createVerse(5, 6, 9, 7, "»Bringst du die Schwester, die an Tauris' Ufer"),
             createVerse(5, 6, 9, 8, "Im Heiligtume wider Willen bleibt,"),
             createVerse(5, 6, 9, 9, "Nach Griechenland, so löset sich der Fluch.«"),
             createVerse(5, 6, 9, 10, "Wir legten's von Apollens Schwester aus,"),
             createVerse(5, 6, 9, 11, "Und er gedachte dich! Die strengen Bande"),
             createVerse(5, 6, 9, 12, "Sind nun gelöst; du bist den Deinen wieder,"),
             createVerse(5, 6, 9, 13, "Du Heilige, geschenkt. Von dir berührt,"),
             createVerse(5, 6, 9, 14, "War ich geheilt; in deinen Armen faßte"),
             createVerse(5, 6, 9, 15, "Das Übel mich mit allen seinen Klauen"),
             createVerse(5, 6, 9, 16, "Zum letztenmal und schüttelte das Mark"),
             createVerse(5, 6, 9, 17, "Entsetzlich mir zusammen; dann entfloh's"),
             createVerse(5, 6, 9, 18, "Wie eine Schlange zu der Höhle. Neu"),
             createVerse(5, 6, 9, 19, "Genieß ich nun durch dich das weite Licht"),
             createVerse(5, 6, 9, 20, "Des Tages. Schön und herrlich zeigt sich mir"),
             createVerse(5, 6, 9, 21, "Der Göttin Rat. Gleich einem heil'gen Bilde,"),
             createVerse(5, 6, 9, 22, "Daran der Stadt unwandelbar Geschick"),
             createVerse(5, 6, 9, 23, "Durch ein geheimes Götterwort gebannt ist,"),
             createVerse(5, 6, 9, 24, "Nahm sie dich weg, dich Schützerin des Hauses;"),
             createVerse(5, 6, 9, 25, "Bewahrte dich in einer heil'gen Stille"),
             createVerse(5, 6, 9, 26, "Zum Segen deines Bruders und der Deinen."),
             createVerse(5, 6, 9, 27, "Da alle Rettung auf der weiten Erde"),
             createVerse(5, 6, 9, 28, "Verloren schien, gibst du uns alles wieder."),
             createVerse(5, 6, 9, 29, "Laß deine Seele sich zum Frieden wenden,"),
             createVerse(5, 6, 9, 30, "O König! Hindre nicht, daß sie die Weihe"),
             createVerse(5, 6, 9, 31, "Des väterlichen Hauses nun vollbringe,"),
             createVerse(5, 6, 9, 32, "Mich der entsühnten Halle wiedergebe,"),
             createVerse(5, 6, 9, 33, "Mir auf das Haupt die alte Krone drücke!"),
             createVerse(5, 6, 9, 34, "Vergilt den Segen, den sie dir gebracht,"),
             createVerse(5, 6, 9, 35, "Und laß des nähern Rechtes mich genießen!"),
             createVerse(5, 6, 9, 36, "Gewalt und List, der Männer höchster Ruhm,"),
             createVerse(5, 6, 9, 37, "Wird durch die Wahrheit dieser hohen Seele"),
             createVerse(5, 6, 9, 38, "Beschämt, und reines, kindliches Vertrauen"),
             createVerse(5, 6, 9, 39, "Zu einem edeln Manne wird belohnt."),
         ]
         },
         {
           id: "act-5-scene-6-stanza-10",
           title: "Iphigenie:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 10, 1, "Denk an dein Wort, und laß durch diese Rede"),
             createVerse(5, 6, 10, 2, "Aus einem graden, treuen Munde dich"),
             createVerse(5, 6, 10, 3, "Bewegen! Sieh uns an! Du hast nicht oft"),
             createVerse(5, 6, 10, 4, "Zu solcher edeln Tat Gelegenheit."),
             createVerse(5, 6, 10, 5, "Versagen kannst du's nicht; gewähr es bald!"),
         ]
         },
         {
           id: "act-5-scene-6-stanza-11",
           title: "Thoas:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 11, 1, "So geht!"),
         ]
         },
         {
           id: "act-5-scene-6-stanza-12",
           title: "Iphigenie:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 12, 1, "Nicht so, mein König! Ohne Segen,"),
             createVerse(5, 6, 12, 2, "In Widerwillen scheid ich nicht von dir."),
             createVerse(5, 6, 12, 3, "Verbann uns nicht! Ein freundlich Gastrecht walte"),
             createVerse(5, 6, 12, 4, "Von dir zu uns: so sind wir nicht auf ewig"),
             createVerse(5, 6, 12, 5, "Getrennt und abgeschieden. Wert und teuer,"),
             createVerse(5, 6, 12, 6, "Wie mir mein Vater war, so bist du's mir,"),
             createVerse(5, 6, 12, 7, "Und dieser Eindruck bleibt in meiner Seele."),
             createVerse(5, 6, 12, 8, "Bringt der Geringste deines Volkes je"),
             createVerse(5, 6, 12, 9, "Den Ton der Stimme mir ins Ohr zurück,"),
             createVerse(5, 6, 12, 10, "Den ich an euch gewohnt zu hören bin,"),
             createVerse(5, 6, 12, 11, "Und seh ich an dem Ärmsten eure Tracht:"),
             createVerse(5, 6, 12, 12, "Empfangen will ich ihn wie einen Gott,"),
             createVerse(5, 6, 12, 13, "Ich will ihm selbst ein Lager zubereiten,"),
             createVerse(5, 6, 12, 14, "Auf einen Stuhl ihn an das Feuer laden"),
             createVerse(5, 6, 12, 15, "Und nur nach dir und deinem Schicksal fragen."),
             createVerse(5, 6, 12, 16, "O geben dir die Götter deiner Taten"),
             createVerse(5, 6, 12, 17, "Und deiner Milde wohlverdienten Lohn!"),
             createVerse(5, 6, 12, 18, "Leb wohl! O wende dich zu uns und gib"),
             createVerse(5, 6, 12, 19, "Ein holdes Wort des Abschieds mir zurück!"),
             createVerse(5, 6, 12, 20, "Dann schwellt der Wind die Segel sanfter an,"),
             createVerse(5, 6, 12, 21, "Und Tränen fließen lindernder vom Auge"),
             createVerse(5, 6, 12, 22, "Des Scheidenden. Leb wohl! und reiche mir"),
             createVerse(5, 6, 12, 23, "Zum Pfand der alten Freundschaft deine Rechte."),
         ]
         },
         {
           id: "act-5-scene-6-stanza-13",
           title: "Thoas:",
           act: 5,
           scene: 6,
           verses: [
             createVerse(5, 6, 13, 1, "Lebt wohl!"),
         ]
         }
       ]
     }
   ]
 }
];
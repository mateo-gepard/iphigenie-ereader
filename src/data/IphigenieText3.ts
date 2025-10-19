import type { Act, Verse } from '../types';




// ANMERKUNG: Die lineNumber beginnt in diesem Aufzug sequentiell nach dem Ende des
// zweiten Aufzugs (Vers 370), obwohl in der Praxis die Gesamtverse höher wären.
// Ich setze die Zählung fort, um die "Sequential across entire drama" Anforderung
// für den bereitgestellten Text zu erfüllen.
let currentLineNumber = 371; 

// Hilfsfunktion zur Erstellung eines Verse-Objekts und Inkrementierung der Zeilennummer
const createVerse = (act: number, scene: number, stanza: number, verse: number, text: string): Verse => ({
 id: `act-${act}-scene-${scene}-stanza-${stanza}-verse-${verse}`,
 text: text,
 lineNumber: currentLineNumber++,
});

export const iphigenieText: Act[] = [
 // ... HIER WÜRDEN ACT 1 UND ACT 2 FOLGEN (Act 2 endete bei LineNumber 370)
 {
   id: "act-3",
   title: "Dritter Aufzug",
   number: 3,
   scenes: [
     {
       id: "act-3-scene-1",
       title: "Erster Auftritt",
       number: 1,
       stanzas: [
         {
           id: "act-3-scene-1-stanza-1",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 1, 1, "Unglücklicher, ich löse deine Bande"),
             createVerse(3, 1, 1, 2, "Zum Zeichen eines schmerzlichern Geschicks."),
             createVerse(3, 1, 1, 3, "Die Freiheit, die das Heiligtum gewährt,"),
             createVerse(3, 1, 1, 4, "Ist, wie der letzte lichte Lebensblick"),
             createVerse(3, 1, 1, 5, "Des schwer Erkrankten, Todesbote. Noch"),
             createVerse(3, 1, 1, 6, "Kann ich es mir und darf es mir nicht sagen,"),
             createVerse(3, 1, 1, 7, "Daß ihr verloren seid! Wie könnt ich euch"),
             createVerse(3, 1, 1, 8, "Mit mörderischer Hand dem Tode weihen?"),
             createVerse(3, 1, 1, 9, "Und niemand, wer es sei, darf euer Haupt,"),
             createVerse(3, 1, 1, 10, "Solang ich Priesterin Dianens bin,"),
             createVerse(3, 1, 1, 11, "Berühren. Doch verweigr ich jene Pflicht,"),
             createVerse(3, 1, 1, 12, "Wie sie der aufgebrachte König fordert,"),
             createVerse(3, 1, 1, 13, "So wählt er eine meiner Jungfraun mir"),
             createVerse(3, 1, 1, 14, "Zur Folgerin, und ich vermag alsdann"),
             createVerse(3, 1, 1, 15, "Mit heißem Wunsch allein euch beizustehn."),
             createVerse(3, 1, 1, 16, "O werter Landsmann! Selbst der letzte Knecht,"),
             createVerse(3, 1, 1, 17, "Der an den Herd der Vatergötter streifte,"),
             createVerse(3, 1, 1, 18, "Ist uns in fremdem Lande hoch willkommen:"),
             createVerse(3, 1, 1, 19, "Wie soll ich euch genug mit Freud und Segen"),
             createVerse(3, 1, 1, 20, "Empfangen, die ihr mir das Bild der Helden,"),
             createVerse(3, 1, 1, 21, "Die ich von Eltern her verehren lernte,"),
             createVerse(3, 1, 1, 22, "Entgegenbringet und das innre Herz"),
             createVerse(3, 1, 1, 23, "Mit neuer, schöner Hoffnung schmeichelnd labet!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-2",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 2, 1, "Verbirgst du deinen Namen, deine Herkunft"),
             createVerse(3, 1, 2, 2, "Mit klugem Vorsatz? oder darf ich wissen,"),
             createVerse(3, 1, 2, 3, "Wer mir, gleich einer Himmlischen, begegnet?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-3",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 3, 1, "Du sollst mich kennen. Jetzo sag mir an,"),
             createVerse(3, 1, 3, 2, "Was ich nur halb von deinem Bruder hörte,"),
             createVerse(3, 1, 3, 3, "Das Ende derer, die, von Troja kehrend,"),
             createVerse(3, 1, 3, 4, "Ein hartes, unerwartetes Geschick"),
             createVerse(3, 1, 3, 5, "Auf ihrer Wohnung Schwelle stumm empfing."),
             createVerse(3, 1, 3, 6, "Zwar ward ich jung an diesen Strand geführt;"),
             createVerse(3, 1, 3, 7, "Doch wohl erinnr ich mich des scheuen Blicks,"),
             createVerse(3, 1, 3, 8, "Den ich mit Staunen und mit Bangigkeit"),
             createVerse(3, 1, 3, 9, "Auf jene Helden warf. Sie zogen aus,"),
             createVerse(3, 1, 3, 10, "Als hätte der Olymp sich aufgetan"),
             createVerse(3, 1, 3, 11, "Und die Gestalten der erlauchten Vorwelt"),
             createVerse(3, 1, 3, 12, "Zum Schrecken Ilions herabgesendet,"),
             createVerse(3, 1, 3, 13, "Und Agamemnon war vor allen herrlich!"),
             createVerse(3, 1, 3, 14, "O sage mir! er fiel, sein Haus betretend,"),
             createVerse(3, 1, 3, 15, "Durch seiner Frauen und Ägisthens Tücke?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-4",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 4, 1, "Du sagst's!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-5",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 5, 1, "Weh dir, unseliges Myken!"),
             createVerse(3, 1, 5, 2, "So haben Tantals Enkel Fluch auf Fluch"),
             createVerse(3, 1, 5, 3, "Mit vollen, wilden Händen ausgesät."),
             createVerse(3, 1, 5, 4, "Und, gleich dem Unkraut, wüste Häupter schüttelnd"),
             createVerse(3, 1, 5, 5, "Und tausendfält'gen Samen um sich streuend,"),
             createVerse(3, 1, 5, 6, "Den Kindeskindern nahverwandte Mörder"),
             createVerse(3, 1, 5, 7, "Zur ew'gen Wechselwut erzeugt! Enthülle,"),
             createVerse(3, 1, 5, 8, "Was von der Rede deines Bruders schnell"),
             createVerse(3, 1, 5, 9, "Die Finsternis des Schreckens mir verdeckte."),
             createVerse(3, 1, 5, 10, "Wie ist des großen Stammes letzter Sohn,"),
             createVerse(3, 1, 5, 11, "Das holde Kind, bestimmt, des Vaters Rächer"),
             createVerse(3, 1, 5, 12, "Dereinst zu sein, wie ist Orest dem Tage"),
             createVerse(3, 1, 5, 13, "Des Bluts entgangen? Hat ein gleich Geschick"),
             createVerse(3, 1, 5, 14, "Mit des Avernus Netzen ihn umschlungen?"),
             createVerse(3, 1, 5, 15, "Ist er gerettet? Lebt er? Lebt Elektra?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-6",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 6, 1, "Sie leben."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-7",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 7, 1, "Goldne Sonne, leihe mir"),
             createVerse(3, 1, 7, 2, "Die schönsten Strahlen, lege sie zum Dank"),
             createVerse(3, 1, 7, 3, "Vor Jovis Thron! denn ich bin arm und stumm."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-8",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 8, 1, "Bist du gastfreundlich diesem Königshause,"),
             createVerse(3, 1, 8, 2, "Bist du mit nähern Banden ihm verbunden,"),
             createVerse(3, 1, 8, 3, "Wie deine schöne Freude mir verrät,"),
             createVerse(3, 1, 8, 4, "So bändige dein Herz und halt es fest!"),
             createVerse(3, 1, 8, 5, "Denn unerträglich muß dem Fröhlichen"),
             createVerse(3, 1, 8, 6, "Ein jäher Rückfall in die Schmerzen sein."),
             createVerse(3, 1, 8, 7, "Du weißt nur, merk ich, Agamemnons Tod."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-9",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 9, 1, "Hab ich an dieser Nachricht nicht genug?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-10",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 10, 1, "Du hast des Greuels Hälfte nur erfahren."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-11",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 11, 1, "Was fürcht ich noch? Orest, Elektra leben."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-12",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 12, 1, "Und fürchtest du für Klytämnestren nichts?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-13",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 13, 1, "Sie rettet weder Hoffnung, weder Furcht."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-14",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 14, 1, "Auch schied sie aus dem Land der Hoffnung ab."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-15",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 15, 1, "Vergoß sie reuig wütend selbst ihr Blut?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-16",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 16, 1, "Nein, doch ihr eigen Blut gab ihr den Tod."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-17",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 17, 1, "Sprich deutlicher, daß ich nicht länger sinne."),
             createVerse(3, 1, 17, 2, "Die Ungewißheit schlägt mir tausendfältig"),
             createVerse(3, 1, 17, 3, "Die dunkeln Schwingen um das bange Haupt."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-18",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 18, 1, "So haben mich die Götter ausersehn"),
             createVerse(3, 1, 18, 2, "Zum Boten einer Tat, die ich so gern"),
             createVerse(3, 1, 18, 3, "Ins klanglos-dumpfe Höhlenreich der Nacht"),
             createVerse(3, 1, 18, 4, "Verbergen möchte? Wider meinen Willen"),
             createVerse(3, 1, 18, 5, "Zwingt mich dein holder Mund; allein er darf"),
             createVerse(3, 1, 18, 6, "Auch etwas Schmerzlichs fordern und erhält's."),
             createVerse(3, 1, 18, 7, "Am Tage, da der Vater fiel, verbarg"),
             createVerse(3, 1, 18, 8, "Elektra rettend ihren Bruder: Strophius,"),
             createVerse(3, 1, 18, 9, "Des Vaters Schwäher, nahm ihn willig auf,"),
             createVerse(3, 1, 18, 10, "Erzog ihn neben seinem eignen Sohne,"),
             createVerse(3, 1, 18, 11, "Der, Pylades genannt, die schönsten Bande"),
             createVerse(3, 1, 18, 12, "Der Freundschaft um den Angekommnen knüpfte."),
             createVerse(3, 1, 18, 13, "Und wie sie wuchsen, wuchs in ihrer Seele"),
             createVerse(3, 1, 18, 14, "Die brennende Begier, des Königs Tod"),
             createVerse(3, 1, 18, 15, "Zu rächen. Unversehen, fremd gekleidet,"),
             createVerse(3, 1, 18, 16, "Erreichen sie Myken, als brächten sie"),
             createVerse(3, 1, 18, 17, "Die Trauernachricht von Orestens Tode"),
             createVerse(3, 1, 18, 18, "Mit seiner Asche. Wohl empfänget sie"),
             createVerse(3, 1, 18, 19, "Die Königin; sie treten in das Haus."),
             createVerse(3, 1, 18, 20, "Elektren gibt Orest sich zu erkennen;"),
             createVerse(3, 1, 18, 21, "Sie bläst der Rache Feuer in ihm auf,"),
             createVerse(3, 1, 18, 22, "Das vor der Mutter heil'ger Gegenwart"),
             createVerse(3, 1, 18, 23, "In sich zurückgebrannt war. Stille führt"),
             createVerse(3, 1, 18, 24, "Sie ihn zum Orte, wo sein Vater fiel,"),
             createVerse(3, 1, 18, 25, "Wo eine alte, leichte Spur des frech"),
             createVerse(3, 1, 18, 26, "Vergoßnen Blutes oft gewaschnen Boden"),
             createVerse(3, 1, 18, 27, "Mit blassen, ahndungsvollen Streifen färbte."),
             createVerse(3, 1, 18, 28, "Mit ihrer Feuerzunge schilderte"),
             createVerse(3, 1, 18, 29, "Sie jeden Umstand der verruchten Tat,"),
             createVerse(3, 1, 18, 30, "Ihr knechtisch elend durchgebrachtes Leben,"),
             createVerse(3, 1, 18, 31, "Den Übermut der glücklichen Verräter"),
             createVerse(3, 1, 18, 32, "Und die Gefahren, die nun der Geschwister"),
             createVerse(3, 1, 18, 33, "Von einer stiefgewordnen Mutter warteten. –"),
             createVerse(3, 1, 18, 34, "Hier drang sie jenen alten Dolch ihm auf,"),
             createVerse(3, 1, 18, 35, "Der schon in Tantals Hause grimmig wütete,"),
             createVerse(3, 1, 18, 36, "Und Klytämnestra fiel durch Sohnes Hand."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-19",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 19, 1, "Unsterbliche, die ihr den reinen Tag"),
             createVerse(3, 1, 19, 2, "Auf immer neuen Wolken selig lebet,"),
             createVerse(3, 1, 19, 3, "Habt ihr nur darum mich so manches Jahr"),
             createVerse(3, 1, 19, 4, "Von Menschen abgesondert, mich so nah"),
             createVerse(3, 1, 19, 5, "Bei euch gehalten, mir die kindliche"),
             createVerse(3, 1, 19, 6, "Beschäftigung, des heil'gen Feuers Glut"),
             createVerse(3, 1, 19, 7, "Zu nähren, aufgetragen, meine Seele"),
             createVerse(3, 1, 19, 8, "Der Flamme gleich in ew'ger, frommer Klarheit"),
             createVerse(3, 1, 19, 9, "Zu euern Wohnungen hinaufgezogen,"),
             createVerse(3, 1, 19, 10, "Daß ich nur meines Hauses Greuel später"),
             createVerse(3, 1, 19, 11, "Und tiefer fühlen sollte? – Sage mir"),
             createVerse(3, 1, 19, 12, "Vom Unglücksel'gen! Sprich mir von Orest! –"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-20",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 20, 1, "O könnte man von seinem Tode sprechen!"),
             createVerse(3, 1, 20, 2, "Wie gärend stieg aus der Erschlagnen Blut"),
             createVerse(3, 1, 20, 3, "Der Mutter Geist"),
             createVerse(3, 1, 20, 4, "Und ruft der Nacht uralten Töchtern zu:"),
             createVerse(3, 1, 20, 5, "»Laßt nicht den Muttermörder entfliehn!"),
             createVerse(3, 1, 20, 6, "Verfolgt den Verbrecher! Euch ist er geweiht!«"),
             createVerse(3, 1, 20, 7, "Sie horchen auf, es schaut ihr hohler Blick"),
             createVerse(3, 1, 20, 8, "Mit der Begier des Adlers um sich her."),
             createVerse(3, 1, 20, 9, "Sie rühren sich in ihren schwarzen Höhlen,"),
             createVerse(3, 1, 20, 10, "Und aus den Winkeln schleichen ihre Gefährten,"),
             createVerse(3, 1, 20, 11, "Der Zweifel und die Reue, leis herbei."),
             createVerse(3, 1, 20, 12, "Vor ihnen steigt ein Dampf vom Acheron;"),
             createVerse(3, 1, 20, 13, "In seinen Wolkenkreisen wälzet sich"),
             createVerse(3, 1, 20, 14, "Die ewige Betrachtung des Geschehnen"),
             createVerse(3, 1, 20, 15, "Verwirrend um des Schuld'gen Haupt umher."),
             createVerse(3, 1, 20, 16, "Und sie, berechtigt zum Verderben, treten"),
             createVerse(3, 1, 20, 17, "Der gottbesäten Erde schönen Boden,"),
             createVerse(3, 1, 20, 18, "Von dem ein alter Fluch sie längst verbannte."),
             createVerse(3, 1, 20, 19, "Den Flüchtigen verfolgt ihr schneller Fuß;"),
             createVerse(3, 1, 20, 20, "Sie geben nur, um neu zu schrecken, Rast."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-21",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 21, 1, "Unseliger, du bist in gleichem Fall"),
             createVerse(3, 1, 21, 2, "Und fühlst, was er, der arme Flüchtling, leidet!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-22",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 22, 1, "Was sagst du mir? Was wähnst du gleichen Fall?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-23",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 23, 1, "Dich drückt ein Brudermord wie jenen; mir"),
             createVerse(3, 1, 23, 2, "Vertraute dies dein jüngster Bruder schon."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-24",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 24, 1, "Ich kann nicht leiden, daß du große Seele"),
             createVerse(3, 1, 24, 2, "Mit einem falschen Wort betrogen werdest."),
             createVerse(3, 1, 24, 3, "Ein lügenhaft Gewebe knüpf ein Fremder"),
             createVerse(3, 1, 24, 4, "Dem Fremden, sinnreich und der List gewohnt,"),
             createVerse(3, 1, 24, 5, "Zur Falle vor die Füße; zwischen uns"),
             createVerse(3, 1, 24, 6, "Sei Wahrheit!"),
             createVerse(3, 1, 24, 7, "Ich bin Orest! und dieses schuld'ge Haupt"),
             createVerse(3, 1, 24, 8, "Senkt nach der Grube sich und sucht den Tod;"),
             createVerse(3, 1, 24, 9, "In jeglicher Gestalt sei er willkommen!"),
             createVerse(3, 1, 24, 10, "Wer du auch seist, so wünsch ich Rettung dir"),
             createVerse(3, 1, 24, 11, "Und meinem Freunde; mir wünsch ich sie nicht."),
             createVerse(3, 1, 24, 12, "Du scheinst hier wider Willen zu verweilen;"),
             createVerse(3, 1, 24, 13, "Erfindet Rat zur Flucht und laßt mich hier."),
             createVerse(3, 1, 24, 14, "Es stürze mein entseelter Leib vom Fels,"),
             createVerse(3, 1, 24, 15, "Es rauche bis zum Meer hinab mein Blut"),
             createVerse(3, 1, 24, 16, "Und bringe Fluch dem Ufer der Barbaren!"),
             createVerse(3, 1, 24, 17, "Geht ihr, daheim im schönen Griechenland"),
             createVerse(3, 1, 24, 18, "Ein neues Leben freundlich anzufangen!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-25",
           title: "Er entfernt sich.",
           act: 3,
           scene: 1,
           verses: [
             // Vers 568-608 der Originalzählung. Hier Vers 105-105
         ]
         },
         {
           id: "act-3-scene-1-stanza-26",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 26, 1, "So steigst du denn, Erfüllung, schönste Tochter"),
             createVerse(3, 1, 26, 2, "Des größten Vaters, endlich zu mir nieder!"),
             createVerse(3, 1, 26, 3, "Wie ungeheuer steht dein Bild vor mir!"),
             createVerse(3, 1, 26, 4, "Kaum reicht mein Blick dir an die Hände, die,"),
             createVerse(3, 1, 26, 5, "Mit Frucht und Segenskränzen angefüllt,"),
             createVerse(3, 1, 26, 6, "Die Schätze des Olympus niederbringen."),
             createVerse(3, 1, 26, 7, "Wie man den König an dem Übermaß"),
             createVerse(3, 1, 26, 8, "Der Gaben kennt – denn ihm muß wenig scheinen,"),
             createVerse(3, 1, 26, 9, "Was Tausenden schon Reichtum ist –, so kennt"),
             createVerse(3, 1, 26, 10, "Man euch, ihr Götter, an gesparten, lang"),
             createVerse(3, 1, 26, 11, "Und weise zubereiteten Geschenken."),
             createVerse(3, 1, 26, 12, "Denn ihr allein wißt, was uns frommen kann,"),
             createVerse(3, 1, 26, 13, "Und schaut der Zukunft ausgedehntes Reich,"),
             createVerse(3, 1, 26, 14, "Wenn jedes Abends Stern- und Nebelhülle"),
             createVerse(3, 1, 26, 15, "Die Aussicht uns verdeckt. Gelassen hört"),
             createVerse(3, 1, 26, 16, "Ihr unser Flehn, das um Beschleunigung"),
             createVerse(3, 1, 26, 17, "Euch kindisch bittet; aber eure Hand"),
             createVerse(3, 1, 26, 18, "Bricht unreif nie die goldnen Himmelsfrüchte,"),
             createVerse(3, 1, 26, 19, "Und wehe dem, der, ungeduldig sie"),
             createVerse(3, 1, 26, 20, "Ertrotzend, saure Speise sich zum Tod"),
             createVerse(3, 1, 26, 21, "Genießt. O laßt das lang erwartete,"),
             createVerse(3, 1, 26, 22, "Noch kaum gedachte Glück nicht wie den Schatten"),
             createVerse(3, 1, 26, 23, "Des abgeschiednen Freundes eitel mir"),
             createVerse(3, 1, 26, 24, "Und dreifach schmerzlicher vorübergehn!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-27",
           title: "Orest tritt wieder zu ihr:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 27, 1, "Rufst du die Götter an für dich und Pylades,"),
             createVerse(3, 1, 27, 2, "So nenne meinen Namen nicht mit eurem."),
             createVerse(3, 1, 27, 3, "Du rettest den Verbrecher nicht, zu dem"),
             createVerse(3, 1, 27, 4, "Du dich gesellst, und teilest Fluch und Not."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-28",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 28, 1, "Mein Schicksal ist an deines fest gebunden."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-29",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 29, 1, "Mitnichten! Laß allein und unbegleitet"),
             createVerse(3, 1, 29, 2, "Mich zu den Toten gehn. Verhülltest du"),
             createVerse(3, 1, 29, 3, "In deinen Schleier selbst den Schuldigen:"),
             createVerse(3, 1, 29, 4, "Du birgst ihn nicht vorm Blick der immer Wachen,"),
             createVerse(3, 1, 29, 5, "Und deine Gegenwart, du Himmlische,"),
             createVerse(3, 1, 29, 6, "Drängt sie nur seitwärts und verscheucht sie nicht."),
             createVerse(3, 1, 29, 7, "Sie dürfen mit den ehrnen frechen Füßen"),
             createVerse(3, 1, 29, 8, "Des heil'gen Waldes Boden nicht betreten;"),
             createVerse(3, 1, 29, 9, "Doch hör ich aus der Ferne hier und da"),
             createVerse(3, 1, 29, 10, "Ihr gräßliches Gelächter. Wölfe harren"),
             createVerse(3, 1, 29, 11, "So um den Baum, auf den ein Reisender"),
             createVerse(3, 1, 29, 12, "Sich rettete. Da draußen ruhen sie"),
             createVerse(3, 1, 29, 13, "Gelagert; und verlaß ich diesen Hain,"),
             createVerse(3, 1, 29, 14, "Dann steigen sie, die Schlangenhäupter schüttelnd,"),
             createVerse(3, 1, 29, 15, "Von allen Seiten Staub erregend auf"),
             createVerse(3, 1, 29, 16, "Und treiben ihre Beute vor sich her."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-30",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 30, 1, "Kannst du, Orest, ein freundlich Wort vernehmen?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-31",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 31, 1, "Spar es für einen Freund der Götter auf."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-32",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 32, 1, "Sie geben dir zu neuer Hoffnung Licht."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-33",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 33, 1, "Durch Rauch und Qualm seh ich den matten Schein"),
             createVerse(3, 1, 33, 2, "Des Totenflusses mir zur Hölle leuchten."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-34",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 34, 1, "Hast du Elektren, eine Schwester nur?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-35",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 35, 1, "Die eine kannt ich; doch die ältste nahm"),
             createVerse(3, 1, 35, 2, "Ihr gut Geschick, das uns so schrecklich schien,"),
             createVerse(3, 1, 35, 3, "Beizeiten aus dem Elend unsers Hauses."),
             createVerse(3, 1, 35, 4, "O laß dein Fragen und geselle dich"),
             createVerse(3, 1, 35, 5, "Nicht auch zu den Erinnyen; sie blasen"),
             createVerse(3, 1, 35, 6, "Mir schadenfroh die Asche von der Seele"),
             createVerse(3, 1, 35, 7, "Und leiden nicht, daß sich die letzten Kohlen"),
             createVerse(3, 1, 35, 8, "Von unsers Hauses Schreckensbrande still"),
             createVerse(3, 1, 35, 9, "In mir verglimmen. Soll die Glut denn ewig,"),
             createVerse(3, 1, 35, 10, "Vorsätzlich angefacht, mit Höllenschwefel"),
             createVerse(3, 1, 35, 11, "Genährt, mir auf der Seele marternd brennen?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-36",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 36, 1, "Ich bringe süßes Rauchwerk in die Flamme."),
             createVerse(3, 1, 36, 2, "O laß den reinen Hauch der Liebe dir"),
             createVerse(3, 1, 36, 3, "Die Glut des Busens leise wehend kühlen."),
             createVerse(3, 1, 36, 4, "Orest, mein Teurer, kannst du nicht vernehmen?"),
             createVerse(3, 1, 36, 5, "Hat das Geleit der Schreckensgötter so"),
             createVerse(3, 1, 36, 6, "Das Blut in deinen Adern aufgetrocknet?"),
             createVerse(3, 1, 36, 7, "Schleicht, wie vom Haupt der gräßlichen Gorgone,"),
             createVerse(3, 1, 36, 8, "Versteinernd dir ein Zauber durch die Glieder?"),
             createVerse(3, 1, 36, 9, "O wenn vergoßnen Mutterblutes Stimme"),
             createVerse(3, 1, 36, 10, "Zur Höll hinab mit dumpfen Tönen ruft,"),
             createVerse(3, 1, 36, 11, "Soll nicht der reinen Schwester Segenswort"),
             createVerse(3, 1, 36, 12, "Hülfreiche Götter vom Olympus rufen?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-37",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 37, 1, "Es ruft! es ruft! So willst du mein Verderben?"),
             createVerse(3, 1, 37, 2, "Verbirgt in dir sich eine Rachegöttin?"),
             createVerse(3, 1, 37, 3, "Wer bist du, deren Stimme mir entsetzlich"),
             createVerse(3, 1, 37, 4, "Das Innerste in seinen Tiefen wendet?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-38",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 38, 1, "Es zeigt sich dir im tiefsten Herzen an:"),
             createVerse(3, 1, 38, 2, "Orest, ich bin's! Sieh Iphigenien!"),
             createVerse(3, 1, 38, 3, "Ich lebe!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-39",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 39, 1, "Du!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-40",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 40, 1, "Mein Bruder!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-41",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 41, 1, "Laß! Hinweg!"),
             createVerse(3, 1, 41, 2, "Ich rate dir, berühre nicht die Locken!"),
             createVerse(3, 1, 41, 3, "Wie von Kreusas Brautkleid zündet sich"),
             createVerse(3, 1, 41, 4, "Ein unauslöschlich Feuer von mir fort."),
             createVerse(3, 1, 41, 5, "Laß mich! Wie Herkules will ich Unwürd'ger"),
             createVerse(3, 1, 41, 6, "Den Tod voll Schmach, in mich verschlossen, sterben."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-42",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 42, 1, "Du wirst nicht untergehn! O daß ich nur"),
             createVerse(3, 1, 42, 2, "Ein ruhig Wort von dir vernehmen könnte!"),
             createVerse(3, 1, 42, 3, "O löse meine Zweifel, laß des Glückes,"),
             createVerse(3, 1, 42, 4, "Des lang erflehten, mich auch sicher werden."),
             createVerse(3, 1, 42, 5, "Es wälzet sich ein Rad von Freud und Schmerz"),
             createVerse(3, 1, 42, 6, "Durch meine Seele. Von dem fremden Manne"),
             createVerse(3, 1, 42, 7, "Entfernet mich ein Schauer; doch es reißt"),
             createVerse(3, 1, 42, 8, "Mein Innerstes gewaltig mich zum Bruder."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-43",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 43, 1, "Ist hier Lyäens Tempel? und ergreift"),
             createVerse(3, 1, 43, 2, "Unbändig-heil'ge Wut die Priesterin?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-44",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 44, 1, "O höre mich! O sieh mich an, wie mir"),
             createVerse(3, 1, 44, 2, "Nach einer langen Zeit das Herz sich öffnet,"),
             createVerse(3, 1, 44, 3, "Der Seligkeit, dem Liebsten, was die Welt"),
             createVerse(3, 1, 44, 4, "Noch für mich tragen kann, das Haupt zu küssen,"),
             createVerse(3, 1, 44, 5, "Mit meinen Armen, die den leeren Winden"),
             createVerse(3, 1, 44, 6, "Nur ausgebreitet waren, dich zu fassen!"),
             createVerse(3, 1, 44, 7, "O laß mich! Laß mich! Denn es quillet heller"),
             createVerse(3, 1, 44, 8, "Nicht vom Parnaß die ew'ge Quelle sprudelnd"),
             createVerse(3, 1, 44, 9, "Von Fels zu Fels ins goldne Tal hinab,"),
             createVerse(3, 1, 44, 10, "Wie Freude mir vom Herzen wallend fließt"),
             createVerse(3, 1, 44, 11, "Und wie ein selig Meer mich rings umfängt."),
             createVerse(3, 1, 44, 12, "Orest! Orest! Mein Bruder!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-45",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 45, 1, "Schöne Nymphe,"),
             createVerse(3, 1, 45, 2, "Ich traue dir und deinem Schmeicheln nicht."),
             createVerse(3, 1, 45, 3, "Diana fordert strenge Dienerinnen"),
             createVerse(3, 1, 45, 4, "Und rächet das entweihte Heiligtum."),
             createVerse(3, 1, 45, 5, "Entferne deinen Arm von meiner Brust!"),
             createVerse(3, 1, 45, 6, "Und wenn du einen Jüngling rettend lieben,"),
             createVerse(3, 1, 45, 7, "Das schöne Glück ihm zärtlich bieten willst,"),
             createVerse(3, 1, 45, 8, "So wende meinem Freunde dein Gemüt,"),
             createVerse(3, 1, 45, 9, "Dem würd'gern Manne, zu. Er irrt umher"),
             createVerse(3, 1, 45, 10, "Auf jenem Felsenpfade; such ihn auf,"),
             createVerse(3, 1, 45, 11, "Weis ihn zurecht und schone meiner."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-46",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 46, 1, "Fasse"),
             createVerse(3, 1, 46, 2, "Dich, Bruder, und erkenne die Gefundne!"),
             createVerse(3, 1, 46, 3, "Schilt einer Schwester reine Himmelsfreude"),
             createVerse(3, 1, 46, 4, "Nicht unbesonnene, strafbare Lust."),
             createVerse(3, 1, 46, 5, "O nehmt den Wahn ihm von dem starren Auge,"),
             createVerse(3, 1, 46, 6, "Daß uns der Augenblick der höchsten Freude"),
             createVerse(3, 1, 46, 7, "Nicht dreifach elend mache! Sie ist hier,"),
             createVerse(3, 1, 46, 8, "Die längst verlorne Schwester. Vom Altar"),
             createVerse(3, 1, 46, 9, "Riß mich die Göttin weg und rettete"),
             createVerse(3, 1, 46, 10, "Hierher mich in ihr eigen Heiligtum."),
             createVerse(3, 1, 46, 11, "Gefangen bist du, dargestellt zum Opfer,"),
             createVerse(3, 1, 46, 12, "Und findest in der Priesterin die Schwester."),
         ]
         },
         {
           id: "act-3-scene-1-stanza-47",
           title: "Orest:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 47, 1, "Unselige! So mag die Sonne denn"),
             createVerse(3, 1, 47, 2, "Die letzten Greuel unsers Hauses sehn!"),
             createVerse(3, 1, 47, 3, "Ist nicht Elektra hier, damit auch sie"),
             createVerse(3, 1, 47, 4, "Mit uns zugrunde gehe, nicht ihr Leben"),
             createVerse(3, 1, 47, 5, "Zu schwererem Geschick und Leiden friste?"),
             createVerse(3, 1, 47, 6, "Gut, Priesterin! ich folge zum Altar:"),
             createVerse(3, 1, 47, 7, "Der Brudermord ist hergebrachte Sitte"),
             createVerse(3, 1, 47, 8, "Des alten Stammes; und ich danke, Götter,"),
             createVerse(3, 1, 47, 9, "Daß ihr mich ohne Kinder auszurotten"),
             createVerse(3, 1, 47, 10, "Beschlossen habt. Und laß dir raten, habe"),
             createVerse(3, 1, 47, 11, "Die Sonne nicht zu lieb und nicht die Sterne;"),
             createVerse(3, 1, 47, 12, "Komm, folge mir ins dunkle Reich hinab!"),
             createVerse(3, 1, 47, 13, "Wie sich vom Schwefelpfuhl erzeugte Drachen,"),
             createVerse(3, 1, 47, 14, "Bekämpfend die verwandte Brut, verschlingen,"),
             createVerse(3, 1, 47, 15, "Zerstört sich selbst das wütende Geschlecht;"),
             createVerse(3, 1, 47, 16, "Komm kinderlos und schuldlos mit hinab!"),
             createVerse(3, 1, 47, 17, "Du siehst mich mit Erbarmen an? Laß ab!"),
             createVerse(3, 1, 47, 18, "Mit solchen Blicken suchte Klytämnestra"),
             createVerse(3, 1, 47, 19, "Sich einen Weg nach ihres Sohnes Herzen;"),
             createVerse(3, 1, 47, 20, "Doch sein geschwungner Arm traf ihre Brust."),
             createVerse(3, 1, 47, 21, "Die Mutter fiel! – Tritt auf, unwill'ger Geist!"),
             createVerse(3, 1, 47, 22, "Im Kreis geschlossen tretet an, ihr Furien,"),
             createVerse(3, 1, 47, 23, "Und wohnet dem willkommnen Schauspiel bei,"),
             createVerse(3, 1, 47, 24, "Dem letzten, gräßlichsten, das ihr bereitet!"),
             createVerse(3, 1, 47, 25, "Nicht Haß und Rache schärfen ihren Dolch;"),
             createVerse(3, 1, 47, 26, "Die liebevolle Schwester wird zur Tat"),
             createVerse(3, 1, 47, 27, "Gezwungen. Weine nicht! Du hast nicht schuld."),
             createVerse(3, 1, 47, 28, "Seit meinen ersten Jahren hab ich nichts"),
             createVerse(3, 1, 47, 29, "Geliebt, wie ich dich lieben könnte, Schwester."),
             createVerse(3, 1, 47, 30, "Ja, schwinge deinen Stahl, verschone nicht,"),
             createVerse(3, 1, 47, 31, "Zerreiße diesen Busen und eröffne"),
             createVerse(3, 1, 47, 32, "Den Strömen, die hier sieden, einen Weg!"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-48",
           title: "Er sinkt in Ermattung.",
           act: 3,
           scene: 1,
           verses: [
             // Vers 691-691 der Originalzählung. Hier Vers 143-143
         ]
         },
         {
           id: "act-3-scene-1-stanza-49",
           title: "Iphigenie:",
           act: 3,
           scene: 1,
           verses: [
             createVerse(3, 1, 49, 1, "Allein zu tragen dieses Glück und Elend,"),
             createVerse(3, 1, 49, 2, "Vermag ich nicht. – Wo bist du, Pylades?"),
             createVerse(3, 1, 49, 3, "Wo find ich deine Hülfe, teurer Mann?"),
         ]
         },
         {
           id: "act-3-scene-1-stanza-50",
           title: "Sie entfernt sich suchend.",
           act: 3,
           scene: 1,
           verses: [
             // Vers 695-695 der Originalzählung. Hier Vers 147-147
         ]
         }
       ]
     },
     {
       id: "act-3-scene-2",
       title: "Zweiter Auftritt",
       number: 2,
       stanzas: [
         {
           id: "act-3-scene-2-stanza-1",
           title: "Orest aus seiner Betäubung erwachend und sich aufrichtend:",
           act: 3,
           scene: 2,
           verses: [
             createVerse(3, 2, 1, 1, "Noch einen' reiche mir aus Lethes Fluten"),
             createVerse(3, 2, 1, 2, "Den letzten kühlen Becher der Erquickung!"),
             createVerse(3, 2, 1, 3, "Bald ist der Krampf des Lebens aus dem Busen"),
             createVerse(3, 2, 1, 4, "Hinweggespült; bald fließet still mein Geist,"),
             createVerse(3, 2, 1, 5, "Der Quelle des Vergessens hingegeben,"),
             createVerse(3, 2, 1, 6, "Zu euch, ihr Schatten, in die ew'gen Nebel."),
             createVerse(3, 2, 1, 7, "Gefällig laßt in eurer Ruhe sich"),
             createVerse(3, 2, 1, 8, "Den umgetriebnen Sohn der Erde laben! –"),
             createVerse(3, 2, 1, 9, "Welch ein Gelispel hör ich in den Zweigen,"),
             createVerse(3, 2, 1, 10, "Welch ein Geräusch aus jener Dämmrung säuseln? –"),
             createVerse(3, 2, 1, 11, "Sie kommen schon, den neuen Gast zu sehn!"),
             createVerse(3, 2, 1, 12, "Wer ist die Schar, die herrlich miteinander"),
             createVerse(3, 2, 1, 13, "Wie ein versammelt Fürstenhaus sich freut?"),
             createVerse(3, 2, 1, 14, "Sie gehen friedlich, Alt' und Junge, Männer"),
             createVerse(3, 2, 1, 15, "Mit Weibern; göttergleich und ähnlich scheinen"),
             createVerse(3, 2, 1, 16, "Die wandelnden Gestalten. Ja, sie sind's,"),
             createVerse(3, 2, 1, 17, "Die Ahnherrn meines Hauses! – Mit Thyesten"),
             createVerse(3, 2, 1, 18, "Geht Atreus in vertraulichen Gesprächen,"),
             createVerse(3, 2, 1, 19, "Die Knaben schlüpfen scherzend um sie her."),
             createVerse(3, 2, 1, 20, "Ist keine Feindschaft hier mehr unter euch?"),
             createVerse(3, 2, 1, 21, "Verlosch die Rache wie das Licht der Sonne?"),
             createVerse(3, 2, 1, 22, "So bin auch ich willkommen, und ich darf"),
             createVerse(3, 2, 1, 23, "In euern feierlichen Zug mich mischen."),
             createVerse(3, 2, 1, 24, "Willkommen, Väter! euch grüßt Orest,"),
             createVerse(3, 2, 1, 25, "Von euerm Stamme der letzte Mann;"),
             createVerse(3, 2, 1, 26, "Was ihr gesät, hat er geerntet:"),
             createVerse(3, 2, 1, 27, "Mit Fluch beladen stieg er herab."),
             createVerse(3, 2, 1, 28, "Doch leichter träget sich hier jede Bürde:"),
             createVerse(3, 2, 1, 29, "Nehmt ihn, o nehmt ihn in euern Kreis! –"),
             createVerse(3, 2, 1, 30, "Dich, Atreus, ehr ich, auch dich, Thyesten:"),
             createVerse(3, 2, 1, 31, "Wir sind hier alle der Feindschaft los. –"),
             createVerse(3, 2, 1, 32, "Zeigt mir den Vater, den ich nur einmal"),
             createVerse(3, 2, 1, 33, "Im Leben sah! – Bist du's, mein Vater?"),
             createVerse(3, 2, 1, 34, "Und führst die Mutter vertraut mit dir?"),
             createVerse(3, 2, 1, 35, "Darf Klytämnestra die Hand dir reichen,"),
             createVerse(3, 2, 1, 36, "So darf Orest auch zu ihr treten"),
             createVerse(3, 2, 1, 37, "Und darf ihr sagen: Sieh deinen Sohn! –"),
             createVerse(3, 2, 1, 38, "Seht euern Sohn! Heißt ihn willkommen!"),
             createVerse(3, 2, 1, 39, "Auf Erden war in unserm Hause"),
             createVerse(3, 2, 1, 40, "Der Gruß des Mordes gewisse Losung,"),
             createVerse(3, 2, 1, 41, "Und das Geschlecht des alten Tantalus"),
             createVerse(3, 2, 1, 42, "Hat seine Freuden jenseits der Nacht."),
             createVerse(3, 2, 1, 43, "Ihr ruft: »Willkommen!« und nehmt mich auf."),
             createVerse(3, 2, 1, 44, "O führt zum Alten, zum Ahnherrn mich!"),
             createVerse(3, 2, 1, 45, "Wo ist der Alte? daß ich ihn sehe,"),
             createVerse(3, 2, 1, 46, "Das teure Haupt, das vielverehrte,"),
             createVerse(3, 2, 1, 47, "Das mit den Göttern zu Rate saß."),
             createVerse(3, 2, 1, 48, "Ihr scheint zu zaudern, euch wegzuwenden?"),
             createVerse(3, 2, 1, 49, "Was ist es? Leidet der Göttergleiche?"),
             createVerse(3, 2, 1, 50, "Weh mir! es haben die Übermächt'gen"),
             createVerse(3, 2, 1, 51, "Der Heldenbrust grausame Qualen"),
             createVerse(3, 2, 1, 52, "Mit ehrnen Ketten fest aufgeschmiedet."),
         ]
         }
       ]
     },
     {
       id: "act-3-scene-3",
       title: "Dritter Auftritt",
       number: 3,
       stanzas: [
         {
           id: "act-3-scene-3-stanza-1",
           title: "Orest:",
           act: 3,
           scene: 3,
           verses: [
             createVerse(3, 3, 1, 1, "Seid ihr auch schon herabgekommen?"),
             createVerse(3, 3, 1, 2, "Wohl, Schwester, dir! Noch fehlt Elektra:"),
             createVerse(3, 3, 1, 3, "Ein güt'ger Gott send uns die eine"),
             createVerse(3, 3, 1, 4, "Mit sanften Pfeilen auch schnell herab."),
             createVerse(3, 3, 1, 5, "Dich, armer Freund, muß ich bedauern!"),
             createVerse(3, 3, 1, 6, "Komm mit! komm mit! zu Plutos Thron,"),
             createVerse(3, 3, 1, 7, "Als neue Gäste den Wirt zu grüßen."),
         ]
         },
         {
           id: "act-3-scene-3-stanza-2",
           title: "Iphigenie:",
           act: 3,
           scene: 3,
           verses: [
             createVerse(3, 3, 2, 1, "Geschwister, die ihr an dem weiten Himmel"),
             createVerse(3, 3, 2, 2, "Das schöne Licht bei Tag und Nacht herauf"),
             createVerse(3, 3, 2, 3, "Den Menschen bringet und den Abgeschiednen"),
             createVerse(3, 3, 2, 4, "Nicht leuchten dürfet, rettet uns Geschwister!"),
             createVerse(3, 3, 2, 5, "Du liebst Diane, deinen holden Bruder"),
             createVerse(3, 3, 2, 6, "Vor allem, was dir Erd und Himmel bietet"),
             createVerse(3, 3, 2, 7, "Und wendest dein jungfräulich Angesicht"),
             createVerse(3, 3, 2, 8, "Nach seinem ew'gen Lichte sehnend still."),
             createVerse(3, 3, 2, 9, "O laß den einz'gen, spätgefundnen mir"),
             createVerse(3, 3, 2, 10, "Nicht in der Finsternis des Wahnsinns rasen!"),
             createVerse(3, 3, 2, 11, "Und ist dein Wille, da du hier mich bargst,"),
             createVerse(3, 3, 2, 12, "Nunmehr vollendet, willst du mir durch ihn"),
             createVerse(3, 3, 2, 13, "Und ihm durch mich die sel'ge Hülfe geben,"),
             createVerse(3, 3, 2, 14, "So lös ihn von den Banden jenes Fluchs,"),
             createVerse(3, 3, 2, 15, "Daß nicht die teure Zeit der Rettung schwinde!"),
         ]
         },
         {
           id: "act-3-scene-3-stanza-3",
           title: "Pylades:",
           act: 3,
           scene: 3,
           verses: [
             createVerse(3, 3, 3, 1, "Erkennst du uns und diesen heil'gen Hain"),
             createVerse(3, 3, 3, 2, "Und dieses Licht, das nicht den Toten leuchtet?"),
             createVerse(3, 3, 3, 3, "Fühlst du den Arm des Freundes und der Schwester,"),
             createVerse(3, 3, 3, 4, "Die dich noch fest, noch lebend halten? Faß"),
             createVerse(3, 3, 3, 5, "Uns kräftig an; wir sind nicht leere Schatten."),
             createVerse(3, 3, 3, 6, "Merk auf mein Wort! Vernimm es! Raffe dich"),
             createVerse(3, 3, 3, 7, "Zusammen! Jeder Augenblick ist teuer,"),
             createVerse(3, 3, 3, 8, "Und unsre Rückkehr hängt an zarten Fäden,"),
             createVerse(3, 3, 3, 9, "Die, scheint es, eine günst'ge Parze spinnt."),
         ]
         },
         {
           id: "act-3-scene-3-stanza-4",
           title: "Orest zu Iphigenien:",
           act: 3,
           scene: 3,
           verses: [
             createVerse(3, 3, 4, 1, "Laß mich zum erstenmal mit freiem Herzen"),
             createVerse(3, 3, 4, 2, "In deinen Armen reine Freude haben!"),
             createVerse(3, 3, 4, 3, "Ihr Götter, die mit flammender Gewalt"),
             createVerse(3, 3, 4, 4, "Ihr schwere Wolken aufzuzehren wandelt"),
             createVerse(3, 3, 4, 5, "Und gnädig-ernst den lang erflehten Regen"),
             createVerse(3, 3, 4, 6, "Mit Donnerstimmen und mit Windesbrausen"),
             createVerse(3, 3, 4, 7, "In wilden Strömen auf die Erde schüttet,"),
             createVerse(3, 3, 4, 8, "Doch bald der Menschen grausendes Erwarten"),
             createVerse(3, 3, 4, 9, "In Segen auflöst und das bange Staunen"),
             createVerse(3, 3, 4, 10, "In Freudeblick und lauten Dank verwandelt,"),
             createVerse(3, 3, 4, 11, "Wenn in den Tropfen frisch erquickter Blätter"),
             createVerse(3, 3, 4, 12, "Die neue Sonne tausendfach sich spiegelt"),
             createVerse(3, 3, 4, 13, "Und Iris freundlich bunt mit leichter Hand"),
             createVerse(3, 3, 4, 14, "Den grauen Flor der letzten Wolken trennt:"),
             createVerse(3, 3, 4, 15, "O laßt mich auch in meiner Schwester Armen,"),
             createVerse(3, 3, 4, 16, "An meines Freundes Brust, was ihr mir gönnt,"),
             createVerse(3, 3, 4, 17, "Mit vollem Dank genießen und behalten!"),
             createVerse(3, 3, 4, 18, "Es löset sich der Fluch, mir sagt's das Herz."),
             createVerse(3, 3, 4, 19, "Die Eumeniden ziehn, ich höre sie,"),
             createVerse(3, 3, 4, 20, "Zum Tartarus und schlagen hinter sich"),
             createVerse(3, 3, 4, 21, "Die ehrnen Tore fernabdonnernd zu."),
             createVerse(3, 3, 4, 22, "Die Erde dampft erquickenden Geruch"),
             createVerse(3, 3, 4, 23, "Und ladet mich auf ihren Flächen ein,"),
             createVerse(3, 3, 4, 24, "Nach Lebensfreud und großer Tat zu jagen."),
         ]
         },
         {
           id: "act-3-scene-3-stanza-5",
           title: "Pylades:",
           act: 3,
           scene: 3,
           verses: [
             createVerse(3, 3, 5, 1, "Versäumt die Zeit nicht, die gemessen ist!"),
             createVerse(3, 3, 5, 2, "Der Wind, der unsre Segel schwellt, er bringe"),
             createVerse(3, 3, 5, 3, "Erst unsre volle Freude zum Olymp."),
             createVerse(3, 3, 5, 4, "Kommt! Es bedarf hier schnellen Rat und Schluß."),
         ]
         }
       ]
     }
   ]
 }
 // ... HIER WÜRDEN ACT 4 UND ACT 5 FOLGEN
];
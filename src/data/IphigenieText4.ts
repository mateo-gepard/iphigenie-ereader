import type { Act, Verse } from '../types';




// Die Zählung wird fortgesetzt (Act 3 endete bei Vers 673).
let currentLineNumber = 674; 

// Hilfsfunktion zur Erstellung eines Verse-Objekts und Inkrementierung der Zeilennummer
const createVerse = (act: number, scene: number, stanza: number, verse: number, text: string): Verse => ({
 id: `act-${act}-scene-${scene}-stanza-${stanza}-verse-${verse}`,
 text: text,
 lineNumber: currentLineNumber++,
});

export const iphigenieText: Act[] = [
 // ... ACTS 1, 2 UND 3 WÜRDEN HIER STEHEN (Act 3 endete bei Vers 673)
 {
   id: "act-4",
   title: "Vierter Aufzug",
   number: 4,
   scenes: [
     {
       id: "act-4-scene-1",
       title: "Erster Auftritt",
       number: 1,
       stanzas: [
         {
           id: "act-4-scene-1-stanza-1",
           title: "Iphigenie:",
           act: 4,
           scene: 1,
           verses: [
             createVerse(4, 1, 1, 1, "Denken die Himmlischen"),
             createVerse(4, 1, 1, 2, "Einem der Erdgebornen"),
             createVerse(4, 1, 1, 3, "Viele Verwirrungen zu"),
             createVerse(4, 1, 1, 4, "Und bereiten sie ihm"),
             createVerse(4, 1, 1, 5, "Von der Freude zu Schmerzen"),
             createVerse(4, 1, 1, 6, "Und von Schmerzen zur Freude"),
             createVerse(4, 1, 1, 7, "Tief erschütternden Übergang:"),
             createVerse(4, 1, 1, 8, "Dann erziehen sie ihm"),
             createVerse(4, 1, 1, 9, "In der Nähe der Stadt"),
             createVerse(4, 1, 1, 10, "Oder am fernen Gestade,"),
             createVerse(4, 1, 1, 11, "Daß in Stunden der Not"),
             createVerse(4, 1, 1, 12, "Auch die Hülfe bereit sei,"),
             createVerse(4, 1, 1, 13, "Einen ruhigen Freund."),
             createVerse(4, 1, 1, 14, "O segnet, Götter, unsern Pylades"),
             createVerse(4, 1, 1, 15, "Und was er immer unternehmen mag!"),
             createVerse(4, 1, 1, 16, "Er ist der Arm des Jünglings in der Schlacht,"),
             createVerse(4, 1, 1, 17, "Der Greises leuchtend Aug in der Versammlung:"),
             createVerse(4, 1, 1, 18, "Denn seine Seel ist stille; sie bewahrt"),
             createVerse(4, 1, 1, 19, "Der Ruhe heil'ges, unerschöpftes Gut,"),
             createVerse(4, 1, 1, 20, "Und den Umhergetriebnen reichet er"),
             createVerse(4, 1, 1, 21, "Aus ihren Tiefen Rat und Hülfe. Mich"),
             createVerse(4, 1, 1, 22, "Riß er vom Bruder los; den staunt ich an"),
             createVerse(4, 1, 1, 23, "Und immer wieder an und konnte mir"),
             createVerse(4, 1, 1, 24, "Das Glück nicht eigen machen, ließ ihn nicht"),
             createVerse(4, 1, 1, 25, "Aus meinen Armen los und fühlte nicht"),
             createVerse(4, 1, 1, 26, "Die Nähe der Gefahr, die uns umgibt."),
             createVerse(4, 1, 1, 27, "Jetzt gehn sie, ihren Anschlag auszuführen,"),
             createVerse(4, 1, 1, 28, "Der See zu, wo das Schiff mit den Gefährten,"),
             createVerse(4, 1, 1, 29, "In einer Bucht versteckt, aufs Zeichen lauert,"),
             createVerse(4, 1, 1, 30, "Und haben kluges Wort mir in den Mund"),
             createVerse(4, 1, 1, 31, "Gegeben, mich gelehrt, was ich dem König"),
             createVerse(4, 1, 1, 32, "Antworte, wenn er sendet und das Opfer"),
             createVerse(4, 1, 1, 33, "Mir dringender gebietet. Ach! ich sehe wohl,"),
             createVerse(4, 1, 1, 34, "Ich muß mich leiten lassen wie ein Kind."),
             createVerse(4, 1, 1, 35, "Ich habe nicht gelernt zu hinterhalten"),
             createVerse(4, 1, 1, 36, "Noch jemand etwas abzulisten. Weh!"),
             createVerse(4, 1, 1, 37, "O weh der Lüge! Sie befreiet nicht"),
             createVerse(4, 1, 1, 38, "Wie jedes andre, wahrgesprochne Wort"),
             createVerse(4, 1, 1, 39, "Die Brust; sie macht uns nicht getrost, sie ängstet"),
             createVerse(4, 1, 1, 40, "Den, der sie heimlich schmiedet, und sie kehrt,"),
             createVerse(4, 1, 1, 41, "Ein losgedruckter Pfeil, von einem Gotte"),
             createVerse(4, 1, 1, 42, "Gewendet und versagend, sich zurück"),
             createVerse(4, 1, 1, 43, "Und trifft den Schützen. Sorg auf Sorge schwankt"),
             createVerse(4, 1, 1, 44, "Mir durch die Brust. Es greift die Furie"),
             createVerse(4, 1, 1, 45, "Vielleicht den Bruder auf dem Boden wieder"),
             createVerse(4, 1, 1, 46, "Des ungeweihten Ufers grimmig an."),
             createVerse(4, 1, 1, 47, "Entdeckt man sie vielleicht? Mich dünkt, ich höre"),
             createVerse(4, 1, 1, 48, "Gewaffnete sich nahen! – Hier! – Der Bote"),
             createVerse(4, 1, 1, 49, "Kommt von dem Könige mit schnellem Schritt."),
             createVerse(4, 1, 1, 50, "Es schlägt mein Herz, es trübt sich meine Seele,"),
             createVerse(4, 1, 1, 51, "Da ich des Mannes Angesicht erblicke,"),
             createVerse(4, 1, 1, 52, "Dem ich mit falschem Wort begegnen soll."),
         ]
         }
       ]
     },
     {
       id: "act-4-scene-2",
       title: "Zweiter Auftritt",
       number: 2,
       stanzas: [
         {
           id: "act-4-scene-2-stanza-1",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 1, 1, "Beschleunige das Opfer, Priesterin!"),
             createVerse(4, 2, 1, 2, "Der König wartet, und es harrt das Volk."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-2",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 2, 1, "Ich folgte meiner Pflicht und deinem Wink,"),
             createVerse(4, 2, 2, 2, "Wenn unvermutet nicht ein Hindernis"),
             createVerse(4, 2, 2, 3, "Sich zwischen mich und die Erfüllung stellte."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-3",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 3, 1, "Was ist's, das den Befehl des Königs hindert?"),
         ]
         },
         {
           id: "act-4-scene-2-stanza-4",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 4, 1, "Der Zufall, dessen wir nicht Meister sind."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-5",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 5, 1, "So sage mir's, daß ich's ihm schnell vermelde:"),
             createVerse(4, 2, 5, 2, "Denn er beschloß bei sich der beiden Tod."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-6",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 6, 1, "Die Götter haben ihn noch nicht beschlossen."),
             createVerse(4, 2, 6, 2, "Der ältste dieser Männer trägt die Schuld"),
             createVerse(4, 2, 6, 3, "Des nahverwandten Bluts, das er vergoß."),
             createVerse(4, 2, 6, 4, "Die Furien verfolgen seinen Pfad,"),
             createVerse(4, 2, 6, 5, "Ja, in dem innern Tempel faßte selbst"),
             createVerse(4, 2, 6, 6, "Das Übel ihn, und seine Gegenwart"),
             createVerse(4, 2, 6, 7, "Entheiligte die reine Stätte. Nun"),
             createVerse(4, 2, 6, 8, "Eil ich mit meinen Jungfraun, an dem Meere"),
             createVerse(4, 2, 6, 9, "Der Göttin Bild mit frischer Welle netzend,"),
             createVerse(4, 2, 6, 10, "Geheimnisvolle Weihe zu begehn."),
             createVerse(4, 2, 6, 11, "Es störe niemand unsern stillen Zug!"),
         ]
         },
         {
           id: "act-4-scene-2-stanza-7",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 7, 1, "Ich melde dieses neue Hindernis"),
             createVerse(4, 2, 7, 2, "Dem Könige geschwind; beginne du"),
             createVerse(4, 2, 7, 3, "Das heil'ge Werk nicht eh, bis er's erlaubt."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-8",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 8, 1, "Dies ist allein der Priestrin uberlassen."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-9",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 9, 1, "Solch seltnen Fall soll auch der König wissen."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-10",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 10, 1, "Sein Rat wie sein Befehl verändert nichts."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-11",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 11, 1, "Oft wird der Mächtige zum Schein gefragt."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-12",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 12, 1, "Erdringe nicht, was ich versagen sollte."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-13",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 13, 1, "Versage nicht, was gut und nützlich ist."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-14",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 14, 1, "Ich gebe nach, wenn du nicht säumen willst."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-15",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 15, 1, "Schnell bin ich mit der Nachricht in dem Lager."),
             createVerse(4, 2, 15, 2, "Und schnell mit seinen Worten hier zurück."),
             createVerse(4, 2, 15, 3, "O könnt ich ihm noch eine Botschaft bringen,"),
             createVerse(4, 2, 15, 4, "Die alles löste, was uns jetzt verwirrt:"),
             createVerse(4, 2, 15, 5, "Denn du hast nicht des Treuen Rat geachtet."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-16",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 16, 1, "Was ich vermochte, hab ich gern getan."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-17",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 17, 1, "Noch änderst du den Sinn zur rechten Zeit."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-18",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 18, 1, "Das steht nun einmal nicht in unsrer Macht."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-19",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 19, 1, "Du hältst unmöglich, was dir Mühe kostet."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-20",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 20, 1, "Dir scheint es möglich, weil der Wunsch dich trügt."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-21",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 21, 1, "Willst du denn alles so gelassen wagen?"),
         ]
         },
         {
           id: "act-4-scene-2-stanza-22",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 22, 1, "Ich hab es in der Götter Hand gelegt."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-23",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 23, 1, "Sie pflegen Menschen menschlich zu erretten."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-24",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 24, 1, "Auf ihren Fingerzeig kömmt alles an."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-25",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 25, 1, "Ich sage dir, es liegt in deiner Hand."),
             createVerse(4, 2, 25, 2, "Des Königs aufgebrachter Sinn allein"),
             createVerse(4, 2, 25, 3, "Bereitet diesen Fremden bittern Tod."),
             createVerse(4, 2, 25, 4, "Das Heer entwöhnte längst vom harten Opfer"),
             createVerse(4, 2, 25, 5, "Und von dem blut'gen Dienste sein Gemüt."),
             createVerse(4, 2, 25, 6, "Ja, mancher, den ein widriges Geschick"),
             createVerse(4, 2, 25, 7, "An fremdes Ufer trug, empfand es selbst,"),
             createVerse(4, 2, 25, 8, "Wie göttergleich dem armen Irrenden,"),
             createVerse(4, 2, 25, 9, "Umhergetriebnen an der fremden Grenze"),
             createVerse(4, 2, 25, 10, "Ein freundlich Menschenangesicht begegnet."),
             createVerse(4, 2, 25, 11, "O wende nicht von uns, was du vermagst!"),
             createVerse(4, 2, 25, 12, "Du endest leicht, was du begonnen hast:"),
             createVerse(4, 2, 25, 13, "Denn nirgends baut die Milde, die herab"),
             createVerse(4, 2, 25, 14, "In menschlicher Gestalt vom Himmel kommt,"),
             createVerse(4, 2, 25, 15, "Ein Reich sich schneller, als wo trüb und wild"),
             createVerse(4, 2, 25, 16, "Ein neues Volk voll Leben, Mut und Kraft,"),
             createVerse(4, 2, 25, 17, "Sich selbst und banger Ahnung überlassen,"),
             createVerse(4, 2, 25, 18, "Des Menschenlebens schwere Bürden trägt."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-26",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 26, 1, "Erschüttre meine Seele nicht, die du"),
             createVerse(4, 2, 26, 2, "Nach deinem Willen nicht bewegen kannst."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-27",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 27, 1, "Solang es Zeit ist, schont man weder Mühe"),
             createVerse(4, 2, 27, 2, "Noch eines guten Wortes Wiederholung."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-28",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 28, 1, "Du machst dir Müh, und mir erregst du Schmerzen;"),
             createVerse(4, 2, 28, 2, "Vergebens beides: darum laß mich nun."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-29",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 29, 1, "Die Schmerzen sind's, die ich zu Hülfe rufe:"),
             createVerse(4, 2, 29, 2, "Denn es sind Freunde, Gutes raten sie."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-30",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 30, 1, "Sie fassen meine Seele mit Gewalt,"),
             createVerse(4, 2, 30, 2, "Doch tilgen sie den Widerwillen nicht."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-31",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 31, 1, "Fühlt eine schöne Seele Widerwillen"),
             createVerse(4, 2, 31, 2, "Für eine Wohltat, die der Edle reicht?"),
         ]
         },
         {
           id: "act-4-scene-2-stanza-32",
           title: "Iphigenie:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 32, 1, "Ja, wenn der Edle, was sich nicht geziemt,"),
             createVerse(4, 2, 32, 2, "Statt meines Dankes mich erwerben will."),
         ]
         },
         {
           id: "act-4-scene-2-stanza-33",
           title: "Arkas:",
           act: 4,
           scene: 2,
           verses: [
             createVerse(4, 2, 33, 1, "Wer keine Neigung fühlt, dem mangelt es"),
             createVerse(4, 2, 33, 2, "An einem Worte der Entschuld'gung nie."),
             createVerse(4, 2, 33, 3, "Dem Fürsten sag ich an, was hier geschehn."),
             createVerse(4, 2, 33, 4, "O wiederholtest du in deiner Seele,"),
             createVerse(4, 2, 33, 5, "Wie edel er sich gegen dich betrug"),
             createVerse(4, 2, 33, 6, "Von deiner Ankunft an bis diesen Tag!"),
         ]
         }
       ]
     },
     {
       id: "act-4-scene-3",
       title: "Dritter Auftritt",
       number: 3,
       stanzas: [
         {
           id: "act-4-scene-3-stanza-1",
           title: "Iphigenie allein:",
           act: 4,
           scene: 3,
           verses: [
             createVerse(4, 3, 1, 1, "Von dieses Mannes Rede fühl ich mir"),
             createVerse(4, 3, 1, 2, "Zur ungelegnen Zeit das Herz im Busen"),
             createVerse(4, 3, 1, 3, "Auf einmal umgewendet. Ich erschrecke! –"),
             createVerse(4, 3, 1, 4, "Denn wie die Flut mit schnellen Strömen wachsend"),
             createVerse(4, 3, 1, 5, "Die Felsen überspült, die in dem Sand"),
             createVerse(4, 3, 1, 6, "Am Ufer liegen: so bedeckte ganz"),
             createVerse(4, 3, 1, 7, "Ein Freudenstrom mein Innerstes. Ich hielt"),
             createVerse(4, 3, 1, 8, "In meinen Armen das Unmögliche."),
             createVerse(4, 3, 1, 9, "Es schien sich eine Wolke wieder sanft"),
             createVerse(4, 3, 1, 10, "Um mich zu legen, von der Erde mich"),
             createVerse(4, 3, 1, 11, "Emporzuheben und in jenen Schlummer"),
             createVerse(4, 3, 1, 12, "Mich einzuwiegen, den die gute Göttin"),
             createVerse(4, 3, 1, 13, "Um meine Schläfe legte, da ihr Arm"),
             createVerse(4, 3, 1, 14, "Mich rettend faßte. – Meinen Bruder"),
             createVerse(4, 3, 1, 15, "Ergriff das Herz mit einziger Gewalt:"),
             createVerse(4, 3, 1, 16, "Ich horchte nur auf seines Freundes Rat;"),
             createVerse(4, 3, 1, 17, "Nur sie zu retten, drang die Seele vorwärts."),
             createVerse(4, 3, 1, 18, "Und wie den Klippen einer wüsten Insel"),
             createVerse(4, 3, 1, 19, "Der Schiffer gern den Rücken wendet: so"),
             createVerse(4, 3, 1, 20, "Lag Tauris hinter mir. Nun hat die Stimme"),
             createVerse(4, 3, 1, 21, "Des treuen Manns mich wieder aufgeweckt,"),
             createVerse(4, 3, 1, 22, "Daß ich auch Menschen hier verlasse, mich"),
             createVerse(4, 3, 1, 23, "Erinnert. Doppelt wird mir der Betrug"),
             createVerse(4, 3, 1, 24, "Verhaßt. O bleibe ruhig, meine Seele!"),
             createVerse(4, 3, 1, 25, "Beginnst du nun zu schwanken und zu zweifeln?"),
             createVerse(4, 3, 1, 26, "Den festen Boden deiner Einsamkeit"),
             createVerse(4, 3, 1, 27, "Mußt du verlassen! Wieder eingeschifft,"),
             createVerse(4, 3, 1, 28, "Ergreifen dich die Wellen schaukelnd, trüb"),
             createVerse(4, 3, 1, 29, "Und bang verkennest du die Welt und dich."),
         ]
         }
       ]
     },
     {
       id: "act-4-scene-4",
       title: "Vierter Auftritt",
       number: 4,
       stanzas: [
         {
           id: "act-4-scene-4-stanza-1",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 1, 1, "Wo ist sie? daß ich ihr mit schnellen Worten"),
             createVerse(4, 4, 1, 2, "Die frohe Botschaft unsrer Rettung bringe!"),
         ]
         },
         {
           id: "act-4-scene-4-stanza-2",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 2, 1, "Du siehst mich hier voll Sorgen und Erwartung"),
             createVerse(4, 4, 2, 2, "Des sichern Trostes, den du mir versprichst."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-3",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 3, 1, "Dein Bruder ist geheilt! Den Felsenboden"),
             createVerse(4, 4, 3, 2, "Des ungeweihten Ufers und den Sand"),
             createVerse(4, 4, 3, 3, "Betraten wir mit fröhlichen Gesprächen;"),
             createVerse(4, 4, 3, 4, "Der Hain blieb hinter uns, wir merkten's nicht."),
             createVerse(4, 4, 3, 5, "Und herrlicher und immer herrlicher"),
             createVerse(4, 4, 3, 6, "Umloderte der Jugend schöne Flamme"),
             createVerse(4, 4, 3, 7, "Sein lockig Haupt; sein volles Auge glühte"),
             createVerse(4, 4, 3, 8, "Von Mut und Hoffnung, und sein freies Herz"),
             createVerse(4, 4, 3, 9, "Ergab sich ganz der Freude, ganz der Lust,"),
             createVerse(4, 4, 3, 10, "Dich, seine Retterin, und mich zu retten."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-4",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 4, 1, "Gesegnet seist du, und es möge nie"),
             createVerse(4, 4, 4, 2, "Von deiner Lippe, die so Gutes sprach,"),
             createVerse(4, 4, 4, 3, "Der Ton des Leidens und der Klage tönen!"),
         ]
         },
         {
           id: "act-4-scene-4-stanza-5",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 5, 1, "Ich bringe mehr als das; denn schön begleitet"),
             createVerse(4, 4, 5, 2, "Gleich einem Fürsten pflegt das Glück zu nahn."),
             createVerse(4, 4, 5, 3, "Auch die Gefährten haben wir gefunden."),
             createVerse(4, 4, 5, 4, "In einer Felsenbucht verbargen sie"),
             createVerse(4, 4, 5, 5, "Das Schiff und saßen traurig und erwartend."),
             createVerse(4, 4, 5, 6, "Sie sahen deinen Bruder, und es regten"),
             createVerse(4, 4, 5, 7, "Sich alle jauchzend, und sie baten dringend,"),
             createVerse(4, 4, 5, 8, "Der Abfahrt Stunde zu béschleunigen."),
             createVerse(4, 4, 5, 9, "Es sehnet jede Faust sich nach dem Ruder,"),
             createVerse(4, 4, 5, 10, "Und selbst ein Wind erhob vom Lande lispelnd,"),
             createVerse(4, 4, 5, 11, "Von allen gleich bemerkt, die holden Schwingen."),
             createVerse(4, 4, 5, 12, "Drum laß uns eilen, führe mich zum Tempel,"),
             createVerse(4, 4, 5, 13, "Laß mich das Heiligtum betreten, laß"),
             createVerse(4, 4, 5, 14, "Mich unsrer Wünsche Ziel verehrend fassen!"),
             createVerse(4, 4, 5, 15, "Ich bin allein genug, der Göttin Bild"),
             createVerse(4, 4, 5, 16, "Auf wohlgeübten Schultern wegzutragen:"),
             createVerse(4, 4, 5, 17, "Wie sehn ich mich nach der erwünschten Last!"),
         ]
         },
         {
           id: "act-4-scene-4-stanza-6",
           title: "Er geht gegen den Tempel unter den letzten Worten, ohne zu bemerken, daß Iphigenie nicht folgt; endlich kehrt er sich um.",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 6, 1, "Du stehst und zauderst – Sage mir – du schweigst!"),
             createVerse(4, 4, 6, 2, "Du scheinst verworren! Widersetzet sich"),
             createVerse(4, 4, 6, 3, "Ein neues Unheil unserm Glück? Sag an!"),
             createVerse(4, 4, 6, 4, "Hast du dem Könige das kluge Wort"),
             createVerse(4, 4, 6, 5, "Vermelden lassen, das wir abgeredet?"),
         ]
         },
         {
           id: "act-4-scene-4-stanza-7",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 7, 1, "Ich habe, teurer Mann; doch wirst du schelten."),
             createVerse(4, 4, 7, 2, "Ein schweigender Verweis war mir dein Anblick."),
             createVerse(4, 4, 7, 3, "Des Königs Bote kam, und wie du es"),
             createVerse(4, 4, 7, 4, "Mir in den Mund gelegt, so sagt ich's ihm."),
             createVerse(4, 4, 7, 5, "Er schien zu staunen und verlangte dringend,"),
             createVerse(4, 4, 7, 6, "Die seltne Feier erst dem Könige"),
             createVerse(4, 4, 7, 7, "Zu melden, seinen Willen zu vernehmen;"),
             createVerse(4, 4, 7, 8, "Und nun erwart ich seine Wiederkehr."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-8",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 8, 1, "Weh uns! Erneuert schwebt nun die Gefahr"),
             createVerse(4, 4, 8, 2, "Um unsre Schläfe! Warum hast du nicht"),
             createVerse(4, 4, 8, 3, "Ins Priesterrecht dich weislich eingehüllt?"),
         ]
         },
         {
           id: "act-4-scene-4-stanza-9",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 9, 1, "Als eine Hülle hab ich's nie gebraucht."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-10",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 10, 1, "So wirst du, reine Seele, dich und uns"),
             createVerse(4, 4, 10, 2, "Zugrunde richten. Warum dacht ich nicht"),
             createVerse(4, 4, 10, 3, "Auf diesen Fall voraus und lehrte dich"),
             createVerse(4, 4, 10, 4, "Auch dieser Fordrung auszuweichen!"),
         ]
         },
         {
           id: "act-4-scene-4-stanza-11",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 11, 1, "Schilt"),
             createVerse(4, 4, 11, 2, "Nur mich, die Schuld ist mein, ich fühl es wohl;"),
             createVerse(4, 4, 11, 3, "Doch konnt ich anders nicht dem Mann begegnen,"),
             createVerse(4, 4, 11, 4, "Der mit Vernunft und Ernst von mir verlangte,"),
             createVerse(4, 4, 11, 5, "Was ihm mein Herz als Recht gestehen mußte."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-12",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 12, 1, "Gefährlicher zieht sich's zusammen; doch auch so"),
             createVerse(4, 4, 12, 2, "Laß uns nicht zagen oder unbesonnen"),
             createVerse(4, 4, 12, 3, "Und übereilt uns selbst verraten. Ruhig"),
             createVerse(4, 4, 12, 4, "Erwarte du die Wiederkunft des Boten,"),
             createVerse(4, 4, 12, 5, "Und dann steh fest, er bringe, was er will:"),
             createVerse(4, 4, 12, 6, "Denn solcher Weihung Feier anzuordnen"),
             createVerse(4, 4, 12, 7, "Gehört der Priesterin und nicht dem König."),
             createVerse(4, 4, 12, 8, "Und fordert er, den fremden Mann zu sehn,"),
             createVerse(4, 4, 12, 9, "Der von dem Wahnsinn schwer belastet ist,"),
             createVerse(4, 4, 12, 10, "So lehn es ab, als hieltest du uns beide"),
             createVerse(4, 4, 12, 11, "Im Tempel wohlverwahrt. So schaff uns Luft,"),
             createVerse(4, 4, 12, 12, "Daß wir aufs eiligste, den heil'gen Schatz"),
             createVerse(4, 4, 12, 13, "Dem rauh unwürd'gen Volk entwendend, fliehn."),
             createVerse(4, 4, 12, 14, "Die besten Zeichen sendet uns Apoll,"),
             createVerse(4, 4, 12, 15, "Und eh wir die Bedingung fromm erfüllen,"),
             createVerse(4, 4, 12, 16, "Erfüllt er göttlich sein Versprechen schon."),
             createVerse(4, 4, 12, 17, "Orest ist frei, geheilt! – Mit dem Befreiten"),
             createVerse(4, 4, 12, 18, "O führet uns hinüber, günst'ge Winde,"),
             createVerse(4, 4, 12, 19, "Zur Felseninsel, die der Gott bewohnt;"),
             createVerse(4, 4, 12, 20, "Dann nach Myken, daß es lebendig werde,"),
             createVerse(4, 4, 12, 21, "Daß von der Asche des verloschnen Herdes"),
             createVerse(4, 4, 12, 22, "Die Vatergötter fröhlich sich erheben"),
             createVerse(4, 4, 12, 23, "Und schönes Feuer ihre Wohnungen"),
             createVerse(4, 4, 12, 24, "Umleuchte! Deine Hand soll ihnen Weihrauch"),
             createVerse(4, 4, 12, 25, "Zuerst aus goldnen Schalen streuen. Du"),
             createVerse(4, 4, 12, 26, "Bringst über jene Schwelle Heil und Leben wieder,"),
             createVerse(4, 4, 12, 27, "Entsühnst den Fluch und schmückest neu die Deinen"),
             createVerse(4, 4, 12, 28, "Mit frischen Lebensblüten herrlich aus."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-13",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 13, 1, "Vernehm ich dich, so wendet sich, o Teurer,"),
             createVerse(4, 4, 13, 2, "Wie sich die Blume nach der Sonne wendet,"),
             createVerse(4, 4, 13, 3, "Die Seele, von dem Strahle deiner Worte"),
             createVerse(4, 4, 13, 4, "Getroffen, sich dem süßen Troste nach."),
             createVerse(4, 4, 13, 5, "Wie köstlich ist des gegenwärt'gen Freundes"),
             createVerse(4, 4, 13, 6, "Gewisse Rede, deren Himmelskraft"),
             createVerse(4, 4, 13, 7, "Ein Einsamer entbehrt und still versinkt."),
             createVerse(4, 4, 13, 8, "Denn langsam reift, verschlossen in dem Busen,"),
             createVerse(4, 4, 13, 9, "Gedank ihm und Entschluß; die Gegenwart"),
             createVerse(4, 4, 13, 10, "Des Liebenden entwickelte sie leicht."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-14",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 14, 1, "Leb wohl! Die Freunde will ich nun geschwind"),
             createVerse(4, 4, 14, 2, "Beruhigen, die sehnlich wartend harren."),
             createVerse(4, 4, 14, 3, "Dann komm ich schnell zurück und lausche hier"),
             createVerse(4, 4, 14, 4, "Im Felsenbusch versteckt auf deinen Wink –"),
             createVerse(4, 4, 14, 5, "Was sinnest du? Auf einmal überschwebt"),
             createVerse(4, 4, 14, 6, "Ein stiller Trauerzug die freie Stirne."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-15",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 15, 1, "Verzeih! Wie leichte Wolken vor der Sonne,"),
             createVerse(4, 4, 15, 2, "So zieht mir vor der Seele leichte Sorge"),
             createVerse(4, 4, 15, 3, "Und Bangigkeit vorüber."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-16",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 16, 1, "Fürchte nicht!"),
             createVerse(4, 4, 16, 2, "Betrüglich schloß die Furcht mit der Gefahr"),
             createVerse(4, 4, 16, 3, "Ein enges Bündnis: beide sind Gesellen."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-17",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 17, 1, "Die Sorge nenn ich edel, die mich warnt,"),
             createVerse(4, 4, 17, 2, "Den König, der mein zweiter Vater ward,"),
             createVerse(4, 4, 17, 3, "Nicht tückisch zu betrügen, zu berauben."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-18",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 18, 1, "Der deinen Bruder schlachtet, dem entfliehst du."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-19",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 19, 1, "Es ist derselbe, der mir Gutes tat."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-20",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 20, 1, "Das ist nicht Undank, was die Not gebeut."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-21",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 21, 1, "Es bleibt wohl Undank; nur die Not entschuldigt."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-22",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 22, 1, "Vor Göttern und vor Menschen dich gewiß."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-23",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 23, 1, "Allein mein eigen Herz ist nicht befriedigt."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-24",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 24, 1, "Zu strenge Fordrung ist verborgner Stolz."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-25",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 25, 1, "Ich untersuche nicht, ich fühle nur."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-26",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 26, 1, "Fühlst du dich recht, so mußt du dich verehren."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-27",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 27, 1, "Ganz unbefleckt genießt sich nur das Herz."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-28",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 28, 1, "So hast du dich im Tempel wohl bewahrt;"),
             createVerse(4, 4, 28, 2, "Das Leben lehrt uns, weniger mit uns"),
             createVerse(4, 4, 28, 3, "Und andern strenge sein; du lernst es auch."),
             createVerse(4, 4, 28, 4, "So wunderbar ist dies Geschlecht gebildet,"),
             createVerse(4, 4, 28, 5, "So vielfach ist's verschlungen und verknüpft,"),
             createVerse(4, 4, 28, 6, "Daß keiner in sich selbst noch mit den andern"),
             createVerse(4, 4, 28, 7, "Sich rein und unverworren halten kann."),
             createVerse(4, 4, 28, 8, "Auch sind wir nicht bestellt, uns selbst zu richten;"),
             createVerse(4, 4, 28, 9, "Zu wandeln und auf seinen Weg zu sehen,"),
             createVerse(4, 4, 28, 10, "Ist eines Menschen erste, nächste Pflicht:"),
             createVerse(4, 4, 28, 11, "Denn selten schätzt er recht, was er getan,"),
             createVerse(4, 4, 28, 12, "Und was er tut, weiß er fast nie zu schätzen."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-29",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 29, 1, "Fast überredst du mich zu deiner Meinung."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-30",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 30, 1, "Braucht's Überredung, wo die Wahl versagt ist?"),
             createVerse(4, 4, 30, 2, "Den Bruder, dich und einen Freund zu retten,"),
             createVerse(4, 4, 30, 3, "Ist nur ein Weg, fragt sich's, ob wir ihn gehn?"),
         ]
         },
         {
           id: "act-4-scene-4-stanza-31",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 31, 1, "O laß mich zaudern! denn du tätest selbst"),
             createVerse(4, 4, 31, 2, "Ein solches Unrecht keinem Mann gelassen,"),
             createVerse(4, 4, 31, 3, "Dem du für Wohltat dich verpflichtet hieltest."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-32",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 32, 1, "Wenn wir zugrunde gehen, wartet dein"),
             createVerse(4, 4, 32, 2, "Ein härtrer Vorwurf, der Verzweiflung trägt."),
             createVerse(4, 4, 32, 3, "Man sieht, du bist nicht an Verlust gewohnt,"),
             createVerse(4, 4, 32, 4, "Da du, dem großen Übel zu entgehen,"),
             createVerse(4, 4, 32, 5, "Ein falsches Wort nicht einmal opfern willst."),
         ]
         },
         {
           id: "act-4-scene-4-stanza-33",
           title: "Iphigenie:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 33, 1, "O trüg ich doch ein männlich Herz in mir,"),
             createVerse(4, 4, 33, 2, "Das, wenn es einen kühnen Vorsatz hegt,"),
             createVerse(4, 4, 33, 3, "Vor jeder andern Stimme sich verschließt!"),
         ]
         },
         {
           id: "act-4-scene-4-stanza-34",
           title: "Pylades:",
           act: 4,
           scene: 4,
           verses: [
             createVerse(4, 4, 34, 1, "Du weigerst dich umsonst; die ehrne Hand"),
             createVerse(4, 4, 34, 2, "Der Not gebietet, und ihr ernster Wink"),
             createVerse(4, 4, 34, 3, "Ist oberstes Gesetz, dem Götter selbst"),
             createVerse(4, 4, 34, 4, "Sich unterwerfen müssen. Schweigend herrscht"),
             createVerse(4, 4, 34, 5, "Des ew'gen Schicksals unberatne Schwester."),
             createVerse(4, 4, 34, 6, "Was sie dir auferlegt, das trage: tu,"),
             createVerse(4, 4, 34, 7, "Was sie gebeut. Das andre weißt du. Bald"),
             createVerse(4, 4, 34, 8, "Komm ich zurück, aus deiner heil'gen Hand"),
             createVerse(4, 4, 34, 9, "Der Rettung schönes Siegel zu empfangen."),
         ]
         }
       ]
     },
     {
       id: "act-4-scene-5",
       title: "Fünfter Auftritt",
       number: 5,
       stanzas: [
         {
           id: "act-4-scene-5-stanza-1",
           title: "Iphigenie allein:",
           act: 4,
           scene: 5,
           verses: [
             createVerse(4, 5, 1, 1, "Ich muß ihm folgen: denn die Meinigen"),
             createVerse(4, 5, 1, 2, "Seh ich in dringender Gefahr. Doch ach!"),
             createVerse(4, 5, 1, 3, "Mein eigen Schicksal macht mir bang und bänger."),
             createVerse(4, 5, 1, 4, "O soll ich nicht die stille Hoffnung retten,"),
             createVerse(4, 5, 1, 5, "Die in der Einsamkeit ich schön genährt?"),
             createVerse(4, 5, 1, 6, "Soll dieser Fluch denn ewig walten? Soll"),
             createVerse(4, 5, 1, 7, "Nie dies Geschlecht mit einem neuen Segen"),
             createVerse(4, 5, 1, 8, "Sich wieder heben? – Nimmt doch alles ab!"),
             createVerse(4, 5, 1, 9, "Das beste Glück, des Lebens schönste Kraft"),
             createVerse(4, 5, 1, 10, "Ermattet endlich: warum nicht der Fluch?"),
             createVerse(4, 5, 1, 11, "So hofft ich denn vergebens, hier verwahrt,"),
             createVerse(4, 5, 1, 12, "Von meines Hauses Schicksal abgeschieden,"),
             createVerse(4, 5, 1, 13, "Dereinst mit reiner Hand und reinem Herzen"),
             createVerse(4, 5, 1, 14, "Die schwerbefleckte Wohnung zu entsühnen!"),
             createVerse(4, 5, 1, 15, "Kaum wird in meinen Armen mir ein Bruder"),
             createVerse(4, 5, 1, 16, "Vom grimm'gen Übel wundervoll und schnell"),
             createVerse(4, 5, 1, 17, "Geheilt, kaum naht ein lang erflehtes Schiff,"),
             createVerse(4, 5, 1, 18, "Mich in den Port der Vaterwelt zu leiten,"),
             createVerse(4, 5, 1, 19, "So legt die taube Not ein doppelt Laster"),
             createVerse(4, 5, 1, 20, "Mit ehrner Hand mir auf: das heilige,"),
             createVerse(4, 5, 1, 21, "Mir anvertraute, viel verehrte Bild"),
             createVerse(4, 5, 1, 22, "Zu rauben und den Mann zu hintergehn,"),
             createVerse(4, 5, 1, 23, "Dem ich mein Leben und mein Schicksal danke."),
             createVerse(4, 5, 1, 24, "O daß in meinem Busen nicht zuletzt"),
             createVerse(4, 5, 1, 25, "Ein Widerwille keime! der Titanen,"),
             createVerse(4, 5, 1, 26, "Der alten Götter tiefer Haß auf euch,"),
             createVerse(4, 5, 1, 27, "Olympier, nicht auch die zarte Brust"),
             createVerse(4, 5, 1, 28, "Mit Geierklauen fasse! Rettet mich"),
             createVerse(4, 5, 1, 29, "Und rettet euer Bild in meiner Seele!"),
             createVerse(4, 5, 1, 30, "Vor meinen Ohren tönt das alte Lied –"),
             createVerse(4, 5, 1, 31, "Vergessen hatt ich's und vergaß es gern –,"),
             createVerse(4, 5, 1, 32, "Das Lied der Parzen, das sie grausend sangen,"),
             createVerse(4, 5, 1, 33, "Als Tantalus vom goldnen Stuhle fiel:"),
             createVerse(4, 5, 1, 34, "Sie litten mit dem edeln Freunde; grimmig"),
             createVerse(4, 5, 1, 35, "War ihre Brust und furchtbar ihr Gesang."),
             createVerse(4, 5, 1, 36, "In unsrer Jugend sang's die Amme mir"),
             createVerse(4, 5, 1, 37, "Und den Geschwistern vor, ich merkt es wohl:"),
             createVerse(4, 5, 1, 38, "Es fürchte die Götter"),
             createVerse(4, 5, 1, 39, "Das Menschengeschlecht!"),
             createVerse(4, 5, 1, 40, "Sie halten die Herrschaft"),
             createVerse(4, 5, 1, 41, "In ewigen Händen"),
             createVerse(4, 5, 1, 42, "Und können sie brauchen,"),
             createVerse(4, 5, 1, 43, "Wie's ihnen gefällt."),
             createVerse(4, 5, 1, 44, "Der fürchte sie doppelt,"),
             createVerse(4, 5, 1, 45, "Den je sie erheben!"),
             createVerse(4, 5, 1, 46, "Auf Klippen und Wolken"),
             createVerse(4, 5, 1, 47, "Sind Stühle bereitet"),
             createVerse(4, 5, 1, 48, "Um goldene Tische."),
             createVerse(4, 5, 1, 49, "Erhebet ein Zwist sich:"),
             createVerse(4, 5, 1, 50, "So stürzen die Gäste"),
             createVerse(4, 5, 1, 51, "Geschmäht und geschändet"),
             createVerse(4, 5, 1, 52, "In nächtliche Tiefen"),
             createVerse(4, 5, 1, 53, "Und harren vergebens,"),
             createVerse(4, 5, 1, 54, "Im Finstern gebunden,"),
             createVerse(4, 5, 1, 55, "Gerechten Gerichtes."),
             createVerse(4, 5, 1, 56, "Sie aber, sie bleiben"),
             createVerse(4, 5, 1, 57, "In ewigen Festen"),
             createVerse(4, 5, 1, 58, "An goldenen Tischen."),
             createVerse(4, 5, 1, 59, "Sie schreiten vom Berge"),
             createVerse(4, 5, 1, 60, "Zu Bergen hinüber:"),
             createVerse(4, 5, 1, 61, "Aus Schlünden der Tiefe"),
             createVerse(4, 5, 1, 62, "Dampft ihnen der Atem"),
             createVerse(4, 5, 1, 63, "Erstickter Titanen,"),
             createVerse(4, 5, 1, 64, "Gleich Opfergerüchen,"),
             createVerse(4, 5, 1, 65, "Ein leichtes Gewölke."),
             createVerse(4, 5, 1, 66, "Es wenden die Herrscher"),
             createVerse(4, 5, 1, 67, "Ihr segnendes Auge"),
             createVerse(4, 5, 1, 68, "Von ganzen Geschlechtern"),
             createVerse(4, 5, 1, 69, "Und meiden, im Enkel"),
             createVerse(4, 5, 1, 70, "Die ehmals geliebten,"),
             createVerse(4, 5, 1, 71, "Still redenden Züge"),
             createVerse(4, 5, 1, 72, "Des Ahnherrn zu sehn."),
             createVerse(4, 5, 1, 73, "So sangen die Parzen;"),
             createVerse(4, 5, 1, 74, "Es horcht der Verbannte"),
             createVerse(4, 5, 1, 75, "In nächtlichen Höhlen,"),
             createVerse(4, 5, 1, 76, "Der Alte, die Lieder,"),
             createVerse(4, 5, 1, 77, "Denkt Kinder und Enkel"),
             createVerse(4, 5, 1, 78, "Und schüttelt das Haupt."),
         ]
         }
       ]
     }
   ]
 }
 // ... HIER WÜRDE ACT 5 FOLGEN
];
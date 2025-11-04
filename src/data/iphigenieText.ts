// Zentrale Datei für alle Iphigenie-Aufzüge
import { iphigenieText as act1Import } from './IphigenieText1';
import { iphigenieText as act2Import } from './IphigenieText2';
import { iphigenieText as act3Import } from './IphigenieText3';
import { iphigenieText as act4Import } from './IphigenieText4';
import { iphigenieText as act5Import } from './IphigenieText5';
import type { Act, Scene, Stanza, Verse } from '../types';

// Sichere Zusammenführung aller Aufzüge
const act1 = act1Import || [];
const act2 = act2Import || [];
const act3 = act3Import || [];
const act4 = act4Import || [];
const act5 = act5Import || [];

// Kombiniere alle Aufzüge zu einem vollständigen Drama
export const iphigenieText: Act[] = [
    ...act1,
    ...act2,
    ...act3,
    ...act4,
    ...act5
];

// Hilfsfunktionen für einfachen Zugriff
export const getActByNumber = (actNumber: number): Act | undefined => {
    return iphigenieText.find(act => act.number === actNumber);
};

export const getSceneByNumbers = (actNumber: number, sceneNumber: number): Scene | undefined => {
    const act = getActByNumber(actNumber);
    return act?.scenes.find(scene => scene.number === sceneNumber);
};

export const getStanzaById = (stanzaId: string): Stanza | undefined => {
    for (const act of iphigenieText) {
        for (const scene of act.scenes) {
            const stanza = scene.stanzas.find(s => s.id === stanzaId);
            if (stanza) return stanza;
        }
    }
    return undefined;
};

export const getVerseById = (verseId: string): Verse | undefined => {
    for (const act of iphigenieText) {
        for (const scene of act.scenes) {
            for (const stanza of scene.stanzas) {
                const verse = stanza.verses.find(v => v.id === verseId);
                if (verse) return verse;
            }
        }
    }
    return undefined;
};

// Statistiken über das gesamte Drama
export const getDramaStats = () => {
    let totalVerses = 0;
    let totalStanzas = 0;
    let totalScenes = 0;

    iphigenieText.forEach(act => {
        totalScenes += act.scenes.length;
        act.scenes.forEach(scene => {
            totalStanzas += scene.stanzas.length;
            scene.stanzas.forEach(stanza => {
                totalVerses += stanza.verses.length;
            });
        });
    });

    return {
        acts: iphigenieText.length,
        scenes: totalScenes,
        stanzas: totalStanzas,
        verses: totalVerses,
        averageVersesPerAct: Math.round(totalVerses / iphigenieText.length),
        averageStanzasPerScene: Math.round(totalStanzas / totalScenes)
    };
};

console.log('📚 Iphigenie Text geladen:', getDramaStats());
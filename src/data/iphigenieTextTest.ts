// Test: Einfache zentrale Implementierung
import type { Act } from '../types';

// Importiere alle Aufzüge
const act1 = require('./IphigenieText1').iphigenieText;
const act2 = require('./IphigenieText2').iphigenieText;
const act3 = require('./IphigenieText3').iphigenieText;
const act4 = require('./IphigenieText4').iphigenieText;
const act5 = require('./IphigenieText5').iphigenieText;

// Kombiniere alle Aufzüge
export const iphigenieText: Act[] = [
    ...(act1 || []),
    ...(act2 || []),
    ...(act3 || []),
    ...(act4 || []),
    ...(act5 || [])
];

console.log('📚 Iphigenie Aufzüge geladen:', {
    act1: act1?.length || 0,
    act2: act2?.length || 0, 
    act3: act3?.length || 0,
    act4: act4?.length || 0,
    act5: act5?.length || 0,
    total: iphigenieText.length
});

// Vereinte Iphigenie-Aufzüge für die App
import { iphigenieText as aufzug1 } from './IphigenieText1';
import { iphigenieText as aufzug2 } from './IphigenieText2'; 
import { iphigenieText as aufzug3 } from './IphigenieText3';
import { iphigenieText as aufzug4 } from './IphigenieText4';
import { iphigenieText as aufzug5 } from './IphigenieText5';

// Exportiere das komplette Drama
export const iphigenieText = [
    ...aufzug1,
    ...aufzug2, 
    ...aufzug3,
    ...aufzug4,
    ...aufzug5
];

// Debug-Info
console.log('📚 Iphigenie vollständig geladen:', {
    aufzuege: iphigenieText.length,
    aufzug1: aufzug1.length,
    aufzug2: aufzug2.length,
    aufzug3: aufzug3.length,
    aufzug4: aufzug4.length,
    aufzug5: aufzug5.length
});

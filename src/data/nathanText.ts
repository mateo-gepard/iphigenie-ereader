// Nathan der Weise - Volltext
// Zusammengeführt aus allen Chunks
import type { Act } from '../types';
import { nathanText1 } from './NathanText1';

// Falls du später mehr Chunks hast, importiere sie hier:
// import { nathanText2 } from './NathanText2';
// import { nathanText3 } from './NathanText3';
// etc.

// Merge all acts from all chunks
export const nathanText: Act[] = [
  ...nathanText1,
  // ...nathanText2,  // Uncomment when available
  // ...nathanText3,  // Uncomment when available
  // ...nathanText4,  // Uncomment when available
  // ...nathanText5,  // Uncomment when available
];

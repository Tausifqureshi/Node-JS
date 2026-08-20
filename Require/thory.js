// --------------------------------------------- require() Function --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> 'require' kya hai aur kis liye use hota hai?
// Node.js me 'require' ek built-in function hai jiska use kisi file ya module ko IMPORT (apni file me lane) ke liye hota hai.
// Sath hi, kisi function ya data ko dusri file ko dene (EXPORT) ke liye 'module.exports' ka use hota hai.

// --------------------------------------------- Tarika 1 (Old Tarika - CommonJS) --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Node.js me default yahi chalta hai.
// 1. Import (Laana): `const something = require('./filename');`
// 2. Export (Bhejna): `module.exports = something;`

// --------------------------------------------- Tarika 2 (New Tarika - ES Modules) --------------------------------------------- //
// Note: Aajkal React ki tarah naye Node.js projects me modern tarika (ES Modules) use hota hai. Jiske liye "type": "module" zaroori hai.
// 1. Import (Laana): `import something from './filename';`
// 2. Export (Bhejna): `export { something };`

// --------------------------------------------- Modules in Node.js --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Module kya hai?
// Module ek isolated aur reusable code ka block hota hai jise hum dusri files me import aur use kar sakte hain. Node.js me do tarah ke module systems commonly use hote hain: CommonJS aur ES Modules.

// --------------------------------------------- CommonJS --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> CommonJS Kya Hai?
// CommonJS Node.js ka default aur purana module system hai.
// 1. Export: Isme hum file ya function ko export karne ke liye 'module.exports' use karte hain.
// 2. Import: Dusri file me use karne ke liye hum 'require()' function ka use karte hain.
// 3. Execution: Ye modules synchronously load hote hain, isliye backend me zyada prefer kiye jate the.

// --------------------------------------------- ES Modules (ESM) --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> ES Modules (ESM) Kya Hai?
// Ye modern JavaScript (ES6) ka standard module system hai (jo React aur frontend me bhi commonly use hota hai).
// 1. Export: Isme data export karne ke liye 'export' aur 'export default' ka use hota hai.
// 2. Import: Dusri file me data laane ke liye hum 'import ... from ...' ka use karte hain.
// 3. Node.js me use: Isko Node me use karne ke liye package.json me "type": "module" add karna padta hai, ya phir .mjs extension use karna padta hai.

// --------------------------------------------- CommonJS vs ESM Differences --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Key Differences.
// 1. Syntax: CommonJS me 'require / module.exports' aur ESM me 'import / export'.
// 2. Loading: CommonJS synchronously load karta hai aur ESM asynchronously load karta hai.
// 3. Environment: CommonJS strictly backend/Node ke liye tha, jabki ESM frontend (browser) aur backend dono me kaam karta hai.

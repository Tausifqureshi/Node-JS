// ========================================= Modules in Node.js ============================================ //

// ============================================== Tarika 1 (CommonJS - Old Tarika) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Node.js shuru se require() aur module.exports ka use karta aaraha hai. Ye backend ka default tarika tha.

const add = (a, b) => a + b;

// Exporting
module.exports = { add };

// Importing (Kisi dusri file me aise likhte hain)
// const math = require('./mathUtils');
// console.log(math.add(5, 3));


// ============================================== Tarika 2 (ES Modules - New Tarika) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Aaj kal React ki tarah Node.js me bhi import/export ka use hota hai. (Isko chalane ke liye package.json me "type": "module" likhna padta hai).

// Exporting
// export const subtract = (a, b) => a - b;

// Importing (Kisi dusri file me aise likhte hain)
// import { subtract } from './mathUtils.js';
// console.log(subtract(10, 4));

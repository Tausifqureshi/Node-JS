// ========================================= Require (Import/Export) Practical ============================================ //

// ============================================== Types of Require (Summary) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> require() ka use specially in 3 tarah ke modules/files ko import karne ke liye hota hai:

// const fs = require("fs");           // 1. Node built-in module (Node.js ke apne modules, inme path nahi lagta)
// const http = require("http");       // 1. Node built-in module
// const express = require("express"); // 2. npm package (Terminal se install kiye gaye packages)
// const user = require("./user");     // 3. Apni khud ki banayi hui local file (Inme path './' lagana zaroori hai)


// ============================================== Tarika 1 (Old Tarika - CommonJS Import) ================================================= //
// Yahan hum apni khud ki banayi hui 'math.js' file ko require karke uske andar ke exported functions ko use kar rahe hain.

const mathFunctions = require('./math.js'); // 3rd wala case: Apni file import hui

console.log("Tarika 1 (Old Way) - Import Test Results:\n");

// Export kiye hue functions ko call karna
const sumResult = mathFunctions.add(10, 5);
console.log("Add Function Output (10 + 5) =", sumResult);

const subResult = mathFunctions.subtract(10, 5);
console.log("Subtract Function Output (10 - 5) =", subResult);


// ============================================== Tarika 2 (New Tarika - ES Modules Import) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Aaj kal React ki tarah naye projects me `require` ki jagah `import` use hota hai.

// Aise likhte hain naye tarike me (abhi comment me hai kyunki isko package.json me 'type: module' lagta hai):
// import { add, subtract } from './math.js';
// console.log("Tarika 2 (New Way) Output:", add(10, 5));

// ========================================= Node.js Global APIs / Variables Practical ============================================ //

// ============================================== Tarika 1 (Old Tarika - CommonJS) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Node.js global APIs/variables wo cheezein hain jo generally bina require() ke available hoti hain. 
// Note: __dirname aur __filename technically global object ka normal property nahi hai; ise CommonJS module wrapper provide karta hai.

const path = require("path"); // 'path' module ko paths jodne ke liye laye hain

console.log("Tarika 1 (Old Way) - Global Variables Ka Asli Use:\n");

// 1. __dirname ka Use
// __dirname ➡️ current JavaScript file ke parent directory ka absolute path deta hai.
/*
Example:
project/
└── app.js

Agar app.js yahan hai:
C:\NodeProject\app.js

to:
console.log(__dirname);

output:
C:\NodeProject
*/
const folderPath = __dirname;
console.log("1. Hamara Folder Kahan Hai? :", folderPath);

// 2. __dirname ka Real-World Example (Path join karna)
const htmlFilePath = path.join(__dirname, "views", "index.html");
console.log("2. HTML File Ka Pura Address :", htmlFilePath);
// Interview Tip: Humne yahan '__dirname' isliye use kiya kyunki Windows aur Mac/Linux me folder paths alag tarah se likhe jate hain. '__dirname' us problem ko khud sambhal leta hai.

// 3. __filename ka Use (Current File ka naam aur absolute path)
console.log("3. Current File Ka Pura Naam :", __filename);

// 4. setTimeout
// setTimeout ek globally available function hai.
// Isliye ise require/import karne ki zarurat nahi padti.
setTimeout(() => {
  console.log("\n4. Ye message 1.5 second baad aaya kyunki 'setTimeout' globally available hai!");
}, 1500);


// ============================================== Tarika 2 (New Tarika - ES Modules me __dirname) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Jab hum naya 'import' tarika use karte hain (ES Modules), toh '__dirname' aur '__filename' kaam nahi karte! Unhe hume manually banana padta hai.

// Note: Niche diya gaya code abhi comment me hai kyunki ye tabhi chalega jab project ko ES module (import/export wala) banaya jaye.

/*
import path from 'path';
import { fileURLToPath } from 'url';

// Naye tarike me __filename aur __dirname aise banaya jata hai:
const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);

// Ab hum is naye wale __dirnameNew ko normally use kar sakte hain
const htmlFilePathNew = path.join(__dirnameNew, "views", "index.html");
console.log("Tarika 2 (New Way) - HTML File Path:", htmlFilePathNew);
*/


// ============================================== QUICK REVISION ================================================= //
/*
// CommonJS
const path = require("path");

console.log(__dirname);   // Current folder
console.log(__filename); // Current file

// path module
const fullPath = path.join(__dirname, "views", "index.html");

// Global functions
console.log("Hello");
setTimeout(() => {
  console.log("2 seconds later");
}, 2000);
*/

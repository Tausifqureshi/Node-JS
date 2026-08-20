// --------------------------------------------- Modules in Node.js --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Module kya hai?
// Module ek isolated (alag) aur reusable code ka block hota hai jise hum dusri files me easily import kar sakte hain. Isse code manage karna aasaan ho jata hai.

// --------------------------------------------- Tarika 1 (Old Tarika - CommonJS) --------------------------------------------- //
// - Node.js me ye shuru se default module system raha hai.
// - Isme import ke liye `require()` aur export ke liye `module.exports` use hota hai.
// Note: CommonJS modules **Synchronously** load hote hain. Iska matlab hai ki jab tak 'require' wali file load nahi ho jati, aage ka code nahi chalega. Ye backend me theek hai kyuki files usi computer ki hard-drive par hoti hain.

// --------------------------------------------- Tarika 2 (New Tarika - ES Modules / ESM) --------------------------------------------- //
// - Ye naya aur modern standard hai jo React.js jaisi frontend libraries me bhi use hota hai.
// - Isme import ke liye `import` aur export ke liye `export` keyword use hota hai.
// - Ise enable karne ke liye 'package.json' me `"type": "module"` likhna padta hai.
// Note: ES Modules **Asynchronously** load hote hain. Iska matlab inka performance better hota hai aur ye modern JavaScript syntax ko strictly follow karte hain.

// --------------------------------------------- QUICK REVISION --------------------------------------------- //
// Old Way (CommonJS):
// const fs = require("fs"); 
// module.exports = { myFunction };

// New Way (ES Modules):
// import fs from "fs";
// export const myFunction = () => {};

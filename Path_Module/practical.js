// ========================================= Path Module Practical ============================================ //
const path = require("path");

const myFilePath = "C:/Users/Tausif/React_Revision/src/index.js";

// 1. Basename (File ka naam)
const fileName = path.basename(myFilePath);
console.log("File Name:", fileName); // index.js

// 2. Dirname (Folder ka naam jisme file hai)
const dirName = path.dirname(myFilePath);
console.log("Directory Name:", dirName); // C:/Users/Tausif/React_Revision/src

// 3. Extname (File ka extension)
const extension = path.extname(myFilePath);
console.log("File Extension:", extension); // .js

// 4. path.join() (Paths ko properly jodna)
// Ye sabse zyada use hota hai folder paths dynamically banane ke liye
const joinedPath = path.join(__dirname, "public", "index.html");
console.log("Joined Path:", joinedPath);

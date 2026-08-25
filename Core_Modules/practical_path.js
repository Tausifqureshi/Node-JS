const path = require('path');

console.log("=== Path Module Demo ===\n");

// 1. Do alag-alag words ko mila kar ek safe path (rasta) banana
const folderName = "MyFolder";
const fileName = "data.txt";
const safePath = path.join(folderName, 'subfolder', fileName);

console.log("📂 Banaya hua rasta (Safe Path):", safePath);

// 2. Abhi hum kis file me hain uski poori details:
const currentFile = __filename; // __filename ek global variable hai
console.log("\n📄 Current File Name (Basename):", path.basename(currentFile));
console.log("📁 Folder Name (Dirname):", path.dirname(currentFile));
console.log("🔧 Extension Name (Extname):", path.extname(currentFile));

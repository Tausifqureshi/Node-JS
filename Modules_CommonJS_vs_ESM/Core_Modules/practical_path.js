const path = require('path');

console.log("=== Path Module Demo ===\n");

const folderName = "MyFolder";
const fileName = "data.txt";
const currentFile = __filename; // __filename ek global variable hai jo current file ka pura rasta deta hai

// ==========================================
// 1. path.join() - Rasta (Path) banana
// ==========================================
// Ye automatically OS ke hisaab se sahi slash ( \ ya / ) laga kar path banata hai.
const safePath = path.join(folderName, 'subfolder', fileName);
console.log("1. Banaya hua rasta (path.join):", safePath);

// ==========================================
// 2. path.resolve() - Absolute (Pura) Rasta banana
// ==========================================
// Ye current folder se lekar jo file aap bataoge, wahan tak ka pura (absolute) address banata hai.
const absolutePath = path.resolve(folderName, fileName);
console.log("\n2. Pura Rasta (path.resolve):", absolutePath);

// ==========================================
// 3. File ki specific details nikalna (basename, dirname, extname)
// ==========================================
console.log("\n3. Current File ki Details:");
console.log("   👉 Basename (Sirf file ka naam):", path.basename(currentFile));
console.log("   👉 Dirname (Sirf folder ka rasta):", path.dirname(currentFile));
console.log("   👉 Extname (File ka type/extension):", path.extname(currentFile));

// ==========================================
// 4. path.parse() - Path ko Object me todna
// ==========================================
// Ye pure path ko ek Object me badal deta hai jisme sab alag-alag likha hota hai (root, dir, base, ext, name).
const parsedPath = path.parse(currentFile);
console.log("\n4. Path ko Object me toda (path.parse):");
console.log(parsedPath);

// ==========================================
// 5. path.format() - Object se wapas Path banana
// ==========================================
// Agar aapke paas parse kiya hua object hai, toh ye usko wapas string path me badal dega.
const formattedPath = path.format(parsedPath);
console.log("\n5. Object se wapas Path banaya (path.format):\n  ", formattedPath);

// ==========================================
// 6. path.isAbsolute() - Check karna ki rasta poora hai ya adhoora
// ==========================================
console.log("\n6. Kya 'safePath' ek Absolute (pura) rasta hai?:", path.isAbsolute(safePath)); // false
console.log("   Kya 'currentFile' ek Absolute rasta hai?:", path.isAbsolute(currentFile)); // true

// ==========================================
// 7. path.normalize() - Kharab raste ko theek karna
// ==========================================
// Agar path me extra slashes (//) ya (..) galti se lag gaye hain, toh ye usko theek/clean kar deta hai.
const messyPath = "C://Users//Admin/..//Desktop//file.txt";
console.log("\n7. Kharab Path (Messy):", messyPath);
console.log("   Theek kiya hua Path (path.normalize):", path.normalize(messyPath));

console.log("\n✅ Path Module All Main Methods Tested!");

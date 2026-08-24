const fs = require('fs');

console.log("=== Blocking vs Non-Blocking Demo ===\n");

// Ek temporary file banate hain demo ke liye
fs.writeFileSync('demo.txt', 'Hello Bhai! Ye file batayegi ki blocking aur non-blocking me kya farq hai.');

// ==========================================================
// 1. BLOCKING CODE (Synchronous) - Ruk kar kaam karega
// ==========================================================
console.log("🔴 Blocking Code Start hua...");

// Ye line Event Loop ko BLOCK kar degi jab tak file poori read na ho jaye
const data = fs.readFileSync('demo.txt', 'utf8'); 
console.log("🔴 Data padh liya: ", data);

console.log("🔴 Blocking Code End hua (Node.js aage badh gaya)\n");


// ==========================================================
// 2. NON-BLOCKING CODE (Asynchronous) - Bina ruke kaam karega
// ==========================================================
console.log("🟢 Non-Blocking Code Start hua...");

// Ye line Event Loop ko block NAHI karegi, file padhne ka kaam Thread Pool ko bhej degi
fs.readFile('demo.txt', 'utf8', (err, asyncData) => {
    if (err) throw err;
    // Ye tab chalega jab background me file padhne ka kaam complete ho jayega
    console.log("🟢 Background se Data padh liya: ", asyncData);
});

// Ye line turant print ho jayegi, file padhne ka wait NAHI karegi!
console.log("🟢 Non-Blocking Code End hua");
console.log("Dekha? Node.js bina ruke foran is line par aa gaya!\n");

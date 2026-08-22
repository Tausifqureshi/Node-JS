// ========================================= CommonJS Practical ======================================= //
// Ye Node.js ka sabse standard aur purana tarika hai files ko jodne (import/export) ka.

// 1. 'fs' (File System) ko core module se require kiya gaya
const fs = require('fs');

const runCommonJSPractical = () => {
    console.log("=== CommonJS Import/Export Ka Asli Use ===\n");

    console.log("1. 'fs' module successfully require kar liya gaya hai.");
    console.log("2. Ab hum 'fs' ke functions ko use kar sakte hain.\n");

    // fs ke type ko check karte hain
    console.log("fs kis type ka data hai? ->", typeof fs); // Object

    console.log("\n✅ Success: Aise hi hum apni khud ki files (jaise math.js) ko module.exports aur require('./math.js') se connect karte hain.");
};

runCommonJSPractical();

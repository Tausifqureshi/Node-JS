// ========================================= require() Function ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 'require' kya hai aur kis liye use hota hai?
// Node.js me 'require' ek built-in function hai jiska use kisi file ya module ko IMPORT (apni file me lane) ke liye hota hai.
// Sath hi, kisi function ya data ko dusri file ko dene (EXPORT) ke liye 'module.exports' ka use hota hai.

// ========================================= Tarika 1 (Old Tarika - CommonJS) ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Node.js me default yahi chalta hai.
// 1. Import (Laana): `const something = require('./filename');`
// 2. Export (Bhejna): `module.exports = something;`

const commonJSExample = () => {
    console.log("=== CommonJS (Old) Example ===\n");
    
    // Maan lijiye ye data kisi doosri file 'user.js' me hai:
    const mockUserModule = {
        name: "Tausif",
        role: "Admin",
        getDetails: function() {
            return `${this.name} is an ${this.role}`;
        }
    };

    // Dusri file me hum ise require karenge:
    const user = mockUserModule; // 'require' ka mazaak
    
    console.log("Require karne ke baad data mila:");
    console.log(user.getDetails());
};
// commonJSExample();


// ========================================= Tarika 2 (New Tarika - ES Modules) ======================================= //
// Note: Aajkal React ki tarah naye Node.js projects me modern tarika (ES Modules) use hota hai. Jiske liye package.json me "type": "module" zaroori hai.
// 1. Import (Laana): `import something from './filename';`
// 2. Export (Bhejna): `export { something };`

const esModulesExample = () => {
    console.log("\n=== ES Modules (New) Example ===");
    console.log("React me hum aise use karte hain:");
    console.log("-> import { useState } from 'react';");
    console.log("-> export default App;");
    
    console.log("\nNode.js me bhi same yahi tarika lagane ke liye package.json me ye likhna padta hai:");
    console.log('{ "type": "module" }');
};
// esModulesExample();

// ========================================= __dirname and __filename Practical ======================================= //
// Is practical me hum dekhenge ki real world me inka kya kaam hota hai.
// Asli duniya me humein dusre folders ki files padhni hoti hain, wahan ye kaam aate hain.

const fs = require('fs');
const path = require('path');

const runDirnamePractical = () => {
    console.log("=== __dirname aur __filename Ka Asli Use ===\n");

    // 1. Current File ki details
    console.log("1. Humari file ka naam kya hai?");
    console.log("->", __filename, "\n");

    console.log("2. Humari file kis folder me rakhi hai?");
    console.log("->", __dirname, "\n");

    // 2. Real World Scenario: Dusre folder (Views) ki file ka rasta banana
    const viewsFolder = path.join(__dirname, 'views');
    const htmlFile = path.join(viewsFolder, 'index.html');

    console.log("3. Agar hume 'views/index.html' ko access karna ho, toh uska path:");
    console.log("->", htmlFile);

    console.log("\n✅ Success: Aise hi Express.js me HTML files server ko di jaati hain!");
};

runDirnamePractical();

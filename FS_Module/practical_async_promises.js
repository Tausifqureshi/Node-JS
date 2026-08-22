// ========================================= FS Async Promises Practical ======================================= //
// Real backend projects me hum sync methods (readFileSync) use nahi karte kyunki wo server block karte hain.
// Hum `fs/promises` use karte hain jo Async/Await ke sath perfectly kaam karta hai.

const fs = require('fs/promises');
const path = require('path');

const runAsyncFsPractical = async () => {
    console.log("=== FS Promises (Modern Way) Ka Asli Use ===\n");

    const filePath = path.join(__dirname, 'user_data.txt');

    try {
        console.log("1. Background me file ban rahi hai...");
        
        // Await rukega jab tak file write na ho jaye, par main thread (dusre users) block nahi honge!
        await fs.writeFile(filePath, "Ye data purely Asynchronous tarike se store hua hai.");
        console.log("-> File Write Complete!");

        console.log("\n2. Background me file padhi jaa rahi hai...");
        
        // Await se data read karenge
        const data = await fs.readFile(filePath, 'utf8');
        console.log(`-> Data Mila: "${data}"`);

        console.log("\n✅ Success: Modern Asynchronous FS operations perfectly complete hue.");

    } catch (error) {
        console.log("❌ Koi Error Aaya:", error.message);
    }
};

runAsyncFsPractical();

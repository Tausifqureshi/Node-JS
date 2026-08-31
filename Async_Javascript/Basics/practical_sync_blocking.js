// ========================================= Synchronous / Blocking Practical ======================================= //
// Is practical me hum dekhenge ki Synchronous code kaise pure Node.js server ko block kar deta hai.
// fs.readFileSync() ka example lenge jo real world me file padhne ke liye use hota hai.

const fs = require('fs');
const path = require('path');

const runSyncPractical = () => {
    console.log("=== Synchronous (Blocking) Code Ka Asli Use ===\n");

    // Pehle ek dummy file banate hain jisko read karenge
    const filePath = path.join(__dirname, 'sync_dummy.txt');
    fs.writeFileSync(filePath, "Ye Synchronous data hai jo file se aaya hai!");

    console.log("1. Restaurant me table 1 par order diya gaya.");

    // Jab tak ye file read nahi hogi, aage ka code nahi chalega (Main Thread Block)
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`2. Table 1 ka khana ban raha hai... Data mila: "${data}"`);

    console.log("3. Table 2 se naya order liya gaya! (Wait karna pada tha)");
};

runSyncPractical();

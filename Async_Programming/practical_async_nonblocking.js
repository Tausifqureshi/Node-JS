// ========================================= Asynchronous / Non-Blocking Practical ======================================= //
// Node.js isliye famous hai kyunki isme Non-Blocking code likha jata hai.
// Is practical me hum 'fs.readFile' (Asynchronous version) ka use karenge jo background me file read karega.

const fs = require('fs');
const path = require('path');

const runAsyncPractical = () => {
    console.log("=== Asynchronous (Non-Blocking) Code Ka Asli Use ===\n");

    // Pehle ek dummy file banate hain
    const filePath = path.join(__dirname, 'async_dummy.txt');
    fs.writeFileSync(filePath, "Ye Asynchronous data hai jo background se aaya hai!");

    console.log("1. Restaurant me table 1 par order diya gaya (Waiter kitchen chala gaya).");

    // File background me read ho rahi hai, Main Thread block nahi hua
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
            console.log("Error:", err);
            return;
        }
        // Ye code tab chalega jab file puri read ho jayegi
        console.log(`\n3. (Baad me aakar) Table 1 ka khana ban gaya! Data mila: "${data}"`);
    });

    console.log("2. Table 2 se turant naya order le liya gaya! (Waiter ne wait nahi kiya)");
};

runAsyncPractical();

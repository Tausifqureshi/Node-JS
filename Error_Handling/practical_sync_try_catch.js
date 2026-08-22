// ========================================= Try-Catch (Synchronous) Practical ======================================= //
// Is practical me hum dekhenge ki agar try-catch nahi lagaya toh server kaise completely crash ho jata hai.
// Aur lagane ke baad wo aage ka code bhi chalata hai.

const fs = require('fs');

const runSyncErrorPractical = () => {
    console.log("=== Synchronous Error Handling (try-catch) ===\n");

    console.log("1. Application start hui...");

    // Scenario: Ek zaroori config file padhni thi jo exist nahi karti
    try {
        console.log("2. Config file read karne ki koshish...");
        const data = fs.readFileSync('yeh_file_hai_hi_nahi.txt', 'utf8');
        console.log(data);
    } catch (error) {
        // Error aate hi execution yahan aa jayegi
        console.log("❌ Oops! File nahi mili. Server crash hone se bacha liya gaya.");
        console.log("Error Message:", error.message);
    }

    // Server crash nahi hua isliye ye line print hogi!
    console.log("\n3. Ye line tabhi print hogi agar server crash NAHI hua ho.");
    console.log("✅ Success: Application abhi bhi zinda hai aur dusre users ko serve kar sakti hai!");
};

runSyncErrorPractical();

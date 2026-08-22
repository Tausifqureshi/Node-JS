// ========================================= Uncaught Exception Practical ======================================= //
// Kabhi-kabhi developers galti kar dete hain aur error handle karna bhool jate hain.
// Aisi situation me Node.js crash ho jata hai, aur screen par lambi-choudi lal error aati hai.
// process.on('uncaughtException') us crash ko gracefully handle karne ke liye "Aakhiri Ummeed" (Last Line of Defense) hota hai.

console.log("=== Uncaught Exception Handling ===\n");

// 1. Safety Net lagana (Hamesha server.js ke shuru me likhte hain)
process.on('uncaughtException', (err) => {
    console.log("🚨 [EMERGENCY ALERT] Ek unhandled error pakda gaya!");
    console.log("Error details:", err.message);
    
    // Yahan hum normally support team ko email/slack message bhejte hain
    console.log("Log saved to error_logs.txt. Alert sent to Developers!");
    
    // Fir server ko aaram se band kar dete hain (Graceful shutdown)
    process.exit(1);
});

console.log("1. Server chal raha hai...");

setTimeout(() => {
    console.log("2. Koi function chala jisme developer try-catch lagana bhool gaya.");
    
    // 🚨 Ye ek unhandled exception hai (Iske aas-paas koi try-catch nahi hai)
    throw new Error("Database connection achanak se toot gaya!");

}, 1000);

// Note: Ye code run karne par terminal me red error nahi aayegi, 
// balki hamara custom 🚨 EMERGENCY ALERT aayega, jiska matlab safety net ne kaam kiya!

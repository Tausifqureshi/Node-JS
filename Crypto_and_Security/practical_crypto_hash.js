// ========================================= Crypto Hashing Practical ======================================= //
// Ye Node.js ka built-in tarika hai data ko secure karne ka.

const crypto = require('crypto');

const runCryptoPractical = () => {
    console.log("=== Crypto Hash Ka Asli Use ===\n");

    const originalMessage = "NodejsIsAwesome";
    console.log("Original Password: ", originalMessage);

    // sha256 ek bahut famous hashing algorithm hai
    const hashData = crypto.createHash('sha256').update(originalMessage).digest('hex');

    console.log("\nSecure Hash Ban Gaya:");
    console.log(hashData);

    console.log("\nNote: Ek baar hash ban gaya toh usko wapas 'NodejsIsAwesome' me badalna namumkin hai! (One-way encryption)");
};

runCryptoPractical();

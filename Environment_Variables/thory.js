// ========================================= Environment Variables ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Environment Variables Kya Hote Hain?
// Environment variables aisi hidden (chupi hui) values hoti hain jo hum seedha apne code me hardcode nahi karte. 
// Inka use application ki configuration ya sensitive secrets manage karne ke liye kiya jata hai.

// ========================================= Iski Zarurat Kyun Hai? ======================================= //
// 1. Security (Sabse main): Agar hum Database ka password, Payment API Keys, ya JWT Secret apne code me likh denge, aur GitHub par push karenge, toh koi bhi usko chura lega! Ye ek bada security risk hai.
// 2. Flexibility: Hamara app alag-alag environments me chalta hai. Environment variables se hum bina code change kiye alag-alag Database links ya PORT use kar sakte hain.

const environmentVariablesConcept = () => {
    // Agar hum code me aisa likhenge toh ye bahut dangerous hai! (Bad Practice)
    // const dbPassword = "tausif_super_secret_password_123"; 

    // Isliye hum environment variables use karte hain (Good Practice)
    const dbPassword = process.env.DB_PASSWORD || "default_local_password";
    
    console.log("=== Environment Variables Concept ===");
    console.log("Database Password used: ", dbPassword);
    console.log("Security maintained! Code me password nahi likha gaya.");
};
// environmentVariablesConcept();


// ========================================= dotenv Package ======================================= //
// In secrets ko manage karne ke liye hum Node.js me 'dotenv' naam ka npm package use karte hain.
// Node.js me inhe access karne ke liye hum globally available `process.env.VARIABLE_NAME` ka use karte hain.
// Note: `.env` file ko hamesha `.gitignore` me daalna chahiye!

// 1. Terminal me run karein: npm install dotenv
// 2. Project me .env file banayein: SECRET_KEY=mySuperSecret123

const dotenvUsageExample = () => {
    // Dotenv ko activate kiya (Ye .env file ko read karega aur process.env me daal dega)
    require('dotenv').config(); 

    // Testing ke liye manual set kar rahe hain (asliyat me ye .env file se aayega)
    process.env.SECRET_KEY = process.env.SECRET_KEY || "fallback_secret_from_dotenv";
    process.env.PORT = process.env.PORT || 8000;

    console.log("\n=== Dotenv Package Usage ===");
    console.log("Server chal raha hai PORT:", process.env.PORT);
    console.log("Hamara Chhupa Hua Secret Hai:", process.env.SECRET_KEY);
};
// dotenvUsageExample();

// ========================================= .env Setup Practical ======================================= //
// Is practical me hum dekhenge ki .env file se data read karke server port set karna kaise kaam karta hai.
// Pura code chalane se pehle: 'npm install dotenv' zaroor karein.

require('dotenv').config(); // Sabse upar config chalana zaroori hai

const runDotenvSetupPractical = () => {
    console.log("=== Dotenv Setup Ka Asli Use ===\n");

    // Real world scenario: Hosting platforms (jaise Heroku ya AWS) apna khud ka PORT set karte hain.
    // Humara code isliye hamesha 'process.env.PORT' check karta hai.
    
    // Yahan hum try karenge environment variable se PORT uthane ki, nahi toh 3000 use karenge.
    const SERVER_PORT = process.env.PORT || 3000;

    console.log(`Checking Environment Variables...`);
    if(process.env.PORT) {
        console.log(`Port ${process.env.PORT} found in Environment!`);
    } else {
        console.log(`No PORT in Environment. Using fallback port 3000.`);
    }

    console.log(`\n🚀 Server is successfully running on port: ${SERVER_PORT}`);
};

runDotenvSetupPractical();

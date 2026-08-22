// ========================================= Database Secrets Practical ======================================= //
// Environment variables ka sabse main use sensitive information jaise Database URLs ya API Keys chupane ke liye hota hai.

require('dotenv').config();

const runDbSecretsPractical = () => {
    console.log("=== Database Secrets Ka Asli Use ===\n");

    // Testing ke liye environment variables manually set kar rahe hain 
    // (Asli project me ye .env file ke andar hote hain jo kisi ko nahi dikhte)
    process.env.DB_USER = "admin_tausif";
    process.env.DB_PASS = "super_secret_p@ssw0rd";
    process.env.JWT_SECRET = "jwt_token_secret_string";

    console.log("1. Application Start Hui...");
    console.log("2. Database se connect karne ki koshish...");

    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASS;

    if (!dbUser || !dbPassword) {
        console.log("❌ Error: Database credentials missing in .env file!");
        return;
    }

    // Dummy connection logic
    const dbUrl = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mongodb.net/myApp`;
    
    console.log(`\n✅ Connected to Database Successfully!`);
    console.log(`(Internal DB URL used: ${dbUrl})`);
    
    console.log("\n🔑 JWT Token generation ke liye hum ye secret use karenge:", process.env.JWT_SECRET);
    console.log("✅ Security Maintained: Ye secrets humare source code me hardcoded nahi the!");
};

runDbSecretsPractical();

// ========================================= Bcrypt Password Practical ======================================= //
// Ye wo tarika hai jo Facebook/Google use karte hain passwords save karne ke liye.
// Ise chalane ke liye terminal me likhein: npm install bcrypt

// Yahan hum try-catch laga rahe hain taaki agar bcrypt install na ho toh code crash na kare, 
// balki message de de.
let bcrypt;
try {
    bcrypt = require('bcrypt');
} catch (e) {
    console.log("Is code ko chalane ke liye pehle terminal me 'npm install bcrypt' likhein.");
    // Dummy functions for demonstration if bcrypt is not installed
    bcrypt = {
        hash: async () => "$2b$10$DummyHashForDemonstration...",
        compare: async () => true
    };
}

const runBcryptPractical = async () => {
    console.log("=== Bcrypt Password Security Ka Asli Use ===\n");

    const userPassword = "MySuperSecretPassword123";
    console.log("1. User ne Signup kiya password ke sath:", userPassword);

    // 1. Password Hash Karna (Salt rounds = 10, ye industry standard hai)
    console.log("2. Bcrypt usko encrypt kar raha hai (इसमें थोड़ा time lagta hai)...");
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    
    console.log("3. Database me HASH save hoga:", hashedPassword);


    console.log("\n--- Kuch din baad user wapas Aaya (Login karne) ---");
    
    const loginAttempt = "MySuperSecretPassword123"; // Sahi password
    const wrongAttempt = "hacker123"; // Galat password

    // 2. Password Match Karna (Compare)
    console.log(`4. User ne password dala: '${loginAttempt}'`);
    
    // Compare function apne aap check kar leta hai
    const isMatch = await bcrypt.compare(loginAttempt, hashedPassword);
    
    if(isMatch) {
        console.log("✅ Match Successful! User Logged in.");
    } else {
        console.log("❌ Incorrect Password!");
    }
};

runBcryptPractical();

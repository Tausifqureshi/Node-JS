// ========================================= Security in Node.js Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// Jab hum Database me user ka password save karte hain, toh kabhi bhi uska original password (jaise '12345') nahi likhte.
// Kyun? Kyunki agar kal ko Database hack ho gaya, toh hacker ko sabke asli passwords pata chal jayenge.
// Isliye hum Passwords ko HASH (Encrypt/Scramble) karke save karte hain (jaise: '$2b$10$xyzabc123...').

// ========================================= 1. Crypto Module (Built-in) ======================================= //
// Node.js ka apna ek core module hota hai 'crypto', jo cryptography aur hashing ke liye use hota hai.

const cryptoTheoryExample = () => {
    console.log("=== Built-in Crypto Theory ===\n");
    console.log("Crypto bahut powerful module hai. Ye OTP generate karne, Password hash karne, aur Tokens banane me kaam aata hai.");
    console.log("Lekin industry me passwords ke liye 'crypto' se zyada 'bcrypt' NPM package ka use hota hai kyunki wo zyada secure aur slow hota hai (Brute Force attacks rokne ke liye).");
};
// cryptoTheoryExample();


// ========================================= 2. Bcrypt (Third Party) ======================================= //
// Asli backend me sabhi developers 'bcrypt' (ya bcryptjs) package ka use karte hain.
// Isme 'Salt' ka concept hota hai. Salt ek random string hoti hai jo asli password me mix ki jati hai hash karne se pehle. Isse same password wale 2 users ka hash bhi alag-alag dikhta hai!

const bcryptTheoryExample = () => {
    console.log("\n=== Bcrypt Theory ===\n");
    console.log("User ka Asli Password: 'password123'");
    console.log("Bcrypt ne banaya: '$2b$10$wI/O6OQO9XvHXZ...'");
    console.log("Database me sirf wo ajeeb si string (hash) save hoti hai.");
};
// bcryptTheoryExample();

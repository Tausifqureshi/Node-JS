// ========================================= req.body Practical ======================================= //
// Jab user Signup ya Login karta hai, tab sensitive data POST request me bheja jata hai.
// Us data ko 'req.body' me padhne ke liye Middleware chahiye.

const express = require('express');
const app = express();

const runReqBodyPractical = () => {
    console.log("=== req.body Ka Asli Use ===\n");

    // 🚨 Ye Middleware bahut zaroori hai JSON data ko padhne ke liye! Iske bina req.body 'undefined' aayega.
    app.use(express.json()); 

    // Jab data create/save karna ho toh hamesha POST request use karte hain
    app.post('/api/register', (req, res) => {
        
        // Real Case: Jab user apni details (Email, Password) form me daal kar register/login karta hai, toh Express un chhipi hui (secret) details ko 'req.body' me rakhta hai taaki hum use database me save ya verify kar sakein.
        // Frontend se bheja gaya data nikalna
        const { username, email, password } = req.body;

        // Basic Validation
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "Sabhi fields zaroori hain!" });
        }

        console.log("\n[BACKEND SUCCESS] Naya user aagaya!");
        console.log("Name:", username);
        console.log("Email:", email);
        console.log("Password:", "******** (Encrypted maan lo)");

        // Frontend ko response
        res.json({
            success: true,
            message: `${username} successfully register ho gaya hai!`
        });
    });

    const PORT = 5003;
    app.listen(PORT, () => {
        console.log(`🚀 Body Parser Server chal gaya!`);
        console.log(`👉 Ye ek POST route hai. Browser me type karne se kaam nahi karega.`);
        console.log(`👉 Isko test karne ke liye 'Postman' ya 'ThunderClient' kholiye aur is par POST Request bhejiye:`);
        console.log(`URL: http://localhost:${PORT}/api/register`);
        console.log(`Body (JSON): { "username": "Tausif", "email": "admin@test.com", "password": "123" }`);
    });
};

runReqBodyPractical();

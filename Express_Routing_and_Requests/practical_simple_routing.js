// Express require karna padta hai
const express = require('express');
const app = express();

console.log("=== Express Simple Routing Demo ===\n");

// ==========================================
// 1. Root Route (Home Page)
// ==========================================
// Jab user direct 'http://localhost:3000/' par jayega
app.get('/', (req, res) => {
    // Express me hum direct res.send() use karte hain (response.end() aur content-type ki zaroorat nahi padti)
    res.send("<h1>Welcome to Home Page</h1><p>Ye Express ki sabse basic routing hai!</p>");
});


// ==========================================
// 2. About Route
// ==========================================
// Jab user 'http://localhost:3000/about' par jayega
app.get('/about', (req, res) => {
    res.send("<h1>About Us Page</h1><p>Hum Tausif bhai ke sath Node.js seekh rahe hain.</p>");
});


// ==========================================
// 3. API Route (JSON Bhejna)
// ==========================================
// Jab user 'http://localhost:3000/api/user' par jayega
app.get('/api/user', (req, res) => {
    const userData = {
        name: "Tausif Qureshi",
        role: "Developer",
        skill: "Express.js"
    };
    // Express me object ko JSON me badalne ke liye (JSON.stringify) ki zarurat nahi hai!
    // Bas res.json() use karo, Express sab khud sambhal lega.
    res.json(userData); 
});


// ==========================================
// 4. Fallback (404 Error Route)
// ==========================================
// Express me agar koi route na mile toh sabse aakhiri me 'app.use' chal jata hai
app.use((req, res) => {
    // status(404) set karke directly error page bhej diya
    res.status(404).send("<h1>404 Error - Page Not Found ❌</h1><p>Bhai aap galat URL par aagaye ho!</p>");
});


// ==========================================
// Server Start Karna
// ==========================================
app.listen(3000, () => {
    console.log("✅ Express Server Chalu ho gaya hai!");
    console.log("👉 Home: http://localhost:3000");
    console.log("👉 About: http://localhost:3000/about");
    console.log("👉 API Test: http://localhost:3000/api/user");
    console.log("👉 404 Error Test: http://localhost:3000/kuchbhi");
});

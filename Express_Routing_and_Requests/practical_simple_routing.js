const express = require('express');

console.log("=== Express Routing Demo (3 Alag Servers) ===\n");

// =======================================================
// 1. HOME ROUTE SERVER - Port 3000
// =======================================================
// Ye pehla server banaya jo sirf Home (http://localhost:3000/) handle karega
const homeApp = express();

homeApp.get('/', (req, res) => {
    // Express me hum direct res.send() use karte hain (response.end() ki zarurat nahi)
    res.send("<h1>Welcome to Home Page</h1><p>Ye Express ki sabse basic routing hai!</p>");
});

// Agar koi aur raste par jaye (404 Error)
homeApp.use((req, res) => {
    res.status(404).send("<h1>404 Error - Yahan sirf Home (http://localhost:3000/) chalta hai! ❌</h1>");
});

homeApp.listen(3000, () => {
    console.log("✅ 1. Home Server Chalu: http://localhost:3000");
});


// =======================================================
// 2. ABOUT ROUTE SERVER - Port 3001
// =======================================================
// Ye dusra alag server banaya jo sirf About (http://localhost:3001/about) handle karega
const aboutApp = express();

aboutApp.get('/about', (req, res) => {
    res.send("<h1>About Us Page</h1><p>Hum Tausif bhai ke sath Node.js seekh rahe hain.</p>");
});

// Agar koi aur raste par jaye (404 Error)
aboutApp.use((req, res) => {
    res.status(404).send("<h1>404 Error - Yahan sirf About (http://localhost:3001/about) chalta hai! ❌</h1>");
});

aboutApp.listen(3001, () => {
    console.log("✅ 2. About Server Chalu: http://localhost:3001/about");
});


// =======================================================
// 3. API ROUTE SERVER (JSON Bhejna) - Port 3002
// =======================================================
// Ye teesra alag server banaya jo sirf API (http://localhost:3002/api/user) handle karega
const apiApp = express();

apiApp.get('/api/user', (req, res) => {
    const userData = {
        name: "Tausif Qureshi",
        role: "Developer",
        skill: "Express.js"
    };
    // Express me object ko JSON me badalne ke liye res.json() use karo
    res.json(userData); 
});

// Agar koi aur raste par jaye (404 Error)
apiApp.use((req, res) => {
    res.status(404).send("<h1>404 Error - Yahan sirf API (http://localhost:3002/api/user) chalta hai! ❌</h1>");
});

apiApp.listen(3002, () => {
    console.log("✅ 3. API Server Chalu: http://localhost:3002/api/user");
    console.log("\n⚠️ Note: Sabhi servers ko ek sath band karne ke liye terminal me 'Ctrl + C' dabayein.");
});

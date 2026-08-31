// ========================================= BASIC ROUTING (With Real-World Error Handling) ======================================= //
// Express me basic routing handle karne ka tareeqa, 404 aur real-world error handling ke sath.

const express = require('express');
const app = express();

console.log("=== Basic Routing Server Starting ===\n");

// 1. Home Route
app.get('/', (req, res) => {
    res.send("<h1>🏠 Home Page</h1><a href='/about'>Go to About</a> | <a href='/contact'>Go to Contact</a> | <a href='/broken'>Test 500 Error</a>");
});

// 2. About Route
app.get('/about', (req, res) => {
    res.send("<h1>ℹ️ About Us</h1><p>Express Routing is easy!</p><a href='/'>Go to Home</a>");
});

// 3. Contact Route
app.get('/contact', (req, res) => {
    res.send("<h1>📞 Contact Us</h1><p>Email: admin@tausif.com</p><a href='/'>Go to Home</a>");
});

// 4. Simulate Server Error (500)
app.get('/broken', (req, res) => {
    // Yahan hum jaan-boojh kar ek error throw kar rahe hain (Real case me DB fail ho sakta hai)
    throw new Error("Database connection fail ho gaya ya koi internal error aagayi!");
});

// 5. Handle 404 - Page Not Found (Hamesha end me likhte hain)
// Agar user kisi aisi link pe jaye jo humne define nahi ki hai (jaise /wrong-url), toh ye chalega.
app.use((req, res) => {
    res.status(404).send("<h1 style='color:red;'>❌ 404 Error: Page Not Found</h1><p>Ye rasta exist nahi karta.</p><a href='/'>Go back home</a>");
});

// 6. Global Error Handler (500 Internal Server Error)
// Agar kisi bhi route me koi code phat jaye (crash ho jaye), toh server band nahi hoga, ye usko handle karega.
app.use((err, req, res, next) => {
    console.error("🔥 Global Error Caught:", err.message);
    res.status(500).send(`<h1 style='color:red;'>❌ 500 Error: Internal Server Error</h1><p>Server me kuch gadbad ho gayi hai!</p><p><b>Error Details:</b> ${err.message}</p>`);
});

const PORT = 3003;

// Server start karna
const server = app.listen(PORT, () => {
    console.log("🚀 Basic Routing Server on http://localhost:" + PORT);
    console.log("👉 Test Home  : http://localhost:" + PORT);
    console.log("👉 Test About : http://localhost:" + PORT + "/about");
    console.log("👉 Test 404   : http://localhost:" + PORT + "/wrong-url");
    console.log("👉 Test 500   : http://localhost:" + PORT + "/broken");
});

// Real Case Server Errors Handle Karna
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`❌ ERROR: Port ${PORT} pehle se busy hai!`);
        console.log(`💡 SOLUTION: Purana server band karein (Ctrl+C) ya PORT change karein.`);
    } else if (err.code === 'EACCES') {
        console.log(`❌ ERROR: Port ${PORT} use karne ki permission nahi hai (Admin rights chahiye).`);
    } else {
        console.log("❌ SERVER ERROR:", err.message);
    }
});

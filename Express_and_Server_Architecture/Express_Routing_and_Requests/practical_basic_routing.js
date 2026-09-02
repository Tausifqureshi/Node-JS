// ========================================= BASIC ROUTING (With Real-World 'req' Usage & Error Handling) ======================================= //
// Express me basic routing aur 'req' (Request) object ka asli zindagi (real-world) me kaise use hota hai.

const express = require('express');
const app = express();

console.log("=== Basic Routing Server Starting ===\n");

// 1. Home Route - 'req' se User ki Basic Details nikalna (Method, URL, IP)
app.get('/', (req, res) => {
    // Real Case: Logging ke liye humein pata hona chahiye ki request kahan se aayi hai.
    const userIP = req.ip; 
    const reqMethod = req.method; 
    
    console.log(`[LOG] Kisi ne ${reqMethod} request bheji hai URL: ${req.url} par. IP: ${userIP}`);

    res.send(`
        <h1>🏠 Home Page</h1>
        <p>Aapka IP Address: <b>${userIP}</b></p>
        <p>Aapne konsa method use kiya: <b>${reqMethod}</b></p>
        <hr>
        <a href='/about'>Go to About</a> | <a href='/contact?name=Tausif'>Go to Contact</a> | <a href='/broken'>Test 500 Error</a>
    `);
});

// 2. About Route - 'req.headers' se pata lagana ki user mobile se hai ya laptop (Browser Details)
app.get('/about', (req, res) => {
    // Real Case: Agar user mobile se hai toh alag design dikhao, laptop se hai toh alag. Ye 'user-agent' se pata chalta hai.
    const userAgent = req.headers['user-agent'];
    
    res.send(`
        <h1>ℹ️ About Us</h1>
        <p>Aap ye browser ya device use kar rahe hain:</p>
        <p style='color: blue;'>${userAgent}</p>
        <hr>
        <a href='/'>Go to Home</a>
    `);
});

// 3. Contact Route - 'req.query' se URL me bheja gaya data nikalna (?name=Tausif)
app.get('/contact', (req, res) => {
    // Real Case: Google search me hum jo likhte hain wo URL me 'query' bankar jata hai (jaise ?q=nodejs).
    // Try karein: http://localhost:3003/contact?name=Tausif&topic=Express
    
    const userName = req.query.name || "Guest"; // Agar naam nahi bheja toh 'Guest' manenge
    const topic = req.query.topic || "kuch bhi nahi";

    res.send(`
        <h1>📞 Contact Us</h1>
        <p>Hello <b>${userName}</b>! Aap yahan <b>${topic}</b> ke baare me baat karne aaye hain.</p>
        <p>Email: admin@tausif.com</p>
        <hr>
        <a href='/'>Go to Home</a>
    `);
});

// 4. Simulate Server Error (500)
app.get('/broken', (req, res) => {
    // Yahan hum jaan-boojh kar ek error throw kar rahe hain (Real case me DB fail ho sakta hai)
    throw new Error("Database connection fail ho gaya ya koi internal error aagayi!");
});

// 5. Handle 404 - Page Not Found (Hamesha end me likhte hain)
// Agar user kisi aisi link pe jaye jo humne define nahi ki hai (jaise /wrong-url), toh ye chalega.
app.use((req, res) => {
    // req.originalUrl me wo galat rasta hota hai jo user ne type kiya hai
    res.status(404).send(`
        <h1 style='color:red;'>❌ 404 Error: Page Not Found</h1>
        <p>Aapne jo rasta manga hai: <b>${req.originalUrl}</b>, wo exist nahi karta.</p>
        <a href='/'>Go back home</a>
    `);
});

// 6. Global Error Handler (500 Internal Server Error)
// Agar kisi bhi route me koi code phat jaye (crash ho jaye), toh server band nahi hoga, ye usko handle karega.
app.use((err, req, res, next) => {
    console.error(`🔥 Global Error Caught at ${req.url}:`, err.message);
    res.status(500).send(`<h1 style='color:red;'>❌ 500 Error: Internal Server Error</h1><p>Server me kuch gadbad ho gayi hai!</p><p><b>Error Details:</b> ${err.message}</p>`);
});

const PORT = 3003;

// Server start karna
const server = app.listen(PORT, () => {
    console.log("🚀 Basic Routing Server on http://localhost:" + PORT);
    console.log("👉 Test Home   : http://localhost:" + PORT);
    console.log("👉 Test About  : http://localhost:" + PORT + "/about");
    console.log("👉 Test Contact: http://localhost:" + PORT + "/contact?name=Tausif&topic=NodeJS");
    console.log("👉 Test 404    : http://localhost:" + PORT + "/wrong-url");
    console.log("👉 Test 500    : http://localhost:" + PORT + "/broken");
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

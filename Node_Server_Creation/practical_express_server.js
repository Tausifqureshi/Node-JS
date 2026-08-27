// ========================================= 1. Normal / Basic Express Server ======================================= //
// Ye sabse basic aur normal Express server hai. (Bina POST route ya JSON middleware ke).
// Asli duniya me jab bhi hum naya Express project banate hain, toh aisi hi simple file se shuruwat hoti hai.

const express = require('express');

const runBasicExpressServer = () => {
    console.log("=== Normal Express Server ===\n");

    const app = express();

    app.get('/', (req, res) => {
        res.send("Hello Bhai! Ye ek dum normal aur basic Express.js server hai.");
    });

    app.use((req, res) => {
        res.status(404).send("404 Error: Yahan sirf / (Home) chalta hai!");
    });

    const PORT = 3008;
    app.listen(PORT, () => {
        console.log(`🚀 Normal Express Server chal raha hai! 👉 http://localhost:${PORT}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') console.log(`❌ ERROR: Port ${PORT} pehle se busy hai!`);
        else console.log("❌ SERVER ERROR:", err.message);
    });
};
// runBasicExpressServer(); // Uncomment to run


// ========================================= 2. Advanced Express.js Server Practical ======================================= //
// Express.js wahi upar wala kaam karta hai (Node.js HTTP module use karke),
// par iska syntax bohot clean aur chota hota hai. Ye industry standard hai.

const runAdvancedExpressServer = () => {
    console.log("=== Advanced Express.js Server Ka Asli Use ===\n");

    const app = express(); // Naya app instance banaya advanced ke liye
    
    // Middleware setup (Express me JSON parse karna bahut asaan hai)
    app.use(express.json());

    // Clean Routing
    app.get('/', (req, res) => {
        // Dekho Express me 'res.writeHead' aur 'res.end(JSON.stringify)' karne ki zarurat nahi hoti
        // Ye directly 'res.json()' se kaam kar deta hai
        res.json({
            server: "Express.js (Modern)",
            status: "Running Successfully",
            developer: "Tausif"
        });
    });

    app.post('/api/login', (req, res) => {
        const { username, password } = req.body;
        
        if(username === "admin" && password === "1234") {
            res.json({ success: true, message: "Login successful!" });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    });

    app.use((req, res) => {
        res.status(404).json({ success: false, message: "404 Error: Route not found!" });
    });

    const PORT = 3006;
    app.listen(PORT, () => {
        console.log(`🚀 Modern Express Server is running!`);
        console.log(`👉 Home API check karein: http://localhost:${PORT}`);
        console.log(`👉 POST API ke liye Postman use karein: http://localhost:${PORT}/api/login`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') console.log(`❌ ERROR: Port ${PORT} pehle se busy hai!`);
        else console.log("❌ SERVER ERROR:", err.message);
    });
};

runAdvancedExpressServer(); // Yahi by default chalega

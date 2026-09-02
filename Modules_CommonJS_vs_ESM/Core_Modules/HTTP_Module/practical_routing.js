// ========================================= HTTP Routing Practical ======================================= //
// Asliyat me har website me pages hote hain (Home, About, Contact).
// Is practical me hum dekhenge ki bina Express.js ke URL (Routing) ko kaise handle kiya jata hai.

const http = require('http');

const runRoutingPractical = () => {
    console.log("=== HTTP Routing Ka Asli Use ===\n");

    const server = http.createServer((req, res) => {
        // Real Case: Jab user kisi specific page (jaise '/about') pe jana chahta hai, toh 'req.url' batata hai ki user kahan jana chahta hai. Iske base par hum tay karte hain kaunsa page dikhana hai.
        const url = req.url;

        res.writeHead(200, { 'Content-Type': 'text/html' });

        if (url === '/') {
            res.end("<h1>🏠 Home Page</h1><a href='/about'>Go to About</a> | <a href='/contact'>Go to Contact</a>");
        } 
        else if (url === '/about') {
            res.end("<h1>ℹ️ About Us</h1><p>Hum Node.js seekh rahe hain!</p><a href='/'>Go to Home</a>");
        } 
        else if (url === '/contact') {
            res.end("<h1>📞 Contact Us</h1><p>Email: admin@tausif.com</p><a href='/'>Go to Home</a>");
        } 
        else {
            // Agar koi aisi link dal de jo exist nahi karti
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1 style='color: red;'>404 - Page Not Found</h1><a href='/'>Go back home</a>");
        }
    });

    const PORT = 3002;

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`❌ ERROR: Port ${PORT} pehle se busy hai!`);
        } else {
            console.log("❌ SERVER ERROR:", err.message);
        }
    });

    server.listen(PORT, () => {
        console.log(`🚀 Routing Server chal gaya!`);
        console.log(`👉 Open: http://localhost:${PORT}`);
        console.log(`👉 Test: http://localhost:${PORT}/about`);
        console.log(`👉 Test: http://localhost:${PORT}/contact`);
    });
};

runRoutingPractical();

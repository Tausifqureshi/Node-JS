const http = require('http');           

console.log("=== HTTP Module Demo (3 Alag Servers) ===\n");

// =======================================================
// 1. BASIC SERVER (Sirf Text Bhejna) - Port 3000
// =======================================================
// Ye server sabse basic hai jisme sirf plain text bheja ja raha hai.
const basicServer = http.createServer((request, response) => {
    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        
        // response.end() browser ko signal deta hai ki "Mera kaam khatam, ab connection close kar do".
        // Varna browser ko lagega aur data aane wala hai, aur wo hamesha loading (gol-gol) karta rahega!
        // Isme hum direct data bhi pass kar sakte hain, ye ek shortcut hai.
        response.end("Hello Tausif Bhai! Aapka Basic HTTP Server chal gaya hai.");
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end("404 Error: Page nahi mila!");
    }
});

// Server me agar koi internal error aaye (jaise port pehle se busy ho) toh usko pakadna
basicServer.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log("❌ ERROR: Port 3000 pehle se busy hai. Purana server band karein!");
    } else {
        console.log("❌ SERVER ERROR:", err.message);
    }
});

basicServer.listen(3000, () => {
    console.log("✅ 1. Basic Text Server chalu: http://localhost:3000");
});


// =======================================================
// 2. JSON OBJECT BHEJNE WALA SERVER - Port 3001
// =======================================================
// Ye dikhata hai ki server banakar usme ek Object (JSON) kaise bhejte hain.
const jsonServer = http.createServer((request, response) => {
    if (request.url === '/api/user') {
        const userObj = {
            name: "Tausif Qureshi",
            role: "Developer",
            skill: "Node.js"
        };
        
        // Header me Content-Type ko 'application/json' dena zaroori hai
        response.writeHead(200, {'Content-Type': 'application/json'});
        
        // Object ko seedha nahi bhej sakte, JSON String me badalna padta hai bhejte waqt.
        response.end(JSON.stringify(userObj));
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end("404 Error: Yahan sirf /api/user chalta hai!");
    }
});

jsonServer.on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port 3001 pehle se busy hai!");
});

jsonServer.listen(3001, () => {
    console.log("✅ 2. JSON Object Server chalu: http://localhost:3001");
});


// =======================================================
// 3. HTML KA KAAM BHEJNE KA TARIKA - Port 3002
// =======================================================
// Ye dikhata hai ki server banakar ek HTML webpage kaise bhejte hain.
const htmlServer = http.createServer((request, response) => {
    if (request.url === '/html') {
        // Header me Content-Type ko 'text/html' dena zaroori hai, tabhi browser isko webpage samjhega
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        // HTML structure directly response me bhej sakte hain
        const htmlContent = `
            <html>
                <head><title>My Node Server</title></head>
                <body style="font-family: Arial; text-align: center; margin-top: 50px;">
                    <h1 style="color: blue;">Welcome to Node.js HTML Page! 🚀</h1>
                    <p>Ye HTML page alag server se aa raha hai.</p>
                </body>
            </html>
        `;
        response.end(htmlContent);
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end("404 Error: Yahan sirf /html chalta hai!");
    }
});

htmlServer.on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port 3002 pehle se busy hai!");
});

htmlServer.listen(3002, () => {
    console.log("✅ 3. HTML Server chalu ho gaya hai: http://localhost:3002");
    console.log("\n⚠️ Note: Sabhi servers ko ek sath band karne ke liye terminal me 'Ctrl + C' dabayein.");
});

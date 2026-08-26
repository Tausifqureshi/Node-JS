const http = require('http');           

console.log("=== HTTP Module Demo ===\n");

// =======================================================
// 1. BASIC SERVER (Sirf Text Bhejna & 404 Error) - Port 3001
// =======================================================
const server1 = http.createServer((request, response) => {
    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        
        // response.end() browser ko signal deta hai ki "Mera kaam khatam, ab connection close kar do".
        // Varna browser ko lagega aur data aane wala hai, aur wo hamesha loading (gol-gol) karta rahega!
        // Isme hum direct data bhi pass kar sakte hain, ye ek shortcut hai.
        response.end("Hello Tausif Bhai! Aapka Basic HTTP Server chal gaya hai.");
    } else {
        // Agar koi galat URL par jaye (jaise /xyz ya /about) toh 404 Error (Not Found) bhejna
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end("ERROR 404: Ye page exist nahi karta bhai!");
    }
});

// Server me agar koi internal error aaye (jaise port 3001 pehle se busy ho) toh usko pakadna (handle karna)
server1.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log("❌ ERROR: Port 3001 pehle se kisi aur kaam me busy hai. Kripya dusra port try karein!");
    } else {
        console.log("❌ SERVER ERROR:", err.message);
    }
});

server1.listen(3001, () => {
    console.log("✅ 1. Basic Text Server chalu: http://localhost:3001");
    console.log("   👉 404 Error test karne ke liye: http://localhost:3001/kuchbhi");
});


// =======================================================
// 2. JSON OBJECT BHEJNE WALA SERVER - Port 3002
// =======================================================
const server2 = http.createServer((request, response) => {
    const userObj = {
        name: "Tausif Qureshi",
        role: "Developer",
        skill: "Node.js"
    };
    
    // Header me Content-Type ko 'application/json' dena zaroori hai
    response.writeHead(200, {'Content-Type': 'application/json'});
    
    // Object ko seedha nahi bhej sakte, JSON String me badalna padta hai bhejte waqt. 
    response.end(JSON.stringify(userObj));
});

// Isme bhi error aane par handle kiya gaya hai
server2.on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port 3002 busy hai!");
});

server2.listen(3002, () => {
    console.log("\n✅ 2. JSON Object Server chalu: http://localhost:3002");
});


// =======================================================
// 3. HTML CODE BHEJNE WALA SERVER - Port 3003
// =======================================================
const server3 = http.createServer((request, response) => {
    // Header me Content-Type ko 'text/html' dena zaroori hai, tabhi browser isko webpage samjhega
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    // HTML structure directly response me bhej sakte hain
    const htmlContent = `
        <html>
            <head><title>My Node Server</title></head>
            <body style="font-family: Arial; text-align: center; margin-top: 50px;">
                <h1 style="color: blue;">Welcome to Node.js HTML Page! 🚀</h1>
                <p>Ye page direct server se aa raha hai, bina kisi frontend framework ke.</p>
            </body>
        </html>
    `;
    response.end(htmlContent);
});

// Isme bhi error aane par handle kiya gaya hai
server3.on('error', (err) => {
    if (err.code === 'EADDRINUSE') console.log("❌ ERROR: Port 3003 busy hai!");
});

server3.listen(3003, () => {
    console.log("\n✅ 3. HTML Page Server chalu: http://localhost:3003");
    console.log("\n⚠️ Note: Sabhi servers ko ek sath band karne ke liye terminal me 'Ctrl + C' dabayein.");
});

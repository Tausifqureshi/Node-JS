const http = require('http');           

console.log("=== HTTP Module Demo ===\n");

// =======================================================
// 1. BASIC SERVER (Sirf Text Bhejna) - Port 3001
// =======================================================
const server1 = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // response.end() pehle data bhejta hai, aur fir connection close kar deta hai.
    response.end("Hello Tausif Bhai! Aapka Basic HTTP Server chal gaya hai.");
});

server1.listen(3001, () => {
    console.log("✅ Basic Text Server chalu: http://localhost:3001");
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
    
    // Object ko JSON String me badalna padta hai bhejte waqt
    response.end(JSON.stringify(userObj));
});

server2.listen(3002, () => {
    console.log("✅ JSON Object Server chalu: http://localhost:3002");
});


// =======================================================
// 3. HTML CODE BHEJNE WALA SERVER - Port 3003
// =======================================================
const server3 = http.createServer((request, response) => {
    // Header me Content-Type ko 'text/html' dena zaroori hai, tabhi browser usko page samjhega
    response.writeHead(200, {'Content-Type': 'text/html'});
    
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

server3.listen(3003, () => {
    console.log("✅ HTML Page Server chalu: http://localhost:3003");
    console.log("\n⚠️ Note: Sabhi servers ko band karne ke liye terminal me 'Ctrl + C' dabayein.");
});

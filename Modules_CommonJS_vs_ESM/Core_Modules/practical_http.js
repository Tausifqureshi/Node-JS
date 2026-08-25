const http = require('http');           

console.log("=== HTTP Module Demo ===\n");

// 1. Ek dum basic web server banana
const server = http.createServer((request, response) => {
    // Basic Routing aur Error (404) Handle karna
    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        // response.end() me hum direct data bhi pass kar sakte hain. Ye ek shortcut hai.
        // Ye pehle data browser ko bhejta hai, aur fir turant connection close kar deta hai.
        response.end("Hello Tausif Bhai! Aapka Basic HTTP Server chal gaya hai.");
    } else if (request.url === '/api/user') {
        // Javascript Object (JSON) ko response me bhejna
        const userObj = {
            name: "Tausif Qureshi",
            role: "Developer",
            skill: "Node.js"
        };
        // Header me Content-Type ko 'application/json' dena zaroori hai
        response.writeHead(200, {'Content-Type': 'application/json'});
        // Object ko seedha nahi bhej sakte, JSON String me badalna padta hai. 
        // Yahan bhi hum .write() ki jagah direct .end() me data bhej rahe hain.
        response.end(JSON.stringify(userObj));
    } else {
        // Agar koi galat URL par jaye (jaise /xyz ya /about)
        response.writeHead(404, {'Content-Type': 'text/plain'});
        // Yahan bhi direct response.end() ka shortcut use kiya hai
        response.end("ERROR 404: Ye page exist nahi karta bhai!");
    }
});

// 2. Server me agar koi internal error aaye (jaise port 3000 pehle se busy ho) toh usko pakadna (handle karna)
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log("❌ ERROR: Port 3000 pehle se kisi aur kaam me busy hai. Kripya dusra port try karein ya purana server band karein!");
    } else {
        console.log("❌ SERVER ERROR:", err.message);
    }
});

// 3. Server ko ek port (jaise 3000) par chalu (listen) karna
server.listen(3000, () => {
    console.log("✅ HTTP Server chalu ho gaya hai!");
    console.log("👉 Sahi page ke liye browser me kholen: http://localhost:3000");
    console.log("👉 Error (404) test karne ke liye kholen: http://localhost:3000/kuchbhi");
    console.log("👉 JSON Object test karne ke liye kholen: http://localhost:3000/api/user");
    console.log("\n⚠️ Note: Server ko band karne ke liye terminal me 'Ctrl + C' dabayein.");
});

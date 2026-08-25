const http = require('http');           

console.log("=== HTTP Module Demo ===\n");

// 1. Ek dum basic web server banana
const server = http.createServer((request, response) => {
    // Jab koi browser se request bhejega, toh server ye text bhej dega
    response.write("Hello Tausif Bhai! Aapka Basic HTTP Server chal gaya hai.");
    response.end(); // Response khatam karna zaroori hota hai
});

// 2. Server ko ek port (jaise 3000) par chalu (listen) karna
server.listen(3000, () => {
    console.log("✅ HTTP Server chalu ho gaya hai!");
    console.log("👉 Apne browser me ye link open karein: http://localhost:3000");
    console.log("\n⚠️ Note: Server ko band karne ke liye terminal me 'Ctrl + C' dabayein.");
});

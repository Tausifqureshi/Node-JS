const http = require('http');           

console.log("=== HTTP Module Demo ===\n");

// 1. Ek basic web server banate hain
const server = http.createServer((request, response) => {
    // Jab koi request bhejega, toh server ye response dega
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello from Core HTTP Module! Aapka server sahi se chal raha hai.");
});

// 2. Server ko 3005 port par chalu karte hain
server.listen(3005, () => {
    console.log("✅ HTTP Server chalu ho gaya hai: http://localhost:3005");
    
    // DEMO KE LIYE: Hum background me khud hi is server se data mangwa rahe hain
    http.get('http://localhost:3005', (res) => {
        let incomingData = '';
        res.on('data', (chunk) => { incomingData += chunk; });
        
        res.on('end', () => {
            console.log(`✅ Server ka Reply Aaya: "${incomingData}"`);
            
            // Demo khatam hone ke baad server band kar diya taaki terminal freeze na ho
            server.close();
            console.log("\n✅ Success: Demo Complete!");
        });
    });
});

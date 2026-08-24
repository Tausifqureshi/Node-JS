// ========================================= Core Modules Practical ======================================= //
// Node.js me Core Modules pehle se maujood hote hain. Inhe alag se install nahi karna padta.

// Theory (Kaunsa module kya karta hai):
// 1. 'os'     -> Operating System ki jankari (RAM, CPU, User) nikalne ke kaam aata hai.
// 2. 'path'   -> Files aur folders ke sahi location/address banane me kaam aata hai (OS ke hisaab se slash lagata hai).
// 3. 'fs'     -> File System. Nayi file banana, padhna, ya delete karne ke kaam aata hai.
// 4. 'events' -> Custom events banane ke kaam aata hai (Jaise kisi action par backend me reaction dena).
// 5. 'http'   -> Web server banane aur internet par request/response bhejne ke kaam aata hai.

const os = require('os');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events'); // Events module import kiya
const http = require('http');           // HTTP module import kiya

const runCorePractical = () => {
    console.log("=== Core Module Practical Shuru Ho Raha Hai ===\n");

    // ================== 1. OS, PATH, aur FS ================== //
    console.log("--- 1. OS, PATH, aur FS Module ka Demo ---");
    const userInfo = os.userInfo();
    const systemMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const reportData = `User: ${userInfo.username} | RAM: ${systemMemory} GB`;
    
    // 'path' module se location banai, aur 'fs' se wahan file likh di
    const reportFilePath = path.join(__dirname, 'system_report.txt');
    fs.writeFileSync(reportFilePath, reportData);
    console.log(`✅ System report save ho gayi: ${reportFilePath}\n`);


    // ================== 2. EVENTS Module ================== //
    console.log("--- 2. EVENTS Module ka Demo ---");
    const myEmitter = new EventEmitter();

    // Event Listener banaya (Jab 'userLoggedIn' call hoga tab ye chalega)
    myEmitter.on('userLoggedIn', (name) => {
        console.log(`✅ Event Triggered: Welcome to Node.js, ${name}!\n`);
    });

    // Event fire kiya (Emit)
    myEmitter.emit('userLoggedIn', 'Tausif Bhai');


    // ================== 3. HTTP Module ================== //
    console.log("--- 3. HTTP Module ka Demo ---");
    // Ek basic server banate hain jo request aane par response dega
    const server = http.createServer((req, res) => {
        res.end("Hello from Core HTTP Module!");
    });

    // Server ko 3005 port par start kiya
    server.listen(3005, () => {
        console.log("✅ HTTP Server started on http://localhost:3005");
        
        // Demo ke liye, hum khud hi is file se ek HTTP request bhej rahe hain server ko:
        http.get('http://localhost:3005', (response) => {
            let data = '';
            // Data aana shuru hua (Streams/Chunks me aata hai)
            response.on('data', (chunk) => { data += chunk; });
            
            // Pura data aane ke baad
            response.on('end', () => {
                console.log(`✅ Server ne reply diya: "${data}"`);
                
                // Demo khatam hone ke baad server ko band kar dete hain taaki file ruk na jaye
                server.close();
                console.log("\n✅ Success: All Core Modules Tested Successfully!");
            });
        });
    });
};

runCorePractical();

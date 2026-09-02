// ========================================= 1. Normal / Basic HTTP Server ======================================= //
// Ye Node.js ka sabse basic aur normal server hai (Bina kisi extra API ya logic ke).
// Iska maqsad sirf ye sikhana hai ki ek server actually me banta kaise hai.

const http = require('http');

const runBasicHttpServer = () => {
    console.log("=== Normal HTTP Server ===\n");

    const server = http.createServer((req, res) => {
        // Real Case: Server tab tak koi reply nahi deta jab tak use ye pata na ho ki 'req.url' kya hai. Agar URL '/' hai, toh wo samjhega homepage manga hai.
        if (req.url === '/') {
            // Headers dena achhi practice hai (Browser ko batane ke liye ki text bhej rahe hain)
            res.writeHead(200, {
                "Content-Type": "text/plain"
            });
            res.end("Hello Bhai! Server chal raha hai.");
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404 Error: Yahan sirf / (Home) chalta hai!");
        }
    });

    const PORT = 3007;

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`❌ ERROR: Port ${PORT} pehle se busy hai!`);
        } else {
            console.log("❌ SERVER ERROR:", err.message);
        }
    });

    server.listen(PORT, () => {
        console.log(`🚀 Normal HTTP Server chal raha hai! 👉 http://localhost:${PORT}`);
    });
};
// runBasicHttpServer(); // Uncomment to run


// ========================================= 2. Advanced Core HTTP Server Practical ======================================= //
// Ye thoda advanced server hai jo JSON API response deta hai. (Asli duniya me hum Express ka zyada use karte hain)

const runAdvancedNodeHttpServer = () => {
    console.log("=== Advanced Core HTTP Server Ka Asli Use ===\n");

    const server = http.createServer((req, res) => {
        // CORS headers zaroori hote hain agar frontend (React) aur backend alag-alag port pe hon
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Real Case: Yahan API request verify kar rahe hain. URL aur Method dono check hote hain taaki confirm ho ki data maanga (GET) ja raha hai.
        if (req.url === '/' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                server: "Node.js Core HTTP",
                status: "Running Successfully",
                developer: "Tausif"
            }));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404 - Not Found");
        }
    });

    const PORT = 3005;

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`❌ ERROR: Port ${PORT} pehle se busy hai!`);
        } else {
            console.log("❌ SERVER ERROR:", err.message);
        }
    });

    server.listen(PORT, () => {
        console.log(`🚀 Advanced Core HTTP Server is running!`);
        console.log(`👉 API check karein: http://localhost:${PORT}`);
    });
};

runAdvancedNodeHttpServer(); // Yahi by default chalega

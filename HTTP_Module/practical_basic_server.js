// ========================================= Basic HTTP Server Practical ======================================= //
// Ye ek basic HTTP Server hai jo koi bhi request aane par HTML response return karega.

const http = require('http');

const runBasicServerPractical = () => {
    console.log("=== Basic HTTP Server Ka Asli Use ===\n");

    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            // Browser ko batana ki hum HTML bhej rahe hain
            res.writeHead(200, { 'Content-Type': 'text/html' });
            
            // HTML Response bhejkar connection close (end) karna
            res.end(`
                <html>
                    <body style="font-family: Arial; text-align: center; margin-top: 50px;">
                        <h1 style="color: blue;">Welcome to Node.js!</h1>
                        <p>Ye mera pehla basic HTTP Server hai.</p>
                    </body>
                </html>
            `);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404 Error: Yahan sirf / (Home) chalta hai!");
        }
    });

    const PORT = 3001;

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`❌ ERROR: Port ${PORT} pehle se busy hai!`);
        } else {
            console.log("❌ SERVER ERROR:", err.message);
        }
    });

    server.listen(PORT, () => {
        console.log(`🚀 Server successfully start ho gaya hai!`);
        console.log(`👉 Apne browser me open karein: http://localhost:${PORT}`);
        console.log("(Server band karne ke liye Terminal me CTRL+C dabayein)");
    });
};

runBasicServerPractical();

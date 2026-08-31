// ========================================= HTTP JSON API Practical ======================================= //
// Aajkal frontend React/Angular me banta hai aur backend sirf "JSON Data" (API) bhejta hai.
// Ye practical sikhata hai ki HTTP module se REST API kaise banti hai.

const http = require('http');

const runJsonApiPractical = () => {
    console.log("=== HTTP JSON API Ka Asli Use ===\n");

    // Dummy Database
    const users = [
        { id: 1, name: "Tausif Qureshi", role: "Developer" },
        { id: 2, name: "Aman", role: "Designer" }
    ];

    const server = http.createServer((req, res) => {
        
        // API Route: /api/users
        if (req.url === '/api/users' && req.method === 'GET') {
            // Browser ko batana ki hum 'JSON' bhej rahe hain
            res.writeHead(200, { 'Content-Type': 'application/json' });
            
            // JavaScript array ko JSON string me convert karke bhejna zaroori hai
            res.end(JSON.stringify({
                success: true,
                message: "Users fetched successfully",
                data: users
            }));
        } 
        else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, message: "Route not found" }));
        }
    });

    const PORT = 3003;
    
    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`❌ ERROR: Port ${PORT} pehle se busy hai!`);
        } else {
            console.log("❌ SERVER ERROR:", err.message);
        }
    });

    server.listen(PORT, () => {
        console.log(`🚀 JSON API Server is running!`);
        console.log(`👉 JSON Response dekhne ke liye browser me open karein: http://localhost:${PORT}/api/users`);
    });
};

runJsonApiPractical();

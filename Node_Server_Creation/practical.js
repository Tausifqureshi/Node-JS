// ========================================= Node.js Basic Server Practical ============================================ //
// Is code ko run karne ke liye terminal me likhein: node practical.js
// Aur phir browser me open karein: http://localhost:8000

// Step 1: http module import karna
const http = require("http");

// Step 2: Server create karna
const server = http.createServer((req, res) => {
  // Console me print hoga jab bhi koi browser se request aayegi
  console.log("Nayi Request Aayi Hai Route Par:", req.url);

  // Routing (Alag-alag pages ke liye alag response)
  if (req.url === "/") {
    res.end("Hello Tausif! Ye tumhara pehla Node.js Server hai.");
  } 
  else if (req.url === "/about") {
    res.end("Ye hamara About Page hai.");
  } 
  else if (req.url === "/contact") {
    res.end("Contact us at: tausif@example.com");
  } 
  else {
    // Agar koi aisi url daale jo exist nahi karti
    res.writeHead(404); // 404 Error code
    res.end("404 - Page Not Found!");
  }
});

// Step 3: Server ko port pe start karna
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Bhai tera server chalu ho gaya hai! Yahan click kar: http://localhost:${PORT}`);
});

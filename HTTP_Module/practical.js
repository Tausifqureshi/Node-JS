// ========================================= HTTP Module Practical ============================================ //
const http = require("http");

// Server create karna
const server = http.createServer((req, res) => {
  
  // Routing logic
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Home Page</h1><p>Created by Node.js HTTP Server</p>");
  } 
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Us</h1>");
  } 
  else if (req.url === "/api/data") {
    // JSON response
    res.writeHead(200, { "Content-Type": "application/json" });
    const data = { name: "Tausif", skill: "MERN Stack Developer" };
    res.end(JSON.stringify(data));
  } 
  else {
    // 404 Not Found
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Error: Page Not Found</h1>");
  }

});

// Server ko port 3000 par listen karwana
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Is server ko band karne ke liye 'Ctrl + C' dabayein.");
});

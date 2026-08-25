const os = require('os');

console.log("=== OS (Operating System) Module Demo ===\n");

// 1. Computer kisne login kiya hai?
const userInfo = os.userInfo();
console.log("👤 User Info:", userInfo.username);

// 2. RAM kitni hai?
const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
const freeRam = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`💻 Total RAM: ${totalRam} GB`);
console.log(`💻 Free RAM: ${freeRam} GB`);

// 3. Platform kya hai? (win32, linux, mac)
console.log("🖥️ Platform:", os.platform());

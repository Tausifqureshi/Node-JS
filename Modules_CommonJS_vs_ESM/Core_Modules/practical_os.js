const os = require('os');

console.log("=== OS (Operating System) Module Demo ===\n");

// ==========================================
// 1. User ki Jankari
// ==========================================
const userInfo = os.userInfo();
console.log("👤 User Info (Kisne login kiya hai):", userInfo.username);
console.log("🏠 Home Directory (User ka main folder):", os.homedir());

// ==========================================
// 2. RAM (Memory) ki Jankari
// ==========================================
const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
const freeRam = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`\n💻 Total RAM: ${totalRam} GB`);
console.log(`💻 Free RAM: ${freeRam} GB`);

// ==========================================
// 3. Operating System (Windows/Mac/Linux) ki Jankari
// ==========================================
console.log("\n🖥️ Platform (Kis type ka OS hai):", os.platform()); // win32, linux, darwin
console.log("🖥️ OS Type (Naam):", os.type()); // Windows_NT, Linux, Darwin
console.log("🖥️ OS Release (Version):", os.release());
console.log("🖥️ CPU Architecture (32-bit ya 64-bit):", os.arch()); // x64, x32, arm64

// ==========================================
// 4. System Uptime (Computer kitni der se chalu hai)
// ==========================================
const uptimeHours = (os.uptime() / 3600).toFixed(2);
console.log(`\n⏳ System Uptime (Kab se on hai): ${uptimeHours} Hours`);

// ==========================================
// 5. Hostname aur CPU ki Jankari
// ==========================================
console.log(`\n📛 Hostname (Computer ka naam):`, os.hostname());
console.log(`🧠 CPU Cores ki ginti:`, os.cpus().length);
console.log(`🧠 CPU ka naam:`, os.cpus()[0].model);

// ==========================================
// 6. Network (IP Address) ki Jankari (Short)
// ==========================================
// Ye thoda bada object deta hai jisme saari wifi/ethernet ki details hoti hain.
// Test karne ke liye isko uncomment kar sakte hain.
// console.log("\n🌐 Network Interfaces:", os.networkInterfaces()); 

// ==========================================
// 7. Temporary Folder ka rasta
// ==========================================
console.log("\n📂 Temp Folder (Temporary files ke liye):", os.tmpdir());

console.log("\n✅ OS Module All Main Methods Tested!");

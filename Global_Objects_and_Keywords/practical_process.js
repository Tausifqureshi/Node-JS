// ========================================= Process Object Practical ======================================= //
// 'process' ek bahut powerful global object hai. 
// Ye Node.js environment ko control karta hai aur background ki details deta hai.

const runProcessPractical = () => {
    console.log("=== Process Object Ka Asli Use ===\n");

    // 1. Computer ki jankari (Architecture aur OS)
    console.log("1. System ki Jankari:");
    console.log(`OS Platform: ${process.platform}`); // (win32, linux, darwin)
    console.log(`Architecture: ${process.arch}\n`); // (x64, arm)

    // 2. Current Working Directory (Aapne terminal kahan khola hua hai)
    console.log("2. Aapne Terminal kahan se open kiya hai?");
    console.log("->", process.cwd(), "\n");

    // 3. Memory Usage (Aapka Node.js kitni RAM kha raha hai)
    console.log("3. Memory Usage:");
    const memory = process.memoryUsage();
    console.log(`Memory Used: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB\n`);

    // 4. Server band karna (Exit)
    console.log("4. Agar mujhe yahan se program band karna ho, toh process.exit(0) use karte hain.");
    // process.exit(0); // Ise uncomment karne par iske niche ka code nahi chalega

    console.log("✅ Success: Process object se hum system level par control kar sakte hain!");
};

runProcessPractical();

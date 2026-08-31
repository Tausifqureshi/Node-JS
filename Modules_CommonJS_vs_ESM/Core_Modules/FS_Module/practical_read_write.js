// ========================================= Read & Write Practical ======================================= //
// Yahan hum ek real-world scenario dekhenge jisme hum ek nayi configuration file banayenge 
// aur usko turant read karke verify karenge.

const fs = require('fs');
const path = require('path');

const runReadWritePractical = () => {
    console.log("=== FS Read & Write Ka Asli Use ===\n");

    const configPath = path.join(__dirname, 'server_config.json');

    // 1. JSON Data banaya
    const configData = {
        port: 8080,
        database: "MongoDB",
        status: "Active"
    };

    // 2. Data ko string me convert karke likhna (Write)
    fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));
    console.log(`1. File Successfully Likhi Gayi -> ${configPath}`);

    // 3. Wahi data wapas read karna (Read)
    const readData = fs.readFileSync(configPath, 'utf8');
    
    // String ko wapas JSON (Object) me badalna
    const parsedData = JSON.parse(readData);
    
    console.log("\n2. File se Data Read Kiya:");
    console.log("Port Number:", parsedData.port);
    console.log("Database:", parsedData.database);

    console.log("\n✅ Success: File creation and reading working perfectly!");
};

runReadWritePractical();

const fs = require('fs');

console.log("=== FS (File System) Module Demo ===\n");

const fileName = "test_file.txt";
const content = "Hello! Ye file FS module ke zariye banayi gayi hai.";

// 1. File Create (Write) Karna
fs.writeFileSync(fileName, content);
console.log(`✅ File '${fileName}' ban gayi hai aur usme data likh diya gaya hai.`);

// 2. File Padhna (Read) Karna
const readData = fs.readFileSync(fileName, 'utf8');
console.log(`📖 File me kya likha hai: "${readData}"\n`);

console.log("Note: Humne file delete nahi ki hai, aap folder me check kar sakte hain!");

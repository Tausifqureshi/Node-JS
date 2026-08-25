const fs = require('fs');

console.log("=== FS (File System) Module Demo ===\n");

const fileName = "test_file.txt";
const content = "Hello! Ye file FS module ke zariye banayi gayi hai.\n";

// 1. File Create (Write) Karna
// fs.writeFileSync() purana data mita kar naya data daalta hai.
fs.writeFileSync(fileName, content);
console.log(`✅ 1. File '${fileName}' ban gayi hai aur usme data likh diya gaya hai.`);

// 2. File me aur Data Add (Append) Karna
// fs.appendFileSync() purane data ke aage naya data add karta hai bina purana data mitaye.
const extraData = "Ye naya sentence humne Append (Add) kiya hai.\n";
fs.appendFileSync(fileName, extraData);
console.log(`➕ 2. File me aur naya data successfully append (add) kar diya gaya hai.`);

// 3. File Padhna (Read) Karna
// 'utf8' dena zaroori hai, warna output buffer (machine code format) me aayega.
const readData = fs.readFileSync(fileName, 'utf8');
console.log(`📖 3. File padh li gayi hai. Usme ye likha hai:\n\n${readData}`);

// ==========================================
// 4. File ka Naam Badalna (Rename) Karna 
// ==========================================
// Demo ke liye Commented hai. Test karne ke liye '//' hata dein.
/*
const newFileName = "renamed_file.txt";
fs.renameSync(fileName, newFileName);
console.log(`🔄 4. File ka naam badal kar '${newFileName}' rakh diya gaya hai.`);
*/

// ==========================================
// 5. File Delete (Unlink) Karna 
// ==========================================
// Demo ke liye Commented hai. Test karne ke liye '//' hata dein.
/*
fs.unlinkSync(fileName);
console.log(`🗑️ 5. File delete ho chuki hai!`);
*/

console.log("Note: Rename aur Delete methods ko humne comment kar diya hai taaki aap khud test kar sako!");

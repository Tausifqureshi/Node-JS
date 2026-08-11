// ========================================= FS Module (File System) ============================================ //
// File ko read/write karne ke liye Node.js me purana aur naya dono tarike diye gaye hain.

// ============================================== Tarika 1 (Callbacks - Old Tarika) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Isme 'fs' module use hota hai. Ye purana tarika hai aur isme nested functions bante hain.

const fsOld = require("fs");

fsOld.writeFile("demoOld.txt", "Old Tarika Se Data", (err) => {
  if (err) {
    console.log("Old Tarika Error:", err);
  } else {
    // Write hone ke baad Read karna
    fsOld.readFile("demoOld.txt", "utf-8", (err, data) => {
      if (err) console.log("Old Tarika Error:", err);
      else console.log("Tarika 1 (Old Way) Data Read:", data);
    });
  }
});


// ============================================== Tarika 2 (Async/Await - New Tarika) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Isme 'fs/promises' module use hota hai. Ye sabse modern aur clean tarika hai. (Interview ke liye Best)

const fsNew = require("fs/promises");

const performFileOperations = async () => {
  try {
    await fsNew.writeFile("demoNew.txt", "New Tarika Se Data");
    const data = await fsNew.readFile("demoNew.txt", "utf-8");
    
    console.log("Tarika 2 (New Way) Data Read:", data);
  } catch (error) {
    console.log("Tarika 2 (New Way) Error:", error.message);
  }
};

performFileOperations();

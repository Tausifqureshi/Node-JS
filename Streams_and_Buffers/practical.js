// ========================================= Streams Practical ============================================ //
const fs = require("fs");
const http = require("http");

// Yahan hum dekhenge ki badi file ko bina server crash kiye kaise bheja jata hai.

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    
    // ============================================== Tarika 1 (Old / Normal Tarika - NOT RECOMMENDED for large files) ================================================= //
    /*
    // Ye tarika puri file ko RAM me load karega, jo badi videos/files ke liye crash kara dega
    fs.readFile("large_video.mp4", (err, data) => {
      if (err) res.end("Error");
      else res.end(data); 
    });
    */

    // ============================================== Tarika 2 (Streams - New & Best Tarika) ================================================= //
    // ChatGPT Se Liya Hua Syntex ---> Hum ReadStream banayenge aur data ko chunks (hisse) me response (res) me bhejege 'pipe' function ke zariye.
    
    // Note: Yahan 'demo.txt' ka example liya hai. Asli me yahan badi .mp4 ya .txt file hoti hai.
    const readableStream = fs.createReadStream(__filename, "utf-8"); // Khud isi file ko stream me padh rahe hain demo ke liye

    // '.pipe()' stream data ko res (response) me directly behne (flow hone) deta hai bina block kiye. Ye sabse fast aur memory-efficient tarika hai!
    readableStream.pipe(res);
    
  }
});

server.listen(8000, () => {
  console.log("Server streams testing ke liye ready hai on http://localhost:8000");
});

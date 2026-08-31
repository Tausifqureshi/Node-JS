// ========================================= File Details Practical ======================================= //
// Ye tab kaam aata hai jab users aapki website par koi file upload karte hain.
// Aapko check karna hota hai ki kya usne sahi file (jaise .jpg) upload ki hai ya koi virus (.exe) upload kar diya hai.

const path = require('path');

const runFileDetailsPractical = () => {
    console.log("=== File Validation Ka Asli Use ===\n");

    // Dummy user uploads (File Upload Feature se aayi hui)
    const uploadedFiles = [
        "C:/uploads/tausif_profile_pic.jpg",
        "C:/uploads/hacker_virus.exe",
        "C:/uploads/resume.pdf"
    ];

    console.log("Security Check chal raha hai...\n");

    uploadedFiles.forEach(filePath => {
        // Sirf file ka naam nikalo
        const fileName = path.basename(filePath);
        // File ka extension nikalo (uppercase/lowercase handle karne ke liye toLowerCase kiya)
        const fileExt = path.extname(filePath).toLowerCase();

        // Allowed Extensions
        const allowedExtensions = ['.jpg', '.png', '.pdf'];

        if (allowedExtensions.includes(fileExt)) {
            console.log(`✅ [SAFE] File Accepted: ${fileName} (Type: ${fileExt})`);
        } else {
            console.log(`❌ [DANGER] File Blocked: ${fileName} (Reason: ${fileExt} is not allowed!)`);
        }
    });

    console.log("\n✅ Success: Aise hum file uploads ko secure banate hain 'path' module ka use karke.");
};

runFileDetailsPractical();

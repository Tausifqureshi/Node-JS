// ========================================= Installing Packages Practical ======================================= //
// Npm ka asli fayda ye hai ki hum dusro ka code easily download kar sakte hain.
// Is practical me hum ek package 'uuid' ka use karke ek random secure user ID banayenge.

// Is code ko chalane ke liye pehle terminal me likhein: npm install uuid
const { v4: uuidv4 } = require('uuid');

const runInstallingPackagesPractical = () => {
    console.log("=== Third Party Package (NPM) Ka Asli Use ===\n");

    // Maan lo ek naya user register ho raha hai database me
    const newUser = {
        name: "Tausif Qureshi",
        email: "tausif@example.com",
        role: "Admin"
    };

    console.log("User Register ho raha hai...");
    console.log("Backend ek unique secure ID generate kar raha hai...");

    // uuidv4() ek randomly generated string deta hai jiske same aane ka chance 0 hai.
    // Ye kaam manually karna bohot mushkil tha.
    newUser.id = uuidv4();

    console.log("\nUser Successfully Database me Save Ho Gaya!");
    console.log("Database Object:");
    console.log(newUser);

    console.log("\n✅ Success: npm ne hamari help ki ekdam secure ID generate karne me bina extra logic likhe.");
};

runInstallingPackagesPractical();

// ========================================= Env Variables Practical ============================================ //
// Is code ko chalane ke liye aapko 'npm install dotenv' karna padega.
// Aur ek .env file banani padegi jisme aap likhenge:
// PORT=5000
// DB_PASS=mySecretPassword123

// require("dotenv").config(); // Ye .env file ka data process.env me dalta hai

// Dummy representation (agar dotenv na ho)
process.env.PORT = 5000;
process.env.DB_PASS = "mySecretPassword123";

const port = process.env.PORT || 3000;
const dbPassword = process.env.DB_PASS;

console.log(`Server is trying to run on port: ${port}`);

if (dbPassword) {
  console.log("Database password securely access ho gaya hai!");
} else {
  console.log("Database password nahi mila.");
}

// Security: Kabhi bhi sensitive data (jaise passwords) hardcode nahi karna chahiye, hamesha process.env se aana chahiye.

// ========================================= NPM Init Practical ======================================= //
// Ye script sikhayegi ki ek naya Node.js project kaise set up hota hai start se.
// (Ise sirf samajhne ke liye diya gaya hai, ise seedha terminal me karna hota hai)

const runNpmInitPractical = () => {
    console.log("=== Node.js Project Setup Process ===\n");

    console.log("Step 1: Ek khali folder banao aur VS Code me kholo.");
    console.log("Step 2: Terminal open karo aur ye command likho:");
    console.log("👉 npm init -y");

    console.log("\nResult:");
    console.log("Aapke folder me 'package.json' naam ki ek kundali ban jayegi.");

    console.log("\nStep 3: 'package.json' ko open karo aur usme 'scripts' dhoondo.");
    console.log(`
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
    `);

    console.log("Step 4: Ab aap app.js banakar terminal me 'npm start' ya 'npm run dev' chala sakte hain!");
};

runNpmInitPractical();

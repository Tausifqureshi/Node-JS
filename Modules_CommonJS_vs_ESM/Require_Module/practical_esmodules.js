// ========================================= ES Modules Practical (React Style) ======================================= //
// React developers ES Modules (import/export) zyada pasand karte hain.
// Node.js me ise chalane ke liye ek extra step hota hai.

const runESModulesPractical = () => {
    console.log("=== ES Modules (Modern Import) Setup Kaise Karein ===\n");

    console.log("Step 1: Apne folder me 'package.json' file banao (npm init -y).");
    console.log("Step 2: Us file me ye ek line add karo:");
    console.log(`
    {
      "name": "my-project",
      "type": "module",    <--- YE WALI LINE BOHOT ZARURI HAI
      "version": "1.0.0"
    }
    `);

    console.log("Step 3: Ab aap require() ki jagah React wala 'import' use kar sakte ho!");
    
    console.log(`
    📄 math.js:
    export const add = (a, b) => a + b;
    
    📄 app.js:
    import { add } from './math.js';
    console.log(add(5, 5));
    `);

    console.log("✅ Success: Aage chal ke bade projects hamesha ES Modules (import/export) pe bante hain.");
};

runESModulesPractical();

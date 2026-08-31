// ========================================= Third-Party Modules Practical ======================================= //
// Third-party modules wo hote hain jo hum 'npm install' karke internet se download karte hain.
// Is practical ke liye hum 'chalk' module ka use karenge jo terminal ke text ko colorful banata hai.
// Pura code chalane se pehle terminal me ye run karein: npm install chalk@4.1.2

const chalk = require('chalk');

const runThirdPartyPractical = () => {
    console.log("Third-Party Module Practical Shuru Ho Raha Hai...\n");

    // Chalk ka use karke alag-alag colors print karna
    console.log(chalk.blue('Hello Tausif! Main neele rang me hu.'));
    console.log(chalk.red.bold('WARNING: Ye red aur bold text hai.'));
    console.log(chalk.green.inverse(' SUCCESS: Background green ho gaya! '));

    console.log(chalk.yellow('\n✅ Success: Third-Party Module (chalk) perfectly kaam kar raha hai!'));
};

runThirdPartyPractical();

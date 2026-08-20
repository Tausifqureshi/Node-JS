// --------------------------------------------- Environment Variables --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Environment Variables Kya Hote Hain?
// Environment variables aisi hidden (chupi hui) values hoti hain jo hum seedha apne code me hardcode nahi karte. Inka use application ki configuration ya sensitive secrets manage karne ke liye kiya jata hai.

// --------------------------------------------- Iski Zarurat Kyun Hai? (Security & Flexibility) --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex --->
// 1. Security (Sabse main): Agar hum Database ka password, Payment API Keys, ya JWT Secret apne code me likh denge, aur GitHub par push karenge, toh koi bhi usko chura lega! Ye ek bada security risk hai.
// 2. Flexibility: Hamara app alag-alag environments me chalta hai (jaise aapke PC pe 'Development' aur internet wale server par 'Production'). Environment variables se hum bina code change kiye alag-alag Database links ya PORT use kar sakte hain.

// --------------------------------------------- dotenv Package --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex --->
// In secrets ko manage karne ke liye hum Node.js me 'dotenv' naam ka npm package use karte hain.
// Hum apne project ke root folder me ek `.env` naam ki file banate hain jisme hum `PORT=8000` ya `DB_PASS=1234` rakhte hain.
// Node.js me inhe access karne ke liye hum globally available `process.env.VARIABLE_NAME` ka use karte hain.

// Note: `.env` file ko hamesha `.gitignore` me daalna chahiye taaki wo kabhi bhi GitHub par galti se bhi upload na ho!

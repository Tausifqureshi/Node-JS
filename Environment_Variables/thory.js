// --------------------------------------------- Environment Variables --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Environment Variables Kya Hote Hain?
// Environment variables wo hidden values hoti hain jo hum seedha code me nahi likhte, balke ek separate file (.env) me rakhte hain. Jaise database passwords, API keys, ya port numbers. Aisa security aur flexibility ke liye kiya jata hai.

// --------------------------------------------- process.env kya hai? --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Node.js me iska role.
// Node.js me 'process' ek global object hota hai jo current running node process ki jankari rakhta hai. 
// 'process.env' ke through hum un saari environment variables ko apne code me access kar sakte hain. Jaise: const port = process.env.PORT || 3000;

// --------------------------------------------- dotenv package --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> dotenv ka use.
// By default, Node.js ko '.env' file padhna nahi aata. Isliye hum npm se 'dotenv' naam ka package install karte hain.
// Jaise hi hum apne file me require('dotenv').config() chalate hain, ye package .env file me likhi saari keys ko utha kar 'process.env' object me daal deta hai, taaki humara code unhe use kar sake.

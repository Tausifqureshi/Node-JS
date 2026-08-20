// --------------------------------------------- Global Objects & Keywords --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Global Objects kya hote hain?

// Browser me hamare paas 'window' object hota hai global variables ke liye (jaise window.alert). Lekin Node.js browser ke bahar chalta hai, isliye isme 'window' nahi hota, isme 'global' object hota hai.

// Kuch cheezein bina require/import ke directly available hoti hain.
// Jaise: console, setTimeout, process, __dirname, __filename

// Note:
// Sab cheezein actual 'global' object ka part nahi hoti,
// kuch (jaise __dirname, __filename) module-level variables hoti hain.

// --------------------------------------------- __dirname aur __filename --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Directory aur File path nikalna.
// - __dirname: Ye us folder (directory) ka pura path deta hai jisme hamari file rakhi hui hai.
// - __filename: Ye us specific file ka pura path (naam ke sath) deta hai.
// Note: ES Modules ('import') use karte waqt __dirname directly kaam nahi karta, uske liye alag tarika lagana padta hai (url aur path module ka use karke).

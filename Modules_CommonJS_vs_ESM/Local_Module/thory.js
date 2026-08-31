// ========================================= Local Modules Kya Hain? ======================================= //
// Local modules wo files aur code hote hain jo hum khud apne project me likhte hain. 
// Jab humara project bada hone lagta hai, toh hum saara code ek hi file (jaise app.js) me nahi likh sakte warna code bahut complex ho jayega.
// Isliye hum code ko choti-choti files (modules) me tod dete hain aur zaroorat padne pe unhe ek dusre se jod (link) dete hain.

// 📌 Main Kaam: Apne khud ke likhe gaye code ko alag-alag files me organize karna aur unhe doosri files me use karna.

/*
Export aur Import (Require) ka Concept:
1. module.exports = ...  -> Iska use karke hum apni file se kisi variable, function ya object ko baahar bhejne ke liye taiyar karte hain.
2. require('./filename') -> Iska use karke hum dusri file ke andar bheje gaye code ko padhte (import) karte hain.

CommonJS (CJS) vs ECMAScript Modules (ESM):
- Node.js default roop se CommonJS (CJS) use karta hai (jisme require aur module.exports use hota hai).
- Aaj kal ES Modules (ESM) bhi bahut famous hain (jisme import aur export use hota hai, jaise React me karte hain).

Bade Projects Me Kab Kaam Aata Hai?
1. MVC Architecture me Controllers, Routes aur Models ko alag-alag files me rakhne ke liye.
2. Database connection ka logic ek alag file me banakar baaki jagah use karne ke liye.
3. Utility functions (jaise date format karna, email bhejna) ko ek common file me likh kar poore project me use karne ke liye.
*/

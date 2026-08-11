// --------------------------------------------- Middleware in Node.js / Express --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Middleware kya hota hai?
// Middleware ek aisa function hai jo client ki "Request" aane aur server ki "Response" bhejne ke "beech (middle)" me chalta hai. 
// Request ---> Middleware ---> Response (ya fir agla function).

// --------------------------------------------- Middleware ka Kaam --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Iska use kahan hota hai?
// 1. Data Modification: Request aane ke baad usme kuch extra data add karna (jaise token se user id nikal kar req object me dalna).
// 2. Security / Authentication: Check karna ki jo banda website access kar raha hai, wo logged-in hai ya nahi. Agar nahi, to usko wahi se wapas bhej dena (error message dekar).
// 3. Logging: Har baar jab koi request aaye, uski details (time, url) console me print karna.
// 4. Error Handling: Agar pichle kisi function me kuch phat gaya (error), toh usko aakhiri middleware me handle karna.

// --------------------------------------------- next() function --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> 'next' parameter kya hai?
// Har middleware function ke paas generally 3 parameters hote hain: (req, res, next).
// 'next()' call karne ka matlab hai ki is middleware ka kaam ho gaya, ab request ko aage next function ya route ko pass kar do. Agar 'next()' call nahi karenge ya 'res.send()' nahi karenge, to browser ghumta reh jayega (request hang ho jayegi).

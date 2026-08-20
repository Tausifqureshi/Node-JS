// --------------------------------------------- Middleware --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Middleware Kya Hai?
// Middleware aasan bhasha me ek "bicholiya" (middleman) hai. 
// Jab user (browser) server se koi request karta hai, toh wo request seedha final route (jaise /dashboard) par jaane se pehle is Middleware ke paas aati hai.

// --------------------------------------------- Iska Kaam Kya Hai? --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex --->
// Middleware ke paas Request (req) aur Response (res) dono objects ka access hota hai. Ye unme changes kar sakta hai ya process rok sakta hai.
// Iske main real-world kaam:
// 1. Logging: Har request ka time, IP address aur details console/database me save karna.
// 2. Authentication: Check karna ki user logged in hai ya nahi. Agar nahi hai, toh wahi se usko wapas bhej dena (error response de dena).
// 3. Data Parsing: Frontend se aane wale data ko samajhne layak format (jaise JSON) me badalna (eg. express.json()).

// --------------------------------------------- the 'next()' Function --------------------------------------------- //
// Note:
// Middleware ka ek sabse zaruri hissa hai `next()` function. 
// Jab ek middleware ka kaam pura ho jata hai, toh use `next()` call karna padta hai, taaki wo request aage agle middleware ya final route ke paas ja sake. Agar hum bhool se bhi `next()` call nahi karenge, toh request wahi atak (hang) jayegi aur browser hamesha loading dikhata rahega!

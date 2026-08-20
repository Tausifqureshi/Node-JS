// --------------------------------------------- Node.js Server Creation --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Backend server banana kyu zaruri hai?
// Frontend (jaise React ya HTML) user ko UI dikhata hai. Lekin user jab login karta hai ya data mangta hai, toh wo ek request bhejta hai.
// Us request ko sunne (listen) aur uska sahi data (response) wapas dene ke liye hume 24/7 chalne wala ek program chahiye, jise hum Server kehte hain.

// --------------------------------------------- Basic Server Architecture --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex --->
// 1. Request (req): Ye browser (client) ki taraf se aati hai. Isme URL, HTTP Method (GET, POST), aur user ka bheja hua data hota hai.
// 2. Response (res): Ye Node.js server browser ko wapas bhejta hai (HTML file, JSON data, ya Error page).
// 3. Port: Server computer ke kis "darwaze" par khada hokar sunega (listen karega). Jaise localhost:8000 me 8000 ek Port hai.

// --------------------------------------------- Node.js hi kyu? --------------------------------------------- //
// Note:
// Node.js Event-Driven aur Non-blocking architecture pe bana hai. Iska faida ye hai ki ek basic Node.js server hazaaro requests ek sath handle kar sakta hai bina hang hue. Traditional servers (jaise purana PHP/Apache) har nayi request ke liye ek naya thread banate the jo bahut zyada RAM consume karta tha, jabki Node.js Single Thread me hi fast processing karke sab kuch sambhal leta hai.

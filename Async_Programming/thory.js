// --------------------------------------------- Synchronous vs Asynchronous Programming --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Dono me kya farq hai?

// 1. Synchronous Programming (Blocking):
// Isme code ek line se doosri line par tab tak nahi jata, jab tak pehli line ka kaam pura na ho jaye. 
// Agar line 2 par koi aisa code hai jisme 5 seconds lagte hain (jaise database se data lana), toh line 3 paanch second tak wait karegi. Isko "Blocking" kehte hain.

// 2. Asynchronous Programming (Non-Blocking):
// Isme JavaScript wait nahi karti! Agar kisi line par time lag raha hai, toh JS usko background me run hone ke liye bhej deti hai, aur aage ki lines ko execute karne lagti hai. 
// Jab background wala kaam finish ho jata hai, tab wo wapas aake apna result show karta hai. Node.js isi vajah se fast hoti hai.

// --------------------------------------------- Use Cases of Async --------------------------------------------- //
// ChatGPT Se Liya Hua Syntex ---> Asynchronous kahan use hoti hai?
// 1. Database se connect hote waqt aur data read/write karte waqt.
// 2. File system operations me (jaise badi files read ya write karna).
// 3. Kisi API (server) ko request bhejte waqt.
// 4. Timers jaise setTimeout() aur setInterval() me.

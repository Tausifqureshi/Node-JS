/*
======================================================================================
                          NODE.JS ARCHITECTURE & WORKING
======================================================================================
(Note: Node.js Architecture ka Asli Diagram (Visual Image) aur uski working 
ab bahar main 'README.md' file me laga di gayi hai taaki sabko samne dikhe!)

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Requests (Client):
   Jab bhi koi user website par aata hai ya koi data mangta hai, wo Node.js server ko ek 'Request' bhejta hai. 

2. Event Queue:
   Server par aane wali aisi saari requests ek line (Queue) me lag jati hain. Node.js inko yahan store karta hai taaki ek-ek karke process kar sake.

3. Event Loop (The Heart of Node.js):
   Ye ek Single-Thread hota hai jo lagatar gol-gol ghumta rehta hai. Iska kaam hai Event Queue se ek request uthana aur check karna ki ye request kis type ki hai (Aasan hai ya Bhari).

4. Non-Blocking Operations (I/O Polling):
   Agar request bahut aasan hai (jaise basic math calculation, ya simple response dena), toh Event Loop usko khud hi process kar deta hai aur user ko turant response bhej deta hai. Isko Non-Blocking kehte hain kyunki Event Loop ruka nahi.

5. Blocking Operations & THE THREAD POOL (Libuv):
   Agar request badi aur bhari hai (jaise Database se bahut sara data lana, ya badi file Read/Write karna), toh Event Loop khud wahan fas nahi jata! 
   Node.js ke paas ek secret hathiyar hota hai jise **'Thread Pool'** (libuv library) kehte hain. Event Loop is heavy request ko Thread Pool ke Workers ko saunp deta hai.

6. External Operations (Worker Threads):
   Thread Pool me by default 4 background workers (threads) hote hain. Ye workers is bhari kaam ko background me pura karte hain. Sabse khaas baat ye hai ki Event Loop inka wait nahi karta, wo free hokar dusri naye users ki requests handle karne lagta hai.

7. Final Response (Callback):
   Jab Thread Pool ka worker wo bhari kaam pura kar leta hai, toh wo wapas Event Loop ko ek signal (Callback) bhejta hai ki "Bhai, data aa gaya!". Phir Event Loop us data ko user ko wapas bhej deta hai.

======================================================================================
                          BLOCKING VS NON-BLOCKING (Summary)
======================================================================================

🔴 BLOCKING OPERATIONS (Khatarnak)
- Ye wo kaam hain jo Event Loop ko rok (block) dete hain agar hum Thread Pool ka use na karein.
- Jaise: Badi file padhna (`fs.readFileSync`), Video processing.
- Agar Event Loop (jo ek hi hai) ruk gaya, toh server par aaye baaki naye users ko faaltu me wait karna padega. 

🟢 NON-BLOCKING OPERATIONS (Node.js ki Taaqat)
- Ye wo kaam hain jiske liye Node.js Thread Pool ka use karke background me kaam karwata hai.
- Jaise: Asynchronous file reading (`fs.readFile`), Database queries.
- Isme Node.js rukta nahi hai. Wo apne Thread Pool se kaam nikalwata hai aur main Event Loop hazaron naye users ki request ek sath handle kar leta hai.
======================================================================================
*/

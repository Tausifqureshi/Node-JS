/*
======================================================================================
                          NODE.JS ARCHITECTURE & WORKING
======================================================================================
(Note: Node.js Architecture ka Asli Diagram (Visual Image) aur uski working 
ab bahar main 'README.md' file me laga di gayi hai taaki sabko samne dikhe!)

======================================================================================
                          BLOCKING VS NON-BLOCKING
======================================================================================

🔴 BLOCKING OPERATIONS (Khatarnak)
- Blocking operations Event Loop ko rok (block) dete hain. 
- Node.js ek "Single-Threaded" system hai. Agar humne us thread ko rok diya (Jaise bahut badi file padhne me ya heavy calculation me), toh server par aaye doosre users ko wait karna padega. 
- Jab tak wo kaam khatam nahi hota, Node.js koi aur naya kaam nahi kar sakta.

🟢 NON-BLOCKING OPERATIONS (Node.js ki Taaqat)
- Non-blocking operations (jaise database se data mangwana, API call karna, file ko asynchronous tarike se padhna) Event Loop ko **block nahi karte**.
- Isme Node.js is lamba (long-running) task ko apne background workers (jise 'libuv' ka Thread Pool kehte hain) ko saunp deta hai.
- **Result:** Node.js bina ruke, foran aage badh kar doosre users ki requests lene lagta hai.
- Jab wo database ya file ka kaam pura ho jata hai, toh ek "Callback" ya "Promise" trigger hota hai, aur Node.js us user ko response bhej deta hai.

⭐ REAL LIFE EXAMPLE (Jo aapne image me bheja):
- Ek user ne Database se data manga.
- Node.js ne ye request Database ko bhej di. Par Node.js ab Database ka wait karke wahan khada nahi rahega (It doesn't wait!). 
- Node.js turant aage badh jayega aur doosre logon ki request handle karne lagega.
- Jab Database apna kaam khatam kar lega, toh wo Node.js ko bulayega (Callback dega). Fir Node.js wo result user tak bhej dega.
======================================================================================
*/

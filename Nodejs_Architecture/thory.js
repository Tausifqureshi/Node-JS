/*
======================================================================================
                          NODE.JS ARCHITECTURE DIAGRAM
======================================================================================
(Jo diagram aapne bheja tha, usko text format me banaya gaya hai)

       [ Clients ] 
           |
           v
     [ Requests ] ----------------> [ Event Queue ] <--------> [ Event Loop ] 
                                                                     |
                       -------------------------------------------------------------
                       |                                                           |
                       v                                                           v
          [ Non-Blocking Operations ]                                [ Blocking Operations ]
          (Jaise aasan aur chote kaam)                               (Jaise File Padhna, Database)
                       |                                                           |
                       v                                                           v
                [ I/O Polling ]                                          [ Using Thread Pool ]
       (Ye background me akele chalte hain)                                        |
                                                                                   v
                                                                        [ External Operations ]
                                                               (Worker threads isko process karte hain)

======================================================================================

--- HOW IT WORKS (Line-by-Line Explanation) ---

1. Requests:
   Jab bhi koi user website par aata hai ya koi data mangta hai, wo Node.js server ko ek 'Request' bhejta hai. 

2. Event Queue:
   Server par aane wali aisi saari requests ek line (Queue) me lag jati hain. Node.js inko yahan store karta hai taaki ek-ek karke process kar sake.

3. Event Loop:
   Ye Node.js ka 'Dil' (Heart) hai. Ye single thread hota hai aur lagatar gol-gol ghumta rehta hai. Iska kaam hai Event Queue me aana, ek request uthana, aur check karna ki ye request kis type ki hai (Aasan hai ya Bhari).

4. Non-Blocking Operations (I/O Polling):
   Agar request bahut aasan hai (jaise math calculation, variable banana, ya basic response dena), toh Event Loop usko khud hi process kar deta hai aur user ko turant response bhej deta hai. 
   Node.js ko isiliye "Non-Blocking" kaha jata hai kyunki ye chote kaamo ke liye rukta nahi hai.

5. Blocking Operations (Using Thread Pool):
   Agar request badi aur bhari hai (jaise Database se bahut sara data lana, ya koi badi file Read/Write karna, ya Video upload karna), toh Event Loop khud wahan fas nahi jata! 
   Wo is heavy kaam ko apne pichhe baithe 'Thread Pool' (Jo libuv library me hote hain) ko bhej deta hai.

6. External Operations:
   Thread Pool me jo extra workers (extra hath) hote hain, wo is bhari (Blocking) kaam ko background me pura karte hain (External Operations). Jab unka kaam pura ho jata hai, wo wapas Event Loop ko ek message bhejte hain ki "Bhai, file read ho gayi!".

7. Final Response:
   Phir Event Loop wo ready data uthata hai aur jis user ne request ki thi, usko response bhej deta hai.

-------------------------------------------------------------------------------------
🌟 SHORTCUT ME SAMAJHIYE (Restaurant Example): 🌟
- Client (Requests)  = Customer jo order deta hai.
- Event Queue        = Customer ka order ticket jo line me lagta hai.
- Event Loop         = Waiter (Jo sirf order leta hai, aur khana ready hone pe serve karta hai).
- Non-Blocking       = Pani pilana (Waiter khud table par pani rakh dega, kisi ki zaroorat nahi).
- Blocking           = Pizza banana (Waiter wahan khada nahi rahega, wo Cook/Thread Pool ko order dega aur dusre tables par chala jayega).
- Thread Pool        = Kitchen ke Cooks (Jo heavy kaam background me karte hain).
======================================================================================
*/

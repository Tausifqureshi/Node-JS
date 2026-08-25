/*
======================================================================================
                          CORE MODULES IN NODE.JS (THEORY)
======================================================================================
Node.js me kuch modules (functions/libraries) pehle se hi inbuilt aate hain. Inhe 
bahar se (NPM se) install nahi karna padta. Hum seedha inko `require()` kar sakte hain.

--- KUCH ZARURI CORE MODULES ---

1. 'os' (Operating System):
   - Computer ki RAM, CPU, ya user ki jankari nikalne ke kaam aata hai.

2. 'path':
   - Files aur folders ke sahi location/address banane ke kaam aata hai.
   - Ye alag-alag computers (Windows/Mac) par automatic slash (\ ya /) adjust kar deta hai.

3. 'fs' (File System):
   - Nayi file banana, padhna, update karna, ya delete karne ke kaam aata hai.

4. 'events':
   - Custom events banane ke kaam aata hai. 
   - Jaise Frontend me "button click" par kuch hota hai, waise hi backend me hum khud ke events fire aur listen kar sakte hain.

5. 'http' / 'https':
   - Web server banane aur internet ke through (Request/Response) data bhejne/lene ke kaam aata hai.
   - Note: 'https' security ke liye hota hai, seekhne ke liye hum 'http' use karte hain.

======================================================================================
*/

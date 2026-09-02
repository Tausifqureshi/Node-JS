// ========================================= req.params Practical ======================================= //
// Express app me Dynamic URLs kaise handle karte hain.
// Run command: npm install express

const express = require('express');
const app = express();

const runReqParamsPractical = () => {
    console.log("=== req.params Ka Asli Use ===\n");

    const usersDatabase = [
        { id: 1, name: "Tausif Qureshi" },
        { id: 2, name: "Aman" },
        { id: 3, name: "Rahul" }
    ];

    // ':id' ek dynamic parameter hai. Ye kuch bhi ho sakta hai (1, 2, 'tausif').
    app.get('/api/users/:id', (req, res) => {
        // Real Case: Jab hum Facebook/Instagram me kisi user ki profile kholte hain (jaise /tausif), toh backend '/:id' route banata hai aur 'req.params.id' se us specific user ka data nikal kar dikhata hai.
        // req.params se 'id' nikal li (Ye hamesha string format me milti hai)
        const userId = parseInt(req.params.id); 

        // Database me dhoonda
        const user = usersDatabase.find(u => u.id === userId);

        if(user) {
            res.json({ success: true, data: user });
        } else {
            res.status(404).json({ success: false, message: "User not found!" });
        }
    });

    const PORT = 5001;
    app.listen(PORT, () => {
        console.log(`🚀 Params Server chal gaya!`);
        console.log(`👉 Check karo: http://localhost:${PORT}/api/users/1`);
        console.log(`👉 Check karo: http://localhost:${PORT}/api/users/2`);
    });
};

runReqParamsPractical();

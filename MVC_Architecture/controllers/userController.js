// ========================================= CONTROLLER (Main Logic) ======================================= //
// Controller me Req aur Res aate hain. 
// Ye Model se data mangta hai, aur Client ko response bhejta hai.

// Model ko import kiya
const userModel = require('../models/userModel');

// Handler 1: Saare users dikhana
const getUsers = (req, res) => {
    // Model se data manga
    const users = userModel.getAllUsersFromDB();
    
    // Client ko JSON bhej diya
    res.json({
        success: true,
        data: users
    });
};

// Handler 2: Naya user banana
const createUser = (req, res) => {
    const { name } = req.body;
    
    if (!name) {
        return res.status(400).json({ success: false, message: "Name is required!" });
    }

    // Model ko bola Data save karo
    const newUser = userModel.saveUserToDB(name);

    res.json({
        success: true,
        message: "User Created!",
        data: newUser
    });
};

// Functions ko export kiya
module.exports = {
    getUsers,
    createUser
};

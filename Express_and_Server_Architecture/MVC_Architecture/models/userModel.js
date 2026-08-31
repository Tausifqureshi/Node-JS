// ========================================= MODEL (Database Logic) ======================================= //
// Model ka kaam sirf Database se data lana ya Database me data bhejna hota hai.

// Dummy Database (Real life me ye Mongoose ya SQL query hoti hai)
const usersDB = [
    { id: 1, name: "Tausif Qureshi" },
    { id: 2, name: "Aman" }
];

// Database se saare users nikalne ka function
const getAllUsersFromDB = () => {
    // Real life me: return User.find();
    return usersDB;
};

// Database me naya user dalne ka function
const saveUserToDB = (userName) => {
    const newUser = { id: usersDB.length + 1, name: userName };
    usersDB.push(newUser);
    return newUser;
};

module.exports = {
    getAllUsersFromDB,
    saveUserToDB
};

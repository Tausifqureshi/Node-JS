// ========================================= Model & Service Class Practical ======================================= //
// Backend development (jaise NestJS ya TypeScript projects) me hamesha Data Model aur Business Logic ko alag rakha jata hai.
// 1. Model Class: Jo sirf Data ko define kare.
// 2. Service Class: Jiske andar Logic (DB save, calculations) likha ho.

// 1. Model Class
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = new Date();
    }
}

// 2. Service Class (Business Logic)
class UserService {
    constructor() {
        // Ye ek dummy array hai jo database ka kaam kar raha hai
        this.usersDatabase = [];
    }

    registerUser(name, email, password) {
        console.log(`[SERVICE] Registering new user: ${name}...`);
        
        const isEmailExists = this.usersDatabase.find(u => u.email === email);
        if(isEmailExists) {
            console.log(`❌ Error: Email ${email} pehle se registered hai!`);
            return;
        }

        const newId = this.usersDatabase.length + 1;
        const newUser = new User(newId, name, email, password); // Model ka instance banaya
        
        this.usersDatabase.push(newUser);
        console.log(`✅ Success: ${name} successfully register ho gaya!`);
        return newUser;
    }

    getAllUsers() {
        return this.usersDatabase;
    }
}

const runModelServicePractical = () => {
    console.log("=== Service aur Model Class Pattern Ka Asli Use ===\n");

    // Service ko ek hi baar chalu (initialize) karte hain
    const myUserService = new UserService();

    // Ab is service ke andar ki saari powers hum use kar sakte hain
    myUserService.registerUser("Tausif Qureshi", "tausif@gmail.com", "secret123");
    myUserService.registerUser("Aman Bhai", "aman@gmail.com", "pass456");
    myUserService.registerUser("Hacker", "tausif@gmail.com", "hack321"); // Ye error dega kyunki email same hai

    console.log("\nDatabase me kitne users hain?");
    console.log(myUserService.getAllUsers());
};

runModelServicePractical();

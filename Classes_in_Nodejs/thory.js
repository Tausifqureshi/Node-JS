// ========================================= Classes in Node.js Kya Hain? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 
// JavaScript me Class ek 'blueprint' ya 'saancha' (template) hoti hai jisse hum ek jaise objects (data) bana sakte hain.
// Node.js (Backend) me Classes ka bahut bada role hota hai. Inka use hum Database Models, Services, Controllers aur Custom Errors banane me karte hain.

// ========================================= 1. Basic Class & Constructor ======================================= //
// 'constructor' ek special function hota hai jo automatically chal jata hai jab hum 'new' keyword se object (instance) banate hain.

const basicClassExample = () => {
    console.log("=== Basic Class Example ===\n");

    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        // Class ke andar ka function (Method)
        getDetails() {
            return `User ka naam ${this.name} hai aur umar ${this.age} saal hai.`;
        }
    }

    const user1 = new User("Tausif", 25);
    const user2 = new User("Aman", 22);

    console.log(user1.getDetails());
    console.log(user2.getDetails());
};
// basicClassExample();


// ========================================= 2. Inheritance (Extends) ======================================= //
// 'extends' keyword ka use karke hum ek class (Child) ko dusri class (Parent) ki properties aur methods de sakte hain.
// 'super()' call karna zaruri hota hai taaki parent class ka constructor bhi chal jaye.

const inheritanceExample = () => {
    console.log("\n=== Inheritance (Extends) Example ===\n");

    // Parent Class
    class Person {
        constructor(name) {
            this.name = name;
        }
        login() {
            console.log(`${this.name} logged into the system.`);
        }
    }

    // Child Class (Admin class Person class ki saari khubiyan le rahi hai)
    class Admin extends Person {
        constructor(name, permissions) {
            super(name); // Parent class (Person) ko naam pass kiya
            this.permissions = permissions;
        }
        deleteUser() {
            console.log(`[WARNING] ${this.name} ne user delete kar diya! (Permissions: ${this.permissions})`);
        }
    }

    const mainAdmin = new Admin("Tausif Qureshi", "SuperAdmin");
    mainAdmin.login();       // Parent ka method chala
    mainAdmin.deleteUser();  // Apna (Child) method chala
};
// inheritanceExample();

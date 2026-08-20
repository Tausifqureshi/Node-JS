// Ye file hum sirf EXPORT karne ke liye bana rahe hain taaki isko 'practical.js' me IMPORT kar sakein.

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

// ============================================== Tarika 1 (Old Tarika - CommonJS Export) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> module.exports ka use apne functions ko dusri file me bhejne (export) ke liye hota hai.

module.exports = {
  add,
  subtract
};

// ============================================== Tarika 2 (New Tarika - ES Modules Export) ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Naye tarike me hum 'export' keyword ka use karte hain. (Iske liye package.json me "type": "module" hona chahiye)

// export { add, subtract };

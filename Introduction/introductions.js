// ========================================= Node.js ka Introduction ============================================ //

const language = [
  "Node.js",
  "React.js",
  "Angular.js",
  "Vue.js",
  "Express.js",
  "Next.js",
  "Nest.js",
  "Svelte.js",
  "Ember.js",
  "Backbone.js",
];

const introduction = {
  title: "Node.js Introduction",
  description:
    "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
};

const value = language.map((lang) => {
  return {
    name: lang,
    description: `This is an introduction to ${lang}.`,
  };
});

console.log(introduction);
console.log(value);

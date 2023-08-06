// Create a script that uses module.exports to export a function.
// Create another script that uses require() to import the function and then calls it.
const greet = require("./2-other.js");
console.log(greet("Ali"));

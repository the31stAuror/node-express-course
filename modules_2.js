// CommonJS, every file is a module (by default)
// Modules - Encapsulared Code (only share minimum)
// Sample Built-in Modules: os, path, fs, http
// nodejs.org > docs > choose node version > view its modules!

// to call your own module, start with ./
const names = require("./names");
const sayHi = require("./utils");
const data = require("./another_export");

console.log(data);
console.log(names);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// when you import a module, you actually invoke it
// if you have a function called there
require("./mind_grenade");

// CommonJS, every file in module (by default)
// Modules - Encapsulated Code (only share minimum)
// file location in brackets always starts with ./

// every time you use require the imported file also executes/runs
const names = require("./exports/names");

// destructure
// const { john, peter } = require("./exports/names");

const sayHi = require("./exports/utils");
const data = require("./exports/alternative-flavor");
require("./exports/mind-granade"); // only executes the mind-granade code

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

console.log(names, sayHi, data);

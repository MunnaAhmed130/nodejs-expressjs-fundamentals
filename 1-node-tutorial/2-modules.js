// import names from "./exports/names.js";
// console.log(names);

// CommonJS, every file in node is a module by default
// Modules are Encapsulated Code (only share minimum / what we want)
// we use ./ to find local modules

// every time you use require the imported file also executes/runs
const names = require("./exports/names.js");

// destructure
// const { john, peter } = require("./exports/names");

const sayHi = require("./exports/utils");
const data = require("./exports/alternative-flavor");
require("./exports/mind-granade"); // only execute

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

console.log(names, sayHi, data);

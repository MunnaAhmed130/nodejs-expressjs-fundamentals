// CommonJS, every file in module (by default)
// Modules - Encapsulated Code (only share minimum)
// file location in brackets always starts with ./

const names = require("./exports/names");

const sayHi = require("./exports/utils");
const data = require("./exports/alternative-flavor");
require("./7-mind-granade"); // execute not export

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

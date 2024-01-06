// CommonJS, every file in module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./names"); //file location in brackets
const sayHi = require("./utils");
const data = require("./alternative-flavor");
require("./7-mind-granade"); // execute not export

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

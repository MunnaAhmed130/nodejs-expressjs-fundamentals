// CommonJS, every file in module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names"); //file location in brackets
const sayHi = require("./5.utils");
const data = require("./6-alternative-flavor");
require("./7-mind-granade"); // execute not export

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

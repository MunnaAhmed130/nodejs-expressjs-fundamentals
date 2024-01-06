// CommonJS, every file in module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./export/names"); //file location in brackets

const sayHi = require("./export/utils");
const data = require("./export/alternative-flavor");
require("./7-mind-granade"); // execute not export

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

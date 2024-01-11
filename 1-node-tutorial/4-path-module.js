const path = require("path");

// path.sep provides platform specific separator
// "\" on windows and "/" on Unix-like systems
console.log("path separator", path.sep);

// joins path segments together using the platform-specific separator as a delimiter
// then normalizes the resulting path.
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

// path.resolve resolves a sequence of path segments into an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("absolute path", absolute);

// get dir name from a path
console.log(path.dirname(absolute));

// path.relative returns relative path from one dir to another dir
const relative = path.relative(
    "/node/1-node-tutorial/async-pattern", // from
    "/node/1-node-tutorial/content/subfolder" // to
);

console.log(relative);

// basename returns the last portion of a path
const base = path.basename(filePath);
console.log("baseName", base, ", extensionName", path.extname(base));

// ----------------------

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.dirname(__dirname));

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

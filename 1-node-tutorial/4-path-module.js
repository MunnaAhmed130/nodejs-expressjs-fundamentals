const path = require("path");

// path.sep provides platform specific separator
// "\" on windows and "/" on Unix-like systems
console.log(path.sep);

// joins path segments together using the platform-specific separator as a delimiter
// then normalizes the resulting path.
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

// basename returns the last portion of a path
const base = path.basename(filePath);
console.log(base);

// get extention name
console.log(path.extname(base));

// path.resolve resolves a sequence of path segments into an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

// get dir name from a path
console.log(path.dirname(absolute));

// path.relative returns relative path from one dir to another dir
const relative = path.relative(
    "/node/1-node-tutorial/async-pattern", // from
    "/node/1-node-tutorial/content/subfolder" // to
);

console.log(relative);

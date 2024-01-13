// file system module allows to work with the file system on your computer

const { readFileSync, writeFileSync } = require("fs");

// const fs = require("fs");
// fs.readFileSync

// File system module is used for create, read, update, delete, rename files

console.log("\nstart \n");

// readFileSync => read file synchronously
// takes file path and optionally encoding and flag
// generally use utf8 encoding, if encoding is not specified returns buffer
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second, "\n");

console.log(
    "without encoding returns",
    readFileSync("./content/first.txt"),
    "\n"
);

// writeFileSync creates new file with content
// flag is w by default it will overwrite file content
// flag a will append data to existing content

writeFileSync(
    "./content/result-sync.txt",
    `Here is the result : ${first}, ${second}\n`,
    { flag: "a" } // file system flag
);

// to check synchronous behaviour
console.log("done with this task");
console.log("starting the next one");

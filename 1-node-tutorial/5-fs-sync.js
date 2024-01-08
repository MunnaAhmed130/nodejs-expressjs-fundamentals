const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");
// fs.readFileSync

console.log("\nstart \n");

// readFileSync => read file synchronously
// takes file path and optionally encoding and flag
// generally use utf8 encoding, if encoding is not specified returns buffer
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second, "\n");

console.log("without encoding", readFileSync("./content/first.txt"), "\n");
// create new file
// writeFileSync(
//     "./content/result-sync.txt",
//     `Here is the result : ${first}, ${second}`,
//     { flag: "a" }
// );

console.log("done with this task");
console.log("starting the next one");

const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");
// fs.readFileSync
console.log("start");
// read file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// create new file
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result : ${first}, ${second}`,
    { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");

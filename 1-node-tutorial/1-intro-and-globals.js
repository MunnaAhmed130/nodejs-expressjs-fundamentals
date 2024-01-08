const amount = 12;

if (amount < 10) {
    console.log("small number");
} else {
    console.log("large number");
}

console.log(`hey it's my first node app!!!`);

// GLOBALS    - NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module(file)
// process    - info about env where the program is being executed

console.log(__filename);
console.log(process.mainModule.filename);
console.log("directory name", __dirname);
console.log(process.cwd());
// process.mainModule.path/filename
console.log(process.mainModule.path);
// setInterval(() => {
//     console.log("hello world");
// }, 1000);

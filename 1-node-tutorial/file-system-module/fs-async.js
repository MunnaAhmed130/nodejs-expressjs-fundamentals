const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", (err, data) => {
    if (err) throw err;
    console.log("buffer data", data);
});

// readFile & writeFile reads and writes to a file asynchronously
// they take an additional callback function as argument

// pros - async code, cons - messy code / callback hell

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    console.log(first);
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);
        writeFile(
            "./content/result-async.txt",
            `Here is the result : ${first}, ${second}\n`,
            { flag: "w" },
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("done with this task");
            }
        );
    });
});

console.log("starting next task");

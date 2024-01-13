const fs = require("fs");
const path = require("path");

// const data = fs.readFileSync(
//     path.join(__dirname, "content", "first.txt"),
//     "utf8"
// );
// console.log(data);

fs.readFile(
    path.join(__dirname, "content", "first.txt"),
    "utf8",
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);

console.log("loading ...");

// callback hell
fs.writeFile(
    path.join(__dirname, "content", "reply.txt"),
    "This is a new line",
    (err) => {
        if (err) throw err;
        console.log("Write complete");

        fs.appendFile(
            path.join(__dirname, "content", "reply.txt"),
            "\n\nThis is another line",
            (err) => {
                if (err) throw err;
                console.log("Append complete");

                fs.rename(
                    path.join(__dirname, "content", "reply.txt"),
                    path.join(__dirname, "content", "fs.txt"),
                    (err) => {
                        if (err) throw err;
                        console.log("Rename complete");
                    }
                );
            }
        );
    }
);

// exit on uncaught errors
process.on("uncaughtException", (err) => {
    console.error(`There was an uncaught error ${err}`);
    process.exit(1);
});

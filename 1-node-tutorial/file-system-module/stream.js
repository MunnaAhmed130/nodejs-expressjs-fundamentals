const fs = require("fs");
const path = require("path");

// streams are data handling methods
// used to read/write input into output sequentially
// it handles reading/writing files, network communications
// or any kind of end-to-end information exchange in an efficient way.
// reads chucks of data piece by piece, processing content without keeping it all in memory

const source = path.join(__dirname, "content", "big.txt");
const destination = path.join(__dirname, "content", "subfolder", "test.txt");

const readableStream = fs.createReadStream(source, {
    encoding: "utf8",
});

const writableStream = fs.createWriteStream(destination);

// --------------------------------------------------------

// // writable stream methods --->  write and end
// writableStream.write("Hello World!");
// writableStream.end("done");

// ---------------------------------------------------------

// let chunckCount = 0;

//  Handle readable stream events flowing mode ---> data, end and error
//  there are also readable event in paused mode

// listening for data coming in from the stream

// // read and write stream took around 0.1 sec
// readableStream.on("data", (dataChunks) => {
//     writableStream.write(dataChunks);
//     chunckCount++;
//     console.log("done", chunckCount);
// });

// pipe
readableStream.pipe(writableStream);

// ------------------------------------------------------------

// using stream with an async iterator to read from readable stream
async function logChucks(readable) {
    for await (const chunk of readable) {
        console.log(chunk);
    }
}

// logChucks(fs.createReadStream("./content/first.txt", { encoding: "utf8" }));

// -------------------------------------------------------------

// let start = performance.now();

// sync read & write file took around 4 sec
// let bigFile = fs.readFileSync(source, { encoding: "utf8" });
// fs.writeFileSync(destination, bigFile);

// async read & write file took around .7 sec
// fs.readFile(source, { encoding: "utf8" }, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     fs.writeFile(destination, data, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
//     console.log("done");
// });

// console.log(performance.now() - start);

// So, async I/O is faster then sync, and stream is faster than async

// ----------------------------------------------------------------

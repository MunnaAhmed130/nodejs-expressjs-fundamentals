const fs = require("fs");

// streams are data handling methods
// used to read/write input into output sequentially
// it handles reading/writing files, network communications
// or any kind of end-to-end information exchange in an efficient way.
// reads chucks of data piece by piece, processing content without keeping it all in memory

const readableStream = fs.createReadStream("./content/big.txt", {
    encoding: "utf8",
});

const writableStream = fs.createWriteStream("./content/test.txt");

//  Handle stream events ---> data, end and error
// listening for data coming in from the stream
readableStream.on("data", (dataChunks) => {
    writableStream.write(dataChunks);
    // console.log(dataChunks);
    console.log("done");
});

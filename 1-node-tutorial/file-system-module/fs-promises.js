const { readFile, writeFile, appendFile, rename, unlink } =
    require("fs").promises;
const path = require("path");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        // path can be relative or absolute
        const first = await readFile("./content/first.txt", "utf8"); // relative
        // absolute path
        const second = await readFile(
            path.join(__dirname, "content", "second.txt"),
            "utf8"
        );

        console.log(first);
        console.log(second);

        // await unlink(
        //     path.join(__dirname, "content", "subfolder", "delete.txt")
        // );

        await writeFile(
            path.join(__dirname, "content", "result-promises.txt"),
            `this is awesome : ${first}  \n`
            // { flag: "a" }
        );

        await appendFile(
            path.join(__dirname, "content", "result-promises.txt"),
            `This is awesome appended :  ${second} \n`
        );

        await rename(
            path.join(__dirname, "content", "result-promises.txt"),
            path.join(__dirname, "content", "print-promises.txt")
        );

        const newData = await readFile("./content/print-promises.txt", "utf8");
        console.log(newData);
    } catch (error) {
        console.log(error);
    }
};

start();

// const fileOps = async () => {
//     try {
//         const data = await readFile(
//             path.join(__dirname, "content", "first.txt"),
//             "utf8"
//         );
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// };

// fileOps();

// console.log(__dirname);

// promise
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
// readFile(path, "utf8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

// getText("./content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

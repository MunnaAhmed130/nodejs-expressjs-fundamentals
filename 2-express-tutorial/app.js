const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/brower-app.js");

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    //home page
    if (url === "/") {
        res.writeHead(200, { "content-type": "text/html" }); // mime or media type
        res.write(homePage);
        res.end();
        // about
    } else if (url === "/about") {
        res.writeHead(200, { "content-type": "text/html" }); // mime or media type
        res.write("<h1>about</h1>");
        res.end();
        // styles
    } else if (url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" }); // mime or media type
        res.write(homeStyles);
        res.end();
    } else if (url === "/logo.svg") {
        res.writeHead(200, { "content-type": "image/svg+xml" }); // mime or media type
        res.write(homeImage);
        res.end();
    } else if (url === "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" }); // mime or media type
        res.write(homeLogic);
        res.end();
    } else {
        res.writeHead(400, { "content-type": "text/html" }); // mime or media type
        res.write("<h1>error: page not found</h1>");
        res.end();
    }
});

server.listen(5000);

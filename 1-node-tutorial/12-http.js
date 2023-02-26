const http = require("http");

const server = http.createServer((req, res) => {
    // in if statement use return instead of {}
    //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
    // SWITCH TO IF, ELSE IF, ELSE (BELOW)
    // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
    if (req.url === "/")
        return res.end(`
        <h1>Welcome to our home page</h1>
    <a href="/about">To About </a> <br> 
    <a href="/error">To Error</a>
        `);

    if (req.url === "/about")
        return res.end(`
        <h1>Here is our short history</h1>
        <a href="/">back home </a>
        <a href="/error">To Error</a>
        `);

    // res.write("Welcome to our home page");
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home </a>
    `);
});

server.listen(5000);

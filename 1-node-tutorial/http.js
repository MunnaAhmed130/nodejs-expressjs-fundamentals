/* 
  HTTP module 
  - allows node to transfer data over Hyper Text Transfer Protocol
    (HTTP)
  - can create an HTTP server that listens to server ports 
    and gives response back to the client 
*/

const http = require("http");

/*
  http.createServer() method
  - takes a callback as arg
  - creates a server object
  - will execute when accessing port 5000 on browser
*/

// a client requests, server responses
const server = http.createServer((req, res) => {
    // console.log(req); // it's a giant object
    if (req.url) {
        console.log("s", req.url, req.method);
    }
    // sends a response header
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Welcome to our ${req.url} page`); // write a response to the client
    res.end(); // end the response
});

// server object listens on port 5000
server.listen(5000, () => {
    console.log("server listening on port 5000");
});

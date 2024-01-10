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
const server = http.createServer((req, res) => {});

server.listen(5000, () => {
    console.log("server listening on port 5000");
});

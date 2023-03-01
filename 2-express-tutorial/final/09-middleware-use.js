const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
// req => middleware => res
// middleware on top of the function because order matters
// app.use(logger); // for all the routes
// app.use("/api", logger); // for api/home/about/products or any other /api routes
app.use([logger, authorize]); // for multiple mw put them in an array they are executed in order logger first and authorize later

app.get("/", (req, res) => {
    console.log(req.user);
    res.send("Home");
});

app.get("/about", (req, res) => {
    res.send("About");
});
app.get("/api/products", (req, res) => {
    res.send("Products");
});

app.get("/api/items", (req, res) => {
    res.send("Items");
});

app.listen(5000, () => {
    console.log("server is listening on port 5000");
});

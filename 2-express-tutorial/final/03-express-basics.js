// const app = require('express')();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("user hit the resource");
    // this has been depracated
    // res.status(201).send("Home Page");
    // use the code below
    res.send("Home Page").sendStatus(200);
});

app.get("/about", (req, res) => {
    // res.;
    res.send("About Page").sendStatus(200);
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>resource not found</h1>");
});
app.listen(5000, () => {
    console.log("server is listening on port 5000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

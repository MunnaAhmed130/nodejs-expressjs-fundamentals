// const app = require('express')();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // console.log(req.url);
    console.log("user hit the resource");

    // this has been depracated
    // res.status(201).send("Home Page");
    // use the code below
    // res.sendStatus(200);

    // code below will only show 200 ones after changing message and after that it will show 304
    // if the cached message is not modified then it shows 304 not modified
    res.status(200).send("success");
});

app.get("/about", (req, res) => {
    // res.;
    res.status(200).send("About Page ");
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

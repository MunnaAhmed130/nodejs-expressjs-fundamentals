const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
    res.send("<h1> Home Page </h1> <a href='/api/products'> products </a>");
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.send(newProducts);
});

app.get("/api/products/:productId", (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productId } = req.params;
    // console.log(typeof productId);
    const singleProduct = products.find(
        // (product) => product.id === Number(req.params.productId)
        (product) => product.id === Number(productId)
    );
    if (!singleProduct) return res.status(404).send("Product does not exist");
    // console.log(singleProduct);
    res.json(singleProduct);
});

app.get("/api/products/:producId/reviews/:reviewId", (req, res) => {
    console.log(req.params);
    res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    if (limit) sortedProducts = sortedProducts.slice(0, Number(limit));

    if (sortedProducts.length < 1) {
        // res.status(200).send("no products matched your search");
        return res.status(200).json({ success: true, data: [] });
    }

    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log("server is listening on port 5000");
});

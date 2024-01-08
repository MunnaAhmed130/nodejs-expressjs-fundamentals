// export an array
// module.exports = ["item1", "item2"]

// add key/value pair to module obj directly
module.exports.item = ["item1", "item2"];

const person = {
    name: "bob",
};

// or as a variable
module.exports.singlePerson = person;

console.log("alternative after export", module);

// local
const secret = "SUPER SECRET";

// share
const john = "john";
const peter = "peter";

// module is a object with exports and other property
console.log(module);

// export default
module.exports = { john, peter }; // export default multiple value

console.log(module);

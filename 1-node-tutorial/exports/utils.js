const sayHi = (name) => {
    console.log(`Hello there ${name}`);
};

console.log("utils before export", module);

// export default
module.exports = sayHi; // export function

console.log("utils after export", module);

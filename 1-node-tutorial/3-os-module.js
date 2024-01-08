// built-in module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// const {
//     version,
//     arch,
//     availableParallelism,
//     cpus,
//     endianness,
//     freemem,
//     totalmem,
//     homedir,
//     uptime,
//     machine,
//     platform,
//     tmpdir,
//     type,
//     userInfo,
//     networkInterfaces,
//     hostname, // done
//     loadavg,
//     release,
//     setPriority,
//     getPriority,
// } = os;

// console.log(`Home directory ${homedir()}`);
// console.log(arch(), availableParallelism(), endianness(), userInfo());

// method return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totlaMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);

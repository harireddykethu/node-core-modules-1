const os = require('os');

console.log('OS', os.platform());
console.log('Machine Architecture', os.arch());
console.log('CPU Information', os.cpus());
console.log('Memory available (bytes)', os.freemem());
console.log('Total system memory (bytes)', os.totalmem());
console.log('Hostname (name of the computer)', os.hostname());
console.log('All network interfaces of the computer', os.networkInterfaces());
console.log('Current user information', os.userInfo());
console.log('End-of-Line', os.EOL);

const path = require('path');

const filename = path.basename(__filename);
console.log(filename);

const pathObject = path.parse(__filename);
console.log(pathObject);

const path = require('path');

// basefile name
const a = path.basename(__filename);
console.log(a);

// directory name
const b = path.dirname(__filename);
console.log(b);

// file extention
const c = path.extname(__filename);
console.log(c);

// create path object
const d = path.parse(__filename);
console.log(d);
console.log(d.base);

// concatenate paths
const e = path.join(__dirname, 'test', 'syntax.js');
console.log(e);
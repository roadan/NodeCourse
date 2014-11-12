var fs = require('fs');

console.log('start reading file');
var f = fs.readFileSync(process.argv[2],'utf-8');
console.log(f);
console.log('done');
var fs = require('fs');
var colors = require('colors');

var start = Date.now();

console.log('start reading files');

var strm1 = fs.createReadStream(process.argv[2]);
strm1.setEncoding('utf8');

var strm2 = fs.createReadStream(process.argv[2]);
strm2.setEncoding('utf8');

strm1.on('data', function(data) {
    console.log('read from strm1'.red);
});

strm1.on('end', function(){
	console.log('ended strm1')
})

strm2.on('data', function(data) {
    console.log('read from strm2'.green);
});

strm2.on('end', function(){
	console.log('ended strm2')
})

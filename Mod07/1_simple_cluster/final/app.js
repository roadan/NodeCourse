var cluster = require('cluster');
var http 	= require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	// the cluster api is also an event emitter 
	cluster.on('listening', function(worker, address) {
		console.log('worker ' + worker.process.pid + ' is listening on ' + address.address + ':' + address.port);
	});
} else {

	// Workers can share any TCP connection
	// In this case its a HTTP server
	http.createServer(function(req, res) {
		res.writeHead(200);
		res.end('worker ' + cluster.worker.process.pid + ' returend the result \n');
	}).listen(8000);
}
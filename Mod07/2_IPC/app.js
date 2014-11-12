var cluster = require('cluster');
var http 	= require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	// sending an IPC message
	for (var id in cluster.workers) {
		cluster.workers[id].send('Hi, you are worker id:' + id);
	}
	
} else {

	process.on('message', function messageHandler(msg) {

	//	console.log(cluster.isMaster);
		console.log(msg);
	
	});

};
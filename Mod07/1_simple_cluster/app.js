var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if(cluster.isMaster){
	for(var i=0; i< numCPUs; i++){
		cluster.fork();
	}

	cluster.on("listening",function(worker,address){
		console.log('worker ' + worker.process.pid + ' is listening on ' + address.address + ':' + address.port);
	});

}
else{
	http.createServer(function(req,res){
		res.writeHead(200);
		res.end('worker ' + cluster.worker.process.pid + 'returned the result \n');
	}).listen(8000);
}
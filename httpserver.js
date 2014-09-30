var http = require('http');

var server = http.createServer();

var requestHandler=function(req,res){
	var response="Hello NodeJs";
		res.writeHead(200,{
			"Content-Type": "text/plain",
			"Content-Lenght":response.length
		});

		res.write(response);
		res.end();
};

server.on("connection",function(socket){
	console.log("New connection");
})

server.on("request",requestHandler);

server.listen(3000);
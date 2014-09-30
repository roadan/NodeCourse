var http=require('http');

var server=http.createServer(function(req,res){
		var response="Hello NodeJs";
		res.writeHead(200,{
			"Content-Type": "text/plain",
			"Content-Lenght":response.length
		});

		res.write(response);
		res.end();

}).listen(3000);

console.log("Server started on Port 3000");
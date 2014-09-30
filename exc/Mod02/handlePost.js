var http=require('http');

var server=http.createServer(function(req,res){

	if(req.method==="POST"){
		var body='';

		req.on("data",function(chunk){
			body+=chunk;
		});

		req.on('end',function(){
			var obj=JSON.parse(body);

			var response = "<html><head></head><body><h1>"+obj.name+"</h1><h2>"+ obj.message +"</h2></body></html>"

			res.writeHead(200,{
				"Content-Type":"text/html",
				"Content-Length":response.length
			})

			res.end(response);
		});
	}
	else{
		res.writeHead(400);
		res.end("Page Not Found...");
	}

}).listen(3000);

console.log("Started on 3000");
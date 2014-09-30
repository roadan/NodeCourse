var http = require('http');
var url = require('url');
var qs  = require('querystring');

var server = http.createServer(function(req,res){

	var parsed = url.parse(req.url);
	var query = qs.parse(parsed.query);

	var response = "Relative uri:"+ parsed.path +"\n" +
		"Request path:" + parsed.pathname + "\n" +
		"name:" + query.name +"\n" +
		"Id:" + query.id +"\n"+
		"conf:" + query.conf;

	res.writeHead(200,{
		"Content-Type": "text/plain",
		"Content-Length" : response.length
	});

	res.end(response);


}).listen(3000);

console.log("server started");
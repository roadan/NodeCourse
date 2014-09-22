var http = require('http');

http.createServer(function(req,res){

    var response = 'Hello World';
    res.writeHead(200,
                        {
                            'Content-Type': 'text/plain',
                            'Content-Length': response.length
                        });
    res.write(response);
    res.end();

}).listen(3000);

console.log('bla bla');
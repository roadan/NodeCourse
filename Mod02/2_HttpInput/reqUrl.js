var http = require('http');

var server = http.createServer(function(req, res){
    var response = req.url;

    res.writeHead(200,
        {
            'Content-Type': 'text/plain',
            'Content-Length': response.length
        });
    res.write(response);
    res.end();

});

server.listen(3001);
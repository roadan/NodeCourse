var http = require('http');

var server = http.createServer();

var requestHandler = function(req,res){

    console.log('request');
    
    var response = 'Hello World';
    res.writeHead(200,
        {
            'Content-Type': 'text/plain',
            'Content-Length': response.length,
            //'Connection': 'Close'
        });
    res.write(response);
    res.end();

};

var connectionHandler = function (socket) {
    console.log('New connection');
};

server.on('request', requestHandler);
server.on('connection', connectionHandler);


server.listen(3000);
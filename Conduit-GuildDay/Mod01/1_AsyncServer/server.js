var http = require('http');

var options = {
    host: 'api.icndb.com',
    path: '/jokes/random',
    method: 'GET'
};

// handling incoming HTTP requests
var handleRequests = function(req,res){

    // creating an outgoing HTTP request
    req = http.request(options, function(response) {

        var str = "";
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function(){
            res.writeHead(200, {'content-type': 'application/json'})
            res.end(str);
        });

    });
    req.end();
};

http.createServer(handleRequests).listen(3000);
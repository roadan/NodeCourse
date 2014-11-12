var http = require('http');

var options = {
    host: 'api.worldbank.org',
    path: '/countries',
    method: 'GET'
};

// handling incoming HTTP requests
var handleRequests = function(req,res){

    // creating an outgoing HTTP request
    var req2 = http.request(options, responseCallback = function(response) {

        res.writeHead(200, {'content-type': 'text/xml', 'Content-Encoding':'gzip'})
        response.pipe(res);
        // response.on('data', function (chunk) {
        //     res.write(chunk);
        // });

        // response.on('end', function(){
        //     res.end();
        // });
    });

    req2.end();
};

http.createServer(handleRequests).listen(3000);
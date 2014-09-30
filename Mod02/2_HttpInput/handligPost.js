var http = require('http');

var server = http.createServer(function(req, res){

    if(req.method === 'POST'){

        var body = '';

        req.on('data', function(chunk){
            body += chunk;
        });

        req.on('end', function(){
            var obj = JSON.parse(body);

            var response = '<html><body><h1>' + obj.name +
                '</h1><b>' + obj.msgText +
                '</b></body></html>';

            res.writeHead(200,
                {
                    'Content-Type': 'text/html',
                    'Content-Length': response.length
                });
            res.end(response);
        });

    } else {
        res.writeHead(405);
        res.end();
    }


});

server.listen(3001);
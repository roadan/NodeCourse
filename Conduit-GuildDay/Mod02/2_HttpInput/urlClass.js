var http = require('http'),
    url = require('url');

var server = http.createServer(function(req, res){

    var parsed = url.parse(req.url);

    var resStr = 'Request relative URI ' + parsed.path + '\n' +
                 'Request path: ' + parsed.pathname + '\n' +
                 'Request query string: \n' + parsed.query;

    res.writeHead(200,
        {
            'Content-Type': 'text/plain',
            'Content-Length': resStr.length
        });
    res.write(resStr);
    res.end();

});

server.listen(3001);
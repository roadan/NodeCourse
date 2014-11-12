var http = require('http');
var url= require('url');
var qs = require('querystring');

var server = http.createServer(function(req, res){

    var parsed = url.parse(req.url);
    var query = qs.parse(parsed.query);

    var resStr = 'Request relative URI ' + parsed.path + '\n' +
        'Request path: ' + parsed.pathname + '\n' +
        'name: ' + query.name + '\n' +
        'Id: ' + query.id + '\n' +
        'conf: ' +query.conf

    res.writeHead(200,
        {
            'Content-Type': 'text/plain',
            'Content-Length': resStr.length
        });
    res.write(resStr);
    res.end();

});

server.listen(3001);
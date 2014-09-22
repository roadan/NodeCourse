var http = require('http');
var connect = require('connect');

var server = connect();
server
    .use(connect.logger('dev'))
    .use(connect.bodyParser())
    .use(connect.cookieParser())
    .use(connect.session({ secret: 'selasecret' }))
    .use(function(req, res){

        if(req.session.uName != 'yaniv'){
            req.session.uName = 'yaniv';
        } else {
            res.write(req.session.uName + ' ');
        }
        res.end('hello world\n');

    })
    .listen(727);
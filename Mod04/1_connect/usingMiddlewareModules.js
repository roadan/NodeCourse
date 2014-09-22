var http = require('http'),
    connect = require('connect'),
    whateverModule = require('./middlewareModule.js');

var server = connect();
server
    .use(connect.logger('dev'))
    .use(whateverModule)
    .use(function(req, res){

        res.end('hello world\n');

    })
    .listen(707);
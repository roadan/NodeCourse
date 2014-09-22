var connect = require('connect')
	myMod = require('./middlewareModule.js');

var middlewareFunc = function(req,res,next){
    console.log('whatever');
    next();
};

var server = connect();
server
    .use(connect.logger('dev'))
    .use(middlewareFunc)
    .use(myMod)
    .use(function(req, res){

        res.end('hello connect\n');

    })
    .listen(70);
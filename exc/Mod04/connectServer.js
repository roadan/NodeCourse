var connect = require('connect');

var middlewarefunc = function(req,res,next){
	console.log("i'm a middlware function");
	next();
}

var server = connect()
	.use(connect.logger())
	.use(connect.cookieParser())
	.use(connect.session({ secret: "mySecret"}))
	.use(middlewarefunc)
	.use(function(req,res){
		if(req.session.name!== "Nir"){
			req.session.name = "Nir"
		}else{
			res.write(req.session.name + "\n");
		}

		res.end("Hello connect");
	});

server.listen(8080);
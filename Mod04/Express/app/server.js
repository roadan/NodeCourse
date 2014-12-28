var express= require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require("express-session");
var app= express();

var indexRoutes=require("./routes/index");
var userRoutes=require("./routes/users");

app.set("view engine","jade");
app.set("views",path.join(__dirname,"views"));

app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
	secret:"node workshop"
}))
app.use(function(req,res,next){
	if(req.session.user){
		res.locals.isAuthenticated=true;
		res.locals.currentUser=req.session.user
	}
	next();
})

app.use(express.static(path.join(__dirname,"public")));

app.use("/",indexRoutes);
app.use("/users",userRoutes);

var server=app.listen(3000,function(){
	var host  = server.address().address;
	var port = server.address().port;

	console.log('Express Server listening at http://%s:%s',host,port);
})
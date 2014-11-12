var express=require('express');
var logger = require('morgan');
var bodyParser= require('body-parser');
var session = require("express-session");
var app=express();


var myUsers=[];
var urlEncodedparser=bodyParser.urlencoded({extended:false});
var isRegistered=function(req,res,next){
	if(req.session.isRegistered){
		res.redirect("/users");
		console.log(req.session.isRegistered);
	}
	else{
		next();
	}
}

app.use(logger("common"));
app.use(urlEncodedparser);
app.set("view engine","jade");
app.set('views',"./views");
app.use(session({secret:"guild day"}));
app.use(express.static(__dirname+'/public'));

app.get("/",function(req,res){
	 res.send('Hello Express!');
});

app.get("/page2",function(req,res){
	 res.send('Hello from page 2');
});

app.get("/user/:name",function(req,res){
	res.send('Hello from user '+ req.params.name + ' with id ='+req.query.id);
});

app.get("/home",function(req,res){
	res.render("home");
});

app.get("/myPage",function(req,res){
	res.render("myPage");	
});

app.get("/register",isRegistered,function(req,res){

	res.render("register");	
});

app.route("/users")
	.post(function(req,res){
		req.session.isRegistered=true;
		var user={
			username:req.body.username,
			email:req.body.email,
			password:req.body.password
		}
		myUsers.push(user);
		res.render('users',{users:myUsers});
	})
	.get(function(req,res){
		res.render('users',{users:myUsers});
	});

app.get("/error",function(req,res,next){
	next(new Error('Error in application'));
});

app.use(function(req,res,next){
	res.status(404)
	res.render('404');
});

app.use(function(err,req,res,next){
	 res.status(err.status || 500);
	 res.render('500', { error: err });
});

app.listen(3000,function(){
	console.log("listening on port 3000");	
});
var express = require('express'),
	path=require('path');
var app = express();

var myUsers=[];

app.configure(function(){
	app.use(express.logger());
	app.use(express.bodyParser());
	app.set('view engine','jade');
	app.set('views',__dirname + "/views");
	app.use(express.static(__dirname+'/public'));
	app.set("dbname","expressDb");
});



app.get("/",function(req,res){
	res.send("This is Home");
})

app.get("/Nir",function(req,res){
	res.send("Hi Nir");
})

app.get("/product/:name",function(req,res){
	res.send("This a product named: "+req.params.name + " With id=" + req.query.id);
});

app.get("/db",function(req,res){
	res.send("db="+app.get("dbname"));
});

app.get("/home",function(req,res){
	res.render("home");
});

app.get('/myPage',function(req,res){
	res.render('myPage');
});

app.get('/register',function(req,res){
	res.render('register');

});

app.post('/myUsers',function(req,res){

	var user ={
		username:req.body.username,
		email:req.body.email,
		password:req.body.password
	}
	myUsers.push(user);
	res.render('users',{users:myUsers});


});

app.get("/error",function(req,res,next){
	
	next(new Error('keyboard cat!'));
});

app.use(function(req,res){
	res.status('404');
	res.render('404');
});


app.use(function(err,req,res,next){
	 res.status(err.status || 500);
	 res.render('500', { error: err });
});



app.listen(3000);




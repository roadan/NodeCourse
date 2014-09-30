var express = require('express'),
	mongodb=require('mongodb');

var app = express();


app.configure(function(){
	app.use(express.bodyParser());
	app.set('view engine','jade');
	app.set('views',__dirname + "/views");
	app.use(express.static(__dirname+'/public'));
});


app.get("/",function(req,res){
	res.send("This is Home");
})

app.get('/register',function(req,res){
	res.render('register');

});

app.post('/myUsers',function(req,res,next){
	//49dd616450d4caeeb11fb2dd2c713f71
	
	mongodb.connect("mongodb://webuser:123456@linus.mongohq.com:10018/NodeSample_MyUsers",function(err,db){
		if(err) throw(err);

		var user ={
			username:req.body.username,
			email:req.body.email,
			password:req.body.password
		}
		var collection=db.collection("users");

		 collection.insert(user, {w:1}, function(err, result) {
	 		if(err) throw(err);
	 		console.log(result);
			res.render('users',{users:result});

		 });
	});
});

app.get('/user/:username',function(req,res){
	mongodb.connect("mongodb://webuser:123456@linus.mongohq.com:10018/NodeSample_MyUsers",function(err,db){
		if(err) throw(err);

		var collection=db.collection("users");

		 collection.findOne({username:req.params.username}, function(err, result) {
	 		if(err) throw(err);
	 		console.log(result);
			res.render('user',{user:result});
		 });
	});
})

app.get('/myUsers',function(req,res,next){
	//49dd616450d4caeeb11fb2dd2c713f71
	
	mongodb.connect("mongodb://webuser:123456@linus.mongohq.com:10018/NodeSample_MyUsers",function(err,db){
		if(err) throw(err);

		var collection=db.collection("users");

		 collection.find().toArray(function(err, result) {
	 		if(err) throw(err);
	 		console.log(result);
			res.render('users',{users:result});
		 });
	});
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




var express = require('express'),
	mongoose=require('mongoose');
	redis = require('connect-redis')

var app = express();
var RedisStore=redis(express.session);
mongoose.connect("mongodb://webuser:123456@linus.mongohq.com:10018/NodeSample_MyUsers")

var userSchema=mongoose.Schema({
	username:String,
	email:String,
	password:String

});

var User = mongoose.model("user",userSchema);



app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.session({store:new RedisStore(),secret:'This is my secret',resave:true,saveUninitialized:true}));
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
	
	var user = new User({
		username:req.body.username,
		email:req.body.email,
		password:req.body.password
	});

	user.save(function(err,_user){
		if(err) throw(err);
		res.render('user',{user:_user});
	});

});

app.get('/user/:username',function(req,res){
	User.findOne({username:req.params.username},function(err,_user){
		if(err) throw(err);
		res.render('user',{user:_user});
	});
})

app.get('/myUsers',function(req,res,next){
	//49dd616450d4caeeb11fb2dd2c713f71
	
	User.find(function(err,_users){
		if(err) throw(err);
		res.render('users',{users:_users})
	});
});

app.get("/error",function(req,res,next){
	
	next(new Error('Server Error!'));
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




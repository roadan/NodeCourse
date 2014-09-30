/*
 Create an app with register,login and a My Account page with a user welcome message.
 My account requires login, you should authenticate the user.
 Your app should save the users in a mongo db instance, and upon succesful login 
 save it in a session.
*/

// install these packages from npm
// use express@3
var express = require('express'),
	mongoose=require('mongoose');

var app = express();

//using mongoose for connecting to mongo. find docs at http://mongoosejs.com/

mongoose.connect(/*Your Connection string here, 
				   browse to mongohq and create a DB. 
				   then from the console create a user and  a collection.
				   from the admin get the connection string.
				 */)


// Here is your schema and model.
var userSchema=mongoose.Schema({
	username:String,
	email:String,
	password:String

});

var User = mongoose.model("user",userSchema);


var authenticator=function(req,res,next){
	//Create a middleware function the authenticate if a user is logged in.
};

app.configure(function(){
	
	//More middleware should be used here for cookie,session,body parsing.

	//jade is setup, create your views in the views folder.
	app.set('view engine','jade');
	app.set('views',__dirname + "/views");


	//if you want some styles and javascript put them in the public folder.
	app.use(express.static(__dirname+'/public'));
});


//here are your first route to login page, you should fill the rest.
app.get("/login",function(req,res){
	res.render("login");
});

app.get('/register',function(req,res){
	res.render('register');
});

//more routes and login go here...

app.listen(3000);

//Good Luck!



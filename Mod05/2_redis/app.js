var express=require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore=require('connect-redis')(session);

var app=express();


console.log(RedisStore);
app.use(cookieParser());
app.use(session({store:new RedisStore(),secret:'This is my secret',resave:true,saveUninitialized:true}));


app.get('/',function(req,res){
	req.session.name = req.session.name || new Date().toUTCString();
	console.log(req.sessionID);
	res.send(req.session.name);
})

app.listen(3000);
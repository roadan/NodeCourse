var express = require('express');
var users=require('../models/users');
var router = express.Router();

var userService=users.service;

router.get("/",function(req,res){

	res.render("users",{users:users.service.all()});

});

router.route("/register")
.get(function(req,res){
	res.render("register");
})
.post(function(req,res){
	userService.save(req.body.username,req.body.email,req.body.password)
	res.redirect('/users');
});

router.route("/login")
.get(function(req,res){
	res.render("login");
})
.post(function(req,res){
	var user=userService.login(req.body.email,req.body.password);
	if(user!=null){
		req.session.user=user;
		res.redirect("/users");
	}
	else{
		res.render("login",{error:"Wrong Email or password"})
	}
});


module.exports=router;
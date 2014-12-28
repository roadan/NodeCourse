var mongoose=require('mongoose');

mongoose.connect("mongodb://webuser:123456@linus.mongohq.com:10018/NodeSample_MyUsers");

var userSchema=mongoose.Schema({
	username:String,
	email:String,
	password:String
});

var User = mongoose.model("user",userSchema);

var UserService=function(){

	this.save=function(username,email,password,callback){
		var user = new User({
			username:username,
			email:email,
			password:password
		});
		user.save(function(err,_user){
			if(err) 
				callback(err);
			else
				callback(null,_user);
		});
	};

	this.login=function(email,password,callback){
		User.findOne({email:email,password:password},function(err,_user){
			if(err) 
				callback(err);
			else
				callback(null,_user);
		});
	};

	this.all=function(callback){
		User.find(function(err,_users){
			if(err) 
				callback(err);
			else
				callback(null,_users);
		});
	}
}

module.exports.User=User;
module.exports.service=new UserService();
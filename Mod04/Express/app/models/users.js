var User=function(username,email,password){
	this.username=username;
	this.email=email;
	this.password=password;
}

var UserService=function(){
	var users=[];
	this.save=function(username,email,password){
		users.push(new User(username,email,password));
		return true;
	};

	this.login=function(email,password){
		var user=null;
		users.forEach(function(item){
			if(user===null && item.email===email && item.password===password){
				user=item;
				return;
			}
		});
		return user;
	};

	this.all=function(){
		return users;
	}
}

module.exports.User=User;
module.exports.service=new UserService();
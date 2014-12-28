var io = require("socket.io");

exports.init=function(server){
	io=io(server);

	//io.sockets.on("connection",function(socket){ 
	var chatSys = io.of("/chatAdmin")
	chatSys.on("connection",function(socket){
		setTimeout(function(){
			chatSys.emit("adminMessage",{type:"adminMessage", message:"This a message From the chat admin"});
		}, 5000);
			
	});
	

	var chatCom = io.of("/chatCom").on("connection",function(socket){
		socket.on("set_name",function(data){
			socket.nickname=data.nickname;
			socket.emit("name_set",data);
			socket.broadcast.emit("user_joined",data);
			socket.emit("newMessage",{
				type:"serverMessage",
				message:"Welcome to incredible chat"
			});
		});

		socket.on("newMessage",function(message){
			if(message.type == "userMessage"){
				message.nickname=socket.nickname;
				socket.broadcast.emit("newMessage",message);
				message.type = "myMessage";
				socket.emit("newMessage",message);
			}
		});
	});
};
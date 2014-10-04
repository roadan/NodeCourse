var io = require("socket.io");

exports.init=function(server){
	io = io.listen(server);

	//io.sockets.on("connection",function(socket){ 
	var chatSys = io.of("/chatSys").on("connection",function(socket){
		socket.on("set_name",function(data){
			socket.set('nickname',data.nickname,function(){
				socket.emit("name_set",data);
				socket.broadcast.emit("user_joined",data);
			});
			socket.send(JSON.stringify({
					type:"serverMessage",
					message:"Welcome to incredible chat"
			}));

		});

	});

	var chatCom = io.of("/chatCom").on("connection",function(socket){

		socket.on("message",function(message){
			message= JSON.parse(message);
				if(message.type == "userMessage"){
						socket.get('nickname', function(err, nickname){
						message.nickname=nickname;
						socket.broadcast.send(JSON.stringify(message));
						message.type = "myMessage";
						socket.send(JSON.stringify(message));
					});
				}
		});
	});



};
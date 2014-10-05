(function(){

	var panel;
	var button;
	var nickModal;

	$(function(){
		// var socket=io.connect("/");
		var chatCom=io.connect("/chatCom"),
			chatSys=io.connect("/chatSys");		

		chatCom.on("message",function(data){
			var msg = JSON.parse(data);
			displayMessage(msg);
		});	

		chatSys.on("message",function(data){
			var msg = JSON.parse(data);
			displayMessage(msg);
		});	

		chatSys.on("name_set",function(data){
			var msg = data;
			displayMessage({type:"serverMessage",message:"Hi "+ data.nickname});
			nickModal.modal('hide');
		});

		chatSys.on("user_joined",function(data){
			displayMessage({type:"serverMessage",message:data.nickname +" has joined"});
		});

		panel=$("#chatPanel");
		$("#sendBtn").click(function(){
			var txt=$("#msgInput").val();
			chatCom.send(JSON.stringify({
				type:"userMessage",
				message:txt
			}));

		});

		nickModal=$(".modal").modal();

		nickModal.find("button").click(function(){
			var nick=nickModal.find('input').val();
			chatSys.emit("set_name",{nickname:nick});
			
		});


	});

	var displayMessage=function(msg){
		var style = "text-primary";
		var html=[];

		if(msg.type==="serverMessage"){
			style="text-info"
		}
		else if(msg.type==="myMessage")
		{
			style="text-muted";
		}

		html.push("<p class='" + style + "' >")
		if(msg.nickname){
			html.push(msg.nickname+ ": ");	
		}
		html.push(msg.message);
		html.push("</p>");

		panel.append(html.join(''));
			
	}

}())
(function(){

	var panel;
	var button;
	var nickModal;

	$(function(){

		var chatSys =io.connect("/chatSys");
		var chatCom =io.connect("/chatCom");

		nickModal=$(".modal").modal();
		nickModal.find("button").click(function(){
			var nick=nickModal.find('input').val();
			chatSys.emit("set_name",{nickname:nick});
		});

		chatSys.on("message",function(data){
			var msg=JSON.parse(data);
			displayMessage(msg);
		});
		chatCom.on("message",function(data){
			var msg=JSON.parse(data);
			displayMessage(msg);
		});

		chatSys.on("name_set",function(data){
			var msg = data;
			displayMessage({type:"serverMessage",message:"Hi "+ data.nickname});
			nickModal.modal('hide');
		});

		chatSys.on("user_joined",function(data){
			displayMessage({type:"serverMessage",message:data.nickname + ' Has joined'});
		});

		panel=$("#chatPanel");
		$("#sendBtn").click(function(){
			var txt=$("#msgInput").val();
			chatCom.send(JSON.stringify({
				type:"userMessage",
				message:txt
			}));
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
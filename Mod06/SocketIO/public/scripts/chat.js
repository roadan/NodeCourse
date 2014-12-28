(function(){

	var panel;
	var button;
	var nickModal;

	$(function(){

		var chatAdmin =io("/chatAdmin");
		var chatCom =io.connect("/chatCom");
		
		nickModal=$(".modal").modal();
		nickModal.find("button").click(function(){
			var nick=nickModal.find('input').val();
			chatCom.emit("set_name",{nickname:nick});
		});

		chatAdmin.on("adminMessage",function(data){
			var msg=data;
			displayMessage(msg);
		});
		chatCom.on("newMessage",function(data){
			displayMessage(data);
		});

		chatCom.on("name_set",function(data){
			var msg = data;
			displayMessage({type:"serverMessage",message:"Hi "+ data.nickname});
			nickModal.modal('hide');
		});

		chatCom.on("user_joined",function(data){
			displayMessage({type:"serverMessage",message:data.nickname + ' Has joined'});
		});

		panel=$("#chatPanel");
		$("#sendBtn").click(function(){
			var txt=$("#msgInput").val();
			chatCom.emit("newMessage",{
				type:"userMessage",
				message:txt
			});
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
		else if(msg.type==="adminMessage"){
			style="text-warning";
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
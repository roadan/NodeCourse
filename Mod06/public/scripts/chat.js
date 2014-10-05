(function(){

	var panel;
	var button;
	var nickModal;

	$(function(){

		panel=$("#chatPanel");
		$("#sendBtn").click(function(){
			var txt=$("#msgInput").val();
			
		});

		// nickModal=$(".modal").modal();

		nickModal.find("button").click(function(){
			var nick=nickModal.find('input').val();
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
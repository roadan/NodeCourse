(function(){

	var panel;

	$(function(){
		var socket=io.connect("/");

		socket.on("message",function(data){
			var tweet = JSON.parse(data);
			displayTweet(tweet);
		});	

		panel=$("#tweetPanel");

	});

	var displayTweet=function(tweet){
		var style = "text-primary pull-left";
		var html=[];
		html.push("<div class='clearfix' style='margin-top:5px;' >");
		html.push("<img src='"+ tweet.imageUrl +"' class='pull-left' />")
		html.push("<p class='" + style + "' style='margin-left:5px; width:90%;' >")
		html.push(tweet.text);
		html.push("</p></div>");

		panel.append(html.join(''));	
	}

}())
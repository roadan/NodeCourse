var express = require('express')
var http = require('http');
var io = require("socket.io");
var twitter = require('twitter');
var app = express();

var twit = new twitter({
    consumer_key: 'pHLKFCHfgOKGRXCrdXtHn48k8',
    consumer_secret: 'CqgbQMzKk5NM8VvKzwIvHTH49B6wHaddgnUrwvJ5PupPKgdcqi',
    access_token_key: '2839809097-mCNf8FjVqroKijNd0pjUfPHUTqMHHMeglnxl5np',
    access_token_secret: 'ZQIglQ5XNIskkiQUyoIqrcNhgti06V5j6gKdcfd8TBtvP'
});

app.set('view engine','jade');
app.set('views',__dirname + "/views");
app.use(express.static(__dirname+'/public'));

var port= process.env.PORT || 3000;
app.get("/",function(req,res){
	res.render("home");
})

var server=http.createServer(app).listen(port,function(){
 console.log("server starter on "+ port);
});

io = io.listen(server);

io.sockets.on("connection",function(socket){ 
	twit.stream('statuses/filter',{track:'node,nodejs,javascript,html5,angular,angularjs' ,language:'en'},function(stream) {
	    stream.on('data', function(data) {
	    	if(data && data.user){
		    	var tweet={
		    		text:data.text,
		    		imageUrl:data.user.profile_image_url    		
		    	}
	    	 	console.log(tweet);
	    	 	socket.send(JSON.stringify(tweet));
		    }
	       
	    });
	    stream.on('error', function(data) {
	    	 	console.log("Error:"+data);
	    });
	});
	
});














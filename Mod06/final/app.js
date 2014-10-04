var express = require('express')
var http = require('http');
var chatService = require('./services/chatService')
var app = express();

app.set('view engine','jade');
app.set('views',__dirname + "/views");
app.use(express.static(__dirname+'/public'));

var port= process.env.PORT || 3000;
app.get("/",function(req,res){
	res.render("chat");
})

var server=http.createServer(app).listen(port,function(){
 console.log("server starter on "+ port);
});

chatService.init(server);




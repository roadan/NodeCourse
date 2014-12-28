var express = require('express');
var app = express();
var server = require('http').Server(app);
var chatService = require('./services/chatService');

app.set('view engine','jade');
app.set('views',__dirname + "/views");
app.use(express.static(__dirname+'/public'));


var port= process.env.PORT || 3000;
app.get("/",function(req,res){
	res.render("chat");
})
chatService.init(server);
server.listen(port,function(){
 console.log("server starter on "+ port);
});







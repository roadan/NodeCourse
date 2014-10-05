var fork = require('child_process').fork;

var child= fork(__dirname+"/calc.js");

child.on("message",function(msg){
	console.log("Result from "+ child.pid + " :"+msg.result);
	child.send({cmd:"done"});
})

child.send({cmd:"add",number1:2,number2:4});
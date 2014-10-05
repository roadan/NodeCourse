var add = function (num1,num2) {
    return num1 + num2;
}

process.on('message',function(m){
	console.log("command recieved: " + m.cmd);
	if(m.cmd==="add"){
		var res=add(m.number1,m.number2);
		process.send({result:res});

	}
	else if (m.cmd==="done"){
		process.exit();
	}

});
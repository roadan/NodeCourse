var exec=require('child_process').exec;

var child=exec("ipconfig",function(err,stdout,stderr){
	if(err) throw(err);
	if(err){
		console.log("Error: "+stderr);
	}
	else{
		console.log("output is :"+ stdout);
	}

});

console.log("child Pid is :"+child.pid);
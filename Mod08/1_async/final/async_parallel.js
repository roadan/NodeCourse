var async = require("async");

var tasks=[
	function(callback){ console.log("this a task 1"); callback(null,1) },
	function(callback){ console.log("this a task 2"); callback(null,2) },
	function(callback){ setTimeout(function(){ console.log("this a task 3"); callback(null,3)}, 1000); },
	function(callback){ console.log("this a task 4"); callback(null,4) },
	function(callback){ console.log("this a task 5"); callback(null,5) }
];

async.parallel(tasks,function(err,results){
	if(err) throw err;

	console.log("Results:"+results);


});
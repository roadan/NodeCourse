var spawn = require("child_process").spawn;

var sysInfo= spawn("systeminfo");
var sort  = spawn('sort',['/r']);

sysInfo.stdout.pipe(sort.stdin);
sort.stdout.pipe(process.stdout);

sysInfo.stderr.on("data",function(data){
	console.log("sysInfo stderr : "+data);
});

sort.stderr.on("data",function(data){
	console.log("sysInfo stderr : "+data);
});
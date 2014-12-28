/*
 problem:
*/
var Item = function(id){
	this.Id=id;
};

Item.prototype.someAsyncCall=function(callback){
	var id=this.Id;
	setTimeout(function(){
		console.log("async call done for item:"+ id);
		if(typeof(callback)==="function"){
			callback();
		}
	}, 1000);
}
var items=[];
for (var i = 0; i < 10; i++) {
	items.push(new Item(i+1));
};P

function doSomethingOnceAllAreDone(){
	console.log("async calls are all done?");
}



// Loop through some items
items.forEach(function(item){
  // Call asynchronous function, often a save() to DB
  item.someAsyncCall();
});
 
// At this point, we've fired a bunch of async calls
// but they're probably not all done executing yet
 
// This function is meant to be executed once all the async
// calls above are done, but we don't know if/when they are,
// and therein lies the problem with this approach
doSomethingOnceAllAreDone();



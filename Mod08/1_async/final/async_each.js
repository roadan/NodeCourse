var async = require("async");

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
};

function doSomethingOnceAllAreDone(){
  console.log("async calls are all done?");
}


async.each(items,function(item,callback){
      item.someAsyncCall(callback);
},function(err){
  if(err) throw err;
  doSomethingOnceAllAreDone();
});


var async = require("async");

async.waterfall([
    function(callback){
        console.log("first function...");
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback){
      // arg1 now equals 'one' and arg2 now equals 'two'
        console.log("second function with " + JSON.stringify(arguments));
        callback(null, 'three');
    },
    function(arg1, callback){
        // arg1 now equals 'three'
        console.log("third function with " + JSON.stringify(arguments));
        callback(null, 'done');
    }
], function (err, result) {
   if(err) throw err;

   console.log("result is "+ result);  
});
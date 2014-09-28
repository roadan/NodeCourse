var fs = require('fs');
var colors = require('colors');

// this method reads the content of a directory
fs.readdir(process.argv[2], function(err,files){
    files.forEach(function(file){

        var path = process.argv[2] + '\\' + file;

        fs.stat(path, function(err, stats){
            if(stats != undefined){
                if(stats.isDirectory()){
                    console.log(path.red );
                } else {
                    console.log(path.green);
                }
            }
        });
    });
});
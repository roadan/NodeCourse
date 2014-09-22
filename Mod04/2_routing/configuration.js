var express = require('express');
var app = express();

app.configure(function(){
    app.use(express.logger('dev'));
    app.set('dbName', 'expressDb')
});

app.get('/',function(req,res){

    res.send(app.get('dbName'));

});

app.listen(7272);
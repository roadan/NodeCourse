var express = require('express');
var app = express();

app.get('/product/:name',function(req,res){

    res.send('hello ' + req.params.name);

});

app.get('/category/:name',function(req,res){

    res.send('hello ' + req.params.name);

});
app.get('/',function(req,res){

    res.send('hello ' + req.query.id);

});

app.listen(7227);
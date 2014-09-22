var express = require('express');
var app = express();

app.get('/',function(req,res){

    res.send('hello world')

});

app.get('/Yaniv',function(req,res){

    res.send('hello yaniv');

});

app.listen(722);
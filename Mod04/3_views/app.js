var express = require('express'),
    path = require('path'),
    connect = require('connect');

app = express();

app.configure(function(){
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname  + '/public' ));
});

// simple jade sample
app.get('/',function(req,res){

    res.render('index');

});

// using scripts
app.get('/scripting',function(req,res){

    res.render('scripts');

});

// using blocks
app.get('/home',function(req,res){

    res.render('homepage');

});

app.listen(313);
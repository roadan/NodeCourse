var express = require('express'),
    path = require('path'),
    students = require('./controllers/students.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


students.init(app);

app.listen(747);
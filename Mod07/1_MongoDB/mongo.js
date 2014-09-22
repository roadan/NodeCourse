var express = require('express'),
    path = require('path'),
    students = require('./controllers/studentsMongoose.js');

app = express();

app.configure(function(){
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
});

students.init(app);

app.listen(747);
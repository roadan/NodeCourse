var mongoose = require('mongoose');

mongoose.connect('mongodb://MongoLab-o:ZQAfzJZ7hbgpHlDUmmGFhnN3G.zcXspX0QhCHuDEklE-@ds027748.mongolab.com:27748/MongoLab-o');

// setting up the model
var studentSchema = mongoose.Schema({
    name: String,
    id: String,
    img: String
})

var Student = mongoose.model('Student', studentSchema,'students');

exports.init = function(app){

    // adding a get route for all students
    app.get('/',function(req,res){

        Student.find({},function(err, result){

            // when we get the data back, we pass it to the view
            var model = {};
            model.students = result;

            res.render('students', model);
        });
    });

    // adding a get route for a specific student
    app.get('/students/:id',function(req,res){

        Student.findOne({ id: req.params.id },  function(err, item) {

                // when we get the data back, we pass it to the view
                res.render('student', item);
        });
    });
};
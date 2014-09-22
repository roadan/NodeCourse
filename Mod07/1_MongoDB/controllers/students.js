var mClient = require('mongodb').MongoClient

var connectionStr = 'mongodb://MongoLab-o:ZQAfzJZ7hbgpHlDUmmGFhnN3G.zcXspX0QhCHuDEklE-@ds027748.mongolab.com:27748/MongoLab-o';

exports.init = function(app){

    // adding a get route for all students
    app.get('/',function(req,res){

        // connecting to MongoDB
        mClient.connect(connectionStr, function(err, db) {
            if(err) throw err;

            // getting data from the students collection
            var collection = db.collection('students');
            var allStudents = collection.find().toArray(function(err, result){

                // when we get the data back, we pass it to the view
                var model = {};
                model.students = result;

                res.render('students', model);
            });
        })
    });

    // adding a get route for a specific student
    app.get('/students/:id',function(req,res){

        // connecting to MongoDB
        mClient.connect(connectionStr, function(err, db) {
            if(err) throw err;

            // getting data from the students collection
            var collection = db.collection('students');
            var allStudents = collection.findOne({ id: req.params.id },  function(err, item) {

                // when we get the data back, we pass it to the view
                res.render('student', item);
            });
        });

    });
};
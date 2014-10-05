var express = require('express');

app = express();

app.use(app.router);
app.use(function(err, req, res, next){
  console.log('----------error----------');
  res.status(500).send('Something broke!');
});

app.get('/', function (req, res){
	throw new Error('something bad happened');
});

app.listen(213);
var express       = require('express'),
	path          = require('path');

var port = process.env.PORT || 1337;

app = express();

app.configure(function(){
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
});
 
app.get('/',function(req,res){

	var response = 'Hello Express';
    res.writeHead(200,
                        {
                            'Content-Type': 'text/plain',
                            'Content-Length': response.length
                        });
    res.write(response);
    res.end();

});
app.listen(port);
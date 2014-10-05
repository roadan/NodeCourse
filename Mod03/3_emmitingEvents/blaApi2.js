var util=require('util');
var EventEmitter = require('events').EventEmitter;

var Bla = function(){

	var self=this;

    setTimeout(function(){
        self.emit('data','some data');
    },1000);

    setTimeout(function(){
        self.emit('nodata','no data');
    },2000);
};


util.inherits(Bla,EventEmitter);

module.exports=Bla;
var eventEmitter = require('events').EventEmitter;

exports.bla = function(){

    e = new eventEmitter();

    setTimeout(function(){
        e.emit('data','some data');
    },1000);

    setTimeout(function(){
        e.emit('nodata','no data');
    },2000);

    return(e);
}
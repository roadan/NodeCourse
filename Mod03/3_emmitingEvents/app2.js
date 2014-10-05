var Bla = require('./blaApi2.js');

var blabla = new Bla();

blabla.on('data',function(data){
    console.log(data);
});

blabla.on('data',function(data){
    console.log(data);
});

blabla.on('nodata',function(data1){
    console.log(data1);
});
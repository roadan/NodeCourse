var api = require('./blaApi.js');

var blabla = api.bla();

blabla.on('data',function(data){
    console.log(data);
});

blabla.on('data',function(data){
    console.log(data);
});

blabla.on('nodata',function(data1){
    console.log(data1);
});
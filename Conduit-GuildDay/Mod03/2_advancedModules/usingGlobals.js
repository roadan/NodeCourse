var logger = require('./logger.js');

global.prefix = '|||---~~~>';

logger.log('all good');

setTimeout(function(){
    logger.log('going twice');
},1000);

setTimeout(function(){
    logger.err('error');
},2000);
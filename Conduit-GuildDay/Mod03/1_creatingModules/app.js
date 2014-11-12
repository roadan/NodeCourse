var logger = require('./logger.js');


logger.log('Hello');

setTimeout(function(){
    logger.log(' going once');

},1000);

setTimeout(function(){
    logger.log(' going twice');
},2000);
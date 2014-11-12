var strat = Date.now();
//console.log('start: ' + strat);

setTimeout(function (){
    console.log('Going once: ' + (Date.now() - strat));
    for(var i =0;i < 5000000000; i++){
    }
},1000);

setTimeout(function (){
    console.log('Going twice: ' + (Date.now() - strat));
},2000);

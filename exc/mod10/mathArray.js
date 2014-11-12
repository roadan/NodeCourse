var CalcMath  = require('./math');

var MathArray=function(calcMath){
	this.math = calcMath;
}

MathArray.prototype.sumPow = function(arr){
	var result;
    arr.forEach(function(item){
        var result += this.math.pow(item,2);
    });
    return result;
}

MathArray.prototype.sum = function (arr) {
    var result=0;
    arr.forEach(function(item){
        var result = this.math.add(item,result);
    });
    return result;
}

MathArray.prototype.substract = function (arr) {
    var result=0;
    arr.forEach(function(item,i){
        if(i===0) {
            result=item;
        }
        else{
            result = this.math.substract(result,item);
        }
        
    });
    return result;
}

module.exports = MathArray;
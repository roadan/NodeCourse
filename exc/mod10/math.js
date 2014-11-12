var CalcMath = function(){};

CalcMath.prototype.pow = function(x,y){
	return Math.pow(x,y);
}

CalcMath.prototype.powAsync = function(x,y,callback){
	setTimeout(function(){
		callback(null,this.pow(x,y));
	}, 1000);
}

CalcMath.prototype.add = function (num1,num2) {
    return num1 + num2;
}
CalcMath.prototype.addAsync = function (num1,num2,callback) {
    setTimeout(function(){
		callback(null,num1+num2);		
    }, 1000);
    
}
CalcMath.prototype.substract = function (num1, num2) {
    return num1 - num2;
}
CalcMath.prototype.substractAsync = function (num1, num2) {
    setTimeout(function(){
		callback(null,num1-num2);		
    }, 1000);
}
CalcMath.prototype.divide = function (num1, num2) {
    if (num2 === 0) {
       throw new Error("divide by zero is not allowed");
    }
    return num1 / num2;
}

CalcMath.prototype.divideAsync = function (num1, num2) {
    setTimeout(function(){
    	if (num2 === 0) {
       		callback(new Error("divide by zero is not allowed"));
	    }
	    callback(null,num1 / num2);				
    }, 1000);
    
}

module.exports = CalcMath;
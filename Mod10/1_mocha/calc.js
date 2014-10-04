exports.add = function (num1,num2) {
    return num1 + num2;
}
exports.addAsync = function (num1,num2,callback) {
    setTimeout(function(){
		callback(num1+num2);		
    }, 1000);
    
}
exports.substract = function (num1, num2) {
    return num1 - num2;
}
exports.divide = function (num1, num2) {
    if (num2 === 0) {
       throw new Error("divide by zero is not allowed");
    }
    return num1 / num2;
}





exports.add = function (num1,num2) {
    return num1 + num2;
}
exports.substract = function (num1, num2) {
    return num1 - num2;
}
exports.divide = function (num1, num2) {
    if (num2 === 0) {
       throw (new Error("divide by zero is not allowed"));
    }
    return num1 / num2;
}




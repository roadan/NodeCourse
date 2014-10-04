function MyObject(){}

MyObject.prototype.save = function (object) {
    return true;
}

MyObject.prototype.getValue = function () {
    return 5;
}

MyObject.prototype.getValueAsync = function(callback){
    callback();
}

module.exports=MyObject;

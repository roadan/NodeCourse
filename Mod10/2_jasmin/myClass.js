function MyClass(dependency) {
    this.dependency = dependency;
}

MyClass.prototype.saveObject = function (o) {

    var result = false;
    if (o) {
        try {
            return this.dependency.save(o)
        } catch (e) {
            console.log(e);
        }
    }
    return result;
}

MyClass.prototype.saveObjects = function (array) {
    for (i = 0; i < array.length; i++) {
        if (array[i])
        {
            try {
                this.dependency.save(array[i])
            } catch (e) {
                console.log(e);
            }
        }
        
    }
}


MyClass.prototype.getValueFromObject = function () {
    var val = this.dependency.getValue();

    if (val < 5) {
        return 1;
    }
    else {
        return 2;
    }

}

module.exports=MyClass;

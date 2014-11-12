describe("MyClass with dependency", function () {
    var obj;
    var MyObject;
    var myClass;
    var MyClass;

    beforeEach(function () {
        MyObject=require("../myObject");
        MyClass=require("../myClass");
        obj = new MyObject();
        
    });

   
});


describe("MyObject", function () {
    var obj;
    var MyObject;

    beforeEach(function () {
        MyObject=require("../myObject");
        obj = new MyObject();
    });

    // jasmine.createSpy
   
});

describe("MyClass with Spy object", function () {
    var spyObj;
    var MyClass;

    beforeEach(function () {
        MyClass=require("../myClass");
        // jasmine.createSpyObj

    });

    it("should be able to call save", function () {

        var myClass = new MyClass(spyObj);
        myClass.saveObject("sdsds");
        expect(spyObj.save).toHaveBeenCalled();
    });

    it("should be able to get Value from object", function () {
        var myClass = new MyClass(spyObj);
        expect(myClass.getValueFromObject()).toBe(2);
    });

  
});


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

    it("should be able to call save", function () {

        var spy = spyOn(obj, 'save');
        myClass = new MyClass(obj);
        myClass.saveObject("sdsds");
        expect(spy).toHaveBeenCalled();
    });

    it("should be able to get Value from object", function () {

        var spy = spyOn(obj, 'getValue').andReturn(10);
        myClass = new MyClass(obj);
        expect(myClass.getValueFromObject()).toBe(2);
    });

    it("should be able to get Value from object with fake", function () {

        var spy = spyOn(obj, 'getValue').andCallFake(function () {
            console.log("fake get Value call");
            return 3;
        });
        myClass = new MyClass(obj);
        expect(myClass.getValueFromObject()).toBe(1);
    });

    it("should be able to save an array of objects", function () {
        var spy = spyOn(obj, 'save').andCallThrough();
        myClass = new MyClass(obj);
        var array = [1, 2, 3];
        myClass.saveObjects(array);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(1);
        expect(spy.callCount).toEqual(3);
        expect(spy.calls[0].args[0]).toEqual(1);
        

    });

    it("should be able to handle errors", function () {
        var spy = spyOn(obj, 'save').andThrow();
        myClass = new MyClass(obj);        
        expect(myClass.saveObject()).toBeFalsy();
    });

    afterEach(function () {
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

    it("should be able to get value async", function () {
        var spy = jasmine.createSpy("asyncCallback");
        obj.getValueAsync(spy);
        expect(spy).toHaveBeenCalled();
    });

    afterEach(function () {
        obj = new MyObject();
    });
});

describe("MyClass with Spy object", function () {
    var spyObj;
    var MyClass;

    beforeEach(function () {
        MyClass=require("../myClass");
        spyObj = jasmine.createSpyObj("mySpyObject", ["save", "getValue"]);
        spyObj.getValue.andReturn(6);
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


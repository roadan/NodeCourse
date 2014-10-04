var should = require('should');

describe("Calculator", function () {
    var calc;

    beforeEach(function () {
        calc = require('../calc.js');
    });

    it("should be able to add 1 and 1", function () { 
        calc.add(1, 1).should.be.exactly(2);
    });

    it("should be able to substract", function () {
        calc.substract(4, 2).should.be.exactly(2);
        calc.substract(4, 2).should.not.be.exactly(3);
    });

    it("should be able to divide", function () {
        calc.divide(4, 2).should.be.exactly(2);
    });

    it("should be able to divide a rational number", function () {
        calc.divide(1, 3).should.be.approximately(0.3,0.1);
        (function(){
            calc.divide(1, 0);
        }).should.throw(); 
    });

    it("should be able to add 1 and 1 async", function (done) { 
        
        calc.addAsync(1,1,function(result){
            result.should.be.exactly(2);
            done();
        })

        
    });

});
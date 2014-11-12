describe("Calculator", function () {
    var calc;

    beforeEach(function () {
        calc = require('../calc.js');
    });

    it("should be able to add 1 and 1", function () {
        expect(calc.add(1, 1)).toBe(2);
    });

    it("should be able to substract", function () {
        expect(calc.substract(4, 2)).toBe(2);
    });

    it("should be able to divide", function () {
        expect(calc.divide(4, 2)).toBe(2);
    });

    it("should be able to divide a rational number", function () {
        expect(calc.divide(1, 3)).toBeBetween(0.3,0.34);
        expect(function () { calc.divide(1, 0) }).toThrow();
    });

});
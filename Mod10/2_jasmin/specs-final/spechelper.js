beforeEach(function () {
    this.addMatchers({
        toBeBetween: function (start,end) {
            var actual = this.actual;

            var pass = actual >= start && actual < end;

            if (pass) {
                this.message = "Expected " + actual + "to be in between " + start + " and " + end;
            }
            else {
                this.message = "Expected " + actual + "to be in between " + start + " and " + end + " ,but it's not.";
            }

            return pass;
        }
    });
});
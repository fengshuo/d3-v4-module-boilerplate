var tape = require("tape");
var myModule = require("../");

tape("this is the test for my module-foo", function(test) {
	test.equal(myModule.foo(), 100);
	test.end()
})


tape("this is the test for my module-bar", function(test) {
	test.equal(myModule.bar(), 101);
	test.end()
})
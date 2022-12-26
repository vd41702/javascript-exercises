const fibonacci = function(n) {
	if(n < 0) { return "OOPS";}
	if(n == 0) { return 0;}
	
	var a = 1;
	var b = 1;
	
	for(var i = 2; i < n; i++) {
		var temp = a + b;
		a = b;
		b = temp;
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;

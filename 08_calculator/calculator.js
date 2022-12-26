const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	var sum = 0;
	for(num of nums) {
		sum += num;
	}
	return sum;
	
};

const multiply = function(nums) {
	var product = 1;
	for(num of nums) {
		product *= num;
	}
	return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	result = 1;
	for(var i = a; i > 1; i--) {
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

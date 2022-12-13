const sumAll = function(a, b) {
	if(!Number.isFinite(a) || !Number.isFinite(b)) {
		return "ERROR";
	}

	if(a < 0 || b < 0) {
		return "ERROR";
	}
	
	return (a + b)*(Math.abs(b - a) + 1)/2;
};

// Do not edit below this line
module.exports = sumAll;

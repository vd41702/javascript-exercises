const removeFromArray = function(a, ...removeArgs) {
	const removeSet = new Set();

	for(var i = 0; i < removeArgs.length; i++) {
		removeSet.add(removeArgs[i]);
	}
	
	const res = [];

	for(var i = 0; i < a.length; i++) {
		if(!removeSet.has(a[i])) {
			res.push(a[i]);
		}
	}
	return res;
};

// Do not edit below this line
module.exports = removeFromArray;

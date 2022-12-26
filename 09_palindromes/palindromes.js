const palindromes = function (phrase) {
	var left = 0;
	var right = phrase.length - 1;
	
	var s = phrase.split("");

	while(left < right) {
		if(s[left].toLowerCase() == s[left].toUpperCase()) {
			left++;
			continue;
		}
		if(s[right].toLowerCase() == s[right].toUpperCase()) {
			right--;
			continue;
		}
		if(s[left].toLowerCase() != s[right].toLowerCase()) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;

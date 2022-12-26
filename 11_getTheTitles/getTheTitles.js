const getTheTitles = function(books) {
	const res = [];
	
	for(book of books) {
		res.push(book.title);
	}
	return res;
};

// Do not edit below this line
module.exports = getTheTitles;

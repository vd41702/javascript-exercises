const findTheOldest = function(people) {
	
	return people.reduce((oldest, person) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
		return personAge > oldestAge? person: oldest;
	});
};

function getAge(dob, dod) {
	if(!dod) {
		dod = new Date().getFullYear();
	}
	return dod - dob;
}

// Do not edit below this line
module.exports = findTheOldest;

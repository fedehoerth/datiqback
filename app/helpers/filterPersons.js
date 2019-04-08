const persons = require('../../data/personas.json');
 
const filterPersons = (attribute, needle) => {
	const loweredCasedNeedle = needle.toLowerCase();
	return persons.personas.filter(person => person[attribute].toLowerCase() === loweredCasedNeedle);
};

module.exports = filterPersons;

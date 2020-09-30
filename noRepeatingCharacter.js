// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.




function firstNotRepeatingCharacter(s) {
	for (let i = 0; i < s.length; i += 1) {
		let char = s[i];
		if (s.indexOf(char) === s.lastIndexOf(char)) {
			return char;
		}
	}
	return '_';
}

firstNotRepeatingCharacter(s) 
// = 'c'.
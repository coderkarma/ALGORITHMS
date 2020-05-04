var defangIPaddr = function (address) {
	// one solution using replace
	let replacedStr = /[.]/g;
	return address.replace(replacedStr, '[.]');

	//another solution
	let returnStr = '';
	for (let i = 0; i < address.length; i++) {
		let char = address[i];

		if (char === '.') {
			returnStr += '[.]';
		} else {
			returnStr += address[i];
		}
	}
	return returnStr;
};

defangIPaddr('1.1.1.1');
Input: address = '1.1.1.1';
Output: '1[.]1[.]1[.]1';

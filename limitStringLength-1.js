function solution(string, limit) {
	let resultStr = '';
	if (string.length <= limit) return string;

	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		let newStr = string.slice(char, limit) + '...';
		resultStr = newStr;
	}
	return resultStr;
}

solution('Testing String', 3)-- > 'Tes...';
solution('Testing String', 8)-- > 'Testing ...';
solution('Test', 8)-- > 'Test';

const wordList = ['APPLE', 'PLEAS', 'PLEASE'];
const keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'];

// word length >= 5

[0, 0, 0];

// Function that gives remove duplicate
const uniqueWord = (wordList) =>
	wordList
		.filter((word) => word.length >= 5)
		.map((word) => [...new Set(word)].join(''));

// console.log(uniqueWord(['APPLE', 'PLEAS', 'PLEASE', 'AP']));

const numKeyPadSolution = (wordList, keypads) => {
	const uniqueWordList = uniqueWord(wordList);
	const result = new Array(keypads.length).fill(0); // [0, 0, ...n]

	for (let i = 0; i < keypads.length; i++) {
		for (let word of uniqueWordList) {
			if (word.includes(keypads[i][0])) {
				let counter = 0;

				for (let char of word) {
					if (keypads[i].includes(char)) {
						counter++;
					}
				}
				if (counter === word.length) {
					result[i]++;
				}
			}
		}
	}
	return result;
};
console.log(numKeyPadSolution(wordList, keypads));

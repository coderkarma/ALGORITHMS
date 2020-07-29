const insertationSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i];

		for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentValue;
	}

	return arr;
};

const insertionSort = (arr) => {
	for (let targetIdx = 1; targetIdx < arr.length; targetIdx++) {
		const targetValue = arr[targetIdx];
		let sortedIdx = targetIdx - 1;
		while (sortedIdx >= 0 && targetValue < arr[sortedIdx]) {
			arr[sortedIdx + 1] = arr[sortedIdx];
			sortedIdx--;
		}
		arr[sortedIdx + 1] = targetValue;
	}
	return arr;
};
let insertation = insertionSort([2, 1, 9, 76, 4]);
console.log(insertation);

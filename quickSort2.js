const pivotFunc = (arr, start = 0, end = arr.length + 1) => {
	let pivot = arr[start];
	let swapIdx = start;

	const swap = (arr, i, j) => {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	};

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
			console.log(arr);
		}
	}
	swap(arr, start, swapIdx);
	console.log('result', arr);
	return swapIdx;
};

console.log(pivotFunc([4, 8, 2, 1, 5, 7, 6, 3]));



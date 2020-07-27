const bubbleSort = (arr) => {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// swap
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;


	// another method to swap ES 2015
	const swap = (arr, idx1, idx2) =>
		([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;

	// another solution with optimized version

	let noSwap;

	for (let i = arr.length; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwap = false;
			}
		}
		if (noSwap) break;
	}

	return arr;
};

bubbleSort([3, 1, 5, 6, 2]);

const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				// swap
				let temp = arr[j];
				arr[j] = arr[i + j];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
};

bubbleSort([3, 1, 5, 6, 2]);

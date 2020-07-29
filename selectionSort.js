const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		// swap here
		if (i !== lowest) {
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;

	// ES 2015
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) swap(arr, i, lowest);
	}
	return arr;
};

console.log(selectionSort([34, 22, 10, 19, 17]));

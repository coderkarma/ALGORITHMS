let numIdenticalPairs = (nums) => {
	// declar the counter
	// loop through the nums array
	// check to see if the i == j and i < j,
	// return the counter
	let counter = 0;

	for (let i = 0; i < nums.length; i++) {
		let num1 = nums[i];

		for (let j = 0; j < nums.length; j++) {
			let num2 = nums[j];

			if (num1 === num2 && i < j) {
				counter++;
			}
		}
	}
	return counter;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]); // 4

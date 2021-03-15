var findDisappearedNumbers = function (nums) {
	let result = [];

	for (let i = 1; i <= nums.length; i++) {
		if (!nums.includes(i)) {
			result.push(i);
		}
	}
	return result;
};
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); // [5, 6]

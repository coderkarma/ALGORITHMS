var removeDuplicates = function(nums) {
  let counter = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (counter[num]) {
      counter[num] += 1;
    } else {
      counter[num] = 1;
    }

    if (counter[num] > 1) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// without creating extra memory
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (num === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// another method
var removeDuplicates = function(nums) {
  return nums.filter((num, idx) => nums.indexOf(num) === idx).length;
};

removeDuplicates([1, 2, 2]); // 2

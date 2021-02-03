var shuffle = function(nums, n) {
    let finalArr = [];
    for (let i = 0; i<n; i++){
        finalArr.push(nums[i]);
        finalArr.push(nums[i + n])
    }
    return finalArr;
};

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]
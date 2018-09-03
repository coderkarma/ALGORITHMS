function twoSum(nums, target) {
    // loop through  array
    // do inner loop 
    // sum the outer and inner ele of loop, compare if sum equals
    // return indices 
    for (let i = 0; i <nums.length; i ++){
        let num1 = nums[i];
        for (let j = i + 1; j <nums.length; j ++){
                let num2 = nums[j];
                if(num1 + num2 === target){
                let indices = [i, j];
                
               return indices;
            }
        }
    }
}
twoSum([2,7,11,15],9 ) // [0,1]


var numIdenticalPairs = function(nums) {
    let pairs = [], counter = 0;
    
    for (let i = 0; i <nums.length; i++){
        let num1 = nums[i];
        
        for (let j = i +1; j <nums.length; j++){
            let num2 = nums[j];
               
            if (num1 === num2){
                pairs.push(i,j)
                counter++;
            }
        }
    }
    return counter;
};

numIdenticalPairs([1,2,3,1,1,3]) // 4
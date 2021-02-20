var shuffle = function(nums, n) { 
    let resultArr = [];
       for (let i =0; i <n; i++){
           resultArr.push(nums[i], nums[i + n])
       }
       return resultArr;
   };
//    nums ([ 2, 5, 1, | 3, 4, 7])

// x1 = 2, x2 = 5, x3 = 1, y1 = 3, y2 =4, y3 = 7

// ans = [x1, y1, x2, y2, x3, y3]  =  [ 2, 3, 5,4, 1, 7]
function peak(arr) {
    let leftSum = 0, rightSum = 0;
 //   // looping through to get the left sum
    for (let i = 0; i < arr.length; i++) {
       rightSum = 0;
       leftSum += arr[i];
 //     // inner loop to get sum of right starting from end
      for (let j = arr.length - 1; j > i + 1; j--) {
       rightSum += arr[j];
        }
         // check if left sum is equal to rightSum and if it is return index
       if (leftSum === rightSum) {
            return i + 1;
        }
     }
    return -1;
  }
peak([1,2,3,5,3,2,1])  // 3  
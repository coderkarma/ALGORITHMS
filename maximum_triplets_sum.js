function maxTriSum(numbers) {
  // declare varible sum
  let sum = 0;
  let sortedNum = numbers.sort(function (a, b) {
    return a - b;
  });
  //  removing duplicates and making arr
  let newArr = Array.from(new Set(sortedNum));
  let reversed = newArr.reverse()
  let triSum = newArr[0] + newArr[1] + newArr[2]; // getting the three higest num
  return triSum;
}
maxTriSum([3, 2, 6, 8, 2, 3])//, 17)
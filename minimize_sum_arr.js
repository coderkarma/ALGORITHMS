function minSum(arr) {
  // your code here
  arr.sort(function (a, b) {
    return a - b;
  })
  let sum = 0;
  // loop through half of the arr
  for (let i = 0; i < arr.length / 2; i++) {
    // sum the mulitple array at first and last arr
    sum += arr[i] * arr[(arr.length - 1) - i];
  }
  return sum;
}
minSum([5, 4, 2, 3])//, 22)
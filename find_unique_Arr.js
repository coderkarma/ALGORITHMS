function findUniq(arr) {
  arr.sort((a, b) => {
    return a - b
  });
  // loop through sorted arr
  for (let i = 0; i < arr.length; i++) {
    //check to see if curren ele is not equal to previous or not
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      return arr[i];
    }
  }
}
findUniq([0, 1, 0]) //, 1)
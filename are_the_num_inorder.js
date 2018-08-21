function inAscOrder(arr) {
  // loop through arr
  for (let i = 0; i < arr.length; i += 1) {
    // check first element is greater then length
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
inAscOrder([1, 2, 4, 7, 19]) //, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
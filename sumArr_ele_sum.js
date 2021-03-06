function elementsSum(arr, d = 0) {
  // create a newArr 
  let newArr = arr.length;
  // declare variable result 
  let result = 0;
  // decrement the newArr to get the the index 0
  newArr--;

  // loop through the arr
  for (let i = 0; i < arr.length; i += 1) {
    // check if the newaRR key exits  in arr
    if (newArr in arr[i]) {
      // if it is then concate the result += d
      result += arr[i][newArr]
      // else just result += d
    } else {
      // decrement the newArr 
      result += d;
    }
    newArr--;
  }
  // return the result
  return result;
}
elementsSum([[3, 2, 1, 0],[4, 6, 5, 3, 2],[9, 8, 7, 4]]) //, 16)
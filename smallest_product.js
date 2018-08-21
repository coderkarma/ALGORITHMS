function smallestProduct(arr) {
  // declare the counter = 1
  let counter = 1;
  // declare smallest =0 
  let smallest = 0;
  // do outer for loop through arr
  for (let i = 0; i < arr.length; i += 1) {
    // declare the variable product
    let ele1 = arr[i];
    let product = 1;
    // loop through inner arr
    for (let j = 0; j < arr[i].length; j += 1) {
      // mulitply the inner element with product 
      product *= arr[i][j];
      // if product < smallest 

    }
    // check for the smallest product of arr
    if (product < smallest || smallest === 0) {
      smallest = product;
    }

  }
  return smallest;
}
smallestProduct([3, 2],[1, 2, 1],[7, 8]) //, 2);
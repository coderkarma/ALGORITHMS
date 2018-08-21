function nthFloyd(n) {
  // declare the variable lastNum and assign to number 1
  let lastNum = 1;
  // declare the row and initilze with 1
  let row = 1;

  // check to see if lastNum less number 
  while (lastNum < n) {
    // increment row 
    row++;
    /// concate the lastNum with row
    lastNum += row;
  }
  return row;
}
nthFloyd(15)//, 5)
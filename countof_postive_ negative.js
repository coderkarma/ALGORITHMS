function countPositivesSumNegatives(input) {
  // declare the count variable
  if (!input || input.length === 0) {
    return [];
  }
  let count = 0;
  // declare the sum variable to keep sum all the negative numbers
  let sum = 0;

  // loop through array
  for (let i = 0; i < input.length; i += 1) {
    // check to see if the input is greater then 0, ie, postive
    if (input[i] > 0) {
      // increment the count 
      count += 1;

    } else {
      //  if it is less then zero sum  negative  elements of array
      sum += input[i];
    }
  }
  return [count, sum];
}
input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//return [10, -65].

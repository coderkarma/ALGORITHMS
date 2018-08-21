function sumOfDifferences(arr) {
  // sort the number and subtract the first element to second element 
  arr.sort((a, b) => {
    return b - a
  });
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
  
  for (let i = 0; i < arr.length - 1; i += 1) {
    let diff = (arr[i] - arr[i + 1]);
    sum += diff;
  }
  return sum;
}

sumOfDifferences([1, 2, 10]) //, 9
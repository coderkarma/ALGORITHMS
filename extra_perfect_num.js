function extraPerfect(n) {
  // declare empty arr result 
  let result = [];
  // loop up to num times
  for (let i = 1; i <= n; i += 1) {
    //  look for the odd number, it is odd then push the numbe to result empty arr
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  //return result  with all odd numbers starting from 1 to n times
  return result;
}
extraPerfect(7)  //, [1, 3, 5, 7]);
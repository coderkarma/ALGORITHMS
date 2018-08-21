function fakeBin(x) {
  let zero = null;
  let ones = null;
  let newStr = '';
  // split the string to array 
  let newArr = x.split('');
  // loop through array of nums
  for (let i = 0; i < newArr.length; i += 1) {
    let num = newArr[i];
    if (num < 5) {
      zero = 0;
      newStr += zero;
      // check if the ele of arr  0-5 if yes then 0
      // if no then 1
    } else {
      ones = 1;
      newStr += ones;
    }
  }
  return newStr;
}

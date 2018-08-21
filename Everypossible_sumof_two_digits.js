function digits(num) {
  //  declare the result 
  let result = [];
  // convert to string an split in arr
  let newArr = String(num).split('');
  // split the stirng in to array 

  for (let i = 0; i < newArr.length; i += 1) {
    let num1 = newArr[i];
    // do second loop 
    for (let j = i + 1; j < newArr.length; j += 1) {
      let num2 = newArr[j];
      // add ele1 and ele2
      let sum = +num1 + +num2;
      // push the ele1 + ele2 
      result.push(sum);
      // return the result
    }
  }
  return result;
}
digits(156) //, [6, 7, 11]);
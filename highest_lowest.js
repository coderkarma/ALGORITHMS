function highAndLow(numbers) {
  //  declare the varible 
  let result = [];
  //  make number string in to arr
  let strArr = numbers.split(' ');
  // sort the new array;
  strArr.sort((a, b) => {return a - b });
  let highest = strArr[strArr.length - 1];
  let lowest = strArr[0];
  // get the highest and lowest number push in the empty arr
  result.push(highest, lowest);
  // return the result and join them with  space so we could get string from the array
  return result.join(' ');

}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") //, "542 -214")
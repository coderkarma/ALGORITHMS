function maxNumber(n) {
  // convert number to string 
  const newArr = String(n).split('');
  // sort  newArr
  let sorted = newArr.sort((a,b) => { return b - a })
  // return the sorted and join them to return and convert to number
  let result = sorted.join('');
   return Number(result);

  //shorter one
  return +(String(n).split('').sort().reverse().join(''));
}
maxNumber(7389) //, 9873);
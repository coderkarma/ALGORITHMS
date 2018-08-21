function balancedNum(number) {
  // convert number in to str
  let arr = String(number).split('');
  // declare varible string1 or string2
  let s1 = 0,
    s2 = 0;

  // check arr length is less then 2 
  while (arr.length > 2) {
    s1 += +arr.pop();
    s2 += +arr.shift();
  }
  return s1 === s2 ? "Balanced" : "Not Balanced";
}
balancedNum(959) //, "Balanced")
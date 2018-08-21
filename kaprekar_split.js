function kaprekarSplit(n) {
  if (n === 1) return 0;
  let squares = n * n;
  // convert num to string
  let str = String(squares);
  let result = [];

  for (let i = 1; i < str.length; i += 1) {
    //slice the str to 0, i;
    let first = str.slice(0, i);
    let rest = str.slice(i);
    // checking first and rest equals to n and converting into Number
    if (+first + +rest == n) {
      result.push("true");
    } else {
      result.push("false");
    }
  }
  // check first or last includes in  arry or not
  if (result.includes("true")) {
    return result.indexOf("true") + 1;
  }
  return -1;
}
kaprekarSplit(45);

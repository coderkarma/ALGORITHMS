function correct(string) {
  let replaceChar = {
    5: 'S',
    0: 'O',
    1: 'I'
  };
  // create a empty string
  let newStr = '';
  // loop through string
  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    // check if char is 5 1, 0, if it is then replace
    if (char === '5' || char === '0' || char === '1') {
      newStr += replaceChar[char]
    } else {
      // just return the old string
      newStr += char;
    }
  }
  return newStr;

}
correct("DUBL1N")//, "DUBLIN");
var defangIPaddr = function(address) {
  // make and arr
  // loop over an arr and find the . to with an arr
  // return the result
  
  // one solution
//   let regex = /\./gi
//   return address.replace( regex, '[.]');

  let replacer = '[.]';
  let strArr = address.split('');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '.') {
      strArr[i] = replacer;
    }
  }
  return strArr.join('');
};

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
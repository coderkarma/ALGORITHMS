function findNeedle(haystack) {
  // set the string variable 
  let newStr = '';
  // loop through array
  for (let i = 0; i < haystack.length; i += 1) {
    // check each string element is neeedle
    let ele = haystack[i];

    if (String(ele) === 'needle') {
      // if that is needle and return the string 'found the needle' 
      return "found the needle at position " + haystack.indexOf(ele);
      // concate the string + index
      // index can be found with indexof
    }
  }
}
let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
findNeedle(haystack_1) //, 'found the needle at position 3')
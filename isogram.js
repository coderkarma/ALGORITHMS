function letterCount(str) {
  // declare the emtpy object
  let count = {};
  //loop through the str, make char all lower or uppercase
  for (let i = 0; i < str.length; i += 1) {
    let char = str[i].toLowerCase();
    // check to see if the value is in the object or not , therefor it will be undefine
    if (count[char] === undefined) {
      // if it is then  initilize to 1
      count[char] = 1;
      // if not then increment 
    } else {
      count[char] += 1;
    }
  }
  // return the count of char
  return count;
}

// call the main isogram function 
function isIsogram(str) {
  // call the helper funtion 
  let count = letterCount(str);
  // loop through the object
  for (let letter in count) {
    // check if charcount is more then 2 
    if (count[letter] > 1) {
      // if it is more then 1 return false;
      return false;
      // esle return true
    }
  }
  return true;
}
 isIsogram("Dermatoglyphics") //, true);
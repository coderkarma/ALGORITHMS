function shortcut(string) {
  // declare the vowels
  let vowels = 'aieou';
  // declar empty str
  let newStr = '';
  //loop through the string 
  for (let i = 0; i < string.length; i += 1) {
    // check if the char is a vowel of not 
    let char = string[i];
    // if it is not a vowel just concate the char and newstr;
    if (vowels.indexOf(char) === -1) {
      newStr += char;
    }
    // if it is a vowel do nothing.
  }
  return newStr;
}
shortcut('hello')// == 'hll'
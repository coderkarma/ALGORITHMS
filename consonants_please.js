function sortLetters(arr) {
  // declare vowels varible
  let vowels = 'aeiouAEIOU';
  // declare the variable vowelpile 
  let vowelPile = [];
  // declare consonant variable
  let consonants = [];
  // loop through outer array
  for (let i = 0; i < arr.length; i += 1) {
    //  loop through inner array
    for (let j = 0; j < arr[i].length; j += 1) {
      let ele1 = arr[i][j];
      // check if the ele of inner array is vowel, if it is vowel push to vowelPile
      if (vowels.indexOf(ele1) > -1) {
        vowelPile.push(ele1.toUpperCase());
        //else if it is not a vowel or ele is string then push to consonant,this way we will remove numbers
      } else if (vowels.indexOf(ele1) === -1 && typeof ele1 === 'string') {
        consonants.push(ele1.toUpperCase()); // element needs to be upperCase
      }
    }
  }
  return [vowelPile, consonants];
}
sortLetters([[1, "a", "H"],[3, "o", "s"],[4, "E", "i"]])//, ["A", "O", "E", "I"],["H", "S"]]);
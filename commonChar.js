var commonChars = function(arr) {
    if (arr.length === 0 || arr.length === 1) {
      return [];
    }
    //   let firstLetters = arr[0].split(''); //['a', 'r', 't' , 'e', a]
    let result = [];
  
    let firstLetters = findCharacterCount(arr[0]);
  
    for (let [char, charCounter] of firstLetters) {
      var foundTimes = charCounter;
  
      for (let i = 1; i < arr.length; i++) {
        let word = arr[i];
        let occurances = charCount(word, char);
  
        if (occurances === 0) {
          foundTimes = 0;
          break;
        }
        // console.log('foundtimes', foundTimes, occurances);
        foundTimes = Math.min(foundTimes, occurances);
      }
      if (foundTimes > 0) {
        result.push(...char.repeat(foundTimes).split(''));
      } 
    }
    return result;
  };

  commonChars(['cool', 'lock', 'cook']) //['c', 'o']
  
  function findCharacterCount(str) {
    let firstLetters = new Map(); //  { a: 2, r: 1, t: 1, e: 1} {}
  
    for (let i = 0; i < str.split('').length; i++) {
      let currentChar = str[i];
      let counter = firstLetters.get(currentChar) || 0;
  
      firstLetters.set(currentChar, counter + 1);
    }
    return firstLetters;
  }
  
  /**
   * charCount('karma', 'a') => 2
   * charCount('karma', 'l') => 0
   * charCount('', '') => 0
   *
   * @param {string} str: where to search
   * @param {string} char: what to search
   * @returns {number}: number of occurances char in the str
   */
  function charCount(str, char) {
    let counter = 0;
  
    for (let c of str) {
      if (c === char) {
        counter++;
      }
    }
    return counter;
  }
  
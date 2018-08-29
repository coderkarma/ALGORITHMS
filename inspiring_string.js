function longestWord(stringOfWords){
    // declare the longest 
     let longest = '';
    // split the string in to arr and
     let arrStr = stringOfWords.split(' ');
     //do for loop through an arr
     for (let i = 0; i < arrStr.length; i ++){
         console.log(arrStr[i]);
    // compare the length of eah word with the longest 
       if (arrStr[i].length >= longest.length){
        longest = arrStr[i];
    // else if there are two longest words return last one 
       } 
    }
    return longest;
  }
  longestWord("on two thr");  // thr
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // split the string into the word
    //loop through arr str and check to see if the last ele is equalls to target, if yes return true
    str = str.split('').reverse().join('');
    target = target.split('').reverse().join('');
      if (str.substring(0, target.length) !== target){
        return false;
    }
  return true;
}
  confirmEnding("Bastian is my home", "home");

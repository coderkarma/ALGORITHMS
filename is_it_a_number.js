function isDigit(s) {
  // check the input is a number or not  or em
  return !isNaN(s) && s.trim() ? true : false;

}
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
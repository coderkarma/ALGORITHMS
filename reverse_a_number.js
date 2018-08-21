function reverseNumber(n) {
  if (n < 0) {
    return parseInt(String(n).split('').reverse().join('')) * -1;
  }
  return +(String(n).split('').reverse().join(''));
}
reverseNumber(-123);
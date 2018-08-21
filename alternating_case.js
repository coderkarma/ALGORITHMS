String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split('').map((val, i) => val.toUpperCase() === val ? val.toLowerCase() : val.toUpperCase()).join('');
}
("hello world".toAlternatingCase()) //, "HELLO WORLD");
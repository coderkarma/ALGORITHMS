function disariumNumber(n) {
  //convert the n into string
  let str = String(n)
  let sum = 0; // declare variable sum
  //loop through str
  for (let i = 0; i < str.length; i += 1) {
    /// get the exponent of the number 
    let first = Math.pow(str[i], i + 1);
    sum += first;
    // sum and compare that with n
  }
  if (sum !== n) {
    return "Not !!";
  }
  return "Disarium !!";
}
disariumNumber(89) //, "Disarium !!")
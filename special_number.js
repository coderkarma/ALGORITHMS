function specialNumber(n) {
  // convert number to string and split it in arr
  let numStr = String(n);
  // loop through the newArr
  for (let i = 0; i < numStr.length; i += 1) {
    // convert ele into Number and if if that number less or equal to five
    let ele = numStr[i];
    // if it is then return sepcail or else 
    if (Number(ele) > 5) {
      return "NOT!!";
    }
  }
  return "Special!!";
}
specialNumber(25432) //, "Special!!");
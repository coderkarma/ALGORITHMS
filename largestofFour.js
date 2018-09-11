
function largestOfFour(arr) {
    // declare the empty arr and highNum
    // loop through arr
    // get max from each arr and push in to newArr
    // return the newArr;
    
    let result = [];
    
    for (let i = 0; i < arr.length; i ++){
      let highNums = Math.max(...arr[i]);
        result.push(highNums)
    }
    return result;
  }
  
  largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  // should return [27, 5, 39, 1001].
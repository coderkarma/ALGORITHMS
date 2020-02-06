function findFactorialRecursive(num) {
    if (num <= 1) {
      return 1;
    }
    return num * findFactorialRecursive(num - 1);
  }
  console.log(findFactorialRecursive(5));
  
  function findFactorialIterative(num) {
    //creat variable factortialbase start 1
    // loop upto num ;
    // multiple the base times with indices
    // return the factorial
    let factorialBase = 1;
    for (let i= 1; i <= num; i++) {
      factorialBase *= i;
    }
    return factorialBase;
  }
  console.log(findFactorialIterative(5));
  
  // 5* 4 *  3* 2* 1
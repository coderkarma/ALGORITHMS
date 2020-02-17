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




  

function fibonacciIterative(n){
    // create fibonaci arr to store
    // loop up to the n;
    // get the sum of last previous two number'
    // push the number and return the index of that number
    let result = [0, 1];

    for (let i = 2; i<=n; i++){
    
      result.push(result[i - 2 ]+ result[i - 1])
    }
    console.log(result)
    return result[n]
 }

console.log(fibonacciIterative(10))


function fibonacciRecursive(n){
   if (n < 2) {
       return n;
   }
   return  fibonacciRecursive(n-1) + fibonacciRecursive(n - 2)
}

// console.log(fibonacciRecursive(9))

// 0 1,1 2, 3 5 8 13 21 34
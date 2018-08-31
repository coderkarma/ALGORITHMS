function findSum(n) {
    // declare variable sum
    // declare empty arr
    // loop up to num times 
    // check if the num is divisible by 3 and 5 
    // if it is push then
   
    let sum = 0;
    
     for (let i = 0; i <=n; i ++){
       if ( i % 3 === 0 || i % 5 === 0){
         sum  += i
       }
     }
     return sum
   }
   findSum(5) // 8
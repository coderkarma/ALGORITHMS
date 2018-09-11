function sumAll(arr) {
    let max =  Math.max( arr[0], arr[1]);
    let min =  Math.min(arr[0], arr[1]);
    let  sum = 0;
    
    for (let i = min; i <=max; i ++){
          sum += i;
      }
      return sum;
    }
       
       console.log(sumAll([10, 5]));  // 45  // 5,10 = 45
    
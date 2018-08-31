function solve(str,k){
    let max = 0;
  
    if (k >= str.length){
      max = Math.max(...str.split("").map(x => parseInt(x)))
    }
  
    for (let i = 0; i <= ( k); i++){
     let num = parseInt(str.slice(i, (str.length - k + i)));
     if (max < num){
      max = num;
     }
    }
  
    return max;
  
  }
  solve('123',1) // = 23 
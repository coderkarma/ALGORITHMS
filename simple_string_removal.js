function solve(s, k){
    // sort the string
    let sorted = s.split('').sort().join('');
    //loop up to num time
    for (let i = 0; i <k; i ++){
      // replace the char
       s = s.replace(sorted[i], '');
    }
   return s;
    
  }
  solve('abracadabra', 1); //= 'bracadabra')
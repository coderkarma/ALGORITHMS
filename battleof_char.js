function battle(x, y) {
    // loop through the x
     let sumX = 0, sumY = 0;
    // get the total sum of each charactor of   x team
      for (let i = 0; i < x.length; i += 1){
    // do a secod loop and for y and get the sum of it
          sumX += x.charCodeAt(i) - 64;
       }
          for (let i = 0; i < y.length; i += 1){
    // get the total sum of each character of y team
    // get the asci value 
        sumY += y.charCodeAt(i) - 64;
      //  compre the sum of x and y and return the string with higher value
     // if the value is x === y then return "Tie" string
   }
     if ( sumX > sumY) return x;
      if ( sumY> sumX) return y;
     
      return "Tie!";
     
  }
  battle('ONE', 'TWO');
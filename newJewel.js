var numJewelsInStones = function(J, S) {
    // make a counter
     // loop through the S string 
       // check to see if the any character matches or includes
       // if yes then incrment the counter and return 
       let counter = 0;
       
       for (let i = 0; i < S.length; i++){
           let char = S[i];
           if (J.includes(char)){
               counter += 1;
           }
       }
       return counter;
   };
   numJewelsInStones('X', 'aAAbbbb')
   // Input: J = "aA", S = "aAAbbbb"
   // Output: 3
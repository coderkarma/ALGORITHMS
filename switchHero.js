function switcheroo(x){
      // make an obj  to switch those 
      // do a for loop and make check if the ele is a or b and change accordingly
      let swapObj = {
         a : 'b',
         b : 'a',
         c: 'c'
         }
         let newStr = '';
         for (let i = 0; i <x.length; i++){
          let char = x[i];
          
          if(swapObj[char] !== undefined){
            newStr += swapObj[char];
          }
          
       }
       return newStr;
    
       // different solution
       return x.replace(/[ab]/g, (e) => { return e ==='a' ? 'b' : 'a';});
                  
     }
   switcheroo('abc') //, 'bac');
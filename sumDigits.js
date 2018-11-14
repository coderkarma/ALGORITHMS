
function sumDigits(num) {
    // create variables fristDigit and rest 
    //convert num to String
    //check to see if the firstDigit is negative then start slicing up to second digit and split the str into   arr
    // else if firstDigit is positive then start slicing from frist digit and split into array
    // then add firsDigit if it is positive
    // loop through the rest digits 
    let firstDigit, rest;
    let sum = 0;
     let numStr = String(num);
     
     if( numStr.indexOf('-') === 0){
       firstDigit = numStr.slice(0, 2);
       rest = numStr.slice(2).split('');   // [ '1', '6'];
     } else {
       firstDigit = numStr.slice(0,1);
       rest = numStr.slice(1).split('');  //  3 1 5 ['3', '1', '5' ]
     }
      rest.unshift(firstDigit);
    
     for (let i = 0; i < rest.length; i++){
         sum += Number(rest[i]);
     }
     return sum;
  
  }
sumDigits(-123)  // 4 
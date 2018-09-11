function narcissistic( value ) {
    // declare the variable sum
      // convert the value in to str and split into arr
      // loop through the arr
      // get the exponent of the each number 
      //  check to see if the sum exponents equals to value
      // if it equal return true else false
      //let sum = 0;
  
      let arr = String(value).split('');

      for (let i = 0; i <arr.length; i ++){
         let ele = arr[i];
        
        let exponent = (+(Math.pow(ele, arr.length)));
           sum += exponent;
           if(sum === value) return true;
        }
        return false;
    }
  narcissistic(153)
  //   //1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  
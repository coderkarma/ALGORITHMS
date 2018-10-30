
function roundToFive(numbers){
    // loop through the arr
    // round the value of the numbers
    let result = []
    for (let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        let remainder = number % 5;
        
        if(remainder > 2.5) {
            result.push(5 - remainder + number);
        } else{
           result.push(number - remainder)
        }
       }
     return result;
  

  // another solution
     return  numbers.map((num) => {
         let remainder = num % 5;
         return remainder > 2.5 ? 5 - remainder + num : num - remainder;
     })
  }
  console.log(roundToFive([34.5, 56.2, 11, 13]));  // [35, 55, 10, 15]
  
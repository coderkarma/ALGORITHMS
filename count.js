function count (string) {
   let countingObject = {};

   for (let i = 0; i <string.length; i++){
      let currentValue = string[i];

      if(countingObject[currentValue] === undefined){
          countingObject[currentValue] = 1;
      } else {
          countingObject[currentValue]++;
      }
     }
     return countingObject;
  }
  console.log(count("karma"))//{ a: 2, b: 1 }; 

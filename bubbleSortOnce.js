function bubblesortOnce(a) {
    // make a copy of array
      let newArr = a.slice();
      //declare varible temp
      let temp;
      // loop through the new arr
      for (let i = 0; i <newArr.length; i ++){
      // compare if the next element is lest then current
          if (newArr[i + 1] < newArr[i]){
             // store value in temp
              temp = newArr[i];
              // swap the value
              newArr[i] = newArr[i + 1];
               newArr[i + 1] = temp;
              
          }
      }
      return newArr;
  }
  bubblesortOnce([9,8,5,3,1,2,5,7]) 
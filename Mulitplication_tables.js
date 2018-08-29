function multiplicationTable(row,col){
    // Declare the empty arry result
      let result = [];
    /// loop through row and
     for (let i = 1 ; i <=row; i++){
     // declare the another arr
        let multiplyArr = []
    // do another loop up to colum
       for (let j = 1; j<=col; j++){
    // multiple ro and colum
       multiplyArr.push(i * j);
      // return the arr
      }
      result.push(multiplyArr);
    }
    return result;
  }
  multiplicationTable(2,2);
  // [[1,2],[2,4]]
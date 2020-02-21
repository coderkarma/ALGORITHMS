function countUniqueValues(arr) {
    // first method
        return Array.from(new Set(arr)).length
    
     // second method
     return arr.filter((ele, idx) => {
        return arr.indexOf(ele) === idx;
      }).length;
    
     // Third method
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            console.log("i", arr[i]);
            console.log("i + 1", arr[i + 1])
          result.push(arr[i]);
        }
      }
      return result.length;
    }
    // console.log(countUniqueValues([-2, -1, -1, 0, 1]));
    console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
    // console.log(countUniqueValues([1, 2, 3, 4, 4, 4,7, 7, 12, 12, 13]));
    
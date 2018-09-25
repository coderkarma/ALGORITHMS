function getIndexToIns(arr, num) {
    return arr.concat(num).sort((a,b) => a-b).indexOf(num);
   }
   
   getIndexToIns([1,3,1], 1.2);
   
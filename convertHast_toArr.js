function convertHashToArray(hash) {
  //  convert the hash to array
  let newArr = Object.entries(hash);
  // sort the arr 
  let result = newArr.sort(function (a, b) {
    return a[0] > b[0]
  });
  // return Sorted Arr
  return result;

}
convertHashToArray({name: "Jeremy",age: 24}) //, [["age", 24],["name", "Jeremy"]]);

function removeSmallest(numbers) {
  // get the indexof the number 
  let newArr = numbers.indexOf(Math.min(...numbers));
  let frist = numbers.slice(0, newArr);
  let second = numbers.slice(newArr + 1);
  return frist.concat(second);

}
removeSmallest([1, 2, 3, 4, 5]) //[2, 3, 4, 5],,
function twoSort(s) {
  // create a empty arr result
  let result = [];
  // sort the str
  s.sort();
  // get the firs element of that arr
  let first = s[0];
  // split that element in arr
  let newArr = first.split('');
  //loop through 1st sorted element and
  for (let i = 0; i < newArr.length; i += 1) {
    result.push(newArr[i]);
  }
  return newArr.join('***');
}
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])//, 'b***i***t***c***o***i***n')
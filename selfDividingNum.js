var selfDividingNumbers = function(left, right) {
  let resultArr = [];
  for (let i = left; i <= right; i++) {
    let numArr = String(i)
      .split('')
      .map(ele => Number(ele));
    let result = numArr.filter(num => i % num === 0);
    if (numArr.length === result.length) {
      resultArr.push(i);
    }
  }
  return resultArr;
};
selfDividingNumbers(1, 22);
//  Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

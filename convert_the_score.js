function scoreboard(string) {
  // declare score obj
  let scoreObj = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  // declare empty array
  let result = [];
  // convert string into arr
  const newArr = string.split(' ');
  //loop through converted arr
  for (let i = 0; i < newArr.length; i += 1) {
    // replace the element and push last and secondlast ele in to empty arry
    let ele = newArr[i];
    // check to see  if the value is in the object
    if (scoreObj[ele] !== undefined) {
      result.push(scoreObj[ele]); // if it is then push them in the newArr
    }
  }
  return result;
}
scoreboard("The score is four nil") //, [4, 0])
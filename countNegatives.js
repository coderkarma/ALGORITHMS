let grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3]
];

let countNegatives = function(grid) {
  let counter = 0;
  grid.map(ele => {
    ele.reduce((acc, cv) => {
      return cv < 0 ? counter++ : cv;
    }, 0);
  });
  return counter;
};
countNegatives(grid);

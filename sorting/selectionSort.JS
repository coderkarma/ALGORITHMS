const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  //   const length = array.length;

  for (let i = 0; i < array.length; i++) {
    // set current index as minium
    let min = i;
    let temp = array[i];

    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        // update minium if current is lower that we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);

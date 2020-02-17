// bubble sort   // least efficient sorting algorithms

// 6 5 3 1 8 7 4 2
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        // swap the number
        let temp = numbers[j];

        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

const addTo80 = n => n + 80;
console.log('1', addTo80(5));
console.log('2', addTo80(5));

// Dynamic programming
// simple way to memoized the solved problem
const memoizedAddTo80 = () => {
  // use closure to return the cache
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  };
};

const memoized = memoizedAddTo80();

console.log('1', memoized(5));
console.log('2', memoized(5));

// Time complexity here is o(n2)
let calcualtions = 0;
function fib(n) {
  //calcualtions++;
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(10)); // takes about over 177 calcualtions, which is terrible in term of time complexity

// Optimize fib problem with dynamic progamming & memoization.

const fibDyamic = () => {
  // takes 19 calculations
  let cache = {};
  return function fib(n) {
    calcualtions++;
    if (n in cache) {
      return cache[n];
    } else {
      // check the base case
      if (n < 2) {
        return n;
      } else {
        // store the recursion in the cache
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};
const fasterFib = fibDyamic();
console.log('slow fibonanci', fib(10)); // O(n2)
console.log('Dynamic programming', fasterFib(10)); // o(n)

console.log(`We did ${calcualtions} calculations`);

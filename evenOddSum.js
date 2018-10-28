
function evenOddSum(arr){
    let even = 0, odd = 0;
    arr.forEach(num => num % 2 === 0 ? even += num : odd += num);
    return [even, odd];
}
console.log(evenOddSum([ 10,20,60,45, 11]));  //[90,65];
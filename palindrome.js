function palingdrom(str){
    let arr = str.split('');
    let left = 0, right = str.length -1;

    while (left <= right){
        if(arr[left] !== arr[right]){
            return false
        }
       left++;
       right--;
    }
    return true;
}
console.log(palingdrom('rotor'))

 function inArray(array1,array2){
    // declare a empty arr
    // loop through arr 
    // check the arr1 is the substr of arr2,
    // if it push into newArr and return in sorted order

    let result = [];
     
    for (let i = 0; i <array1.length; i++){
         let ele = array1[i];
         
         for (let j = 0; j <array2.length; j++){
            if (array2[j].indexOf(ele) > -1){
                result.push(ele)
                break;
               }
            }
        }
       return result.sort(a,b);
    }
console.log(inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));
    // ["live", "strong"])

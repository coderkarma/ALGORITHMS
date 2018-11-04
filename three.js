
function getSumOfAllElementsAtProperty(obj, key) {
    // check to see if the key is or or not, if is not array return 0
    //declare sum varible to store sum
    // loop over an object's value
    // return the sum

    if(!Array.isArray(obj[key])) return 0;
    let sum = 0;
    
    for (let i = 0; i <obj.key.length; i++){
        let ele = obj.key[i];
       
        sum += ele;
    }
   return sum;
  }
  console.log(getSumOfAllElementsAtProperty({  key: [4, 1, 8]}));
// //   var output = getSumOfAllElementsAtProperty(obj, 'key');
// //   console.log(output); // --> 13
// //   */



function findShortestWordAmongMixedElements(arr) {

    let shortest = '';
    for (let i = 0; i <arr.length; i++){
        let ele = arr[i];

        if(typeof ele === "string"){

        if(shortest.length > ele.length|| shortest === ""){
            shortest = ele;
            }    
        }
    }
     return shortest;
}

    //another solution 
    // const result = arr.filter((ele) => { return typeof ele === "string"})

    let shortest = result[0];
    const result2 = result.forEach( (x) => {
        if( x.length < shortest.length ){
            shortest = x;
        }
    })
    return shortest;
  }
  console.log(findShortestWordAmongMixedElements([4, 'two', 2, 'three']));
//console.log(output); // --> 'two'
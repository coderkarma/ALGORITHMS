function filteredArray(arr, elem) {
    let newArr = [];

       for (let i = 0; i <arr.length; i ++){
           let arr1 = arr[i];

            if(!arr1.includes(elem)){
               newArr.push(arr1);
             } 
        }
        return newArr;
    }
    //console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
    console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")) //[ ["amy", "beth", "sam"] ]

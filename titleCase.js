function titleCase(str) {
    // //convert str
     let words = str.split(' ');
     let arrStr = [];
     // loop through an str
     for (let i = 0; i <words.length; i++){
        let word = words[i];
        let firstChar = word.slice(0,1).toUpperCase();
        let rest = word.slice(1).toLowerCase();
        let newStr = firstChar + rest;
         arrStr.push(newStr);
     }
     return arrStr.join(' ');
    // another solution
   //return str.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ');

}
   titleCase("my name is karma");

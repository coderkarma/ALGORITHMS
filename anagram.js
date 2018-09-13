function anagram(str1, str2){
    if (str1.length !== str2.length){
         return false;
       }
    for (let i = 0; i <str1.length; i++){
           // checking if the ele of str 2 is in str 1 
        if(str1.indexOf(str2[i]) === -1){
            return false;
        }
   }
    return true;
}
console.log(anagram("cat", "act"));

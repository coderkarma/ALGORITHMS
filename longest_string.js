function longestStr(str){
    let counter = 0;
    let longest = 0;

    for (let i = 0; i < str.length; i ++){
        if( parseInt(str[i]) === 1){
            counter ++;
         if ( counter > longest ){
             longest = counter;
         }
        }
        else {
            counter = 0;
        }
    }
    return longest;
}
longestStr('1100111'); // 3
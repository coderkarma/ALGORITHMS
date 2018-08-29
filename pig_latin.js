function translatePigLatin(str) {
    let vowels = 'aeiou'.split('');
    result = str.split('');
   
    if(vowels.includes(str.charAt(0))){
      return str + 'way';
    } 
      for (let i = 0; i < str.length; i += 1){
        if (!vowels.includes(str[i])){
           result.push(result.shift());
        } else {
           result.push('ay');
           return result.join('');
        }
      }
   }
   
   translatePigLatin("glove"); // oveglay
function numericals(s){
    // decalare empty obj, and empty str
     let count = {}, newStr ='';
    // loop through an s
      for (let i = 0; i < s.length; i ++){
    // check to see if ele is in object or not
        let ele = s[i]
    // if we see ele for the first time asiign to 1
     if ( count[ele] === undefined){
       count[ele] = 1;
       } else {
         count[ele] += 1;
       }
      // concate the newStr with ele
         newStr += count[ele]
    // return the newStr
      }
      return newStr;
    }
 numbericals("Hello, World!")
//result  =  "1112111121311"
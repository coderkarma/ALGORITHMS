function reverseLetter(str) {
    return str.replace(/[^a-z]/g, '').split('').reverse().join('');
}
  console.log(reverseLetter("ultr53o?n")); 

//   "nortlu".
     

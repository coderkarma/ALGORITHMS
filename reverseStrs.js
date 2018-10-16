
  function reverseLetter(str) {
	//coding and coding..
	    let regex = /[a-z]/g;
      return  str.match(regex).reverse().join('');
}
reverseLetter("ultr53o?n")  //,"nortlu")
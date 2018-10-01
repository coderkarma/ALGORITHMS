function product(values) {
    // declare product 
    //loopo through an arr
    // muiltiples each element with product 
    // return the product
  if(values === null || values.length === 0)  return null;
  return values.reduce((accumulator, currentValue) =>{                 return accumulator * currentValue ;
    })
    return values;
  }
  console.log(product([1,2,3,4]));//, 24)
function minValue(values) {
  // Sort the values
  let arr = values.sort((a, b) => {
    return a - b
  });
  // removing duplicates and converting to number
  return +(Array.from(new Set(arr))).join('');
}
minValue([4, 7, 5, 7]) //, 457
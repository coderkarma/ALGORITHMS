function century(year) {
  let century = Math.floor(year / 100);
  let decade = year % 100;

  if (decade > 0) {
    return century + 1;
  }
  return century;
}
century(1705) //,  18
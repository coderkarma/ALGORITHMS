function expressionMatter(a, b, c) {
  // various possible output 
  let first = (a + b) * c;
  let second = a * (b + c);
  let third = a + b + c;
  let fourth = a * b * c;

  return Math.max(first, second, third, fourth)
}
expressionMatter(2, 1, 2)//, 6);
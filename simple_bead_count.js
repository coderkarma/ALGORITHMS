function countRedBeads(n) {
  // if n < 2 return 0
  if (n < 2) return 0;
  // we know that 2 red bead are placed in each num upto num times, so subtract 1 and 
  return (n - 1) * 2;
}
countRedBeads(3) //, 4)
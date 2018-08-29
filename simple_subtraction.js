function solve(a,b) {
    if (a === 0 || b === 0) return [a,b];
     // if  a > 2 then do the recursion function 
    if( a >=2* b) return solve( a % (2*b), b);
    if (b>= 2* a) return solve( a, b % (2*a) );
     return [a, b];
   }
   solve(22,5) // [0,1]
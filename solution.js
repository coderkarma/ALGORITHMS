function solution(number){
        // declare the sum variable 
        //loop up to num times - 1
        
        //  check if num is % by 3 || 5 
        //  sum with num divisible by both
        // return
        let sum = 0;
        
        for (let i = 1; i <number; i ++){
          if( i % 3 === 0 || i % 5 === 0){
            sum += i;
            console.log(i);
          } 
       }
       return sum;
    }
    console.log(solution(10)); // 23
    
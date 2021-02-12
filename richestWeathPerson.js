var maximumWealth = function(accounts) {
    let maxWealth = 0;
  
    for (let account of accounts){
        let wealth = account.reduce((acc, currentValue) => acc + currentValue);
      if (maxWealth < wealth){
          maxWealth = wealth;
      }
    }
    return maxWealth  
  };
  maximumWealth([[1,2,3],[3,2,1]])   // 6 
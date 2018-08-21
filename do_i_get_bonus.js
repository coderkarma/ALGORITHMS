function bonusTime(salary, bonus) {
  // use ternary operator to check if bonus is true or not, if it is true mulitple 10 times 
  // else just return salary
  return bonus ? "£" + `{salary * 10}` : "£" + salary;
}
bonusTime(10000, true) //, '£100000')
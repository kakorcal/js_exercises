/*
  DESCRIPTION:
  have the function FirstFactorial(num) take the num parameter being 
  passed and return the factorial of it (e.g. if num = 4,
  return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

  Input  : 4
  Output : 24

  Input  : 8
  Output : 40320
*/

function FirstFactorial(num){
  return num > 1 ? num * FirstFactorial(--num) : 1;
}

module.exports = FirstFactorial;

/*
  function FirstFactorial(num) { 

    // code goes here  
    return num < 1 ? 1 : num * FirstFactorial(num - 1); 
           
  }
*/
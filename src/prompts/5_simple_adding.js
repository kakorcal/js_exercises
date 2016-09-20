/*
  DESCRIPTION:
  have the function SimpleAdding(num) add up all the numbers from 1 to num. 
  For the test cases, the parameter num will be any number from 1 to 1000. 

  Input  : 12
  Output : 78

  Input  : 140
  Output : 9870
*/

function SimpleAdding(num){
  return num > 0 ? num + SimpleAdding(--num) : 0;
}

module.exports = SimpleAdding;

/*
  function SimpleAdding(num) { 

    // code goes here  
    return num < 1 ? 0 : num + SimpleAdding(num - 1); 
           
  }
*/
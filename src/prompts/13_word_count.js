/*
  DESCRIPTION:
  have the function WordCount(str) take the str string parameter 
  being passed and return the number of words the string contains 
  (ie. "Never eat shredded wheat" would return 4). Words will be 
  separated by single spaces. 
*/

function WordCount(str){
  return str.match(/\S+/g).length;
}

module.exports = WordCount;

/*
  function WordCount(str) { 

    // code goes here  
    return str.split(' ').length; 
           
  }
*/
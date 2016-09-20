/*
  DESCRIPTION:
  have the function Palindrome(str) take the str parameter being 
  passed and return the string true if the parameter is a palindrome, 
  (the string is the same forward as it is backward) otherwise return 
  the string false. For example: "racecar" is also "racecar" backwards. 
  Punctuation and numbers will not be part of the string. 


*/

function Palindrome(str){
  return str.replace(/\s/g, '') === str.replace(/\s/g, '').split('').reverse().join('');
}

module.exports = Palindrome;

/*  
  function Palindrome(str) { 

    // code goes here  
    return str.match(/[a-z]/gi).join('') === str.match(/[a-z]/gi).reverse().join(''); 
           
  } 
*/
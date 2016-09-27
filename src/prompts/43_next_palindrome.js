/*
  DESCRIPTION:
  have the function NextPalindrome(num) take the num parameter being passed 
  and return the next largest palindromic number. The input can be any positive 
  integer. For example: if num is 24, then your program should return 33 because 
  that is the next largest number that is a palindrome. 
*/

function NextPalindrome(num){
  if(isPalindrome(num+1)){
    return num+1;
  }else{
    return NextPalindrome(num+1);
  }

  function isPalindrome(num){
    return num.toString() === num.toString().split('').reverse().join('');
  }
}

module.exports = NextPalindrome;



















/*
  

*/
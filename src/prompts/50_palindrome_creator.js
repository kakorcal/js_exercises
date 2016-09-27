/*
  DESCRIPTION:
  have the function PalindromeCreator(str) take the str parameter being passed 
  and determine if it is possible to create a palindromic string of at least 3 
  characters by removing 1 or 2 characters. For example: if str is "abjchba" 
  then you can remove the characters jc to produce "abhba" which is a palindrome. 
  For this example your program should return the two characters that were removed 
  with no delimiter and in the order they appear in the string, so jc. If 1 or 2 
  characters cannot be removed to produce a palindrome, then return the string not 
  possible. If the input string is already a palindrome, your program should return 
  the string palindrome. 

  The input will only contain lowercase alphabetic characters. Your program should 
  always attempt to create the longest palindromic substring by removing 1 or 2 
  characters (see second sample test case as an example). The 2 characters you remove 
  do not have to be adjacent in the string. 
*/

function PalindromeCreator(str){
  if(isPalindrome(str)) return 'palindrome';
  
  var arr = str.split('').reduce((acc, cur)=>{
    var idx = acc.indexOf(cur);
    if(~idx) acc.splice(idx, 1);
    else acc.push(cur);
    return acc;
  }, []);

  for(var i = 0; i < arr.length; i++){
    var rmOne = str.replace(arr[i], '');
    if(isPalindrome(rmOne)) return arr[i];

    for(var j = i + 1; j < arr.length; j++){
      var opp = str.replace(arr[j], '');
      var rmTwo = str.replace(new RegExp(`[${arr[i]}${arr[j]}]`, 'g'), '');
      if(isPalindrome(opp)) return arr[j];
      if(isPalindrome(rmTwo)) return arr[i] + arr[j];
    }
  }

  return 'not possible';

  function isPalindrome(str){
    return str.length > 2 ? str === str.split('').reverse().join('') : false;
  }
}

module.exports = PalindromeCreator;



















/*
  

*/
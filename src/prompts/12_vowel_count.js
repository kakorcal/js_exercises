/*
  DESCRIPTION:
  have the function VowelCount(str) take the str string parameter 
  being passed and return the number of vowels the string contains 
  (ie. "All cows eat grass" would return 5). Do not count y as a vowel 
  for this challenge. 
*/

function VowelCount(str){
  return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
}

module.exports = VowelCount;

/*
  function VowelCount(str) { 

    // code goes here  
    return str.split('').filter(function(vowel){
      return vowel.match(/[aeiou]/gi);
    }).length; 
           
  }
*/
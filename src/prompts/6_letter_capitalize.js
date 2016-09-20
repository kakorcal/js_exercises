/*
  DESCRIPTION:
  have the function LetterCapitalize(str) take the str parameter being 
  passed and capitalize the first letter of each word. 
  Words will be separated by only one space. 

  Input  : "hello world"
  Output : "Hello World"

  Input  : "i ran there"
  Output : "I Ran There"
*/

function LetterCapitalize(str){
  return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}

module.exports = LetterCapitalize;

/*
  function LetterCapitalize(str) { 

    // code goes here  
    return str.split(' ').map(function(word){
      return word[0].toUpperCase() + word.slice(1, word.length);
    }).join(' '); 
           
  }  
*/
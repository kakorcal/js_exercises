/*
  DESCRIPTION:
  have the function LongestWord(sen) take the sen parameter being passed and 
  return the largest word in the string. If there are two or more words that 
  are the same length, return the first word from the string with that length. 
  Ignore punctuation and assume sen will not be empty. 

  Input  : "fun&!! time"
  Output : "time"

  Input  : "I love dogs"
  Output : "love"
*/

function LongestWord(sen){
  return sen.replace(/\W/g, ' ').split(/\s/g).reduce((prev, curr)=>{
    return prev.length >= curr.length ? prev : curr;
  });
}

module.exports = LongestWord;

/*
  function LongestWord(sen) { 

    // code goes here  
    return sen.split('').filter(function(letter){
      return letter.match(/[A-za-z\s]/);
    }).join('').split(' ').reduce(function(prev, curr){
      if(prev.length < curr.length){
        return curr;
      }else{
        return prev;
      }
    });
           
  }
*/
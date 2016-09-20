/*
  DESCRIPTION:
  have the function LetterChanges(str) take the str parameter being passed
  and modify it using the following algorithm. Replace every letter in the 
  string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
  Then capitalize every vowel in this new string (a, e, i, o, u) and finally 
  return this modified string. 
  
  Input  : "hello*3"
  Output : "Ifmmp*3"

  Input  : "fun times!"
  Output : "gvO Ujnft!"
*/

function LetterChanges(str){
  return str.split('').reduce((acc, cur)=>{
    var next;
    if(/[A-Za-z]/.test(cur)){
      if(cur === 'z' || cur === 'Z'){
        next = 'a';
      }else{
        next = String.fromCharCode(cur.charCodeAt(0) + 1);
      }

      if(/[aeiou]/.test(next)) {
        next = next.toUpperCase();
      }
    }else{
      next = cur;
    }
    return acc + next;
  }, '');
}

module.exports = LetterChanges;








/*
function LetterChanges(str) { 
  
   // code goes here  
  return str.split('').map(function(letter){
    if(letter.match(/[a-z]/)){
        var elem;
        if(letter.match(/[z]/)){
          elem = 'a';
        }else{
      elem = String.fromCharCode(letter.charCodeAt(0)+1);       
        }
      
        if(elem.match(/[aeiou]/)){
          return elem.toUpperCase();
        }else{
          return elem;
        }
    }else{
      return letter;
    }
  }).join('');  
         
}
*/
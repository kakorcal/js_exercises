/*
  DESCRIPTION:
  have the function SwapCase(str) take the str parameter and swap the 
  case of each character. For example: if str is "Hello World" the output 
  should be hELLO wORLD. Let numbers and symbols stay the way they are. 
*/

function SwapCase(str){
  return str.split('').map(el => {
    if(/[A-Z]/.test(el)) return el.toLowerCase();
    if(/[a-z]/.test(el)) return el.toUpperCase();
    return el;
  }).join('');
}

module.exports = SwapCase;

/*
  function SwapCase(str) { 
    return str.split('').map(function(el){
        if(el.match(/[a-z]/)){
            return el.toUpperCase();
        }else if(el.match(/[A-Z]/)){
            return el.toLowerCase();
        }else{
            return el;
        }
    }).join('');  
  }  
*/
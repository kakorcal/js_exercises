/*
  DESCRIPTION:
  have the function DivisionStringified(num1,num2) take both parameters 
  being passed, divide num1 by num2, and return the result as a string 
  with properly formatted commas. If an answer is only 3 digits long, 
  return the number with no commas (ie. 2 / 3 should output "1"). For 
  example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". 
*/

function DivisionStringified(num1, num2){
  var div = Math.round(num1/num2).toString();
  if(div.length <= 3) return div;

  var iteration = 0;
  return div.split('').reduceRight((acc, cur)=>{
    if(iteration === 3){
      iteration = 0;
      cur += ','
    }
    iteration++;
    return cur + acc;
  }, '');
}

module.exports = DivisionStringified;












/*
  function DivisionStringified(num1,num2) { 
      var div = String(Math.round(num1 / num2));

      if(div.length <= 3){
          return div;
      }else{
          var result = div.split('').reverse(); 
          for(var i = 0; i < div.length; i += 3){
              if(i !== 0){
                  result[i] = result[i] + ',';
              }
          }
          return result.reverse().join('');
      }         
  }
*/
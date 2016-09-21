/*
  DESCRIPTION:
  have the function LetterCountI(str) take the str parameter being passed 
  and return the first word with the greatest number of repeated letters. 
  For example: "Today, is the greatest day ever!" should return greatest 
  because it has 2 e's (and 2 t's) and it comes before ever which
  also has 2 e's. If there are no words with repeating letters return -1. 
  Words will be separated by spaces. 


*/

function LetterCountI(str){
  var greatest;
  var notFound = true;
  str.match(/[A-Za-z]+/g).forEach((curr, idx, arr)=>{
    if(idx === 0){
      if(arr.length === 1) notFound = false;
      greatest = curr;
    }else{
      var compare = findGreater(greatest, curr);
      if(compare !== 0) notFound = false;
      if(compare < 0) greatest = curr; 
    }
  });

  function findGreater(str1, str2){
    var occ1 = occurence(str1);
    var occ2 = occurence(str2);

    // return 1 if str1 > str2
    if(occ1 > occ2) return 1;
    // return -1 if str1 < str2
    if(occ1 < occ2) return -1;
    // str1 === str2
    return 0;
  }

  function occurence(input){
    var cache = {};
    for(var i = 0; i < input.length; i++){
      if(!cache[input[i]]){
        cache[input[i]] = 1;
      }else{
        cache[input[i]]++;
      }
    }
    return Math.max.apply(null, Object.keys(cache).map(letter => cache[letter]));
  }

  return notFound ? -1 : greatest;
}

module.exports = LetterCountI;











/*
  Array.prototype.mode = function(){
      var that = this;

      //Returns an object with a number and its associated count
      var arr = that.filter(function(curr, indx){
        return that.indexOf(curr) === indx; //Eliminate duplicate numbers
      }).map(function(i){
        var count = 0;
        that.forEach(function(j){ 
          if(i === j){
            count++;
          } 
        });
        return { number: i, count: count };
      });

      //Returns the highest count from the object in arr
      var highestFrequency = arr.reduce(function(acc,curr){
        if(acc.count > curr.count){
          return acc;
        }else{
          return curr;
        }
      }).count;

      if(highestFrequency <= 1){
        return 'Mode Does Not Exist';
      }else{
        //Returns object with the initial array and the mode object
        var mode = arr.filter(function(curr){
          return curr.count === highestFrequency;
        });

        // .map(function(curr){
        //  return curr.number;
        // });

        return { word: that, mode: mode };
      }
    }

    var string = 'Hello apple pie';

    function LetterCountI(str) { 
      //Returns words with duplicate letters
      var result = str.split(' ').map(function(curr){
        return curr.split('').map(function(curr){
          return curr.charCodeAt(0);
        }).mode();
      }).filter(function(curr){
        return curr !== 'Mode Does Not Exist';
      }); 

      if(result.length === 0){
        return -1;
      }else{
        //Returns object with highest count and converts the word property into a string
        return result.reduce(function(acc, curr){
          if(acc.mode.count > curr.mode.count){
            return acc;
          }else if(acc.mode.count === curr.mode.count){
            return acc;
          }else{
            return curr;
          }
        }).word.map(function(curr){
          return String.fromCharCode(curr);
        }).join('');
      }         
    }
*/
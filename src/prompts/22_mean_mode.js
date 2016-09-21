/*
  DESCRIPTION:
  have the function MeanMode(arr) take the array of numbers stored in 
  arr and return 1 if the mode equals the mean, 0 if they don't equal each 
  other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals 
  the mean (3)). The array will not be empty, will only contain positive 
  integers, and will not contain more than one mode. 
*/

function MeanMode(arr){
  var mode;
  var avg = arr.reduce((prev, curr) => prev + curr) / arr.length;

  arr.reduce((acc, curr)=>{
    if(!acc[curr]){
      acc[curr] = 1;
    }else{
      acc[curr]++;
      mode = curr;
    }
    return acc;
  }, {});
  
  return avg === mode ? 1 : 0;
}

module.exports = MeanMode;

/*  
function MeanMode(arr) { 
    var avg = arr.reduce((a,b) => a+b) / arr.length;
    var mode = typeof arr.mode() === 'object' ? arr.mode().mode[0].number : 0; 
    return avg === mode ? 1 : 0;             
  }

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
   
// keep this function call here 
MeanMode(readline());
*/
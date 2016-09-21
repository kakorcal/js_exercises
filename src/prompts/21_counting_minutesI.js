/*
  DESCRIPTION:
  have the function CountingMinutesI(str) take the str parameter being passed which 
  will be two times (each properly formatted with a colon and am or pm) separated 
  by a hyphen and return the total number of minutes between the two times. 
  The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am 
  then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.
*/

function CountingMinutesI(str){
  // convert each time into minutes. return the difference
  // 0:00am === 0
  var [t1, t2] = str.split('-').map(cur => {
    var t = cur.split(':');
    var hrs = +t[0];
    var min = +t[1].substring(0,2);
    var ampm = t[1].substring(2);

    if(ampm === 'pm') hrs += 12;
    
    return (hrs * 60) + min;
  });

  if(t1 <= t2){
    return t2 - t1; 
  }else{
    return 1440 - (t1 - t2);
  }
}

module.exports = CountingMinutesI;
















/*
  function CountingMinutesI(str) { 
      return str.replace(/[m]/g, '').split('-').map(function(time){
        var colon = time.indexOf(':');
        return {
            hours: Number(time.slice(0, colon)),
            minutes: Number(time.slice(colon + 1, colon + 3)),
            ampm: time[time.length - 1],
            total: null
        };
      }).map(function(obj){
        if(obj.ampm === 'a' && obj.hours === 12){
            obj.hours = obj.hours - 12; 
        }
        if(obj.ampm === 'p' && obj.hours !== 12){
            obj.hours = obj.hours + 12;
        }
        return obj;
      }).map(function(obj){
        obj.total = (obj.hours * 60) + obj.minutes;
        return obj;
      }).reduce(function(acc, curr){
        if(acc.total > curr.total){
            return (1440 - acc.total) + curr.total;
        }else{
            return curr.total - acc.total;
        }
      });       
  }
*/
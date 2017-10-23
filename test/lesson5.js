const mostCommon = require('../solutions/lesson5.js');
const testing=(arr,result)=>{
  if(mostCommon(arr)==result){
    console.log(`Yay you did it, the answer is ${mostCommon(arr)}`);
  }else{
    console.log(`wrong, the correct answer is ${result}`);
  }
}
testing([2,5,8,6,8,8],3);
testing([1,1,2,1,1,5,8,8,6,6],4);
testing([0,0,5,3],2);

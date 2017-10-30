const mostCommon= require('../solutions/mostCommon.js');

const testing=(arr,result)=>{
  if(mostCommon(arr)==result){
    console.log(`correct, your answer is ${mostCommon(arr)}`);
  }else{
    console.log(`wrong, the answer is ${result}`);
  }
}
testing([3,1,2,1,1],1);
testing([5,1,9,5],5);
testing([0,0,3,8,7],0);

const count9= require('../solutions/lesson4.js');

const check=(arr,result)=>{
  if(count9(arr)==result){
    console.log(`correct the answer is ${count9(arr)}`);
  }else{
    console.log(`wrong the correct answer is ${result}`);
  }
}
check([1,5,69,8],0);
check([5,8,9,6,9],2);
check([2,5,9,9,9,9],4);

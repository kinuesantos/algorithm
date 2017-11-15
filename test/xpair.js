const xpair= require('../solutions/xpair.js');

const testing=(arr,num,result)=>{
  if(xpair(arr,num)==result){
    console.log('correct');
  }else{
    console.log('wrong');
  }
}

testing([1,2,3,4],3,true);
testing([1,5,8,4],4,false);
testing([1,9,5,2,1,7],8,true);

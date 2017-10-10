const callX2= require('../solutions/6.js');

const testing = (num)=>{
  let count = 0;
  const hello = (a)=>{
    console.log(a);
    count+=1;
  }
  callX2(hello,num);
  if(count==num){
    console.log('correct');
  }else{
    console.log('wrong');
  }
}
testing(3);
testing(8);
testing(2);

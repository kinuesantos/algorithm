const sayHi= require('../solutions/5.js');

const testing=(num)=>{
  let sum = 0;
  const greet = ()=>{
    sum = sum + 1;
  }
  sayHi(greet,num);
  if(sum==num){
    console.log('You are right');
  }else{
    console.log('wrong')
  }
}
testing(3);
testing(10);


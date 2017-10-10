const callX2= require('../solutions/6.js');

const testing = (num)=>{
  let count = 0; 
  let passing = true;

  const hello = (a)=>{
    count+=1;
    if(a!=count){
      passing= false;
    }
  }
  callX2(hello,num);
  if(count==num && passing==true){
    console.log('correct');
  }else{
    console.log('wrong');
  }
}
testing(3);
testing(8);
testing(2);

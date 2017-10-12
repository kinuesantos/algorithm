const GCD = require('../solutions/9.js');

const testing = (a,b,result)=>{
  if(GCD(a,b)==result){
    console.log('correct');
  }else{
    console.log('wrong');
  }
}

testing(10,100,10);
testing(6,12,6);
testing(3,6,3);

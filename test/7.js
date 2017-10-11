const divisors = require('../solutions/7.js');

const testing = (num,result,i=num-1)=>{
  if((divisors(num))==1){
    console.log('this is a prime number');
  }
  else if(divisors(num)==result){ 
    console.log('correct the biggest divisor of '+num+' is '+ result); 
  }
  else{
    console.log('wrong the biggest divisor is ' + divisors(num));
  }
}
testing(7,1);
testing(15,5);
testing(20,5);

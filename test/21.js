const factorial = require('../solutions/21.js');
const testing = (num,result)=>{
  if(factorial(num)==result){
    console.log(`correct the answer is ${factorial(num)}`);
  }else{
    console.log(`wrong the answer is ${result}`);
  }
}
testing(5, 120);
testing(7,5040);
testing(9, 362880);

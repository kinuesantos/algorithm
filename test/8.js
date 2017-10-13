const isPrime= require('../solutions/8.js');

const testing = (num,primeOrNot)=>{
  if(isPrime(num)==primeOrNot){
    console.log('your code is correct');
  }else{
    console.log('your code is wrong the correct answer is ' + isPrime(num));
  }
}
testing(10,false);
testing(23,true);
testing(1,false);

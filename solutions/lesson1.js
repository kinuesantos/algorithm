const isPrime = require('./8.js');

const arrPrime=(num,newArr=[])=>{
  if(num==1){
    return newArr;
  }
  if(isPrime(num)){
    newArr.push(num);
  }
  return arrPrime(num-1,newArr);
}
module.exports= arrPrime;

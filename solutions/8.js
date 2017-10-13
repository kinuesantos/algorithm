const isPrime=(num,i=2)=>{
  if(num==1){
    return false;
  }
  if(num%i==0){
    if(i==num){
      return true;
    }else{
      return false;
    }
  }
  return isPrime(num,i+1);
}
module.exports= isPrime;

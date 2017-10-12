const isPrime=(num,i=2,result=false)=>{
  if(i>num){
    return result;
  }
  if(num%i==0){
    result = false;
    if(i==num){
      result = true;
    }
    return result;
}
  return isPrime(num,i+1,result);
}
module.exports= isPrime;

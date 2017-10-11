const divisors = (num, i=num-1)=>{
  if(num%i==0){
    return i;
  }
  return divisors(num,i-1);
}

module.exports= divisors;

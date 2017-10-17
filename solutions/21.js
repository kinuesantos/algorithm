const factorial = (num, fact=1)=>{
  if(num==1){
    return fact;
  }
  fact= fact* num;
  return factorial(num-1,fact);
}

module.exports= factorial;

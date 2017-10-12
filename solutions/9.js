const GCD = (a,b,gc,i=1)=>{
  if(i>a||i>b){
    return gc;
  }
  if(a%i==0 && b%i==0){
    gc= i;
  }
  return GCD(a,b,gc,i+1);
}

module.exports= GCD;

const callX2=(func,num,i=1)=>{
  func(i);
  if(i==num){
    return;
  }
  return callX2(func,num,i+1);
}
module.exports= callX2;

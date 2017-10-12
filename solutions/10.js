const callFuncBig = (func,num1, num2,biggest, i=0)=>{
  if(num1>num2){
    biggest= num1;
  }else{
  biggest = num2;
  }
  if(i==biggest){
    return i;
  }
  func();
  return callFuncBig(func,num1,num2,biggest,i+1);
}
module.exports= callFuncBig;

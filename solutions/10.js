const hello=()=>{
  console.log('kinue');
}

const callFuncBig = (func,num1, num2,biggest, i=1)=>{
  if(num1<0 &&num2<0){
    return;
  }
  if(num1>num2){
    biggest= num1;
  }else{
  biggest = num2;
  }
  if(i>biggest){
    return;
  }
  func(i);
  return callFuncBig(func,num1,num2,biggest,i+1);
}
module.exports= callFuncBig;

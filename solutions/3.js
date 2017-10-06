const sayHi = (num, i=0)=>{
  if(i==num){
    return;
  }
  console.log('hi');
  return sayHi(num, i+1);
}

sayHi(5);

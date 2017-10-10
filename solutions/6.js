const hello=(num)=>{
  console.log(num);
}

const callX2=(func,num,i=0)=>{
  if(i==num){
    return;
  }
  func(num);
  return callX2(func,num,i+1);
}

callX2(hello,3);



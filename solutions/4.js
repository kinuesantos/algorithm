const repeat= (str,num, i=0)=>{
  if(i==num){
    return;
  }
  console.log(str);
  return repeat(str,num,i+1);
}

repeat('hello world', 4);

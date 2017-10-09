const repeat= (str,num,newStr='',i=0)=>{
  if(i==num){
    return newStr;
  }
  newStr=newStr+str;
  return repeat(str,num,newStr,i+1);
}
module.exports= repeat;

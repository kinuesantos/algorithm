const strHas=(str,char,check,i=0)=>{
  if(i==str.length){
    return check;
  }
  if(str[i]==char){
    return true;
  }else{
    check= false;
  }
  return strHas(str,char,check,i+1);}
module.exports = strHas;

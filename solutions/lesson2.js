const strHas=(str,char,check,i=0)=>{
  if(i==str.length){
    return false;
  }
  if(str[i]==char){
    return true;
  }
return strHas(str,char,check,i+1);
}
module.exports = strHas;

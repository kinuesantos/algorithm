const biggestValue = (obj,i=0,objArr=Object.values(obj),biggest=objArr[0])=>{
  if(i==objArr.length){
    return biggest;
  }
  if(objArr[i]>biggest){
    biggest=objArr[i];
  }
  return biggestValue(obj,i+1,objArr,biggest);
}
module.exports= biggestValue;

const biggestValue=(obj,objKeys=Object.keys(obj),i=0,maxVal=objKeys[i])=>{
  if(i==objKeys.length){
    return maxVal;
  }
  if(obj[objKeys[i]]>obj[maxVal]){
    maxVal=objKeys[i];
  }
  return biggestValue(obj,objKeys,i+1,maxVal);
}
module.exports=biggestValue;

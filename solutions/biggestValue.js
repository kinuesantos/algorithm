const biggestValue=(obj,objKeys=Object.keys(obj),i=0,maxKey=objKeys[i])=>{
  if(i==objKeys.length){
    return maxKey;
  }
  if(obj[objKeys[i]]>obj[maxKey]){
    maxKey=objKeys[i];
  }
  return biggestValue(obj,objKeys,i+1,maxKey);
}
module.exports=biggestValue;

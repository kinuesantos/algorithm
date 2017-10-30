const findMax=(obj,i=0,objKeys=Object.keys(obj),maxKey=objKeys[i])=>{
  if(i==objKeys.length){
    return maxKey;
  }
  if(obj[objKeys[i]]>obj[maxKey]){
    maxKey=objKeys[i];
  }
  return findMax(obj,i+1,objKeys,maxKey);
}

const mostCommon= (arr,i=0,obj={})=>{
  if(i==arr.length){
    return findMax(obj);
  }
  if(!obj[arr[i]]){
    obj[arr[i]]=1;
  }else{
    obj[arr[i]]=obj[arr[i]]+1;
  }
  return mostCommon(arr,i+1,obj);
}
module.exports=mostCommon;
//console.log(mostCommon([3,1,2,1,1]));

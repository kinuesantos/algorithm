const filterObj=(obj,func,objKeys=Object.keys(obj),i=0,newObj={})=>{
  if(i==objKeys.length){
    return newObj;
  }
  key=objKeys[i];
  value=obj[objKeys[i]]
  func(key,value,objKeys,newObj);
  return filterObj(obj,func,objKeys,i+1,newObj);
}
module.exports= filterObj;

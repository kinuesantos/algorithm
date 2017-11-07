const map=(obj,func,i=0,arrKeys=Object.keys(obj))=>{
  if(arrKeys.length==i) return;
  key=arrKeys[i];
  value=obj[arrKeys[i]];
  func(key,value);
  return map(obj,func,i+1,arrKeys);
}
module.exports=map;

const repeatElem=(arr,i=0,obj={},newArr=[])=>{
  if(arr.length==i){
    return newArr;
  }
  if(!obj[arr[i]]){
    obj[arr[i]]=1;
  }else{
    newArr.push(arr[i]);
  }
  return repeatElem(arr,i+1,obj,newArr);
}
module.exports=repeatElem;

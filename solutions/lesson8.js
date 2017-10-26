const findMax=(obj,max=0)=>{
  if(obj.next==null){
    if(obj.val>max){
        max=obj.val;
    }
  return max;
  }
  if(obj.val>max){
    max = obj.val;
  }
  return findMax(obj.next,max);
}
module.exports=findMax;

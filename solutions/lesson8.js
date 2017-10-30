const findMax=(obj,head=obj,max=obj.val)=>{
  if(obj.val>max){
    max = obj.val;
  }
if(obj.next==null || obj.next==head){
  return max;
}
  return findMax(obj.next,head,max);
}
module.exports=findMax;

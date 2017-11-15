const xpair=(arr,num,i=0)=>{
  if(i==arr.length-1) return false;
  if(arr[i]+arr[i+1]==num) return true;
  return xpair(arr,num,i+1);
}
module.exports=xpair;

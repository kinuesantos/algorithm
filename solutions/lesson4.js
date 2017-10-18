const count9 = (arr,count=0,i=0)=>{
  if(i==arr.length){
    return count;
  }
  if(arr[i]==9){
    count+=1;
  }
  return count9(arr,count,i+1);
}
module.exports= count9;

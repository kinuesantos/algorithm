const biggestValue=require('./lesson6.js');
const mostCommon=(arr,i=0,keep={})=>{
  if(i==arr.length) return biggestValue(keep);
  if(!keep[arr[i]]){
    keep[arr[i]]=1;
  }else{
    keep[arr[i]]+=1;
  }
  return mostCommon(arr,i+1,keep);
}
module.exports= mostCommon;

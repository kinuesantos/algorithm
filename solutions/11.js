const div7=(num)=>{
  if(num%7==0){
    return num;
  }
  return div7(num+1);
}
module.exports= div7;

const custom =(num,func,i=1)=>{
  if(i>num){
    return;
  }
  setTimeout(()=>{
    console.log(i);
    func();
    custom(num,func,i+1);
  },1000);
}
module.exports = custom;

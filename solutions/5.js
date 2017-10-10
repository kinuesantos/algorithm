const sayHi = (func,num, i=0)=>{
  if(i<num){
    func();
    return sayHi(func,num,i+1);
}
}
module.exports= sayHi;

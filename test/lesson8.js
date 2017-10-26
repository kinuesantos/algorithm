const findMax= require('../solutions/lesson8.js');
const test = (obj,result)=>{
  if(findMax(obj)==result){
    console.log(`correct, the result is ${findMax(obj)}`);
  }else{
    console.log(`wrong the result is ${result}`);
  }
}
const a = {val:64,next:{val:75,next:{val:90,next:null}}};
const b = {val:52,next:{val:66,next:null}};
const c = {val:32,next:{val:33,next:{val:10, next:null}}}
test(a, 90);
test(b,66);
test(c,33)

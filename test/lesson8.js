const findMax= require('../solutions/lesson8.js');
const test = (obj,result)=>{
  if(findMax(obj)==result){
    console.log(`correct, the result is ${findMax(obj)}`);
  }else{
    console.log(`wrong the result is ${result}`);
  }
}
const a = {val:-64,next:{val:-75,next:{val:-90}}};
const b = {val:52,next:{val:66}};
const c = {val:32};
d={val:33};
e={val:34};
c['next']=d;
d['next']=e;
e['next']=c;
test(a,-64);
test(b,66);
test(c,34);

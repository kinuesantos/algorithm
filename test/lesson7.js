const findLoop = require('../solutions/lesson7.js');
const testing = (obj,result)=>{
  if(findLoop(obj)==result){
    console.log(`your code works, the answer is ${findLoop(obj)}`)
  }else{
    console.log(`your code does not work, the correct answer is ${result}`);  }
}
const b = {value:5};
const a = {value:2, next:b};
b['next']=a;

testing(a, true);

const r = {val:5};

testing(r,false);

const s = {val:3,next:r}

testing(s,false);


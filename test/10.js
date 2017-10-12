const callFuncBig = require('../solutions/10.js');

let count = 0;

const hello = ()=>{
  count = count + 1;
}

const test = (func,num1,num2,result)=>{
  if(callFuncBig(func,num1,num2)==result){
    console.log('correct your function was called '+ result +' times!');
  }else{
    console.log('wrong');
  }
}

test(hello,5,4,5);
test(hello,21,14,21);
test(hello,0,1,1);

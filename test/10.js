const callFuncBig = require('../solutions/10.js');

const test = (num1,num2,biggest)=>{
  let compare = true;
  let count = 0;

  const hello = (i)=>{
    count+=1;
    console.log(count);
    if(count!=i){
      compare= false;
    }
}
callFuncBig(hello,num1,num2);
if(compare==true && biggest==count){
  console.log('correct!');
  }else{
    console.log('wrong');
  }
}

test(3,2,3);

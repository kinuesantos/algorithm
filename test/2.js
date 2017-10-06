const max = require('../solutions/2.js');

const test = (num1,num2,num3,result)=>{
  if(max(num1,num2,num3)==result){
    console.log('correct');
  }else{
    console.log('wrong the expected answer is: '+ max(num1,num2,num3));
  }
}

test(8,1,2,8);
test(2,3,7,7);
test(8,6,8,3);

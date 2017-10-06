const biggest = require('./biggestnum.js');

const test = (num1,num2,num3,result)=>{
  if(biggest(num1,num2,num3)==result){
    console.log('correct :' + result);
  }else{
    console.log('wrong :' + result);
  }
}

test(3,6,1,6);

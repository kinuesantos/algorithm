const div7= require('../solutions/11.js');

const tester = (num,result)=>{
  if(div7(num)==result){
    console.log(`correct the answer is ${div7(num)}`);
  }else{
    console.log(`wrong the correct answer is ${result}`);
  }
}
tester(2,7);
tester(36,42);
tester(19,21);

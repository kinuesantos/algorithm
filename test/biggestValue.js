const biggestValue= require('../solutions/biggestValue.js');
const test=(obj,result)=>{
  if(biggestValue(obj)==result){
    console.log(`CORRECT! your answer is ${biggestValue(obj)}`);
  }else{
    console.log(`WRONG! the correct answer is ${result}`);
  }
}
test({a:4,b:7,c:5},'b');
test({a:-15,b:-5,c:-4},'c');
test({a:23,b:2,c:5},'a');

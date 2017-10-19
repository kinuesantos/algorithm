const biggestValue = require('../solutions/lesson6.js');

const checking = (obj,result)=>{
  if(biggestValue(obj)==result){
    console.log(`correct the answer is ${biggestValue(obj)}`);
  }else{
    console.log(`wrong the answer is ${result}`);
  }
}
checking({a:3,b:5,c:1,d:5},5);
checking({0:3,1:5,6:8,9:2},8);
checking({1:1,3:3,2:2},3);

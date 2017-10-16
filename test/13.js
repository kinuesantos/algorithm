const custom = require('../solutions/13.js');

const testing = (num)=>{
  let count = 0;

  const update =()=>{
    count+=1;
  }
  setTimeout(()=>{
    if(count==num){
      console.log('correct');
    }else{
      console.log('wrong');
    }
  },num*1000+1000);
  custom(num,update);
}
testing(4)

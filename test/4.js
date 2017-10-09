const repeat = require('../solutions/4.js');

const testing = (str,num,result)=>{
  if(repeat(str,num)==result){
    console.log('You are correct');
  }else{
    console.log('wrong, expected answer: '+ repeat(str,num));
  }
}

testing('apple',3,'appleappleapple');
testing('kinue',2,'kinuekinue');
testing('hello',5,'hello');

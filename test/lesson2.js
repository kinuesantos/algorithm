const strHas= require('../solutions/lesson2.js');
const tester=(str,char,result)=>{
  if(strHas(str,char)==result){
    console.log(`correct the your answer is ${strHas(str,char)}`);
  }else{
    console.log(`wrong the answer is ${result}`);
  }
}
tester('hello','o', true);
tester('kinue','z',false);
tester('lalo','l',true);

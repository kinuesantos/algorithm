const map= require('../solutions/map.js');

obj1={name:'kinue',id:123,female:true, color:'blue', time:'7am'};
obj2={hello:'hola',name:'nombre', age:'edad'}
obj3={color:'blue', number:158, food:true, drink:'juice'}

const testing=(obj,result)=>{
  let count = 0;
  const func=(key,value)=>{
    count=count+1
    console.log(`the property is ${key} and the respective value is ${value}`);
  }
  map(obj,func);
  if(count==result){
    console.log('correct');
  }else{
    console.log('wrong');
  }
}
testing(obj1,5);
testing(obj2,3);
testing(obj3,4);

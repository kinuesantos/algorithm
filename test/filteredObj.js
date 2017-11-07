const filteredObj=require('../solutions/filteredObj.js');
const print=(key,value,objKeys,newObj)=>{
  if(value.length>3) newObj[key]=value;
}
const testing=(obj,func,result)=>{
  if(JSON.stringify(filteredObj(obj,func))==JSON.stringify(result)){
    console.log('youre correct the answer is',filteredObj(obj,func));
  }else{
    console.log('wrong, the correct answer is', result);
  }
}
obj1={name:'kinue',lastName:'san',id:'ks',food:'pizza'};
testing(obj1,print,{name:'kinue', food:'pizza'});

obj2={name:'mc',lastName:'bonzo',id:'mcb'};
testing(obj2,print,{lastName:'bonzo'})

obj3={name:'vivian', lastName:'zhing', id:'he'};
testing(obj3,print,{name:'vivian', lastName:'zhing'});

const filteredObj=require('../solutions/filteredObj.js');
const testing=(obj,key,value,result)=>{
  if(JSON.stringify(filteredObj(obj,key,value))==JSON.stringify(result)){
    console.log(`hooray, you are correct! result is ${JSON.stringify(filteredObj(obj,key,value))}`); }else{
    console.log(`wrong, the answer is ${JSON.stringify(result)}`);
  }
}
a={};
b='age';
c=27;
testing(a,b,c,{age:27});

newObj={};
key='name';
value='anna';
testing(newObj,key,value,{name:'anna'});

obj={};
gender='gender';
boolean=true;
testing(obj,gender,boolean,{gender:true});

const sayHi= require('../solutions/5.js');

let sum = 0;
const greet = ()=>{
  sum = sum + 1;
}



//first test
sayHi(greet,3);

if(sum==3){
  console.log('correct');
}else{
  console.log('wrong');
}

//second test
sum = 0;
sayHi(greet,20);
if(sum==20){
  console.log('correct');
}else{
  console.log('wrong');
}

//third test

sum = 0;
sayHi(greet,10);
if(sum==10){
  console.log('corerct');
}else{
  console.log('wrong');
}

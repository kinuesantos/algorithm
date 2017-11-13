const repeatElem=require('../solutions/repeatElem.js');

const checking=(arr,result)=>{
  if(JSON.stringify(repeatElem(arr))==JSON.stringify(result)){
    console.log(`correct the result is ${repeatElem(arr)}`);
  }else{
    console.log(`wrong, the correct answer is ${result}`);
  }
}
checking([1,8,2,7,1,7],[1,7]);
checking([6,1,2,1,],[1]);
checking([9,8,7,9,8],[9,8]);

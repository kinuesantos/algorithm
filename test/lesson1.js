const arrPrime= require('../solutions/lesson1.js');

const testing=(num,result)=>{
  if(arrPrime(num).toString()==result.toString()){
    console.log(`You got it`);
  }else{
    console.log(`wrong`);
  }
}

testing(15, [ 13, 11, 7, 5, 3, 2 ]);
testing(7, [ 7, 5, 3, 2 ]); 
testing(11, [ 11, 7, 5, 3, 2 ]);

const kebabCase= require('../solutions/lesson3.js');
const tester=(cam,result)=>{
  if(kebabCase(cam)==result){
    console.log(`correct the answer is ${kebabCase(cam)}`);
  }else{
    console.log(`wrong the answer is ${result}`);
  }
}
tester('helloWorld','hello-world');
tester('whatsUpYou', 'whats-up-you');
tester('hiHowAreYou', 'hi-how-are-you');

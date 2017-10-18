const kebabCase=(cam,i=0,newStr=[])=>{
  if(i==cam.length){
    return newStr.join('');
  }
  if(cam[i]==cam[i].toLowerCase()){
    newStr.push(cam[i]);
  }else{
    newStr.push(`-${cam[i].toLowerCase()}`);    
  }
  return kebabCase(cam,i+1,newStr);
}
module.exports= kebabCase;

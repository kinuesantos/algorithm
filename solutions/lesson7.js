const findLoop=(obj,head=obj)=>{
  if(obj.next==head){
    return true;
  }
  if(!obj.next){
    return false;
  }else{
    return findLoop(obj.next, head);
  }
}
module.exports = findLoop;
//console.log(findLoop(a));

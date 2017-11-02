const filtObj=(obj,key,value)=>{
  const func = (key,value,obj)=>{
    obj[key]=value;
    return obj;
  }
  return func(key,value,obj);
}
module.exports=filtObj;

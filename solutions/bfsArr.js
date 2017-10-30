const a = {val:1};
const b = {val:2};
const c = {val:3};
const d = {val:4};
const e = {val:5};
const f = {val:6};
const g = {val:7};
a['chi'] = [b,c];
b['chi'] = [d,e];
c['chi'] = [f];
d['chi'] = [];
e['chi']= [];
f['chi']=[];

const solution = (current,next=[],result=[current.slice()])=>{
  if(current.length==0 && next.length==0){
    return result;
  }
  if(current.length==0){
    result.push(next.slice());
    return solution(next,[],result);
  }
  n=current.shift();
  return solution(current,next.concat(n.chi),result);
}
console.log(solution([a]));

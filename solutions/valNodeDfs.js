const a={val:1};
const b={val:2};
const c={val:3};
const d={val:4};
const e={val:5};
a['child']=[b,d];
b['child']=[c];
d['child']=[e];
c['child']=[];
e['child']=[];

printValDFS=(levels=[])=>{
  if(!levels.length){
    return;
  }
  const n=levels.pop();
  console.log(`value of node ${n.val}`);
  printValDFS(levels.concat(n.child));
}
printValDFS([a]);

const a={val:1};
const b={val:2};
const c={val:3};
const d={val:4};
const e={val:5};
const f={val:6};
const g={val:7};
a['child']=[b,c];
b['child']=[d,e];
c['child']=[f,g];
d['child']=[];
e['child']=[];
f['child']=[];
g['child']=[];

const printVal=(levels=[])=>{
  if(!levels.length){
    return;
  }
  const n=levels.shift();
  console.log(`value of node ${n.val}`);
  printVal(levels.concat(n.child));
}
printVal([a]);

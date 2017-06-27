let obj = {
  k1: 'v1',
  k2: 2,
  k3: false
};
let otherobj = {};
obj.k4 = 'some stuff';
obj['a'] = 200;
obj['spaced string'] = 'some val';
obj[''] = 40;
obj[obj] = 45;
obj[otherobj] = 48;
console.log(obj);
// delete obj.k2;
// console.log(obj);
var objA = Object.create(obj);
console.log(objA);

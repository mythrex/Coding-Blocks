'use strict';
var a = 'global';
let a1 = 'global';
function f() {
  var a = 'functional';
  let a1 = 'functional';
  if(true){
    var a = 'block';
    let a1 = 'block';
    console.log('a is: '+a);
    console.log('a1 is: '+a1);
  }
  console.log('a is: '+a);
  console.log('a1 is: '+a1);
}
f();
console.log('a is: '+a);
console.log('a1 is: '+a1);

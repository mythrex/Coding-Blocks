
p = 'hello';
console.log(this);
console.log(global.p);
//lookback
function fun(){
  if (true) {
    k = 10;
  }
}
console.log(this);

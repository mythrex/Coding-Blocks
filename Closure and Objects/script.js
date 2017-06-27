function fun() {
  var a = 10;
  function closed() {
    a++;
    console.log(a);
  }
  return closed;
}
var f = fun();
f();

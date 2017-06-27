  window.onload = function(){
  var num = document.getElementById('num');
  var run = document.getElementById('run');
  var list = document.getElementById('myList');
  var str = "";
  run.onclick = function(){
    var n = parseInt(num.value);
    var res;
    var start = (new Date()).getTime();
    console.log(start);
    for (var i = 1; i <= n; i++) {
      res = "";
      if (i % 3 == 0) {
        res +="fizz ";
      }
      if(i %5 == 0) res+="buzz"
      if(i %3 && i%5) res = i;
      str += "<li>"+res+"</li>";
    }

    console.log((new Date()).getTime() - start);
  }
}

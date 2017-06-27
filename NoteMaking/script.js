// var addBtn = document.getElementById('add');
// var input = document.getElementById('task');
// var notes = document.getElementById('notes');
// var list = [];
// var head = -1;
// function appendLI(list,head){
//   for (var i = head; i >= 0; i--)
//     notes.appendChild(list[i]);
// }
// window.onload = function(){
//   addBtn.onclick = function(){
//     if (input.value != "") {
//       var li = document.createElement("li");
//       var a = document.createElement("a");
//       head++;
//       a.id = head;
//       a.innerText = input.value;
//       a.onclick = function(){
//         list.splice(this.id,1);
//         head--;
//         console.log(list,head);
//         notes.innerHTML = "";
//         appendLI(list,head);
//       }
//       li.appendChild(a);
//       list.push(li);
//       console.log(list,head);
//       appendLI(list,head);
//     }
//     else alert("Add some text!");
//   }
// }
var str= "cronic disease";
var arr = [];
function findAllIndexOf(str,char){
  var pos = str.indexOf(char);
  while(pos !=- 1){
    console.log(pos);
    arr.push(pos);
    pos = str.indexOf(char,pos+1);
  }
}
findAllIndexOf(str,'d');
console.log(arr);
console.log(str.includes("dis"));
var arr = [1,2,'c',"hels"];
var arr2 = new Array(1,2,3,4);
console.log(arr.slice(-1,-2));
var arr3 = [2,2,3,9,4,5,6];
for (var i of arr3) {
  console.log(i);
}
for (var i in arr3) {
  console.log(i);
}
var obj = {
  0: 1,
  1: 2,
  2: 3
};

var arr5 = [5,8,9,6,4,-1];
// var res = arr5.reduce(function(acc,item,index,arr){
//   if(acc > item) return item;
//   else return acc;
// });
var res = arr5.reduce((acc,item) => {
  if(acc > item) return item;
  else return acc;
});
console.log(arr5);
var w = arr5.filter((e,i,ar) => e>0);
console.log(w);
console.log(as);

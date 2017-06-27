function Todo(task,done){
  this.task = task;
  this.done = done;
  this.toggleDone = function(){
    this.done = !this.done;
  }
}
var fun = function(){

}
Todo.myFun = function(){
  console.log(this);
}
Todo('sds',true)
Todo.a = 10;
var obj = {};
var todo = new Todo('some task',false);
console.log(todo);

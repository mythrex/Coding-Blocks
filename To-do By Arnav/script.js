let todoItems = [];
window.onload = function(){
  var newtodo = document.getElementById('newtodo');
  var addtodo = document.getElementById('addtodo');
  var todolist = document.getElementById('todo');

  refreshTodo();


  addtodo.onclick = function(){
    console.log("clicked");
    addAndSave(newtodo.value);
  }
  //for retaining after refreshing
  function addItemtoList(list,itemIndex,itemObj){
    let todoItem = document.createElement('li');
    todoItem.setAttribute('data-id',itemIndex);
    todoItem.innerText = itemObj.task;
    if(itemObj.done){
      todoItem.style.textDecoration = 'line-through';
    }
    todoItem.addEventListener('click',doneSelf);
    // todoItem.addEventListener('click',deleteSelf);
    list.appendChild(todoItem);
  }
  function deleteSelf(event){
    let idlabel = event.target.getAttribute('data-id');
    console.log("clicked data-id=",idlabel);
    todoItems.splice(idlabel,1);
    localStorage.setItem('todoList',JSON.stringify(todoItems));
    refreshTodo();
  }
  function doneSelf(event){
    let idToDone = event.target.getAttribute('data-id');
    console.log("done data-id=",idToDone);
    todoItems[idToDone].done = true;
    localStorage.setItem('todoList',JSON.stringify(todoItems));
    refreshTodo();
  }

  function setItemArrayToList(list,itemArray){//for retreiving from array and putting it into list
    list.innerHTML = '';
    for (index in itemArray)
      addItemtoList(list,index,itemArray[index]);
  }
  function retrieveTodos(){
    let todoInStore = localStorage.getItem('todoList');
    if(todoInStore){
      todoItems = JSON.parse(todoInStore);
    }
  }
  function refreshTodo(){
    retrieveTodos();
    setItemArrayToList(todolist,todoItems);
  }
  function addAndSave(itemText){
    todoItems.push({
      task: itemText,
      done: false
    });
    localStorage.setItem('todoList',JSON.stringify(todoItems));
    refreshTodo();
  }
}

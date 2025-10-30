const todoList = 
[{name:'Pray',
  dueDate: '2025-10-29',
  time: '12:00AM'}
  ,{
  name: 'Sturdy The Word',
  dueDate: '2025-10-29',
  time: '12:00AM',
},{
  name: 'Fast',
  dueDate: '2025-10-29',
  time: '12:00AM',
}];
renderHTML()
function renderHTML() {
  let todoListHTML = '';
  todoList.forEach(function(totalObject , index  ) { 
  const {name , dueDate , time} = totalObject
    
  const html = `
  <p>
  <div>${name}</div>
  <div>${dueDate}</div>
  <div>${time}</div>
  <button onclick="
    todoList.splice(${index} , 1);
    renderHTML()
  ">Delete</button>
  </p>`
  todoListHTML += html
  })
  document.querySelector('.js-todo-html')
  .innerHTML = todoListHTML;
  console.log(todoListHTML);
}




function addTodo() {
  const inputElement = document.querySelector('.js-todo-add');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-todo-date');
  const dueDate = dateInputElement.value;

  const timeInputElement = document.querySelector('.js-todo-time');
  const time = timeInputElement.value

  todoList.push({
    name:name,
    dueDate,
    time
  });

  inputElement.value = '';
  console.log(todoList);

  renderHTML()

};



  




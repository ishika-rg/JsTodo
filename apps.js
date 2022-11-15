// SELECTORS
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-btn")
//const todoCont = document.querySelector(".todo-container")
const todoList = document.querySelector(".todo-list")

const filterOption = document.querySelector(".filter-todo")



//EVENT LISTENERS
document.addEventListener('DOMcontentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//FUNCTIONS
function addTodo(event){
    //console.log("hello")
    //PREVENT FORM FROM SUBMITTING
    event.preventDefault();
    //console.log("Hello");

    //TODO div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo =  document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // ADD TODO TO LOCAL STORAGE ====================================
    saveLocalTodos(todoInput.value);

    //checkmark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // append todo div  to the main div of todo list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";



}

function deleteCheck(e){
    // console.log(e.target);
    const item = e.target;
    // delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
       
        // ADD ANIMATION EFFECT
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();

        });

        
    }

    //CHECKMARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }


}

function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;

        }
    });

}

function saveLocalTodos(todo){

    // check -- if that element is already there or not?

    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    
    // check -- if that element is already there or not?

    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    todos.forEach(function(todo){

        //TODO div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo =  document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todo;
    todoDiv.appendChild(newTodo);

    
    //checkmark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // append todo div  to the main div of todo list
    todoList.appendChild(todoDiv);


    });
}

function removeLocalTodos(todo){

    // check -- if that element is already there or not?

    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));

}


// //selectors
// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");

// //Event Listeners
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteCheck);

// //Functions
// function addTodo(event) {
//   //prevent form from submitting
//   event.preventDefault();
//   //todo div
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   //create LI
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);

//   //check mark button
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = '<i class="fas fa-check"></i>';
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);

//   //Check trash button
//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//   trashButton.classList.add("trash-btn");
//   todoDiv.appendChild(trashButton);
//   //append to list
//   todoList.appendChild(todoDiv);
//   //clear todo input value;
//   todoInput.value = "";
// }

// function deleteCheck(e) {
//   const item = e.target;
//   //delete todo
//   if (item.classList[0] === "trash-btn") {
//     const todo = item.parentElement;
//     todo.remove();
//   }
//   //check Mark
//   if (item.classList[0] === "completed-btn") {
//     const todo = item.parentElement;
//     todo.remove();
//   }
// }
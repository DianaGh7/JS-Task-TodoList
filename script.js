////////////////////////sara////////////////////////////
let todoCounter = parseInt(localStorage.getItem('todoCounter')) || 0;

const validateInput = (text, errorContainer) => {
  if (!text) {
    errorContainer.innerText = 'Task cannot be empty';
    errorContainer.style.display = 'block';
    return false;
  }

  if (!isNaN(text[0])) {
    errorContainer.innerText = 'Task cannot start with a number';
    errorContainer.style.display = 'block';
    return false;
  }

  if (text.length < 5) {
    errorContainer.innerText = 'Task must be at least 5 characters long';
    errorContainer.style.display = 'block';
    return false;
  }

  errorContainer.innerText = '';
  errorContainer.style.display = 'none';
  return true;
};


const taskInput = document.getElementById('todoInput');
const errorMessage = document.getElementById('errorMessage');
const taskForm = document.getElementById('taskForm');
const deleteTitle = document.getElementById("delete-title");
const deleteMessage = document.getElementById("delete-message");
const confirmButton = document.getElementById("confirm");
let deleteMode = 'single'; 


const showError = (msg) => {
    errorMessage.innerText = msg;
    errorMessage.style.display = 'block';
};

// when the user fix the error, the error message should disappear
const hideError = () => {
    errorMessage.innerText = '';
    errorMessage.style.display = 'none';
};

// Adding a new task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();

  if (!validateInput(text, errorMessage)) return;

    hideError();

    const li = document.createElement('li');
    li.id = `todo-${todoCounter++}`;
    localStorage.setItem('todoCounter', todoCounter);

    li.innerHTML = `
        <span class="inner-todo">${text}</span>
        <div class="icons">
            <button class="check">
                <i class="fa-regular fa-square"></i>
            </button>
            <button class="edit">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    li.style.display="flex";

    toDoList.appendChild(li);
    saveTasks();
    disableDeleteButtons();
    taskInput.value = '';

});



//////////////////////// end sara////////////////////////////











/*-------------Misk-------------------*/

let toDoList = document.querySelector(".todo-list");

let toggleClass = (id, className) => document.getElementById(id).classList.toggle(className);

toDoList.addEventListener("click", (e) => {
    let checkButton = e.target.closest(".check");
    if (checkButton){

    let li = checkButton.closest("li");
    let icon = checkButton.querySelector("i");

    icon.classList.toggle("fa-square");
    icon.classList.toggle("fa-check-square");
    li.classList.toggle("completed");
    saveTasks();
    disableDeleteButtons();

    return;
    }

    let editButton = e.target.closest(".edit");
    if (editButton){

    let li = editButton.closest("li");
    let todoText = li.querySelector(".inner-todo");
    document.getElementById("input-edition").value = todoText.innerText;
    document.getElementById("save").dataset.targetId = li.id;


    toggleClass("edit-opacity", "edit-opacity");
    toggleClass("edit-overlay", "edit-overlay");

    return;
    }

    let deleteButton = e.target.closest(".delete");
    
    if (deleteButton){
        let li = deleteButton.closest("li");
        document.getElementById("confirm").dataset.targetId = li.id;
        
        deleteMode = 'single';
        deleteTitle.innerText = "Delete Task";
        deleteMessage.innerText = "Are you sure you want to delete this task?";

    toggleClass("delete-opacity", "delete-opacity");
    toggleClass("delete-overlay", "delete-overlay");

    return;
  }
});

//Edit popup logic
document.getElementById("save").addEventListener("click", () => {
  const editInput = document.getElementById("input-edition");
  const editError = document.getElementById("errorMessage-edition");
  const newText = editInput.value.trim();

  if (!validateInput(newText, editError)) return;

  hideError();
  let id = document.getElementById("save").dataset.targetId;
  let target = document.getElementById(id);

  if (target) {
    target.querySelector(".inner-todo").innerText = document.getElementById("input-edition").value;
    saveTasks();
  }


  toggleClass("edit-opacity", "edit-opacity");
  toggleClass("edit-overlay", "edit-overlay");
});


document.getElementById("edit-cancel").addEventListener("click", () => {
  toggleClass("edit-opacity", "edit-opacity");
  toggleClass("edit-overlay", "edit-overlay");
});

document.getElementById("delete-cancel").addEventListener("click", () => {
  toggleClass("delete-opacity", "delete-opacity");
  toggleClass("delete-overlay", "delete-overlay");
});


//Delete popup logic
document.getElementById("confirm").addEventListener("click", () => {
  if (deleteMode === 'single') {
  let id = document.getElementById("confirm").dataset.targetId;
  let target = document.getElementById(id);

  if (target) target.remove();
  }

  if (deleteMode === 'done') {
    document.querySelectorAll(".todo-list li.completed").forEach(task => task.remove());
  }

  if (deleteMode === 'all') {
    document.querySelectorAll(".todo-list li").forEach(task => task.remove());
    localStorage.setItem('todoCounter', 0);
    todoCounter = 0;
  }

  // To Reset the single mode
  deleteMode = 'single';
  document.getElementById("confirm").removeAttribute("data-target-id");
  saveTasks();
  disableDeleteButtons();

  toggleClass("delete-opacity", "delete-opacity");
  toggleClass("delete-overlay", "delete-overlay");
});




/*--------------------------------Diana----------------------------------------*/

//styling of the selection buttons 
const selectButton = (id)=>{
    document.querySelectorAll("#clssification-btns button").forEach((btn) => {
    btn.classList.remove("active-button");
  });

  document.getElementById(id).classList.add("active-button");
};

//filtering buttons into All / Done / Todo
const displayAll = () => {
  document.querySelectorAll(".todo-list li").forEach(item => { 
    item.style.display = "flex";
  });

};

const displayDone = () => {
  document.querySelectorAll(".todo-list li").forEach(item => { 
    item.style.display = item.classList.contains("completed") ? "flex" : "none";
  });

};

const displayTodo = () => {
  document.querySelectorAll(".todo-list li").forEach(item => { 
    item.style.display = item.classList.contains("completed") ? "none" : "flex";
  });

};


 //لما أضغط عالبوتن يستدعي selectButton
document.getElementById("all").addEventListener("click", ()=>{
    selectButton("all");
});

document.getElementById("done").addEventListener("click", ()=>{
    selectButton("done");
});

document.getElementById("todo").addEventListener("click", ()=>{
    selectButton("todo");
});

/*------------------End Misk----------------------*/

// Delete buttons 
document.getElementById("deleteDoneTasks").addEventListener("click", () => {
  const taskDone = document.querySelectorAll(".todo-list li.completed");

  if (taskDone.length === 0) {
    showError("No Done tasks to be deleted.")
    return;
  }

  deleteMode = 'done';
  deleteTitle.innerText = "Delete Done Tasks";
  deleteMessage.innerText = "Are you sure you want to delete all done tasks?";
  toggleClass("delete-opacity", "delete-opacity");
  toggleClass("delete-overlay", "delete-overlay");

});

document.getElementById("deleteAllTasks").addEventListener("click", () => {
  const taskAll = document.querySelectorAll(".todo-list li");

  if (taskAll.length === 0) {
    showError("No tasks to be deleted.")
    return;
  }

  deleteMode = 'all';
  deleteTitle.innerText = "Delete All Tasks";
  deleteMessage.innerText = "Are you sure you want to delete all tasks?";
  toggleClass("delete-opacity", "delete-opacity");
  toggleClass("delete-overlay", "delete-overlay");

});


//-------------------Local Storage-------------------
const saveTasks = () => {

  let tasks = [];

  document.querySelectorAll('.todo-list li').forEach(item => {
    let text = item.querySelector('.inner-todo').innerText.trim();
    let completed = item.classList.contains('completed');
    let id = item.id;

    if (text){
      tasks.push({id, text, completed});
    }

  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

};


const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.id = task.id;
    li.classList.toggle('completed', task.completed);
    li.style.display = 'flex';

    const checkIcon = task.completed
      ? '<i class="fa-regular fa-check-square"></i>'
      : '<i class="fa-regular fa-square"></i>';

    li.innerHTML = `
      <span class="inner-todo">${task.text}</span>
      <div class="icons">
        <button class="check">${checkIcon}</button>
        <button class="edit"><i class="fa-solid fa-pen"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;

    document.querySelector('.todo-list').appendChild(li);
  });

  if (tasks.length > 0) {
    const lastId = Math.max(...tasks.map(task => parseInt(task.id.split('-')[1])));
    todoCounter = lastId + 1;
    localStorage.setItem('todoCounter', todoCounter);
  }
};



// Change the deletion buttons into disable 

const disableDeleteButtons = () => {
  const allTasks = document.querySelectorAll(".todo-list li");
  const doneTasks = document.querySelectorAll(".todo-list li.completed");

  const deleteAllBtn = document.getElementById("deleteAllTasks");
  const deleteDoneBtn = document.getElementById("deleteDoneTasks");

  deleteAllBtn.disabled = allTasks.length === 0;
  deleteDoneBtn.disabled = doneTasks.length === 0;
};

// Call the disable buttons fun from the loading of the page
// Runs at the start when the page loads
window.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  disableDeleteButtons();
});


/*--------------------------------End-Diana----------------------------------------*/
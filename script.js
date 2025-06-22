////////////////////////sara////////////////////////////

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


const taskinput = document.getElementById('todoInput');
const errorMessage = document.getElementById('errorMessage');
const taskForm = document.getElementById('taskForm');

const showError = (msg) => {
    errorMessage.innerText = msg;
    errorMessage.style.display = 'block';
};

// when the user fix the error the error message should disappear
const hideError = () => {
    errorMessage.innerText = '';
    errorMessage.style.display = 'none';
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskinput.value.trim();

  if (!validateInput(text, errorMessage)) return;

    hideError();
   
    let todoCounter = 0;
    const li = document.createElement('li');
    li.id = `todo-${todoCounter++}`;
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
    taskinput.value = '';

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

    toggleClass("delete-opacity", "delete-opacity");
    toggleClass("delete-overlay", "delete-overlay");

    return;
    }
});

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


document.getElementById("confirm").addEventListener("click", () => {
  let id = document.getElementById("confirm").dataset.targetId;
  let target = document.getElementById(id);

  if (target) target.remove();
  saveTasks();

  toggleClass("delete-opacity", "delete-opacity");
  toggleClass("delete-overlay", "delete-overlay");
});


const selectButton = (id)=>{
    document.querySelectorAll("#clssification-btns button").forEach((btn) => {
    btn.classList.remove("active-button");
  });

  document.getElementById(id).classList.add("active-button");
};

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

/*------------------Diana----------------------*/
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
}
////////////////////////sara////////////////////////////

const taskinput=document.getElementById('todoInput');
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


 if (!text) {
    showError('Task connot be empty');
    return;
  }

  if (!isNaN(text[0])) {
  showError('Task cannot start with a number');
  return;
}

 if (text.length < 5) {
    showError('Task must be at least 5 characters long')
    return;
  }

   hideError();


})

//////////////////////// end sara////////////////////////////











/*-------------Misk-------------------*/

let toDoList = document.querySelector(".todo-list");

let toggleClass = (id,className) => document.getElementById(id).classList.toggle(className);

toDoList.addEventListener("click", (e) => {
    let checkButton = e.currentTarget.closest(".check");
    if(!checkButton) return;

    let li = checkButton.closest("li");
    let icon = checkButton.querySelector("i");

    icon.classList.toggle("fa-square");
    icon.classList.toggle("fa-check-square");
    li.classList.toggle("comleted");
});

toDoList.addEventListener("click", (e) => {
    let editButton = e.target.closest(".edit");
    if(!editButton) return;

    toggleClass("edit-opacity","edit-opacity");
    toggleClass("edit-overlay","edit-overlay");
});

document.getElementById("edit-cancel").addEventListener("click", ()=>{
    toggleClass("edit-opacity","edit-opacity");
    toggleClass("edit-overlay","edit-overlay");
});

document.getElementById("save").addEventListener("click", ()=>{
    document.getElementById("inner-todo"),innerText = document.getElementById("input-edition").value;
    toggleClass("edit-opacity","edit-opacity");
    toggleClass("edit-overlay","edit-overlay");
});

toDoList.addEventListener("click", (e) =>{
    let deleteButton = e.target.closest(".delete");
    if(!deleteButton) return;

    toggleClass("delete-opacity","delete-opacity");
    toggleClass("delete-overlay","delete-overlay");
});








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

let todoList = document.getElementsByClassName("todo-list")[0];

let currentTask = null;

todoList.addEventListener("click", (e) => {
    let checkButton = e.target.closest(".check");

    if(!checkButton) return;

    let listItem = checkButton.closest("li");
    let icon = checkButton.querySelector("i");

    icon.classList.toggle("fa-square");
    icon.classList.toggle("fa-check-square");

    listItem.classList.toggle("completed");
})

todoList.addEventListener("click", (e) => {
    let editButton = e.target.closest(".edit");

    if(!editButton) return;

    let overlay = document.getElementById("edit-overlay");
    let opacityLayer = document.getElementById("edit-opacity");

    overlay.classList.toggle("edit-overlay");
    opacityLayer.classList.toggle("edit-opacity");
})


let editCancelButton = document.getElementById("edit-cancel");

editCancelButton.addEventListener("click", (m) => {

    let overlay = document.getElementById("edit-overlay");
    let opacityLayer = document.getElementById("edit-opacity");

    overlay.classList.toggle("edit-overlay");
    opacityLayer.classList.toggle("edit-opacity");
    
});

let saveButton = document.getElementById("save");

saveButton.addEventListener("click", (m) => {

    document.getElementById("inner-todo").innerText = document.getElementById("input-edition").value;
    
    let overlay = document.getElementById("edit-overlay");
    let opacityLayer = document.getElementById("edit-opacity");

    overlay.classList.toggle("edit-overlay");
    opacityLayer.classList.toggle("edit-opacity");
    
});




todoList.addEventListener("click", (e) => {
    let deleteButton = e.target.closest(".delete");

    if(!deleteButton) return;

    let overlay = document.getElementById("delete-overlay");
    let opacityLayer = document.getElementById("delete-opacity");

    overlay.classList.toggle("delete-overlay");
    opacityLayer.classList.toggle("delete-opacity");
})

let confirmButton = document.getElementById("confirm");

confirmButton.addEventListener("click", (m) => {


    document.getElementById("list-item").remove();
    let overlay = document.getElementById("delete-overlay");
    let opacityLayer = document.getElementById("delete-opacity");

    overlay.classList.toggle("delete-overlay");
    opacityLayer.classList.toggle("delete-opacity");
    
});

let deleteCancelButton = document.getElementById("delete-cancel");

deleteCancelButton.addEventListener("click", (m) => {

    let overlay = document.getElementById("delete-overlay");
    let opacityLayer = document.getElementById("delete-opacity");

    overlay.classList.toggle("delete-overlay");
    opacityLayer.classList.toggle("delete-opacity");
    
});






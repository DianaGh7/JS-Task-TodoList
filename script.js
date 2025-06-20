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



})

//////////////////////// end sara////////////////////////////











/*-------------Misk-------------------*/

let todoList = document.getElementById("todo-list");

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

    let ch1 = document.getElementById("overlay");
    let ch2 = document.getElementById("obacity");

    ch1.classList.toggle("overlay");
    ch2.classList.toggle("obacity");
})


let cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click", (m) => {

    let ch1 = document.getElementById("overlay");
    let ch2 = document.getElementById("obacity");

    ch1.classList.toggle("overlay");
    ch2.classList.toggle("obacity");
    
})

let saveButton = document.getElementById("save");

saveButton.addEventListener("click", (m) => {

    document.getElementById("inner-todo").innerText = document.getElementById("input-edition").value;
    
    let ch1 = document.getElementById("overlay");
    let ch2 = document.getElementById("obacity");

    ch1.classList.toggle("overlay");
    ch2.classList.toggle("obacity");
    
})




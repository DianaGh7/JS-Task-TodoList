////////////////////////sara////////////////////////////

const taskin=document.getElementById('todoInput');
const errmsg = document.getElementById('errorMessage');
const taskForm = document.getElementById('taskForm');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();})

  const showError = (msg) => {
  errorMessage.innerText = msg;
  errorMessage.style.display = 'block';
};

// when the user fix the error the error message should disappear
const hideError = () => {
  errorMessage.innerText = '';
  errorMessage.style.display = 'none';
};















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
    ch2.classList.toggle("obacity")
})


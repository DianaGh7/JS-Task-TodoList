////////////////////////sara////////////////////////////

const taskin=document.getElementById('todoInput');
const errmsg = document.getElementById('errorMessage');
const taskForm = document.getElementById('taskForm');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();})



















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
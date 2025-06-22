////////////////////////sara////////////////////////////


const taskinput=document.getElementById('todoInput');

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


 if (!text) {
    showError('Task connot be empty');
    return;
  }

  if (!isNaN(text[0])) {
  showError('Task cannot start with a number');
  return;
}

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

    taskinput.value = '';

});
      


 if (text.length < 5) {
    showError('Task must be at least 5 characters long')
    return;
  }

   hideError();


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
  }


  toggleClass("edit-opacity", "edit-opacity");
  toggleClass("edit-overlay", "edit-overlay");
});


document.getElementById("edit-cancel").addEventListener("click", () => {
  toggleClass("edit-opacity", "edit-opacity");
  toggleClass("edit-overlay", "edit-overlay");
});


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




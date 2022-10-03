// DOM Manipulation Part 2
const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskContainer = document.getElementById('task-container');

// Event Listener for Add Button

inputTask.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add-task-btn").click();

  }
});


addTaskBtn.addEventListener('click', () => {

  let task = document.createElement('div');
  task.classList.add('task');

  let li = document.createElement('li');
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkBtn = document.createElement('button');
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkBtn.classList.add('checkTask');
  task.appendChild(checkBtn);

  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.classList.add('deleteTask');
  task.appendChild(deleteBtn);

  if (inputTask.value === '') {
    alert('Please Enter a Task')
  } else {
    taskContainer.appendChild(task);
  }
  inputTask.value = '';


  checkBtn.addEventListener('click', () => {
    checkBtn.parentElement.style.textDecoration
      = 'line-through';

  });

  deleteBtn.addEventListener('click', (e) => {

    let target = e.target;

    target.parentElement.parentElement.removeChild(task);

  });
});

import './styles.scss';

const listTasks = document.querySelector('.list');
const formAddTask = document.querySelector('#form-add-task');
let tasks = [];


const populateTasks = () => {
  if( tasks.length === 0 ) { 
    listTasks.innerHTML = `
      <li class="list__item item">
        <label class="item__label no-task">No tasks 🫡</label>
      </li>
    `;
    return;
  }

  listTasks.innerHTML = tasks.map((task, index) => {
    return `
      <li class="list__item item">
        <input  type="checkbox" name="task" 
                id="task-${index}" 
                ${task.checked ? 'checked' : ''} 
                class="item__checked task task--${index} ${task.checked ? 'task__check' : ''} ">
        <label for="task-${index}" class="item__label task__delete ${task.checked ? 'task__check' : ''}">${task.name}</label>
      </li>
    `;
  }).join('');
};

const addTask = (e) => {
  e.preventDefault();
  const inputTask = document.querySelector('.form__input');
  if( inputTask.value.trim() === '' ) return;
  if( inputTask.value.trim().length <= 3 ) return;
  const task = {
    name: inputTask.value,
    checked: false
  };
  tasks.push(task);
  saveTaskLocalStorage();
  populateTasks();
  formAddTask.reset();
};

const toggleTask = (e) => {
  if( !e.target.matches('input[type="checkbox"]') ) return;
  const taskIndex = e.target.classList[2].split('--')[1];
  if( e.ctrlKey ) { deleteTaskForUser(taskIndex); return; }
  tasks[taskIndex].checked = !tasks[taskIndex].checked;
  saveTaskLocalStorage();
  populateTasks();
};

const saveTaskLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTaskLocalStorage = () => {
  const tasksLocalStorage = localStorage.getItem('tasks');
  if( tasksLocalStorage === null ) return;
  tasks = JSON.parse(tasksLocalStorage);
  populateTasks();
};

const deleteTaskForUser = ( index ) => {
  tasks.splice(index, 1);
  saveTaskLocalStorage();
  populateTasks();
};


formAddTask.addEventListener('submit', addTask);
document.addEventListener('DOMContentLoaded', loadTaskLocalStorage);
listTasks.addEventListener('click', toggleTask);
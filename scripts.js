const newTask = document.querySelector('#newTaskInput');
const addTaskBtn = document.querySelector('.addTaskButton');
const removeCompleteBtn = document.querySelector('.removeCompleteButton');
const taskList = document.querySelector('.taskList');
const taskTemplate = document.querySelector('#taskTemplate');
let id = 1;

let taskData = [];

const addTask = (data) => {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector('input');
  checkbox.id = id;
  const label = taskElement.querySelector('label');
  label.htmlFor = id;
  label.append(data.description);
  taskList.appendChild(taskElement);
  newTask.value = '';
  id += 1;
};

const inputValid = () => {
  return newTask.value !== '';
};

const renderData = () => {
  taskData.forEach((data) => addTask(data));
};
renderData();

newTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && inputValid()) {
    const data = {
      description: newTask.value,
      completed: false,
      index: id,
    };
    addTask(data);
    taskData.push(data);
  }
});

addTaskBtn.addEventListener('click', () => {
  if (inputValid()) {
    const data = {
      description: newTask.value,
      completed: false,
      index: id,
    };
    addTask(data);
    taskData.push(data);
  }
});

removeCompleteBtn.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.task');
  const deleted = [];
  tasks.forEach((task) => {
    const { checked } = task.querySelector('input');
    if (checked) {
      deleted.push(Number(task.querySelector('label').htmlFor));
      task.remove();
    }
  });
  taskData = taskData.filter((data) => {
    return !deleted.includes(data.index);
  });
});
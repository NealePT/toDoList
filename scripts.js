const newTask = document.getElementById("newTaskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementsByClassName("taskList");
const taskTemplate = document.getElementsByClassName("taskTemplate");
let id = 1;

let taskData = JSON.parse(localStorage.getItem('taskData')) || [];

const addTask = (data) => {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector("input");
  checkbox.id = id;
  const label = taskElement.querySelector("label");
  label.htmlFor = id;
  label.append(data.description);
  taskList.appendChild(taskElement);
  newTask.value = "";
  id += 1;
};

const renderData = () => {
  taskData.forEach((data) => {
    addTask(data);
  });
};
renderData();
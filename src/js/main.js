"use strict";

const formAddTask = document.querySelector(".js_form-add-task");
const formFilter = document.querySelector(".js_formFilter");
const taskInput = document.querySelector(".js_taskInput");
const button = document.querySelector(".js_button");
const taskList = document.querySelector("#taskList");

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

button.addEventListener("click", (ev) => {
  ev.preventDefault();

  const addTask = taskInput.value;
  const taskName = addTask.trim();
  console.log(addTask);

  if (taskName === "") {
    return;
  }

  const newTask = {
    name: taskName,
    completed: false,
    id: tasks.length + 1,
  };

  tasks.push(newTask);
  paintTasks(tasks, taskList);
  taskInput.value = "";
});

const paintTasks = (tasks, taskList) => {
  let listElements = "";

  for (const task of tasks) {
    // pintar la tarea en la lista
    listElements += `<li>${task.name}</li>`;

    console.log(task.name);
  }

  taskList.innerHTML = listElements;
};

paintTasks(tasks, taskList);

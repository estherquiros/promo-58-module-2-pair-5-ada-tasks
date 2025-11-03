"use strict";

const formAddTask = document.querySelector(".js_form-add-task");
const formFilter = document.querySelector(".js_formFilter");
const taskInput = document.querySelector(".js_taskInput");
const button = document.querySelector(".js_button");

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

  tasks.push({ name: addTask, completed: false, id: tasks.length + 1 });
  console.log(addTask);
});

for (const task of tasks) {
  // pintar la tarea en la lista
  console.log(task.name);
}

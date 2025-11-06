"use strict";

const formAddTask = document.querySelector(".js_form-add-task");
const formFilter = document.querySelector(".js_formFilter");
const taskInput = document.querySelector(".js_taskInput");
const button = document.querySelector(".js_button");
const taskList = document.querySelector("#taskList");
const taskText = document.querySelector("#js_taskText");
const checks = document.querySelectorAll(".js_check");

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
  taskList.innerHTML = ""; // limpia antes de repintar
  let listElements = "";

  for (const task of tasks) {
    // pintar la tarea en la lista
    //listElements += `<li>${task.name}</li>`;

    console.log(task.name);

    listElements += `
      <li>
        <input type="checkbox" class="js_check" data-id="${task.id}" ${
      task.completed ? "checked" : ""
    }>
        <span class="${task.completed ? "line-through" : ""}">${
      task.name
    }</span>
      </li>`;
  }

  taskList.innerHTML = listElements;
};

taskList.addEventListener("change", (ev) => {
  //if (!ev.target.classList.contains("js_check")) return;

  const id = parseInt(ev.target.dataset.id); //obtiene el número de identificación de la tarea en la que hiciste clic, para luego buscarla en el array tasks y actualizar su estado (completed).
  const task = tasks.find((t) => t.id === id); //SI LA QUITO NO TACHA. guarda la tarea específica que queremos modificar.

  task.completed = ev.target.checked;
  paintTasks(tasks, taskList); // repinta para aplicar o quitar el tachado.
});

paintTasks(tasks, taskList);

/*const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.addEventListener("change", () => {
  span.classList.toggle("tachado", checkbox.checked);
});

/* for (const check of checks) {
  check.addEventListener("change", (ev) => {
    const id = parseInt(ev.target.dataset.id);
    const task = tasks.find((t) => t.id === id);
    task.completed = ev.target.checked;
    paintTasks(tasks, taskList); // repinta la lista
  });
} */

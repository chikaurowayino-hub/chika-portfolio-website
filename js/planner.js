/* ==========================================================
   planner.js – Academic Planner (COS 106 task manager)
   Idea: keep ALL tasks in one array called "tasks".
   Every button changes the array, saves it, then redraws the list.
   ========================================================== */

const STORAGE_KEY = "chika-planner-tasks";   // name used inside localStorage
let tasks = [];                              // the array that holds every task
let currentFilter = "all";                   // "all", "pending" or "completed"

/* Grab the page elements we need */
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const dateInput = document.getElementById("task-date");
const priorityInput = document.getElementById("task-priority");
const titleError = document.getElementById("title-error");
const listEl = document.getElementById("task-list");

/* ---- Saving and loading (localStorage keeps data after refresh) ---- */
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function loadTasks() {
  try {
    tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    tasks = [];                              // if saved data is damaged, start fresh
  }
}

/* ---- The three actions ---- */
function addTask(title, description, deadline, priority) {
  tasks.push({
    id: Date.now(),                          // unique number for each task
    title: title,
    description: description,
    deadline: deadline,
    priority: priority,
    completed: false
  });
  saveTasks();
  render();
}
function toggleTask(id) {
  tasks.forEach(function (task) {
    if (task.id === id) task.completed = !task.completed;
  });
  saveTasks();
  render();
}
function deleteTask(id) {
  tasks = tasks.filter(function (task) { return task.id !== id; });
  saveTasks();
  render();
}

/* ---- Counters ---- */
function updateCounts() {
  const done = tasks.filter(function (t) { return t.completed; }).length;
  document.getElementById("count-total").textContent = tasks.length;
  document.getElementById("count-pending").textContent = tasks.length - done;
  document.getElementById("count-done").textContent = done;
}

/* ---- Drawing the list ---- */
function formatDate(value) {
  if (!value) return "No deadline";
  const parts = value.split("-");            // "2026-12-31" -> ["2026","12","31"]
  return new Date(parts[0], parts[1] - 1, parts[2]).toLocaleDateString("en-GB",
    { day: "numeric", month: "short", year: "numeric" });
}
function isOverdue(task) {
  if (!task.deadline || task.completed) return false;
  return task.deadline < new Date().toISOString().slice(0, 10);
}

function render() {
  listEl.innerHTML = "";                     // clear the old list

  const visible = tasks.filter(function (task) {
    if (currentFilter === "pending") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  if (visible.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = tasks.length === 0
      ? "No tasks yet. Add your first academic task using the form."
      : "No " + currentFilter + " tasks to show.";
    listEl.appendChild(empty);
  }

  visible.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "task " + task.priority + (task.completed ? " done" : "");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = task.completed;
    check.setAttribute("aria-label", "Mark " + task.title + " as completed");
    check.addEventListener("change", function () { toggleTask(task.id); });

    const info = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = task.title;        // textContent is safe from HTML injection
    info.appendChild(heading);
    if (task.description) {
      const p = document.createElement("p");
      p.textContent = task.description;
      info.appendChild(p);
    }
    const meta = document.createElement("small");
    meta.textContent = "Due: " + formatDate(task.deadline) + " · Priority: " + task.priority;
    info.appendChild(meta);
    if (isOverdue(task)) {
      const flag = document.createElement("small");
      flag.className = "overdue";
      flag.textContent = " · Overdue";
      info.appendChild(flag);
    }

    const del = document.createElement("button");
    del.type = "button";
    del.className = "btn-delete";
    del.textContent = "Delete";
    del.setAttribute("aria-label", "Delete " + task.title);
    del.addEventListener("click", function () { deleteTask(task.id); });

    li.append(check, info, del);
    listEl.appendChild(li);
  });

  updateCounts();
}

/* ---- Events ---- */
form.addEventListener("submit", function (event) {
  event.preventDefault();                    // stop the page reloading
  const title = titleInput.value.trim();
  if (title === "") {
    titleError.textContent = "Please enter a task title.";
    titleInput.parentElement.classList.add("invalid");
    titleInput.focus();
    return;
  }
  titleError.textContent = "";
  titleInput.parentElement.classList.remove("invalid");
  addTask(title, descInput.value.trim(), dateInput.value, priorityInput.value);
  form.reset();
  priorityInput.value = "medium";
});

document.querySelectorAll(".filter-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.toggle("active", b === button);
    });
    render();
  });
});

/* Start: load saved tasks, then draw */
loadTasks();
render();

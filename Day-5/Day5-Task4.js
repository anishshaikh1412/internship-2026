// Task 4 — Persistent Task List
if (typeof localStorage === "undefined") {
  global.localStorage = {
    _d: {},
    setItem(k, v) { this._d[k] = String(v); },
    getItem(k) { return this._d[k] ?? null; },
    removeItem(k) { delete this._d[k]; },
    clear() { this._d = {}; },
  };
}

const KEY = "tasks";

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}

function addTask(title) {
  const tasks = loadTasks();
  tasks.push({ id: Date.now(), title, done: false });
  saveTasks(tasks);
  console.log("Added:", title);
}

function displayTasks() {
  const tasks = loadTasks();
  console.log("\n📋 Task List:");
  if (tasks.length === 0) return console.log("  (empty)");
  tasks.forEach((t, i) =>
    console.log(`  ${i + 1}. [${t.done ? "x" : " "}] ${t.title} (id=${t.id})`)
  );
}

function completeTask(id) {
  const tasks = loadTasks();
  const t = tasks.find((x) => x.id === id);
  if (t) {
    t.done = true;
    saveTasks(tasks);
    console.log("Completed task id:", id);
  } else {
    console.log("Task not found:", id);
  }
}

function deleteTask(id) {
  const tasks = loadTasks().filter((x) => x.id !== id);
  saveTasks(tasks);
  console.log("Deleted task id:", id);
}

// Demo
addTask("Learn JavaScript");
addTask("Build mini project");
const firstId = loadTasks()[0].id;
completeTask(firstId);
addTask("Revise event loop");
deleteTask(loadTasks()[1].id);
displayTasks();

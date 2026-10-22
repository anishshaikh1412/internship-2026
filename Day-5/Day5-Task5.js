// Task 5 — Error Handling (invalid/missing JSON)
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

function safeLoadTasks() {
  const raw = localStorage.getItem(KEY);

  // 1) Missing value
  if (raw === null) {
    console.log("No tasks found — starting fresh.");
    return [];
  }

  // 2) Invalid JSON
  try {
    const parsed = JSON.parse(raw);

    // 3) Not an array → invalid shape
    if (!Array.isArray(parsed)) {
      console.warn("Stored data is not an array — resetting.");
      localStorage.removeItem(KEY);
      return [];
    }
    return parsed;
  } catch (err) {
    console.warn("Corrupted JSON found — resetting storage.");
    console.warn("Reason:", err.message);
    localStorage.removeItem(KEY);
    return [];
  }
}

// --- Test cases ---
console.log("Test 1 — empty storage:");
console.log(safeLoadTasks());

console.log("\nTest 2 — invalid JSON:");
localStorage.setItem(KEY, "{not valid json");
console.log(safeLoadTasks());

console.log("\nTest 3 — valid JSON:");
localStorage.setItem(KEY, JSON.stringify([{ id: 1, title: "ok", done: false }]));
console.log(safeLoadTasks());

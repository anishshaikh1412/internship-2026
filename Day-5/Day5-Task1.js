// Task 1 — Save and Read (localStorage)
// Browser me direct localStorage use hoga.
// Node.js me test ke liye polyfill:
if (typeof localStorage === "undefined") {
  global.localStorage = {
    _d: {},
    setItem(k, v) { this._d[k] = String(v); },
    getItem(k) { return this._d[k] ?? null; },
    removeItem(k) { delete this._d[k]; },
    clear() { this._d = {}; },
  };
}

function saveUsername(name) {
  localStorage.setItem("username", name);
  console.log("Saved:", name);
}

function readUsername() {
  const name = localStorage.getItem("username");
  console.log("Retrieved on reload:", name);
  return name;
}

saveUsername("Tanvir");
readUsername();

// Simulate page reload: value persists in storage
console.log("After 'reload':", localStorage.getItem("username"));

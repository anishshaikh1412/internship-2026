// Task 3 — Session Storage (current form step)
if (typeof sessionStorage === "undefined") {
  global.sessionStorage = {
    _d: {},
    setItem(k, v) { this._d[k] = String(v); },
    getItem(k) { return this._d[k] ?? null; },
    removeItem(k) { delete this._d[k]; },
    clear() { this._d = {}; },
  };
}

function saveFormStep(step) {
  sessionStorage.setItem("formStep", step);
  console.log("Saved form step:", step);
}

function readFormStep() {
  const step = sessionStorage.getItem("formStep");
  console.log("Current form step:", step);
  return step;
}

saveFormStep(2);
readFormStep();

// sessionStorage is per-tab and cleared when the tab closes
// (unlike localStorage which persists across reloads)

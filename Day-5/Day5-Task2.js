// Task 2 — Store an Object (theme + language)
if (typeof localStorage === "undefined") {
  global.localStorage = {
    _d: {},
    setItem(k, v) { this._d[k] = String(v); },
    getItem(k) { return this._d[k] ?? null; },
    removeItem(k) { delete this._d[k]; },
    clear() { this._d = {}; },
  };
}

const prefs = { theme: "dark", language: "hi" };

// Objects must be serialized to JSON before storing
localStorage.setItem("prefs", JSON.stringify(prefs));
console.log("Saved prefs:", prefs);

// Read back and parse
const raw = localStorage.getItem("prefs");
const loaded = JSON.parse(raw);
console.log("Retrieved theme   :", loaded.theme);
console.log("Retrieved language:", loaded.language);

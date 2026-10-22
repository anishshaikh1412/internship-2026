// Task 1 — Callback to Promise
function fetchDataWithCallback(callback) {
  console.log("Callback: Starting async operation...");
  setTimeout(() => {
    const data = { id: 1, name: "Tanvir" };
    callback(null, data);
  }, 1500);
}
fetchDataWithCallback((err, data) => {
  if (err) console.error("Callback Error:", err);
  else console.log("Callback Result:", data);
});
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    console.log("Promise: Starting async operation...");
    setTimeout(() => {
      const data = { id: 1, name: "Tanvir" };
      Math.random() > 0.1 ? resolve(data) : reject(new Error("Failed to fetch data"));
    }, 1500);
  });
}
fetchDataWithPromise()
  .then((data) => console.log("Promise Result:", data))
  .catch((err) => console.error("Promise Error:", err));

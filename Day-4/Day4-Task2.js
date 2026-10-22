// Task 2 — Promise Chaining
function getNumber() {
  return new Promise((resolve) => setTimeout(() => resolve(4), 500));
}
getNumber()
  .then((num) => { console.log("Start:", num); return num * 3; })
  .then((num) => { console.log("After *3:", num); return num + 5; })
  .then((num) => { console.log("Final result:", num); });

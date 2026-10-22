// Task 9 — Event Loop Challenge
console.log("1 — sync: start");
setTimeout(() => console.log("2 — setTimeout (macrotask)"), 0);
Promise.resolve()
  .then(() => console.log("3 — promise.then #1 (microtask)"))
  .then(() => console.log("4 — promise.then #2 (microtask)"));
(async () => {
  console.log("5 — async function start");
  await null;
  console.log("6 — after await");
})();
console.log("7 — sync: end");
/*
PREDICTED OUTPUT:
1, 5, 7, 3, 6, 4, 2
Explanation:
- Sync code first: 1, then async fn body up to await (5), then 7.
- Microtasks drained in order: 3, 6 (continuation), 4.
- Macrotask (setTimeout) runs last: 2.
*/

// Task 3 — Error Propagation
function step1() { return Promise.resolve("Step 1 OK"); }
step1()
  .then((msg) => { console.log(msg); return "Step 2 OK"; })
  .then((msg) => { console.log(msg); throw new Error("Something broke in step 3!"); })
  .then(() => console.log("This line will NOT run"))
  .catch((err) => console.error("Caught error:", err.message))
  .finally(() => console.log("Chain finished (finally runs always)"));

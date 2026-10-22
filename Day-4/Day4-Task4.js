// Task 4 — Async/Await
function getNumber() {
  return new Promise((resolve) => setTimeout(() => resolve(4), 300));
}
async function compute() {
  try {
    let num = await getNumber();
    console.log("Start:", num);
    num = num * 3;
    console.log("After *3:", num);
    num = num + 5;
    console.log("Final result:", num);
    return num;
  } catch (err) {
    console.error("Error:", err.message);
  }
}
compute();

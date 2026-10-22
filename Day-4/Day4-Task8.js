// Task 8 — Debugging (Fixed)
const delay = (ms, val) => new Promise((res) => setTimeout(() => res(val), ms));
console.log("\n--- Bug 1: Logging a Promise object ---");
delay(100, "hello").then((val) => console.log("Fixed 1:", val));
console.log("\n--- Bug 2: Missing return in .then ---");
async function bug2() {
  const result = await delay(50, 1).then((v) => v + 1).then((v) => v * 10);
  console.log("Fixed 2:", result);
}
console.log("\n--- Bug 3: Unhandled async error ---");
async function bug3() {
  try {
    await new Promise((_, reject) => setTimeout(() => reject(new Error("async boom")), 100));
  } catch (e) { console.log("Fixed 3 (caught):", e.message); }
}
console.log("\n--- Bug 4: Sequential vs parallel ---");
const t0 = Date.now();
async function bug4() {
  await Promise.all([delay(300, "a"), delay(300, "b"), delay(300, "c")]);
  console.log(`Fixed 4 finished in ~${Date.now() - t0}ms (parallel)`);
}
(async () => { await bug2(); await bug3(); await bug4(); })();

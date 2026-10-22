// Task 7 — Promise Combinators
const delay = (ms, val, fail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (fail ? reject(new Error(val)) : resolve(val)), ms)
  );
async function demoAll() {
  try {
    const results = await Promise.all([delay(200, "A"), delay(100, "B"), delay(150, "C")]);
    console.log("Promise.all results:", results);
  } catch (e) { console.error("all failed:", e.message); }
}
async function demoAllSettled() {
  const results = await Promise.allSettled([delay(100, "OK-1"), delay(50, "FAIL-1", true), delay(80, "OK-2")]);
  console.log("Promise.allSettled:", results);
}
async function demoRace() {
  const result = await Promise.race([delay(500, "slow"), delay(100, "fast")]);
  console.log("Promise.race winner:", result);
}
async function demoAny() {
  try {
    const result = await Promise.any([delay(100, "fail-1", true), delay(200, "success-1"), delay(300, "success-2")]);
    console.log("Promise.any winner:", result);
  } catch (e) { console.error("All rejected:", e.errors?.map((x) => x.message)); }
}
(async () => { await demoAll(); await demoAllSettled(); await demoRace(); await demoAny(); })();

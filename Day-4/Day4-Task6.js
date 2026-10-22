// Task 6 — Concurrent Requests
async function fetchConcurrently() {
  try {
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
    ]);
    console.log("Users records:", users.length);
    console.log("Posts records:", posts.length);
  } catch (err) {
    console.error("One of the requests failed:", err.message);
  }
}
fetchConcurrently();

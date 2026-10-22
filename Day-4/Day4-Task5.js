// Task 5 — API Request
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const users = await response.json();
    console.log("Total users:", users.length);
    console.log("First 5 users:");
    users.slice(0, 5).forEach((u, i) => console.log(`${i + 1}. ${u.name}`));
  } catch (err) {
    console.error("Fetch failed:", err.message);
  }
}
fetchUsers();

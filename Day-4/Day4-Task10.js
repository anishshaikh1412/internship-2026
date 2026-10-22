// Task 10 — Mini Application: API-based User Directory
const API_URL = "https://jsonplaceholder.typicode.com/users";
function showLoading() { console.log("⏳ Loading users..."); }
function hideLoading() { console.log("✅ Loading complete."); }
async function fetchUserDirectory() {
  showLoading();
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    const users = await response.json();
    console.log("\n📇 User Directory\n-----------------");
    users.forEach((user) => {
      console.log(`Name : ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log("-----------------");
    });
    return users;
  } catch (err) {
    console.error("❌ Error fetching users:", err.message);
    return [];
  } finally {
    hideLoading();
  }
}
fetchUserDirectory();

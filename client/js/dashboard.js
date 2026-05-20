// Check token
const token = localStorage.getItem(
  "token"
);

if (!token) {
  window.location.href =
    "./login.html";
}

// Logout
const logoutBtn =
  document.getElementById("logoutBtn");

logoutBtn.addEventListener(
  "click",
  () => {
    localStorage.removeItem("token");

    window.location.href =
      "./login.html";
  }
);
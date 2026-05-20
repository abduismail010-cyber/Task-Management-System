const API_URL =
  "http://localhost:5000/api";

const token = localStorage.getItem(
  "token"
);

// Redirect if not logged in
if (!token) {
  window.location.href =
    "./login.html";
}

const tasksContainer =
  document.getElementById(
    "tasksContainer"
  );

const taskForm =
  document.getElementById("taskForm");

// Load Tasks
const loadTasks = async () => {
  try {
    const response = await fetch(
      `${API_URL}/tasks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    tasksContainer.innerHTML = "";

    data.data.forEach((task) => {
      const taskCard =
        document.createElement("div");

      taskCard.classList.add("task-card");

      taskCard.innerHTML = `
        <h3>${task.title}</h3>

        <p>${task.description}</p>

        <p>Status: ${task.status}</p>

        <p>Priority: ${task.priority}</p>

        <button onclick="deleteTask('${task._id}')">
          Delete
        </button>
      `;

      tasksContainer.appendChild(
        taskCard
      );
    });
  } catch (error) {
    console.error(error);
  }
};

// Add Task
taskForm.addEventListener(
  "submit",
  async (e) => {
    e.preventDefault();

    const title =
      document.getElementById("title")
        .value;

    const description =
      document.getElementById(
        "description"
      ).value;

    const status =
      document.getElementById("status")
        .value;

    const priority =
      document.getElementById(
        "priority"
      ).value;

    const category =
      document.getElementById(
        "category"
      ).value;

    try {
      await fetch(`${API_URL}/tasks`, {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          title,
          description,
          status,
          priority,
          category,
        }),
      });

      taskForm.reset();

      loadTasks();
    } catch (error) {
      console.error(error);
    }
  }
);

// Delete Task
const deleteTask = async (id) => {
  try {
    await fetch(
      `${API_URL}/tasks/${id}`,
      {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    loadTasks();
  } catch (error) {
    console.error(error);
  }
};

// Logout
document
  .getElementById("logoutBtn")
  .addEventListener("click", () => {
    localStorage.removeItem("token");

    window.location.href =
      "./login.html";
  });

// Initial Load
loadTasks();
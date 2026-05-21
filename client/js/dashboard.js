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

let editingTaskId = null;

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

        <p>Category: ${task.category}</p>

        <button onclick="editTask(
          '${task._id}',
          '${task.title}',
          '${task.description}',
          '${task.status}',
          '${task.priority}',
          '${task.category}'
        )">
          Edit
        </button>

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

// Add / Update Task
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

    // Frontend Validation
    if (title.trim() === "") {
      alert("Title is required");

      return;
    }

    try {
      const url = editingTaskId
        ? `${API_URL}/tasks/${editingTaskId}`
        : `${API_URL}/tasks`;

      const method = editingTaskId
        ? "PUT"
        : "POST";

      await fetch(url, {
        method,

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

      editingTaskId = null;

      loadTasks();
    } catch (error) {
      console.error(error);
    }
  }
);

// Edit Task
const editTask = (
  id,
  title,
  description,
  status,
  priority,
  category
) => {
  editingTaskId = id;

  document.getElementById("title").value =
    title;

  document.getElementById(
    "description"
  ).value = description;

  document.getElementById("status").value =
    status;

  document.getElementById(
    "priority"
  ).value = priority;

  document.getElementById(
    "category"
  ).value = category;
};

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
const express = require("express");

const router = express.Router();

const taskController = require("../controllers/taskController");
const validateTask = require("../validators/taskValidator");

// Create Task
router.post(
  "/",
  validateTask,
  taskController.createTask
);

// Get All Tasks
router.get("/", taskController.getAllTasks);

// Get Single Task
router.get("/:id", taskController.getTaskById);

// Update Task
router.put(
  "/:id",
  validateTask,
  taskController.updateTask
);

// Delete Task
router.delete("/:id", taskController.deleteTask);

module.exports = router;    
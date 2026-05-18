const express = require("express");

const router = express.Router();

const taskController = require("../controllers/taskController");

// Create Task
router.post("/", taskController.createTask);

// Get All Tasks
router.get("/", taskController.getAllTasks);

// Get Single Task
router.get("/:id", taskController.getTaskById);

module.exports = router;
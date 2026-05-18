const Task = require("../models/taskModel");

// Create Task
const createTask = async (taskData) => {
  const task = await Task.create(taskData);

  return task;
};

// Get All Tasks
const getAllTasks = async () => {
  const tasks = await Task.find().sort({ createdAt: -1 });

  return tasks;
};

const getTaskById = async (taskId) => {
  const task = await Task.findById(taskId);

  return task;
};


module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
};
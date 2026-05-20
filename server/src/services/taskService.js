const Task = require("../models/taskModel");

// Create Task
const createTask = async (taskData) => {
  const task = await Task.create(taskData);

  return task;
};

// Get All Tasks
const getAllTasks = async (queryParams) => {
  const filter = {};

  // Search by title
  if (queryParams.search) {
    filter.title = {
      $regex: queryParams.search,
      $options: "i",
    };
  }

  // Filter by status
  if (queryParams.status) {
    filter.status = queryParams.status;
  }

  // Filter by priority
  if (queryParams.priority) {
    filter.priority = queryParams.priority;
  }
const tasks = await Task.find({
  ...filter,
  user: queryParams.userId,
}).sort({
  createdAt: -1,
});

  return tasks;
};




const getTaskById = async (taskId) => {
  const task = await Task.findById(taskId);

  return task;
};

const updateTask = async (taskId, updatedData) => {
  const task = await Task.findByIdAndUpdate(
    taskId,
    updatedData,
    {
      new: true,
      runValidators: true,
    }
  );

  return task;
};

const deleteTask = async (taskId) => {
  const task = await Task.findByIdAndDelete(taskId);

  return task;
};


module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
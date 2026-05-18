const Task = require("../models/taskModel");

const createTask = async (taskData) => {
  const task = await Task.create(taskData);

  return task;
};

module.exports = {
  createTask,
};
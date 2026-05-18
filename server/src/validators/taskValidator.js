const validateTask = (req, res, next) => {
  const { title, status, priority } = req.body;

  // Title validation
  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Task title is required",
    });
  }

  if (title.length < 3 || title.length > 100) {
    return res.status(400).json({
      success: false,
      message: "Title must be between 3 and 100 characters",
    });
  }

  // Status validation
  const validStatuses = [
    "pending",
    "in-progress",
    "completed",
  ];

  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid task status",
    });
  }

  // Priority validation
  const validPriorities = ["low", "medium", "high"];

  if (priority && !validPriorities.includes(priority)) {
    return res.status(400).json({
      success: false,
      message: "Invalid task priority",
    });
  }

  next();
};

module.exports = validateTask;
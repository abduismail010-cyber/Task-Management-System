const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Task Management API is running",
  });
});

// Error Middleware
app.use(errorHandler);

module.exports = app;
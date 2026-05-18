const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./config/swagger");

const taskRoutes = require("./routes/taskRoutes");

const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Swagger Docs
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Task Management API is running",
  });
});

// Error Middleware
app.use(errorHandler);

module.exports = app;
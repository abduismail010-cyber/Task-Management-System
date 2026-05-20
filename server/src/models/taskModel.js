const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema(
  {
      user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
           },
           
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    dueDate: {
      type: Date,
    },

    category: {
      type: String,
      trim: true,
      default: "General",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
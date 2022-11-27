const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completedAt: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "started", "completed"],
      default: "pending",
    },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  },

  {
    timestamps: true,
  }
);

const Task = new mongoose.model("Task", tasksSchema);
module.exports = Task;

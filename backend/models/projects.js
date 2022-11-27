const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    //   tasks: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;

const Project = require("../models/projects");
const Task = require("../models/tasks");

exports.getProjects = async (req, res) => {
  try {
    const { authorId } = req.params;
    const allProjects = await Project.find({ author: authorId }).populate(
      "author"
    );
    res.send(allProjects);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addProject = async (req, res) => {
  try {
    const { text, author } = req.body;
    const newProject = await new Project({ text, author });
    await newProject.save();
    res.send(newProject);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllProjectTasks = async (req, res) => {
  try {
    const { projectId } = req.params;
    const allTasks = await Task.find({ project: projectId }).populate(
      "project"
    );
    res.send(allTasks);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addTaskToProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { text } = req.body;
    const newTask = await new Task({ text, project: projectId });
    await newTask.save();
    res.send(newTask);
  } catch (error) {
    console.log(error.message);
  }
};

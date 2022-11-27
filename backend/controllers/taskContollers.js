const Task = require("../models/tasks");

exports.getTasks = async (req, res) => {
  const allTask = await Task.find({});
  res.send(allTask);
};

exports.getTaskById = async (req, res) => {
  const { taskId } = req.params;
  const found = await Task.find({ _id: taskId });
  res.send(found);
};

exports.protected = async (req, res) => {
  res.send("This route is protected");
};

exports.createTask = async (req, res) => {
  const { text, project } = req.body;
  try {
    const newTask = await new Task({ text, project });
    const response = await newTask.save();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { update } = req.body;
  await Task.updateOne({ _id: id }, { $set: { text: update } });
  res.status(200).send("success");
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Task.deleteOne({ _id: id });
    return res.status(200).send({ msg: "success", response });
  } catch (error) {
    return res.status(500).send({ msg: "internal servel error", error });
  }
};

exports.started = async (req, res) => {
  const { id } = req.params;
  const { taskStatus } = req.body;
  try {
    await Task.updateOne({ _id: id }, { $set: { status: taskStatus } });
    return res.status(200).send({ msg: "Success" });
  } catch (error) {
    return res.status(500).send({ msg: "Could't update status", error });
  }
};

exports.completed = async (req, res) => {
  const { id } = req.params;
  const { taskStatus } = req.body;
  try {
    await Task.updateOne({ _id: id }, { $set: { status: taskStatus } });
    return res.status(200).send({ msg: "Success" });
  } catch (error) {
    return res.status(500).send({ msg: "Could't update status", error });
  }
};

exports.pending = async (req, res) => {
  const { id } = req.params;
  const { taskStatus } = req.body;
  try {
    await Task.update({ _id: id }, { $set: { status: taskStatus } });
    return res.status(200).send({ msg: "Success" });
  } catch (error) {
    res.status(500).send({ msg: "Could't update status", error });
  }
};

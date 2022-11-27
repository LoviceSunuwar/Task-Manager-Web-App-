require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const taskControllers = require("./controllers/taskContollers");
const userController = require("./controllers/userController");
const projectControllers = require("./controllers/projectControllers");
const cors = require("cors");
const isLoggedIn = require("./middlewares/isLoggedIn");

const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(
//   session({ secret: "loginsecret", resave: false, saveUninitialized: true })
// );

mongoose
  .connect(DB_URL || "mongodb://localhost:27017/todo-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open!");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });

//user routs;

app.post("/user/register", userController.register);

app.post("/user/login", userController.login);

//project routes;

app.get("/projects/:authorId", isLoggedIn, projectControllers.getProjects);

app.post("/projects", isLoggedIn, projectControllers.addProject);

app.get(
  "/projects/:projectId/tasks",
  isLoggedIn,
  projectControllers.getAllProjectTasks
);

app.post(
  "/projects/:projectId/tasks",
  isLoggedIn,
  projectControllers.addTaskToProject
);

//task routes;

app.get("/tasks", isLoggedIn, taskControllers.getTasks);

app.get("/protected", isLoggedIn, taskControllers.protected);

app.get("tasks/gettaskbyid/:taskId", isLoggedIn, taskControllers.getTaskById);

app.post("/tasks", isLoggedIn, taskControllers.createTask);

app.put("/tasks/update/:id", isLoggedIn, taskControllers.updateTask);

app.patch("/tasks/pending/:id", isLoggedIn, taskControllers.pending);

app.patch("/tasks/started/:id", isLoggedIn, taskControllers.started);

app.patch("/tasks/completed/:id", isLoggedIn, taskControllers.completed);

app.delete("/tasks/delete/:id", isLoggedIn, taskControllers.deleteTask);

app.listen("3001", () => {
  console.log("Listening on port 3001");
});

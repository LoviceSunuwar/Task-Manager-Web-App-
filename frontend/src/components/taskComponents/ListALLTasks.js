//React imports;

import { useState } from "react";
//redux imports;

import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
//my imports;

import { addTaskToProject } from "../../store/actions/projectActions";
import { deleteTask } from "../../store/actions/projectActions";
import check from "../../assets/images/check-mark.png";
import cross from "../../assets/images/close.png";
import trash from "../../assets/images/trash-can.png";
import Started from "../projectComponents/Start";
import Completed from "../projectComponents/Completed";
import UpdateTask from "../projectComponents/updateTask";
import NoProjectsFound from "../userComponents/PageNotFound";
//ListAllProjectTasks component;

const ListAllProTasks = ({ selected }) => {
  const [text, setText] = useState("");
  const [addT, setAddT] = useState(false);
  const tasks = useSelector((state) => state.projectReducer.tasks);
  const projects = useSelector((state) => state.projectReducer.projects);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTaskToProject(selected, text));
    setText("");
    setAddT(false);
  };

  return (
    <div
      className="col-md-8"
      style={{
        paddingLeft: 50,
        marginTop: 20,
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {projects && projects.length >= 1 ? (
        <>
          <h1>All tasks</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Completed</th>
                <th scope="col">Created AT</th>
                <th scope="col">Task</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <tr key={task._id}>
                    {task.status === "completed" ? (
                      <td>
                        <img
                          alt="complete icon"
                          src={check}
                          style={{ width: 20 }}
                        ></img>
                      </td>
                    ) : (
                      <td>
                        <img
                          alt="incomplete icon"
                          src={cross}
                          style={{ width: 20 }}
                        ></img>
                      </td>
                    )}
                    <td>{moment(task.createdAt).format("hh:mma")}</td>
                    <td>{task.text}</td>
                    <td>
                      <UpdateTask task={task} />
                    </td>
                    <td>
                      {" "}
                      <img
                        alt="delete"
                        onClick={() => dispatch(deleteTask(task._id))}
                        src={trash}
                        style={{ width: 25, cursor: "pointer" }}
                      ></img>
                    </td>
                    {task.status === "pending" ? (
                      <td>{<Started id={task._id} />}</td>
                    ) : task.status === "started" ? (
                      <td>
                        <Completed id={task._id} />
                      </td>
                    ) : (
                      <td>
                        <button className="btn btn-secondary">completed</button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {addT ? (
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Task"
              />
              <br />
              <button onClick={handleSubmit} className="btn btn-secondary">
                Add
              </button>
            </form>
          ) : (
            <button
              onClick={() => setAddT(true)}
              type="button"
              className="btn btn-outline-primary"
              data-mdb-ripple-color="dark"
            >
              Add
            </button>
          )}
        </>
      ) : (
        <NoProjectsFound />
      )}
    </div>
  );
};

export default ListAllProTasks;

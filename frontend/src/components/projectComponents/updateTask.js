import { useDispatch } from "react-redux";
import { updateTask } from "../../store/actions/projectActions";
import { useState } from "react";

import pencile from "../../assets/images/pencil.png";
const UpdateTask = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [update, setUpdate] = useState(task.text);
  const dispatch = useDispatch();

  const submitBtn = () => {
    dispatch(updateTask(task._id, update));
    setUpdate(update);
    setIsEditing(false);
  };
  return (
    <div>
      {isEditing ? (
        <div className="d-flex flex-row">
          <div>
            <input
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
            ></input>
          </div>
          <img
            src={pencile}
            alt="Edit task"
            style={{ width: 20, cursor: "pointer", margin: 7 }}
            onClick={() => submitBtn()}
          ></img>
        </div>
      ) : task.status === "completed" ? (
        <img
          src={pencile}
          alt="Edit task"
          style={{ width: 20, cursor: "pointer" }}
        ></img>
      ) : (
        <img
          src={pencile}
          alt="Edit task"
          style={{ width: 20, cursor: "pointer" }}
          onClick={() => setIsEditing(!isEditing)}
        ></img>
      )}
    </div>
  );
};

export default UpdateTask;

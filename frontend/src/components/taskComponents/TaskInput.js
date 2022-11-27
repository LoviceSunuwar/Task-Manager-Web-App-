import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/actions/taskActions";
// import "../../App.css";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask(text));
    }
    setText("");
  };

  return (
    <div>
      <form className="d-flex" onSubmit={handlesubmit}>
        <input
          className={"form-control"}
          onChange={handleChange}
          value={text}
        ></input>
        <button className="btn btn-danger mx-1">Add</button>
      </form>
    </div>
  );
};

export default TaskInput;

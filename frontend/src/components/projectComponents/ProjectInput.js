import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../store/actions/projectActions";

const ProjectInput = ({ addP, setAddP }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(text));
    setText("");
    setAddP(false);
  };
  return (
    <div>
      {addP ? (
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="project name"
            className="form-control"
          ></input>
          <button className="btn btn-success mt-4">add</button>
        </form>
      ) : (
        <button onClick={() => setAddP(true)} className="btn btn-secondary">
          Add
        </button>
      )}
    </div>
  );
};

export default ProjectInput;

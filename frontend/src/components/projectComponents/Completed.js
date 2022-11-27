import { useDispatch } from "react-redux";
import { completed } from "../../store/actions/projectActions";

const Completed = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => dispatch(completed(id))}
      >
        Complete
      </button>
    </div>
  );
};

export default Completed;

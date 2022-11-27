import { useDispatch } from "react-redux";
import { started } from "../../store/actions/projectActions";

const Started = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="btn btn-primary" onClick={() => dispatch(started(id))}>
        Start
      </button>
    </div>
  );
};

export default Started;

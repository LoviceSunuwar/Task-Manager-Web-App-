import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../store/actions/taskActions";

const GetAllTasks = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getAllTasks(token));
  }, []);
  return null;
};

export default GetAllTasks;

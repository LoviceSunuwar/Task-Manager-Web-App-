import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProjects } from "../../store/actions/projectActions";

const GetAllProjects = () => {
  const dispatch = useDispatch();
  const id = localStorage.getItem("user");
  useEffect(() => {
    dispatch(getAllProjects(id));
  }, [dispatch, id]);
  return null;
};

export default GetAllProjects;

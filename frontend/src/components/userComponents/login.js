import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userActions";

const Login = () => {
  // const token = useSelector((state) => state.userReducer.token);
  // const message = useSelector((state) => state.userReducer.message);
  // const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(name, password));
  };

  return (
    <div>
      <h1>Login</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <input
          placeholder="Password"
          className="form-control"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <button type="submit" className="btn btn-secondary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

// import { Formik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { login } from "../../store/actions/userActions";

// var passwordRules = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   password: Yup.string().matches(passwordRules, {message: "Password is required"}),
// })

// const Login = () => {
//   const dispatch = useDispatch();
//   const initialValues = {
//     name: "",
//     password: "",
//   }
// }

import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/userActions";

var passwordRules = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is required").required(),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, { message: "please create a stronger password" }),
});
const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <>
      <h1 className="mt-1">Register</h1>
      <br />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(register(values.name, values.email, values.password));
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          values,
          errors,
        }) => {
          return (
            <>
              <input
                id="name"
                className="form-control"
                type="text"
                value={values.name}
                onChange={handleChange("name")}
                placeholder="name"
              ></input>
              <br />
              {errors.name && touched.name ? <p>{errors.name}</p> : ""}
              <br />
              <input
                id="email"
                className="form-control"
                type="email"
                value={values.email}
                placeholder="email"
                onChange={handleChange("email")}
                onBlur={handleBlur}
              ></input>
              <br />
              {errors.email && touched.email ? <p>{errors.email}</p> : ""}
              <br />
              <input
                id="password"
                className="form-control"
                type="password"
                value={values.password}
                placeholder="password"
                onChange={handleChange("password")}
                onBlur={handleBlur}
              ></input>
              <br />
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : (
                ""
              )}
              <br />
              <button
                title="Submit"
                onClick={handleSubmit}
                className="btn btn-secondary"
              >
                Register
              </button>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Register;

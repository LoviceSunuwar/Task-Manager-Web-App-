import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  // Link,
  // redirect,
  Route,
  Routes,
} from "react-router-dom";

// own imports
import Login from "../components/userComponents/login";
import Register from "../components/userComponents/register";
// import GetAllProjects from "../components/projectComponents/GetAllProjects";
import Home from "../components/projectComponents/Home";
import Navbar from "../components/taskComponents/Navbar";

// logic imports
import PrivateRouting from "./privateRoute";
import PublicRouting from "./PublicRoute";

export default function NavigationLogic() {
  const islogin = useSelector((state) => state.userReducer.islogin);
  console.log("login state", islogin);
  const dispatch = useDispatch();
  useEffect(() => {
    let userToken = localStorage.getItem("token");
    if (userToken) {
      dispatch({
        type: "ALREADYLOGGEDIN",
        payload: { token: userToken, login: true },
      });
    }
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Navbar className="col-md-12" />
        <div>
          {/* <div className="col-md-8 offset-2"> */}
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRouting auth={islogin}>
                  <Login />
                </PublicRouting>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <PublicRouting auth={islogin}>
                  <Register />
                </PublicRouting>
              }
            ></Route>
            <Route
              path="/"
              element={
                <PrivateRouting auth={islogin}>
                  <Home />
                </PrivateRouting>
              }
            ></Route>
            <Route
              path="/tasks"
              element={
                <PrivateRouting auth={islogin}>
                  <Home />
                </PrivateRouting>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

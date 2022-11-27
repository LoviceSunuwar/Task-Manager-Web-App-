import axios from "axios";

export const getAllProjects = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    axios
      .get(`http://localhost:3001/projects/${id}`, {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      })
      .then((res) => {
        dispatch({
          type: "GETALLPROJECTS",
          payload: res?.data,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllProTasks = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    axios
      .get(`http://localhost:3001/projects/${id}/tasks`, {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      })
      .then((res) => {
        const AllProjectTasks = res.data?.map((item, index) => {
          return { ...item, projectID: id };
        });
        dispatch({
          type: "GETALLPROTASKS",
          payload: AllProjectTasks,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const addProject = (text) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const author = localStorage.getItem("user");
    const res = await axios.post(
      "http://localhost:3001/projects",
      {
        text,
        author,
      },
      {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      }
    );
    dispatch({
      type: "ADDPROJECT",
      payload: res?.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addTaskToProject = (id, text) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `http://localhost:3001/projects/${id}/tasks`,
      {
        text,
      },
      {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      }
    );
    dispatch({
      type: "ADDTASKTOPROJECT",
      payload: res?.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllTasks = (token) => (dispatch) => {
  try {
    axios
      .get("http://localhost:3001/tasks", {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      })
      .then((res) => {
        dispatch({
          type: "GETALLTASKS",
          payload: res?.data,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTask = (id, update) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    await axios.put(
      `http://localhost:3001/tasks/update/${id}`,
      {
        update,
      },
      {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      }
    );
    dispatch({
      type: "UPDATETASK",
      payload: {
        id,
        update,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const addTask = (text) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const author = localStorage.getItem("user");

    const res = await axios.post(
      "http://localhost:3001/tasks",
      {
        text,
        author,
      },
      {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      }
    );
    dispatch({
      type: "ADDTASK",
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:3001/tasks/delete/${id}`, {
      headers: {
        authorization: token, //the token is a variable which holds the token;
      },
    });
    dispatch({
      type: "DELETETASK",
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const started = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    await axios.patch(
      `http://localhost:3001/tasks/started/${id}`,
      {
        taskStatus: "started",
      },
      {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      }
    );
    dispatch({
      type: "STARTED",
      payload: id,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const completed = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    await axios.patch(
      `http://localhost:3001/tasks/started/${id}`,
      {
        taskStatus: "completed",
      },
      {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      }
    );
    dispatch({
      type: "COMPLETED",
      payload: id,
    });
  } catch (error) {
    console.error(error.message);
  }
};

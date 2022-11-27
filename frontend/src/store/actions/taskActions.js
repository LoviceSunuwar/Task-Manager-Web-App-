// import axios from "axios";
// // const token = localStorage.getItem("token");
// export const getAllTasks = (token) => (dispatch) => {
//   axios
//     .get("http://localhost:3001/tasks", {
//       headers: {
//         authorization: token,
//       },
//     })
//     .then((res) => {
//       dispatch({
//         type: "GETALLTASKS",
//         payload: res?.data,
//       });
//     });
// };

// export const addTask = (text) => async (dispatch) => {
//   try {
//     const author = localStorage.getItem("user");

//     const res = await axios.post("http://localhost:3001/tasks", {
//       text,
//       author,
//     });
//     dispatch({
//       type: "ADDTASK",
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const updateTask = (id, update) => async (dispatch) => {
//   try {
//     await axios.put(`http://localhost:3001/tasks/update/${id}`, {
//       update,
//     });
//     dispatch({
//       type: "UPDATETASK",
//       payload: {
//         id,
//         update,
//       },
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// export const deleteTask = (id) => async (dispatch) => {
//   try {
//     await axios.delete(`http://localhost:3001/tasks/delete/${id}`);
//     dispatch({
//       type: "DELETETASK",
//       payload: id,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const started = (id) => async (dispatch) => {
//   try {
//     await axios.patch(`http://localhost:3001/tasks/started/${id}`, {
//       taskStatus: "started",
//     });
//     dispatch({
//       type: "STARTED",
//       payload: id,
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// export const completed = (id) => async (dispatch) => {
//   try {
//     await axios.patch(`http://localhost:3001/tasks/started/${id}`, {
//       taskStatus: "completed",
//     });
//     dispatch({
//       type: "COMPLETED",
//       payload: id,
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// };
